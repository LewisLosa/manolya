import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="">
            <h1 className="text-5xl">
              <b>Merhaba,</b> <br /> Ben Eyüp. Estetik görünen uygulamalar
              geliştiriyorum. <br /> Aynı zamanda hobi olarak video kurgularım.
            </h1>
            <p className="mt-4 text-right text-lg opacity-50">
              Öğrenci @ Mehmet Akif Ersoy Çok Programlı Anadolu Lisesi
            </p>
          </div>
        </div>
      </header>
    </main>
  );
}
