"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";
import ProjelerSection from "./components/ProjectCard";
import FooterComponent from "./components/Footer";

export default function Home() {
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
    <main>
      <header>
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="stagger-reveal">
            <h1 className="text-5xl transform transition-all duration-500 ease-out">
              <b className="relative after:content-[''] after:absolute after:w-0 after:h-1 after:bg-current after:left-0 after:bottom-0 after:transition-all after:duration-700 after:ease-out hover:after:w-full">Merhaba,</b> <br /> 
              Ben Eyüp. Estetik görünen uygulamalar
              geliştiriyorum. <br /> Aynı zamanda hobi olarak video kurgularım.
            </h1>
            <p className="mt-4 text-right text-lg opacity-50 transform transition-all duration-500 ease-out hover:opacity-80">
              Öğrenci @ Mehmet Akif Ersoy Çok Programlı Anadolu Lisesi
            </p>
          </div>
        </div>
      </header>
      <ProjelerSection />
      <FooterComponent />
    </main>
  );
}