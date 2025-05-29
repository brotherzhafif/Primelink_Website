import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { FaQuoteLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Yusuf Maulana',
    role: 'Mahasiswa',
    text: 'Nonton film dan series jadi lebih seru tanpa buffering. IPTV dari Primelink punya banyak pilihan channel dan kualitas gambarnya tajam banget!',
    image: 'https://via.placeholder.com/120',
  },
  {
    name: 'Dina Rahmawati',
    role: 'Ibu Rumah Tangga',
    text: 'Internet stabil bikin anak-anak belajar online lancar. Terima kasih Primelink!',
    image: 'https://via.placeholder.com/120',
  },
  {
    name: 'Andre Saputra',
    role: 'Freelancer',
    text: 'Sebagai pekerja remote, koneksi yang cepat dan stabil itu wajib. Primelink top banget!',
    image: 'https://via.placeholder.com/120',
  },
  // Tambah testimoni lainnya jika perlu
];

const faqData = [
  {
    question: "Berapa lama proses pemasangan layanan internet setelah pendaftaran?",
    answer:
      "Setelah pendaftaran dan verifikasi area selesai, pemasangan biasanya dilakukan dalam 1–3 hari kerja, tergantung ketersediaan teknisi dan lokasi Anda.",
  },
  {
    question: "Apakah saya bisa upgrade atau downgrade paket internet saya?",
    answer:
      "Ya, pelanggan dapat melakukan upgrade atau downgrade paket internet kapan saja melalui layanan pelanggan kami atau aplikasi resmi Primelink, tergantung ketersediaan layanan di area Anda.",
  },
  {
    question: "Apa yang membedakan paket Home dan Dedicated?",
    answer:
      "Paket Home dirancang untuk penggunaan rumahan dengan bandwidth berbagi (shared), sedangkan paket Dedicated menyediakan bandwidth eksklusif yang lebih stabil untuk bisnis dan kebutuhan profesional.",
  },
  {
    question: "Bagaimana jika koneksi internet saya bermasalah?",
    answer:
      "Silakan hubungi tim teknis kami melalui WhatsApp, aplikasi, atau call center 24/7. Tim kami akan segera membantu pengecekan dan penjadwalan kunjungan teknisi jika diperlukan.",
  },
  {
    question: "Apa metode pembayaran yang tersedia?",
    answer:
      "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), kartu kredit, serta sistem pembayaran otomatis melalui aplikasi Primelink.",
  },
  {
    question: "Apakah layanan Primelink tersedia di seluruh Indonesia?",
    answer:
      "Untuk saat ini, layanan Primelink tersedia di kota-kota besar. Namun, kami terus memperluas jangkauan layanan ke berbagai daerah di Indonesia.",
  },
];

const CombinedSection = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const [openIndex, setOpenIndex] = useState(null);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
  };

  const toggleFAQ = (faqIndex) => {
    setOpenIndex(openIndex === faqIndex ? null : faqIndex);
  };

  const { name, role, text, image } = testimonials[index];

  return (
    <>
      <Helmet>
        <title>FAQ & Testimonial | PrimeLink</title>
        <meta name="description" content="Pertanyaan yang sering diajukan dan testimonial pelanggan PrimeLink. Temukan jawaban dan pengalaman pelanggan di sini." />
        <link rel="canonical" href="https://primelink.id/#faq" />
      </Helmet>
      {/* TESTIMONIAL SECTION */}
      <section style={{ padding: '60px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontSize: '24px', color: '#0b0b2e', marginBottom: 10 }}>
                Apa yang dikatakan <br />
                oleh <span style={{ color: '#2596e0' }}>pelanggan</span> kami?
              </h2>
            </div>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0b0b2e' }}>
                Testi<span style={{ color: '#2596e0' }}>monial</span>
              </h2>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 50,
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: 150,
                height: 150,
                borderRadius: 10,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div style={{ flex: 1, marginLeft: 40, marginRight: 40 }}>
              <FaQuoteLeft size={24} color="#0b0b2e" />
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#0b0b2e',
                  marginTop: 10,
                  lineHeight: 1.6,
                }}
              >
                {text}
              </p>
              <p style={{ marginTop: 20, fontWeight: 500, color: '#0b0b2e' }}>
                {name} – <span style={{ color: '#2596e0' }}>{role}</span>
              </p>
            </div>

            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              gap: 20,
            }}
          >
            <button
              onClick={prev}
              style={{
                border: '1px solid #0b0b2e',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
            >
              <FiChevronLeft color="#0b0b2e" />
            </button>
            <button
              onClick={next}
              style={{
                border: '1px solid #0b0b2e',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
            >
              <FiChevronRight color="#0b0b2e" />
            </button>
          </div>

          <div style={{ textAlign: 'right', marginTop: 20 }}>
            <span style={{ fontSize: 16, color: '#0b0b2e' }}>{index + 1}</span>
            <span style={{ fontSize: 12, color: '#aaa' }}>/ {total}</span>
          </div>
        </div>
      </section>

  {/* FAQ SECTION */}
<section id="faq" className="bg-white py-20 px-4 md:px-10 lg:px-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">FAQ</h2>
    <p className="text-gray-600 mb-2">
      Kami mengumpulkan pertanyaan-pertanyaan yang paling sering diajukan oleh pelanggan dan calon pelanggan untuk membantumu mendapatkan informasi lebih cepat, tanpa harus menunggu.
    </p>
    <p className="text-black font-medium mt-4">
      Mulai dari proses pemasangan, detail layanan, hingga cara pembayaran — semuanya kami jawab secara ringkas dan jelas.
    </p>
  </div>

  <div className="mt-12 max-w-3xl mx-auto bg-white shadow-lg rounded-xl divide-y divide-gray-200">
    {faqData.map((faq, i) => (
      <div key={i}>
        <button
          onClick={() => toggleFAQ(i)}
          className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition duration-200"
        >
          <span
            className={`font-medium text-sm md:text-base ${
              i === openIndex ? 'text-blue-600' : 'text-gray-800'
            }`}
          >
            {faq.question}
          </span>
          <span className="text-2xl font-bold text-blue-600">
            {i === openIndex ? '−' : '+'}
          </span>
        </button>
        {i === openIndex && (
          <div className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default CombinedSection;
