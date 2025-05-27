import CurvedArrow from "../assets/Arrows.png"; // panah meliuk panjang
import IndonesiaMap from "../assets/indonesia-map.png";

const CoverageSection = () => {
  return (
    <>
      {/* Section 1: Desain utama dengan peta statis */}
      <section className="relative bg-[#0A1736] text-white px-6 md:px-16 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
          {/* Kiri: Judul dan deskripsi */}
          <div className="space-y-6 relative z-10">
            <div className="relative flex items-center">
              <h2 className="text-4xl md:text-5xl font-bold z-10">Cakupan Wilayah</h2>
              <img
                src={CurvedArrow}
                alt="Arrow"
                className="absolute -right-20 md:-right-24 w-28 md:w-36 top-1/2 -translate-y-1/2"
              />
            </div>

            <p className="text-sm md:text-base leading-relaxed max-w-md">
              Topologi HFC dan FTTH, serta perangkat enterprise seperti Cisco, MikroTik, dan Ubiquiti, layanan kami dimonitor <span className="font-semibold">24/7</span> untuk menjamin uptime <span className="font-semibold">99.9%</span>.
            </p>

            <div className="mt-6">
              <h3 className="text-4xl md:text-5xl font-light leading-snug">
                Fiber optic cepat,<br />
                stabil, uptime <br />
                <span className="font-semibold">99.9%.</span>
              </h3>
            </div>
          </div>

          {/* Kanan: Deskripsi dan gambar */}
          <div className="flex flex-col space-y-6 relative items-start">
            {/* Deskripsi atas kanan */}
            <div className="text-sm md:text-base max-w-sm text-left md:translate-x-20">
              <p className="leading-relaxed">
                PrimeLink mengandalkan jaringan fiber optic berkecepatan tinggi dengan latensi rendah dan koneksi stabil.
              </p>
            </div>

            {/* Peta */}
            <div className="w-full max-w-lg mx-auto md:ml-auto">
              <img
                src={IndonesiaMap}
                alt="Peta Indonesia"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Ornamen Bintang Biru di kiri bawah */}
        <div className="absolute bottom-12 left-8 text-[#1E8DF2] text-7xl md:text-8xl font-bold z-0">
          *
        </div>
      </section>
      
{/* Section 2: Google Maps */}
<section className="bg-[#031738] text-white py-20 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
  {/* Kiri: Judul & Deskripsi */}
  <div className="md:w-1/2 space-y-5">
    <h2 className="text-4xl md:text-5xl font-bold">Cakupan Wilayah</h2>
    <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-md">
      Temukan area yang telah terjangkau layanan <span className="text-white font-medium">PrimeLink</span>. 
      Peta interaktif ini memudahkan Anda untuk melihat ketersediaan jaringan internet 
      berkualitas tinggi di lokasi Anda.
    </p>
  </div>

  {/* Kanan: Google Maps */}
  <div className="md:w-1/2 w-full h-[280px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
    <iframe
      title="Lokasi Prime Link Communication"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7699809584115!2d106.76008610989489!3d-6.161552893799904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f74aff72bb05%3A0xc77379909682171c!2sPT%20Prime%20Link%20Communication!5e0!3m2!1sid!2sid!4v1748333634397!5m2!1sid!2sid"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>


    </>
  );
};

export default CoverageSection;
