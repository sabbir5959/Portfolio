// "use client";
// import { useEffect, useRef } from "react";
// import { gsap, ScrollTrigger } from "@/lib/gsap";

// export default function AnimatedSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     gsap.to(sectionRef.current, {
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "+=500",
//         pin: true,
//         scrub: true,
//         markers: true, // shows debug lines
//       },
//       backgroundColor: "#111",
//       color: "#fff",
//     });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen flex items-center justify-center text-4xl font-bold"
//     >
//       I am pinned and animated!
//     </section>
//   );
// }
