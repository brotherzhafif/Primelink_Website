import EmailIcon from '../assets/email.png';
import Logo from '../assets/logoprimelinkputihfix.png';
import PhoneIcon from '../assets/phone.png';
import { Helmet } from "react-helmet-async";

const Footer = () => {
  return (
    <>
      <Helmet>
        <title>PrimeLink | Internet Cepat & Solusi Digital</title>
        <meta name="description" content="PrimeLink menghadirkan layanan internet cepat, stabil, dan solusi digital terbaik untuk rumah & bisnis." />
        <link rel="canonical" href="https://primelink.id/" />
      </Helmet>
      <footer className="bg-[#0C1B37] text-white px-6 md:px-10 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {/* Kolom 1: Logo dan Deskripsi */}
          <div>
            <img src={Logo} alt="Primelink Logo" className="w-40 mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Koneksi internet terbaik untuk solusi bisnis dan rumah Anda.
            </p>
          </div>

          {/* Kolom 2: Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <address className="not-italic text-sm text-gray-300 leading-relaxed mb-4">
              Komplek Ruko Green Garden Blok Z4 No. 7,<br />
              Kebon Jeruk, Jakarta Barat
            </address>
            <div className="flex items-center gap-3 mb-3">
              <img src={PhoneIcon} alt="Ikon Telepon" className="w-5 h-5" />
              <span className="text-sm text-gray-300">0821 582 4798</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={EmailIcon} alt="Ikon Email" className="w-5 h-5" />
              <span className="text-sm text-gray-300">sales@primelink.co.id</span>
            </div>
          </div>

          {/* Kolom 3: Navigasi Perusahaan */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/#about" className="hover:text-white transition-colors duration-200">Tentang Kami</a>
              </li>
              <li>
                <a href="/#our-services" className="hover:text-white transition-colors duration-200">Layanan</a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-white transition-colors duration-200">Daftar Harga</a>
              </li>
              <li>
                <a href="/#coverage" className="hover:text-white transition-colors duration-200">Cakupan Wilayah</a>
              </li>
              <li>
                <a href="/#testimonial" className="hover:text-white transition-colors duration-200">Testimonial</a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Navigasi Tambahan */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Lainnya</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
              </li>
              <li>
                <a href="/#blog" className="hover:text-white transition-colors duration-200">Blog</a>
              </li>
              <li>
                <a href="/#career" className="hover:text-white transition-colors duration-200">Karir</a>
              </li>
            </ul>
            {/* Sosial Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/primelink.communication/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80"
              >
                <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" />
              </a>
              <a
                href="https://youtube.com/@primelinkcommunication"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:opacity-80"
              >
                <img src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png" alt="YouTube" />
              </a>
              <a
                href="https://www.linkedin.com/company/primelink-communication/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-80"
              >
                <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" />
              </a>
              <a
                href="https://twitter.com/primelinkid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:opacity-80"
              >
                <img src="https://img.icons8.com/ios-filled/24/ffffff/x.png" alt="X" />
              </a>
              <a
                href="https://www.facebook.com/primelinkid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80"
              >
                <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bawah */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © 2020 Primelink. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
