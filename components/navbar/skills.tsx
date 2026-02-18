"use client"

import { JSX, useRef, useState } from "react"
import { motion, useScroll, useInView, useSpring } from "framer-motion"
import {
  Code2,
  Database,
  Layers,
  Cpu,
  PenTool,
  Terminal,
  Figma,
  FileCode,
  Smartphone,
  Server,
  Palette,
  Zap,
  Codesandbox,
  Coffee,
  Chrome,
  Github,
  Framer,
  Codepen,
  Briefcase,
} from "lucide-react"

// Define the Skill type
type Skill = {
  name: string
  icon: JSX.Element
}

// Skill categories with their respective skills and icons
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Layers className="w-8 h-8" />,
    color: "#3B82F6", // blue-500
    skills: [
      { name: "React", icon: <Code2 className="w-full h-full" /> },
      { name: "TypeScript", icon: <FileCode className="w-full h-full" /> },
      { name: "Tailwind CSS", icon: <Palette className="w-full h-full" /> },
      { name: "HTML/CSS", icon: <Chrome className="w-full h-full" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Database className="w-8 h-8" />,
    color: "#2563EB", // blue-600
    skills: [
      { name: "Node.js", icon: <Server className="w-full h-full" /> },
      { name: "Express", icon: <Zap className="w-full h-full" /> },
    ],
  },
  {
    id: "programming",
    title: "Languages",
    icon: <Code2 className="w-8 h-8" />,
    color: "#1D4ED8", // blue-700
    skills: [
      { name: "JavaScript", icon: <Codesandbox className="w-full h-full" /> },
      { name: "TypeScript", icon: <FileCode className="w-full h-full" /> },
      { name: "C/C++", icon: <Cpu className="w-full h-full" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: <Terminal className="w-8 h-8" />,
    color: "#3B82F6", // blue-500
    skills: [
      { name: "Git", icon: <Github className="w-full h-full" /> },
      { name: "VS Code", icon: <Codepen className="w-full h-full" /> },
      { name: "Postman", icon: <Smartphone className="w-full h-full" /> },
    ],
  },
  {
    id: "design",
    title: "Design",
    icon: <PenTool className="w-8 h-8" />,
    color: "#93C5FD", // blue-300
    skills: [
      { name: "Figma", icon: <Figma className="w-full h-full" /> },
      { name: "Photoshop", icon: <Palette className="w-full h-full" /> },
      { name: "Illustrator", icon: <PenTool className="w-full h-full" /> },
      { name: "UI Design", icon: <Framer className="w-full h-full" /> },
    ],
  },
]

export default function Skills() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-10 lg:px-20 xl:px-40">
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }} />

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-lg md:text-2xl font-bold text-blue-500 mb-2">EXPERTISE</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-200">My Skills</h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across various domains of software development and design.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ category, index }: { category: typeof skillCategories[number]; index: number }) {
  const categoryRef = useRef(null)
  const isInView = useInView(categoryRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={categoryRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative"
    >
      <div className="mb-8 flex items-center gap-4">
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-white"
          style={{ backgroundColor: category.color }}
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: `0 0 20px 0 rgba(${hexToRgb(category.color)}, 0.3)`,
          }}
        >
          {category.icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-blue-200">{category.title}</h3>

        {/* Decorative line */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-blue-500/80 to-transparent flex-grow ml-4"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
        {category.skills.map((skill: Skill, skillIndex: number) => (
          <SkillIcon
            key={skill.name}
            skill={skill}
            index={skillIndex}
            isInView={isInView}
            categoryIndex={index}
            color={category.color}
          />
        ))}
      </div>
    </motion.div>
  )
}

function SkillIcon({
  skill,
  index,
  isInView,
  categoryIndex,
  color,
}: {
  skill: { name: string; icon: JSX.Element }
  index: number
  isInView: boolean
  categoryIndex: number
  color: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{
        duration: 0.5,
        delay: categoryIndex * 0.1 + index * 0.05 + 0.5,
        ease: "easeOut",
      }}
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon container with fancy effects */}
      <motion.div
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-900 p-3 mb-2 overflow-hidden"
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.5 },
        }}
        animate={{
          boxShadow: isHovered ? `0 0 20px 0 rgba(${hexToRgb(color)}, 0.5)` : `0 0 5px 0 rgba(${hexToRgb(color)}, 0.2)`,
          borderColor: isHovered ? color : "rgba(75, 85, 99, 0.5)",
        }}
        style={{
          border: `1px solid rgba(75, 85, 99, 0.5)`,
        }}
      >
        {/* Icon */}
        <motion.div
          className="text-blue-400 z-10"
          animate={{
            scale: isHovered ? 1.1 : 1,
            color: isHovered ? color : "#60A5FA",
          }}
          transition={{ duration: 0.3 }}
        >
          {skill.icon}
        </motion.div>

        {/* Background glow */}
        <motion.div
          className="absolute inset-0 opacity-50 rounded-2xl"
          animate={{
            background: isHovered
              ? `radial-gradient(circle at center, rgba(${hexToRgb(color)}, 0.2) 0%, rgba(0, 0, 0, 0) 70%)`
              : `radial-gradient(circle at center, rgba(${hexToRgb(color)}, 0) 0%, rgba(0, 0, 0, 0) 70%)`,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated corner dots */}
        {isHovered && (
          <>
            <motion.div
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: color, top: 4, left: 4 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: color, top: 4, right: 4 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 1, delay: 0.2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: color, bottom: 4, left: 4 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 1, delay: 0.4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: color, bottom: 4, right: 4 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 1, delay: 0.6, repeat: Number.POSITIVE_INFINITY }}
            />
          </>
        )}
      </motion.div>

      {/* Skill name */}
      <motion.p
        className="text-sm text-center text-gray-400"
        animate={{
          color: isHovered ? "#FFFFFF" : "#9CA3AF",
        }}
        transition={{ duration: 0.3 }}
      >
        {skill.name}
      </motion.p>
    </motion.div>
  )
}

// Helper function to convert hex color to RGB for box-shadow animation
function hexToRgb(hex: string): string {
  // Remove the # if present
  hex = hex.replace(/^#/, "")

  // Parse the hex values
  const bigint = Number.parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `${r}, ${g}, ${b}`
}
