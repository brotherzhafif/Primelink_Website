export default function ContactSection() {
  return (
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
          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Maxy Academy"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="w-full">
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Contoh@gmail.com"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <div className="w-full">
                <label className="block font-semibold mb-1">No Telp.</label>
                <input
                  type="tel"
                  placeholder="0812xxxxxxx"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Pesan</label>
              <textarea
                rows="5"
                placeholder="Tulis pesanmu disini !"
                className="w-full border border-gray-300 rounded px-4 py-2"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#1D72C9] text-white font-semibold px-6 py-2 rounded hover:bg-[#145ea8] transition"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
