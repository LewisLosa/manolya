import FooterComponent from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import profilePic from "../../../public/imgs/eyup.jpg";

export default function Hakkimda() {
  const skills = [
    { name: "HTML", percentage: 95.2, color: "bg-orange-500" },
    { name: "CSS", percentage: 75.4, color: "bg-pink-500" },
    { name: "JavaScript", percentage: 36.81, color: "bg-yellow-400" },
    { name: "C#", percentage: 27.83, color: "bg-purple-600" },
    { name: "TypeScript", percentage: 25.71, color: "bg-blue-500" },
    { name: "SCSS", percentage: 5.71, color: "bg-pink-400" },
    { name: "Rust", percentage: 1.62, color: "bg-red-400" },
  ];
  const education = [
    {
      school: "Mehmet Akif Ersoy Çok Programlı Anadolu Lisesi",
      period: "2024-2026",
      current: true,
    },
    {
      school: "Bolluca Mesleki Ve Teknik Anadolu Lisesi",
      period: "2022-2024",
      current: false,
    },
  ];
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto flex flex-col md:flex-row items-center justify-center py-20 px-4 gap-24">
        <div className="w-full md:w-1/2 lg:max-w-full order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hakkımda</h2>
          <div>
            <p className="text-2xl mb-4">
              Eyüp Şengöz, yazılım, tasarım ve yeni nesil teknolojilere tutkuyla
              bağlı bir geliştiricidir. Boş zamanlarının çoğunu kod yazarak,
              tasarım yaparak ya da arkadaşlarıyla oyun oynayarak geçirir.
              <br />
              <br />
              Şu anda liseye devam eden Eyüp, TypeScript ve C# gibi dilleri
              giriş seviyesinde bilmektedir. Performans ve estetiği birleştiren,
              kullanıcı odaklı masaüstü uygulamaları geliştirmeyi sever.
              <br />
              <br />
              Linux hayranı olsa da şu an Windows kullanmaktadır. Yakın zamanda
              Arch tabanlı sistemlerde deneyim kazanmış, Hyprland gibi modern
              pencere yöneticileriyle çalışmıştır.
              <br />
              <br />
              Eyüp, İlk kez MVVM yapısını kullanarak geliştirdiği “Duru” adlı
              otel yönetim sistemi ile yazılım mimarisine olan ilgisini
              derinleştirmiştir.
              <br />
              <br />
              Yazılım dışında yaratıcılığını tasarımda ve arkadaşlarıyla oyun
              oynarken bulur. Boş zamanlarında ya kod yazar, ya da müzik
              dinleyip keyifli vakit geçirir.
            </p>
          </div>

          {/* Eğitim */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Eğitim</h3>
            <ul className="list-disc pl-6 text-xl">
              {education.map((edu, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <div>
                      <b>{edu.school}</b>
                      <p>{edu.period}</p>
                    </div>
                    {edu.current && (
                      <div className="bg-green-400 rounded-full px-4 py-1 ml-4 text-lg whitespace-nowrap min-w-[80px] text-center">
                        Şu an
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Yetenekler */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Yetenekler</h3>
            <div className="space-y-4 text-xl">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="rounded-full overflow-hidden w-96 h-96 md:w-64 md:h-64 md:mb-200 lg:w-96 lg:h-96 lg:mb-200 relative">
            <Image
              src={profilePic}
              alt="Eyüp Şengöz"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
      <FooterComponent />
    </main>
  );
}
