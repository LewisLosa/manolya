import FooterComponent from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import profilePic from "../../../public/imgs/eyup.webp";
import { Icon } from "@iconify/react";

export default function Hakkimda() {
  const skills = [
    {
      name: "JavaScript",
      icon: "skill-icons:javascript",
    },
    {
      name: "TypeScript",
      icon: "skill-icons:typescript",
    },
    {
      name: "HTML",
      icon: "skill-icons:html",
    },
    {
      name: "CSS",
      icon: "skill-icons:css",
    },
    {
      name: "C#",
      icon: "skill-icons:cs",
    },
  ];
  const education = [
    {
      school: "Mehmet Akif Ersoy Çok Programlı Anadolu Lisesi",
      period: "2024-2026",
      current: true,
    },
    {
      school: "Bolluca Mesleki Ve Teknik Anadolu Lisesi",
      period: "2023-2024",
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
              7 yaşımdan beri bilgisayar sorunları çözmeye başlamış olup  
              13 yaşlarımda ilk C# WinForms projemi oluşturdum.  
              Daha sonrasında Python öğrenmeye başladım ardından  
              hesap makinesi ve spotify playlist kopyalayıcı gibi  
              basit projeler yaptım. Ve bu süreçte Adobe programları  
              ile tanıştım, tasarım konusunda kendimi geliştirdim.
              <br/>
              <br/>  
              Liseye geçtiğimde yeniden kodlamaya odaklandım,  
              C# üzerinde iş odaklı projeler oluşturmaya başladım  
              ve MySql ile bu süreçte tanıştım. Ben yenilikçi  
              ve tasarım odaklı bir yazılımcı olarak şuanda  
              NextJS ve C# ile projeler yapıp, kendi Minecraft  
              sunucumu geliştirmekteyim.
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
          {/* Yetenekler - Yeni Tasarım */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Yetenekler</h3>
            <div className="flex flex-wrap gap-3 w-fit">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-100 dark:bg-white/15 rounded-lg p-3 w-fit flex items-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mr-3 flex-shrink-0">
                    <Icon className="h-10 w-10" icon={skill.icon} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-full overflow-hidden w-96 h-96 md:w-64 md:h-64 md:mb-200 lg:w-96 lg:h-96 lg:mb-100 relative">
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
