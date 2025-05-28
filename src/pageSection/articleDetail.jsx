import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ArticleDetail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://primelink-api.vercel.app/api/blog/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setArticle(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (!article) return <div className="p-10 text-center">Artikel tidak ditemukan.</div>;

    return (
        <div className="max-w-3xl mx-auto py-16 px-4">
            <img
                src={article.gambar}
                alt={article.judul_blog}
                className="w-full h-64 object-cover rounded-xl mb-8"
            />
            <h1 className="text-3xl font-bold mb-4">{article.judul_blog}</h1>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {article.isi_blog}
            </div>
            <div className="mt-8 text-sm text-gray-400">
                Diperbarui: {new Date(article.updated_at).toLocaleString()}
            </div>
        </div>
    );
}
