import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
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

export default function Homepage() {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <div ref={getStartedRef}>
        <GetStartedSection />
      </div>
      <div ref={whyUsRef}>
        <WhyUs />
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
      <div ref={careerRef}>
        <CareerSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <Footer />

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#25D366",
          color: "white",
          padding: "10px 15px",
          borderRadius: "30px",
          textDecoration: "none",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          fontWeight: "bold",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp"
          style={{
            width: "30px",
            height: "30px",
            marginRight: "10px",
          }}
        />
        Ada pertanyaan? WA aja!
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
    </div>
  );
}
