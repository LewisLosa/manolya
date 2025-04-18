// components/Footer.tsx
import React from "react";
import Link from "next/link";

const FooterComponent: React.FC = () => {
  return (
    <footer className="mt-60 bg-black rounded-tl-[64px] rounded-tr-[64px] text-white p-6 w-full transform transition-all duration-700 ease-out hover:rounded-tl-[72px] hover:rounded-tr-[72px]">
      <div className="max-w-6xl mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-center stagger-reveal">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold">İstediğin gibi miyim?</h2>
            <p className="text-4xl mb-6">
              O zaman{" "}
              <Link href="https://drive.google.com/file/d/1nkFktkrbYJ1-rbCNUmAzAy1BGN5pdLFb/view?usp=sharing" target="_blank" className="hover:underline underline-offset-4">
                cv'me
              </Link>{" "}
              göz at ve iletişime geç.
            </p>
            <div className="flex flex-col space-y-2 text-4xl w-fit stagger-reveal">
              <Link href="mailto:lewislosa@gmail.com" className=" hover:underline underline-offset-4">
                E-posta
              </Link>
              <Link target="https://github.com/lewislosa/" href="#" className="hover:underline underline-offset-4">
                GitHub
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/sengozeyup" className="hover:underline underline-offset-4">
                LinkedIn
              </Link>
              <Link target="_blank" href="https://instagram.com/sengozeyup" className="hover:underline underline-offset-4">
                Instagram
              </Link>
            </div>
          </div>

          <div className="text-right text-4xl mt-auto transform transition-opacity duration-500 ease-out">
            <p className="mb-2">
              Eyüp Şengöz tarafından <span className="text-pink-500 animate-pulse">❤</span>{" "}
              ile
              <br />
              İstanbul'da tasarlanıp
              <br />
              kodlandı.
            </p>
          </div>
        </div>

        <div className="mt-24 -mb-12 text-center text-sm text-gray-400">
          Bu site açık kaynaklıdır, kaynak kodu{" "}
          <Link target="_blank" href="https://github.com/lewislosa/manolya" className="hover:underline">
            GitHub
          </Link>{" "}
          üzerinde yayınlanmaktadır.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
