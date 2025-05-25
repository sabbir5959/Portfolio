// lib/gsap.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register only once
if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
