import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const jobList = [
  {
    category: "Marketing",
    link: "#",
    jobs: [
      {
        title: "Social Media Specialist (Mid-level)",
        description: "Kandidat dengan pengalaman 2–4 tahun dalam mengelola platform media sosial dan strategi konten.",
        type: "Full - Time",
        salary: "7jt–10jt / bulan",
        location: "Jakarta Barat",
      },
      {
        title: "Content Creator (Entry–level)",
        description: "Fresh graduate atau yang baru mulai dengan kemampuan kreatif dan komunikasi yang kuat.",
        type: "Full - Time",
        salary: "5jt–7jt / bulan",
        location: "Jakarta Barat",
      },
    ],
  },
  {
    category: "Software Development",
    link: "#",
    jobs: [
      {
        title: "Frontend Developer (Entry–level)",
        description: "Fresh graduate dengan pemahaman dasar HTML, CSS, JavaScript, dan framework modern seperti React atau Vue.",
        type: "Full - Time",
        salary: "5jt–7jt / bulan",
        location: "Jakarta Barat",
      },
      {
        title: "Backend Developer (Entry–level)",
        description: "Fresh graduate dengan dasar pengetahuan server-side programming (Node.js, PHP, atau Python), database (MySQL/PostgreSQL), dan pemahaman dasar tentang API.",
        type: "Full - Time",
        salary: "5jt–7jt / bulan",
        location: "Jakarta Barat",
      },
    ],
  },
];

export default function CareersSection() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");

  const categoryOptions = ["Semua", ...jobList.map((item) => item.category)];

  const filteredJobList =
    selectedCategory === "Semua"
      ? jobList
      : jobList.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Karir | PrimeLink</title>
        <meta name="description" content="Bergabunglah bersama tim PrimeLink! Lihat lowongan kerja terbaru di bidang teknologi, marketing, dan lainnya." />
        <link rel="canonical" href="https://primelink.id/#career" />
      </Helmet>

      {/* Section dengan id untuk anchor */}
      <section id="career" className="bg-white text-black px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold leading-tight mb-4 text-[#150E42]">
            Gabung dan <span className="text-blue-500">Berkembang</span>
            <br />
            <span className="text-purple-500">Bersama Kami!</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Kami percaya tim hebat adalah kunci kesuksesan. Jika kamu antusias untuk tumbuh, berinovasi, dan memberi dampak — kami ingin kamu di tim kami.
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">
            <div>
              <label htmlFor="category-filter" className="block mb-1 text-sm font-medium text-gray-700">
                Pilih Kategori:
              </label>
              <select
                id="category-filter"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categoryOptions.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-1/2">
              <label htmlFor="search-job" className="block mb-1 text-sm font-medium text-gray-700">
                Cari Judul Pekerjaan:
              </label>
              <input
                type="text"
                id="search-job"
                placeholder="Contoh: Frontend Developer"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Job Listings */}
          {filteredJobList.map((section, index) => {
            const filteredJobs = section.jobs.filter((job) =>
              job.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredJobs.length === 0) return null;

            return (
              <div key={index} className="border-t border-gray-200 pt-12 mt-12">
                <div className="mb-4">
                  <h3 className="text-sm text-blue-700 font-semibold uppercase tracking-wide">
                    {section.category}
                  </h3>
                  <a href={section.link} className="text-sm text-blue-500 hover:underline">
                    Lihat semua lowongan di tim {section.category.toLowerCase()}
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {filteredJobs.map((job, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      <div>
                        <h4 className="text-lg font-semibold text-[#150E42]">{job.title}</h4>
                        <p className="text-sm text-gray-700 mt-2">{job.description}</p>
                        <div className="flex flex-wrap gap-2 text-sm mt-4">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">🔘 {job.type}</span>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">🕒 {job.salary}</span>
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">📍 {job.location}</span>
                        </div>
                      </div>
                      <div className="mt-6">
                        <a
                          href={`https://wa.me/6282281933619?text=${encodeURIComponent(
                            `Halo admin Primelink, Saya tertarik untuk melamar posisi *${job.title}* di kategori *${section.category}*. Saya ingin mengetahui lebih detail mengenai deskripsi pekerjaan, kualifikasi, dan proses rekrutmennya. *Mohon bantuannya untuk proses lamaran posisi ${job.title}.* Terima kasih.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
                        >
                          Lamar <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
