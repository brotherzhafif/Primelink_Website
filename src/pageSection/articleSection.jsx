import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleSection() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const articles = [
    {
      id: 1,
      title: "Cara Mengatasi Internet Lemot Tanpa harus Panik",
      image: "/images/article1.jpg",
    },
    {
      id: 2,
      title: "Bagaimana PrimeLink Mendukung UMKM dengan Koneksi handal",
      image: "/images/article2.jpg",
    },
    {
      id: 3,
      title: "Mengamankan Jaringan WiFi Rumah Anda dari Ancaman Siber",
      image: "/images/article3.jpg",
    },
    {
      id: 4,
      title: "Tips Memilih Provider Internet yang Tepat untuk Keluarga",
      image: "/images/article4.jpg",
    },
    {
      id: 5,
      title: "Keamanan Data Pribadi di Era Digital",
      image: "/images/article5.jpg",
    },
    {
      id: 6,
      title: "Upgrade Jaringan Rumah: Apa Saja yang Perlu Diketahui?",
      image: "/images/article6.jpg",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="blog" className="bg-white py-20 px-6 md:px-12 lg:px-[8%]">
      <div className="max-w-7xl mx-auto">
        {/* Judul & Subjudul */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-left text-[#1E1E1E] mb-2">
          <span className="text-[#1E1E1E] font-semibold">Prime</span>
          <span className="text-[#1D6EE5] font-semibold">Link</span>{" "}
          <span className="text-[#1E1E1E]">Update</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mb-8">
          Temukan artikel-artikel pilihan dan terpopuler dari PrimeLink seputar dunia internet, teknologi jaringan, dan solusi konektivitas terbaik untuk Anda.
        </p>

        {/* Navigasi panah */}
        <div className="flex justify-end items-center mb-4 gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-[#1D6EE5] hover:bg-[#155ac4] transition shadow-md"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-[#1D6EE5] hover:bg-[#155ac4] transition shadow-md"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Slider Artikel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#1D6EE5] scrollbar-track-gray-200 pb-2"
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="min-w-[280px] max-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-[#1D6EE5] cursor-pointer transition duration-300 overflow-hidden"
              onClick={() => navigate(`/artikel/${article.id}`)}
            >
              <div className="w-full h-44 bg-gray-100 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-snug hover:text-[#1D6EE5] transition-colors duration-300">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
