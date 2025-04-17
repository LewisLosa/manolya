"use client"
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faFileLines,
  faCodeBranch,
  faFilePen,
  faLaptop,
  faGaugeHigh,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Project {
  imageUrl: string;
  altText: string;
  isNew?: boolean;
  isDeveloping?: boolean;
  title: string;
  features: string[];
  featureIcons: IconProp[];
  viewLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<Project> = ({
  imageUrl,
  altText,
  isNew,
  isDeveloping,
  title,
  features,
  featureIcons,
  viewLink,
  githubLink,
}) => {
  return (
    <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row mb-8 transform transition-all duration-500 ease-out">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto ">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover rounded-3xl max-w-128"
        />
      </div>
      <div className="p-4 md:p-8 flex-1">
        <div className="flex flex-wrap gap-2 mb-2">
          {isNew && (
            <div className="bg-yellow-500/85 text-white px-5 py-1 rounded-full text-lg">
              Yeni
            </div>
          )}
          {isDeveloping && (
            <div className="bg-blue-500 text-white px-5 py-1 rounded-full text-lg">
              Geliştiriliyor
            </div>
          )}
        </div>
        <h3 className="text-3xl font-normal mb-4">{title}</h3>
        <ul className="space-y-3 mb-6 stagger-reveal">
          {features.map((feature, index) => {
            return (
              <li className="flex items-center text-lg" key={index}>
                <FontAwesomeIcon
                  icon={featureIcons[index]}
                  className="mr-3 fa-fw"
                />
                {feature}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4 mt-4">
          {viewLink && (
            <a
              href={viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-6 rounded-full text-lg text-blue-500 flex items-center group relative overflow-hidden transition-all duration-300 ease-out pr-12 hover:bg-blue-200 dark:hover:bg-blue-900/20"
            >
              <FontAwesomeIcon icon={faFileLines} className="mr-2" />
              Gözat
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="absolute right-0 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out mr-3"
              />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:border-white py-2 px-6 rounded-full text-lg flex items-center group relative overflow-hidden transition-all duration-300 ease-out pr-12 hover:bg-gray-300 dark:hover:bg-black/35"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Github
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="absolute right-0 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out mr-3"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjelerSection: React.FC = () => {
  const projectsData: Project[] = [
    {
      imageUrl: "/imgs/setscript.png",
      altText: "Setscript.com masaüstü uygulaması",
      isNew: true,
      isDeveloping: true,
      title: "Setscript.com için masaüstü uygulaması",
      features: [
        "Çevrimdışı kullanım",
        "Açık kaynaklı",
        "Çapraz platform",
        "Performanslı",
      ],
      featureIcons: [faCheckCircle, faFilePen, faLaptop, faGaugeHigh],
      viewLink: "#",
      githubLink: "https://github.com/setscript/desktop",
    },
    {
      imageUrl: "/imgs/duru.png",
      altText: "Duru - Hotel Yönetim Otomasyonu",
      isNew: true,
      isDeveloping: true,
      title: "Duru -- Hotel Yönetim Otomasyonu",
      features: [
        "Çevrimdışı kullanım",
        "Açık kaynaklı",
        "Kullanıcı Dostu Arayüz",
        "Performanslı",
      ],
      featureIcons: [faCheckCircle, faFilePen, faLaptop, faGaugeHigh],
      viewLink: "#",
      githubLink: "https://github.com/lewislosa/duru",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const scrollElements = document.querySelectorAll(".scroll-reveal");
    scrollElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen px-4 py-16 md:py-0 md:flex md:flex-col md:justify-center md:items-center"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-normal mb-8 md:mb-12 scroll-reveal">
          Projelerim
        </h2>
        <div className="space-y-8 md:space-y-12">
          {projectsData.map((project, index) => (
            <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjelerSection;