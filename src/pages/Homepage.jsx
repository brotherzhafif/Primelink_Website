import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Routes, Route } from "react-router-dom";
import ArticleSection from "../pageSection/articleSection.jsx";
import CareerSection from "../pageSection/careerSection.jsx";
import ContactSection from "../pageSection/contactSection.jsx";
import Faq from "../pageSection/faq.jsx";
import Footer from "../pageSection/footer.jsx";
import GetStartedSection from "../pageSection/getStarted.jsx";
import Navbar from "../pageSection/navbar.jsx";
import Qna from "../pageSection/qna.jsx";
import Testimonial from "../pageSection/testimonial.jsx";
import WhyUs from "../pageSection/whyUs.jsx";
import ArticleDetail from "../pageSection/articleDetail.jsx";
import ChatbotWidget from "../components/ChatbotWidget.jsx";
import { Helmet } from "react-helmet-async";

export default function Homepage() {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatbotInitialMessage, setChatbotInitialMessage] = useState("");

  const { ref: getStartedRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("get-started-section");
    },
  });

  const { ref: whyUsRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("why-us-section");
    },
  });

  const { ref: qnaRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("qna-section");
    },
  });

  const { ref: testimonialRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("testimonial-section");
    },
  });

  const { ref: faqRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("faq-section");
    },
  });

  const { ref: articleRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("article-section");
    },
  });

  const { ref: careerRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("career-section");
    },
  });

  const { ref: contactRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("contact-section");
    },
  });

  // Untuk tombol scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openChatbotWithMessage = (msg) => {
    setChatbotInitialMessage(msg);
    setChatbotOpen(true);
  };

  return (
    <div>
      <Helmet>
        <title>PrimeLink | Internet Cepat & Solusi Digital</title>
        <meta name="description" content="PrimeLink menghadirkan layanan internet cepat, stabil, dan solusi digital terbaik untuk rumah & bisnis. Cek harga, layanan, dan cakupan wilayah di sini." />
        <link rel="canonical" href="https://primelink.id/" />
        <meta property="og:title" content="PrimeLink | Internet Cepat & Solusi Digital" />
        <meta property="og:description" content="PrimeLink menghadirkan layanan internet cepat, stabil, dan solusi digital terbaik untuk rumah & bisnis. Cek harga, layanan, dan cakupan wilayah di sini." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://primelink.id/" />
        <meta property="og:image" content="https://primelink.id/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PrimeLink | Internet Cepat & Solusi Digital" />
        <meta name="twitter:description" content="PrimeLink menghadirkan layanan internet cepat, stabil, dan solusi digital terbaik untuk rumah & bisnis. Cek harga, layanan, dan cakupan wilayah di sini." />
        <meta name="twitter:image" content="https://primelink.id/og-image.jpg" />
      </Helmet>
      <Navbar activeSection={activeSection} />
      <div ref={getStartedRef}>
        <GetStartedSection />
      </div>
      <div ref={whyUsRef}>
        <WhyUs openChatbotWithMessage={openChatbotWithMessage} />
      </div>
      <div ref={qnaRef}>
        <Qna />
      </div>
      <div ref={testimonialRef}>
        <Testimonial />
      </div>
      <div ref={faqRef}>
        <Faq />
      </div>
      <div ref={articleRef}>
        <ArticleSection />
      </div>
      {/* <div ref={careerRef}>
        <CareerSection />
      </div> */}
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <Footer />

      {/* ✅ Floating WhatsApp Button */}
      <a
        href={`https://wa.me/6282281933619?text=${encodeURIComponent(
          `Halo admin PrimeLink *Saya ingin bertanya lebih lanjut mengenai layanan internet yang tersedia di PrimeLink. Mohon bantuannya untuk memberikan informasi detail terkait paket, harga, dan proses pendaftarannya.* Terima kasih sebelumnya atas respon dan bantuannya.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: window.matchMedia("(max-width: 768px)").matches ? "16px" : "20px",
          left: window.matchMedia("(max-width: 768px)").matches ? "16px" : "20px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#25D366",
          color: "white",
          padding: window.matchMedia("(max-width: 768px)").matches ? "7px" : "10px 15px",
          borderRadius: "30px",
          textDecoration: "none",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          fontWeight: "bold",
          minWidth: window.matchMedia("(max-width: 768px)").matches ? "44px" : undefined,
          height: window.matchMedia("(max-width: 768px)").matches ? "44px" : undefined,
          justifyContent: "center",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp"
          style={{
            width: window.matchMedia("(max-width: 768px)").matches ? "22px" : "30px",
            height: window.matchMedia("(max-width: 768px)").matches ? "22px" : "30px",
            marginRight: window.matchMedia("(max-width: 768px)").matches ? "0" : "10px",
          }}
        />
        {/* Label hanya tampil di desktop */}
        {!window.matchMedia("(max-width: 768px)").matches && "Ada pertanyaan? WA aja!"}
      </a>

      {/* ⬆️ Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            zIndex: 1000,
            backgroundColor: "#333",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            fontSize: "18px",
          }}
          aria-label="Scroll to top"
          title="Kembali ke atas"
        >
          ↑
        </button>
      )}

      {/* Chatbot floating button */}
      <ChatbotWidget
        initialMessage={chatbotInitialMessage}
        open={chatbotOpen}
        setOpen={setChatbotOpen}
      />

      <Routes>
        <Route path="/artikel/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}
