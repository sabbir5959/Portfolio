"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import ThreeDPin from "@/components/3dpin"

const projects = [
  {
    id: 1,
    title: "Legal Enforcement",
    description:
      "A modern legal enforcement management system designed to streamline case tracking, document management, and real-time collaboration for legal professionals.",
    tags: ["JavaFX", "CSS", "Scene builder"],
    image: "white_logo.png?height=400&width=600",
    link: "https://github.com/sabbir5959/Legal_Enforcement",
  },
  {
    id: 2,
    title: "PagePlay",
    description:
      "An innovative e-book management system that allows users to organize, read, and share their digital libraries seamlessly, with AI-powered recommendations and advanced search capabilities.",
    tags: ["React", "OpenAI", "Node.js"],
    image: "large-book.svg?height=400&width=600",
    link: "https://github.com/sabbir5959/sdp",
  },
  {
    id: 3,
    title: "EnviroLink",
    description:
      "A comprehensive waste management system that connects communities with recycling centers, tracks waste reduction efforts, and promotes sustainable practices through gamification.",
    tags: ["HTML", "CSS", "Express"],
    image: "logo.png?height=400&width=600",
    link: "https://github.com/sabbir5959/EnviroLink",
  },
  {
    id: 4,
    title: "GameAura",
    description:
      "A platform similar to Steam, designed for gamers to discover, purchase, and manage their games, now enhanced with a tracking system to monitor playtime and achievements.",
    tags: ["Figma", "React", "TypeScript"],
    image: "gameAura.jpg?height=400&width=600",
  },
]

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({ x: clientX, y: clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-10 lg:px-20 xl:px-40">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50" />

      {/* Mouse follower */}
      <div
        className="fixed w-6 h-6 rounded-full bg-blue-500/30 pointer-events-none z-50 hidden md:block transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
          mixBlendMode: "difference",
        }}
      />

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-200">My Projects</h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of creative and technical projects that showcase my skills and expertise in software
            engineering and design.
          </p>
        </div>

        <ProjectGrid />
      </div>
    </section>
  )
}

function ProjectGrid() {
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, amount: 0.1 })

  return (
    <div
      ref={gridRef}
      className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
      ))}
    </div>
  )
}

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
}

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      <ThreeDPin title={project.title} href={project.link}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
          tabIndex={-1}
          style={{ textDecoration: "none" }}
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] rounded-2xl border border-blue-900/30 bg-gray-950 shadow-lg transition-transform duration-300 hover:scale-[1.03] mx-auto">
            {/* Project image */}
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Title */}
            <h3 className="font-bold text-base text-slate-100 mb-1">{project.title}</h3>
            {/* Description */}
            <p className="text-sm text-slate-400 mb-2 line-clamp-2">{project.description}</p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-blue-900/30 backdrop-blur-sm rounded-full text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* View project button */}
            {project.link && (
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200 mt-auto">
                View Project
                <span className="inline-block transition-transform duration-200">→</span>
              </span>
            )}
          </div>
        </a>
      </ThreeDPin>
    </motion.div>
  )
}