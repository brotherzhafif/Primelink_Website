import { Helmet } from "react-helmet-async";

const PriceList = () => {
  const packages = [
    {
      title: "PRIME HOME",
      price: "500K",
      unit: "/bulan",
      description: "Paket internet rumahan untuk aktivitas harian tanpa batas.",
      features: [
        "Kecepatan hingga 30 Mbps",
        "Kuota Unlimited tanpa Fair Usage Policy (FUP)",
        "Gratis biaya instalasi & sewa perangkat",
        "Dukungan teknis 24/7 via WhatsApp & Call Center",
      ],
    },
    {
      title: "PRIME EXECUTIVE",
      price: "1.500K",
      unit: "Jt/bulan",
      description: "Koneksi ekstra untuk pengguna aktif dan profesional.",
      features: [
        "Kecepatan hingga 100 Mbps",
        "IP Public Dinamis",
        "Prioritas Layanan (Low Latency, Minim Gangguan)",
        "Support layanan cloud & meeting online tanpa lag",
      ],
    },
    {
      title: "PRIME DEDICATED",
      price: "2.000K",
      unit: "/bulan",
      description: "Paket eksklusif dengan koneksi premium nonstop.",
      features: [
        "Dedicated Bandwidth 1:1 hingga 200 Mbps",
        "IP Publik Statis",
        "Akses ke 80+ Channel IPTV",
        "Monitoring & Support Khusus 24/7",
        "SLA (Service Level Agreement) hingga 98%",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Daftar Harga Paket Internet | PrimeLink</title>
        <meta
          name="description"
          content="Lihat daftar harga paket internet dari PrimeLink. Pilih paket terbaik untuk kebutuhan Anda."
        />
        <link rel="canonical" href="https://primelink.id/#pricing" />
      </Helmet>

      <section id="pricing" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-14">
            Daftar <span className="text-blue-600">Harga</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-[#061C3D] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-grow">
                  <h3 className="text-sm font-semibold tracking-widest mb-3 uppercase">
                    {pkg.title}
                  </h3>
                  <div className="flex items-end space-x-2 mb-4">
                    <span className="text-4xl font-extrabold">IDR {pkg.price}</span>
                    <span className="text-sm text-gray-300">{pkg.unit}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-6 min-h-[48px]">{pkg.description}</p>

                  <ul className="text-sm space-y-3 text-left mb-6 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-0.5">➤</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-md w-full mt-auto"
                  onClick={() => {
                    const waNumber = import.meta.env.VITE_WA_NUMBER || "6282281933619";
                    const pesan = `Halo admin Primelink,%0A%0ASaya tertarik untuk berlangganan layanan *${pkg.title}*.%0ASaya ingin mengetahui lebih detail mengenai paket ini dan proses pendaftarannya.%0A%0A*Mohon bantuannya untuk proses pemesanan paket ${pkg.title}.*%0A%0ATerima kasih.`;
                    window.open(
                      `https://wa.me/${waNumber}?text=${pesan}`,
                      "_blank"
                    );
                  }}
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceList;
