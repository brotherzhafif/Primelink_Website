import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function AchievementStats() {
  const [kabinet, setKabinet] = useState(null);
  const [produk, setProduk] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/WEBSITEHIMPUNAN/backend/get_kabinet.php")
      .then((res) => setKabinet(res.data))
      .catch((err) => console.error("Gagal fetch data kabinet:", err));

    axios
      .get("http://localhost/WEBSITEHIMPUNAN/backend/get-himsistore.php")
      .then((res) => setProduk(res.data))
      .catch((err) => console.error("Gagal fetch produk HIMSI Store:", err));

    axios
      .get("http://localhost/WEBSITEHIMPUNAN/backend/get_achievement.php")
      .then((res) => setAchievements(res.data))
      .catch((err) => console.error("Gagal fetch pencapaian:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % produk.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [produk.length]);

  return (
    <>
      {/* Section Pencapaian */}
      <motion.div
        id="whyUs"
        className="px-[8%] py-16 flex justify-center items-center bg-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center w-full text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Statistik dari Database */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <p className="text-3xl font-bold text-[#1E64C8]">
                  <CountUp
                    end={parseFloat(stat.angka)}
                    duration={8}
                    suffix={
                      stat.pencapaian === "Program Kerja Terlaksana"
                        ? "+"
                        : stat.pencapaian === "Impact ke Masyarakat"
                        ? "%"
                        : ""
                    }
                  />
                </p>
                <p className="text-base text-gray-700 mt-2">{stat.pencapaian}</p>
              </motion.div>
            ))}
          </div>

          {/* Logo Kabinet */}
          {kabinet?.logo ? (
            <motion.img
              src={`http://localhost/WEBSITEHIMPUNAN/backend/uploads/${kabinet.logo}`}
              alt={kabinet.nama_kabinet}
              className="w-[300px] mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          ) : (
            <p className="text-sm text-gray-500">Logo belum dimuat...</p>
          )}

          {/* Teks Utama */}
          <motion.p
            className="text-xl md:text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[#1E64C8]">Kabinet</span>{" "}
            <span className="text-[#800040] font-bold">
              #{kabinet ? kabinet.nama_kabinet : "Loading..."}
            </span>
          </motion.p>

          {/* Deskripsi */}
          <motion.p
            className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {kabinet ? kabinet.deskripsi : "Memuat deskripsi kabinet..."}
          </motion.p>

          {/* Button */}
          <motion.button
            className="mt-10 px-6 py-3 bg-[#800040] text-white font-medium text-lg rounded-xl hover:bg-[#660033] transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Kenali Kepengurusan
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Section HIMSI Store */}
      <motion.div
        className="flex flex-col items-center justify-center px-[8%] py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between w-full max-w-6xl gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Kiri */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start mt-6 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#7A2048] mb-4">
              #HIMSIStore
            </h1>
<p className="text-base md:text-lg text-gray-700 max-w-3xl mb-4">
  Dari camilan enak sampai merchandise keren, HIMSI Store punya semua yang kamu butuhkan!
</p>

            <button className="bg-[#7A2048] hover:bg-[#5a1634] text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
              Beli Sekarang
            </button>
          </motion.div>

          {/* Kanan */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {produk.length > 0 ? (
              <motion.div
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl shadow-lg transition-all duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={`http://localhost/WEBSITEHIMPUNAN/backend/uploads/${produk[currentIndex]?.foto}`}
                  alt={produk[currentIndex]?.nama}
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-sm text-center py-2 px-3 text-sm sm:text-base font-semibold text-[#7A2048]">
                  {produk[currentIndex]?.nama}
                </div>
              </motion.div>
            ) : (
              <p className="text-gray-500 text-center">Memuat produk...</p>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
