// components/Navbar.js (veya .tsx)
import Link from 'next/link';

const Navbar = () => {
  return (
    // sticky, top-0, z-50, şeffaf arka plan ve backdrop-blur sınıfları eklendi
    <nav className="sticky top-0 z-50 backdrop-blur-md"> {/* Değişiklik burada */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Sol Taraf - Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-400">
          losa.
        </Link>

        {/* Sağ Taraf - Menü Linkleri */}
        <div className="flex items-center space-x-6">
          <Link href="/projeler" className="text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-400">
            Projeler
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-400">
            Hakkımda
          </Link>
          <Link href="https://drive.google.com/file/d/1nkFktkrbYJ1-rbCNUmAzAy1BGN5pdLFb/view?usp=sharing" target='_blank' className="text-gray-600 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-400">
             CV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;