import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import digitalUpgradeImg from '../assets/digitalupgrade.png'; // sesuaikan path-nya
import hardDiskImage from '../assets/fotohomefixx.png';

export default function GetStarted() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Mulai Digital Upgrade | PrimeLink</title>
        <meta name="description" content="Mulai pengalaman digital terbaik bersama PrimeLink. Internet cepat, IPTV, dan solusi digital untuk rumah & bisnis." />
        <link rel="canonical" href="https://primelink.id/" />
      </Helmet>
      <div className="relative w-full bg-white font-poppins px-6 pt-24 pb-16 overflow-x-hidden">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-[5]">

          {/* TEKS KIRI */}
          <div className="relative z-[10] lg:pl-16 space-y-8 px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1F47] leading-tight">
              Redefining the <span className="text-[#001D52]">Digital</span> <br />
              Experience.
            </h1>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#001D52] text-white p-4 rounded-xl flex items-center justify-between w-full sm:w-[300px] shadow-md cursor-pointer"
              onClick={handleNavigate}
            >
              <div className="flex items-center gap-4">
                <img
                  src={digitalUpgradeImg}
                  alt="digital upgrade"
                  className="w-14 h-14 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium text-sm sm:text-base">Start Your Digital Upgrade</p>
                  <p className="text-xs mt-1 opacity-80">Subscribe</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#001D52] flex items-center justify-center">
                <ChevronRight size={20} strokeWidth={2.5} />
              </div>
            </motion.div>
          </div>

          {/* GAMBAR DAN CARD */}
          <div className="relative w-full h-[400px] pl-4 lg:pl-8">
            {/* Gambar utama */}
            <div className="relative w-[490px] mt-[-60px] z-10">
              <img
                src={hardDiskImage}
                alt="Hard Disk"
                className="w-full object-cover rounded-lg"
              />

              {/* CARD INTERNET - kiri bawah */}
              <div className="absolute bottom-4 left-4 backdrop-blur-md bg-white/10 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 w-[230px] border border-white/20">
                <div className="bg-white/20 p-2 rounded-full flex items-center justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
                    alt="wifi"
                    className="w-6 h-6 invert"
                  />
                </div>
                <div className="text-sm leading-tight">
                  <p className="font-semibold text-white">Blazing–Fast</p>
                  <p className="text-white">Internet Speed</p>
                </div>
              </div>
            </div>

            {/* CARD IPTV - kanan atas */}
            <div className="absolute top-4 right-4 bg-[#001D52] text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 w-[230px] z-[20]">
              <div className="bg-white p-2 rounded-full flex items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                  alt="icon"
                  className="w-6 h-6"
                />
              </div>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-white">Advanced IPTV</p>
                <p className="text-white">Technology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tambahan spacer kecil agar tidak terlalu mepet namun tetap terhubung */}
        <div className="h-8" />
      </div>
    </>
  );
}
