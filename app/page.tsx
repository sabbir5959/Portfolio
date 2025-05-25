"use client";

import Image from "next/image";
import Globe from "@/components/globeMain";
import { FloatingNavDemo } from "@/components/navbar";
import ResizableNavDemo from "@/components/resizableNav";
import About from "@/components/navbar/about";
import Projects from "@/components/navbar/projects";
import Certificates from "@/components/navbar/certificates";
import Skills from "@/components/navbar/skills";
import Contact from "@/components/navbar/contact";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap"; // you must create this lib file

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: aboutRef, color: "#111" },
      { ref: projectsRef, color: "#222" },
      { ref: certificatesRef, color: "#333" },
      { ref: skillsRef, color: "#444" },
      { ref: contactRef, color: "#555" },
    ];

    sections.forEach(({ ref, color }, i) => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          pin: false,
          markers: true, // remove in production
        },
        backgroundColor: color,
        ease: "none",
      });
    });
  }, []);

  return (
    <main style={{ backgroundColor: "#060606", minHeight: "100vh" }}>
      {/* <FloatingNavDemo /> */}
      <ResizableNavDemo />

      <section id="about" ref={aboutRef}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <About />
          </div>
          <div
            style={{
              width: 500,
              height: 500,
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
            }}
          >
            <Globe />
          </div>
        </div>
      </section>

      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>
      <section id="certificates" ref={certificatesRef}>
        <Certificates />
      </section>
      <section id="skills" ref={skillsRef}>
        <Skills />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
    </main>
  );
}
