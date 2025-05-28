import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function ContactSection() {
  const [form, setForm] = useState({
    nama_lengkap: "",
    email: "",
    nomor_hp: "",
    pesan: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [lastSent, setLastSent] = useState(() => {
    // Ambil dari localStorage jika ada
    const t = localStorage.getItem("primelink_last_request");
    return t ? Number(t) : 0;
  });

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const now = Date.now();
    if (lastSent && now - lastSent < 5 * 60 * 1000) {
      setErrorMsg("Anda hanya dapat mengirim permintaan setiap 5 menit.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://primelink-api.vercel.app/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Gagal mengirim permintaan.");
      setSuccessMsg("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
      setForm({
        nama_lengkap: "",
        email: "",
        nomor_hp: "",
        pesan: "",
      });
      const t = Date.now();
      setLastSent(t);
      localStorage.setItem("primelink_last_request", t);
    } catch {
      setErrorMsg("Terjadi kesalahan. Silakan coba lagi.");
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Kontak | PrimeLink</title>
        <meta name="description" content="Hubungi PrimeLink untuk informasi layanan, pemasangan, dan bantuan teknis. Tim kami siap membantu Anda." />
        <link rel="canonical" href="https://primelink.id/#contact" />
      </Helmet>
      <div id="contact" className="min-h-screen bg-[#03112B] text-white py-16 px-8 md:px-16 lg:px-20">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hubungi <span className="text-[#3B82F6]">Kami</span>
            </h1>
            <p className="text-lg leading-relaxed">
              Tertarik dengan layanan kami atau punya pertanyaan? Tim kami siap membantu Anda kapan saja!
            </p>

            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-start space-x-3">
                <span>📍</span>
                <p>
                  Komplek Ruko Green Garden Blok Z4<br />
                  No. 7, Kebon Jeruk, Jakarta Barat
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span>☎</span>
                <p>021 582 4798</p>
              </div>
              <div className="flex items-center space-x-3">
                <span>✉</span>
                <p>sales@primelink.co.id</p>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="bg-[#0F172A] p-2 rounded">
                  <img src="https://img.icons8.com/ios-filled/20/ffffff/instagram-new.png" alt="Instagram" />
                </a>
                <a href="#" className="bg-[#0F172A] p-2 rounded">
                  <img src="https://img.icons8.com/ios-filled/20/ffffff/x.png" alt="X" />
                </a>
                <a href="#" className="bg-[#0F172A] p-2 rounded">
                  <img src="https://img.icons8.com/ios-filled/20/ffffff/linkedin.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 w-full max-w-xl bg-white text-black p-8 rounded-xl shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-semibold mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama_lengkap"
                  value={form.nama_lengkap}
                  onChange={handleChange}
                  placeholder="Maxy Academy"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full">
                  <label className="block font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Contoh@gmail.com"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block font-semibold mb-1">No Telp.</label>
                  <input
                    type="tel"
                    name="nomor_hp"
                    value={form.nomor_hp}
                    onChange={handleChange}
                    placeholder="0812xxxxxxx"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Pesan</label>
                <textarea
                  rows="5"
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  placeholder="Tulis pesanmu disini !"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                ></textarea>
              </div>
              {successMsg && (
                <div className="text-green-600 text-sm font-semibold">{successMsg}</div>
              )}
              {errorMsg && (
                <div className="text-red-600 text-sm font-semibold">{errorMsg}</div>
              )}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#1D72C9] text-white font-semibold px-6 py-2 rounded hover:bg-[#145ea8] transition"
                  disabled={loading}
                >
                  {loading ? "Mengirim..." : "Kirim"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
