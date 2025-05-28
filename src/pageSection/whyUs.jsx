import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import digitalUpgradeImg from '../assets/digitalupgrade.png';

const servicesData = [
  {
    title: 'Internet Super – Cepat',
    description:
      'Stay connected with high-speed internet and AI-powered services from Primelink.',
    img: digitalUpgradeImg,
    onClickPath: '/visimisi',
  },
  {
    title: 'Blazing–Fast Internet Speed',
    description: 'Experience top-tier speed and reliability for all your needs.',
    img: 'https://cdn-icons-png.flaticon.com/512/545/545682.png',
    onClickPath: '/internet',
  },
  {
    title: 'Advanced IPTV Technology',
    description: 'Enjoy seamless entertainment with next-gen IPTV.',
    img: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png',
    onClickPath: '/iptv',
  },
];

export default function OurServices() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigate = (path) => navigate(path);

  const prevService = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? servicesData.length - 1 : prev - 1
    );
  };

  const nextService = () => {
    setCurrentIndex((prev) =>
      prev === servicesData.length - 1 ? 0 : prev + 1
    );
  };

  const currentService = servicesData[currentIndex];

  return (
    <>
      <Helmet>
        <title>Layanan Kami | PrimeLink</title>
        <meta
          name="description"
          content="Layanan internet cepat, IPTV, dan solusi digital dari PrimeLink. Temukan layanan terbaik untuk kebutuhan Anda."
        />
        <link
          rel="canonical"
          href="https://primelink.id/#our-services"
        />
      </Helmet>
      {/* Container luar dengan bg putih dan padding */}
      <div
        id="our-services"
        className="w-full bg-white font-poppins px-6 pt-10 pb-20 mt-20"
      >
        {/* Container utama: max-width, bg putih, padding dan gap */}
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 px-4 lg:px-12 bg-white">
          {/* Bagian kiri */}
          <div className="w-full lg:w-[55%] space-y-8 bg-white">
            <h2 className="text-5xl font-bold text-[#0B1F47] leading-tight">
              Laya
              <span className="text-[#3B82F6]">na</span>n Kami
            </h2>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#001D52] text-white p-6 rounded-xl shadow-lg cursor-pointer"
              onClick={() => handleNavigate(currentService.onClickPath)}
            >
              <div className="flex items-start gap-5">
                <img
                  src={currentService.img}
                  alt={currentService.title}
                  className="w-20 h-20 object-contain rounded-md bg-white/20 p-2"
                />
                <div>
                  <p className="text-sm opacity-80">
                    {currentService.description}
                  </p>
                  <h3 className="font-bold text-xl mt-2">
                    {currentService.title}
                  </h3>
                  <button className="mt-3 text-xs bg-white text-[#001D52] px-3 py-1 rounded-full flex items-center gap-1">
                    Selengkapnya <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div className="text-right text-xs mt-4 opacity-70">
                {currentIndex + 1}/{servicesData.length}
              </div>
            </motion.div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={prevService}
                className="p-3 rounded-full bg-[#001D52] text-white hover:bg-[#003377] transition"
                aria-label="Previous Service"
              >
                <ChevronLeft size={24} strokeWidth={3} />
              </button>
              <button
                onClick={nextService}
                className="p-3 rounded-full bg-[#001D52] text-white hover:bg-[#003377] transition"
                aria-label="Next Service"
              >
                <ChevronRight size={24} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Bagian kanan */}
          <div className="w-full lg:w-[45%] text-[#0B1F47] space-y-6 bg-white">
            <p className="text-4xl sm:text-5xl font-semibold leading-snug">
              Koneksi <span className="text-[#3B82F6]">cepat</span>,<br />
              stabil, dan tanpa <span className="text-[#3B82F6]">drama</span>
              —
              <br />
              hanya dari <strong>Primelink</strong>,<br />
              untuk rumah dan bisnismu.
            </p>
            <div className="w-16 h-16 bg-[#3B82F6] text-white text-4xl font-bold flex items-center justify-center rounded-full rotate-12">
              *
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Primelink menghadirkan solusi konektivitas digital yang cerdas dan
              andal. Dengan teknologi terkini, kami pastikan setiap rumah dan
              bisnis terhubung dengan cepat, stabil, dan aman. Jelajahi layanan
              kami dan temukan paket yang sesuai untuk kebutuhan Anda.
            </p>
            <button className="px-4 py-2 bg-[#3B82F6] text-white rounded-full shadow-md hover:bg-[#2563eb] transition-all">
              Jelajahi Layanan Kami
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
