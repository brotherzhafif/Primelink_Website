import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ChatbotWidget from "../components/ChatbotWidget";
import { Helmet } from "react-helmet-async";

// Format tanggal DD:MM:YYYY:HH ke "DD NamaBulan YYYY, HH:00"
function formatDateToIndo(dateStr) {
    if (!dateStr) return "-";
    const parts = dateStr.split(":");
    if (parts.length !== 4) return "-";
    const [d, m, y, h] = parts;
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const monthIdx = parseInt(m, 10) - 1;
    return `${d} ${monthNames[monthIdx] || m} ${y}, ${h}:00`;
}

const ArtikelDetail = () => {
    const { id } = useParams();
    const [artikel, setArtikel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [rekomendasi, setRekomendasi] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://primelink-api.vercel.app/api/blog/${id}`)
            .then((res) => {
                setArtikel(res.data);
                setLoading(false);
            })
            .catch(() => {
                setNotFound(true);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        // Fetch blog lain untuk rekomendasi (kecuali yang sedang dibuka)
        axios
            .get("https://primelink-api.vercel.app/api/blog")
            .then((res) => {
                setRekomendasi(res.data.filter((item) => item.id !== id).slice(0, 5));
            })
            .catch(() => setRekomendasi([]));
    }, [id]);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (notFound) return <div className="text-center py-10">Artikel tidak ditemukan.</div>;
    if (!artikel) return null;

    const url = `https://primelink.id/artikel/${artikel.judul_blog
        ?.toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "")
        }/${artikel.id}`;
    const ogImage = artikel.gambar || "https://primelink.id/og-image.jpg";
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": artikel.judul_blog,
        "image": [ogImage],
        "datePublished": artikel.updated_at,
        "dateModified": artikel.updated_at,
        "author": { "@type": "Organization", "name": "PrimeLink" },
        "publisher": { "@type": "Organization", "name": "PrimeLink" },
        "description": artikel.isi_blog?.replace(/<[^>]+>/g, "").slice(0, 160),
        "mainEntityOfPage": url
    };

    return (
        <div className="min-h-screen bg-[#f7f7f9] py-10 px-2 flex justify-center">
            <Helmet>
                <title>{artikel.judul_blog} | PrimeLink</title>
                <meta name="description" content={artikel.isi_blog?.replace(/<[^>]+>/g, "").slice(0, 160)} />
                <link rel="canonical" href={url} />
                <meta property="og:title" content={artikel.judul_blog + " | PrimeLink"} />
                <meta property="og:description" content={artikel.isi_blog?.replace(/<[^>]+>/g, "").slice(0, 160)} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={artikel.judul_blog + " | PrimeLink"} />
                <meta name="twitter:description" content={artikel.isi_blog?.replace(/<[^>]+>/g, "").slice(0, 160)} />
                <meta name="twitter:image" content={ogImage} />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>
            {/* Sidebar rekomendasi */}
            <aside className="hidden md:block w-72 mr-8">
                <div className="bg-white rounded-2xl shadow-md p-4">
                    <h2 className="text-lg font-bold mb-3">Rekomendasi Artikel</h2>
                    <ul className="space-y-4">
                        {rekomendasi.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={`/artikel/${item.judul_blog
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")
                                        .replace(/[^\w\-]+/g, "")
                                        .replace(/\-\-+/g, "-")
                                        .replace(/^-+/, "")
                                        .replace(/-+$/, "")
                                        }/${item.id}`}
                                    className="flex items-center gap-3 hover:bg-gray-100 rounded p-2 transition"
                                >
                                    <img
                                        src={item.gambar}
                                        alt={item.judul_blog}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                    <span className="text-sm font-medium line-clamp-2">{item.judul_blog}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            {/* Artikel utama */}
            <div className="max-w-2xl w-full p-0 md:p-10 bg-white rounded-2xl shadow-md">
                {/* Tombol kembali */}
                <div className="mb-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f1f5fb] hover:bg-[#e3eefe] text-[#1D6EE5] font-semibold shadow-sm transition"
                    >
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                            <path d="M15 19l-7-7 7-7" stroke="#1D6EE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Kembali ke Beranda
                    </Link>
                </div>
                <h1 className="text-3xl font-bold mb-4">{artikel.judul_blog}</h1>
                {artikel.gambar && (
                    <img src={artikel.gambar} alt={artikel.judul_blog} className="mb-6 rounded-lg w-full" />
                )}
                <div className="prose" dangerouslySetInnerHTML={{ __html: artikel.isi_blog }} />
                <div className="text-sm text-gray-500 mt-8">
                    Diperbarui: {formatDateToIndo(artikel.updated_at)}
                </div>
            </div>
            <ChatbotWidget />
        </div>
    );
};

export default ArtikelDetail;
