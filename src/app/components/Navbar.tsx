// components/Navbar.js (veya .tsx)
import Link from 'next/link';

const Navbar = () => {
  return (
    // sticky, top-0, z-50, şeffaf arka plan ve backdrop-blur sınıfları eklendi
    <nav className="sticky top-0 z-50 backdrop-blur-md"> {/* Değişiklik burada */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Sol Taraf - Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-700">
          losa.
        </Link>

        {/* Sağ Taraf - Menü Linkleri */}
        <div className="flex items-center space-x-6">
          <Link href="/projeler" className="text-gray-600 hover:text-gray-900">
            Projeler
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            Hakkımda
          </Link>
          <Link href="/cv" className="text-gray-600 hover:text-gray-900">
             CV
          </Link>
          {/* Alternatif CV linki (doğrudan indirme için) */}
          {/*
          <a
            href="/dosyalar/cv.pdf"
            download="losa-cv.pdf"
            className="px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-500 transition duration-300"
          >
            CV İndir
          </a>
          */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;