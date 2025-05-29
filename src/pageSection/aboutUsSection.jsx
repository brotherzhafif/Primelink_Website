
export default function AboutUsSection() {
  return (
    <section id="about-us" style={{ padding: "60px 20px", backgroundColor: "#ffffff" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        {/* Kiri */}
        <div
          style={{
            flex: "1 1 40%",
            paddingLeft: "20px", // Geser ke kanan
          }}
        >
          <h2 style={{ fontSize: "40px", fontWeight: 700, marginBottom: "20px", color: "#120f3f" }}>
            Ten<span style={{ color: "#0066cc" }}>tang</span> Kami
          </h2>
          <p style={{ fontSize: "16px", color: "#1e1e48", lineHeight: "1.7" }}>
            Kenali Primelink lebih dekat dan temukan bagaimana kami menghubungkan rumah dan bisnis anda dengan teknologi terkini yang handal dan inovatif!
          </p>
        </div>

        {/* Kanan */}
        <div
          style={{
            flex: "1 1 50%",
            paddingRight: "20px", // Geser ke kiri
          }}
        >
          <p style={{ fontSize: "18px", color: "#1e1e48", lineHeight: "1.8", marginBottom: "24px" }}>
            <strong>PT. Prime Link Communication</strong> adalah penyedia layanan internet dan solusi komunikasi digital yang telah terdaftar resmi sebagai ISP sejak tahun <strong>2015</strong>. Kami berkomitmen memberikan koneksi cepat, stabil, dan aman untuk mendukung kebutuhan rumah dan bisnis di era digital.
          </p>
          <p style={{ fontSize: "24px", fontWeight: 600, color: "#120f3f", lineHeight: "1.9" }}>
            Didukung oleh tim profesional dan infrastruktur modern, kami terus memperluas jaringan untuk memberikan solusi terbaik —
          </p>
        </div>
      </div>
    </section>
  );
}
