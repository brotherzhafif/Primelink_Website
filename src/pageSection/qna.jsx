const PriceList = () => {
  const eventData = [
    {
      title: "ISP",
      price: "Rp 350",
      subtitle: "/bulan",
      description: "Get Torque's basic plan to optimise your lead generation process.",
      features: [
        "Unlimited Bandwidth",
        "24/7 Customer Support",
        "IP Private",
      ],
    },
    {
      title: "ISP + TV",
      price: "Rp 500",
      subtitle: "/bulan",
      description: "Enjoy internet and TV entertainment in one bundle.",
      features: [
        "80+ Channel TV Nasional & Internasional",
        "Unlimited Internet",
        "Free Maintenance",
        "Set Top Box disediakan",
      ],
    },
    {
      title: "ISP + Telepon",
      price: "Rp 500",
      subtitle: "/bulan",
      description: "Bundle for seamless browsing and communication.",
      features: [
        "Internet hingga 30 Mbps",
        "80+ Channel Nasional & Internasional",
        "Gratis Set Top Box",
        "Unlimited Bandwidth",
        "Set Top Box disediakan",
      ],
    },
    {
      title: "ISP + TV + Telepon",
      price: "Rp 750",
      subtitle: "/bulan",
      description: "Complete package with full internet, TV, and phone features.",
      features: [
        "Internet hingga 50 Mbps",
        "100+ Channel TV",
        "Telepon Lokal Gratis 100 Menit",
        "Set Top Box Disediakan",
        "Dukungan Teknis 24/7",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20 px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-14">
          Price <span className="text-blue-600">List</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {eventData.map((pkg, index) => (
            <div
              key={index}
              className="bg-[#061C3D] text-white p-6 rounded-2xl shadow-lg flex flex-col h-full min-h-[520px]"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{pkg.title}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-base text-gray-300">{pkg.subtitle}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-6">{pkg.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 uppercase tracking-wide text-blue-300">
                      Core Features
                    </h4>
                    <p className="text-sm mb-3">Boost Tools</p>
                    <ul className="space-y-2 text-sm text-left">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-0.5">➤</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200 w-full">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceList;
