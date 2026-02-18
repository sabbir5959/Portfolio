"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const certificates = [
  {
    id: 1,
    title: "MIST CYBERSECURITY CLUB",
    issuer: "Cyber Bangla",
    date: "April 2025",
    image: "/mistCyberSecurity.png",
    credential: "VIOLENCE",
    skills: ["Reverse Engineering", "Web hacking", "Cryptography", "Digital Forensics"],
  },
  {
    id: 2,
    title: "Phoenix Summit CTF Participation",
    issuer: "Red Team Village",
    date: "May 2025",
    image: "/phoenix.png",
    credential: "VIOLENCE",
    skills: ["Networking", "Artificial Intelligence (AI)"],
  },
  {
    id: 3,
    title: "BCS Certifications",
    issuer: "Bangladesh Computer Society",
    date: "Feb 2025",
    image: "/BCS.png",
    credential: "VIOLENCE",
    skills: ["Steganography", "Cryptography", "Networking"],
  },
  {
    id: 4,
    title: "UAP Cyber Siege 2025",
    issuer: "University of Asia Pacific",
    date: "May 2025",
    image: "/UAP.png",
    credential: "VIOLENCE",
    skills: ["Networking"],
  },
]

export default function Certificates() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const containerRef = useRef(null)

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-10 lg:px-20 xl:px-40">
      {/* Simplified progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50" />

      {/* Reduced particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
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
              duration: 8 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="mb-16 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-blue-500 mb-2">ACHIEVEMENTS</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-200">My Certificates</h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of professional certifications that demonstrate my commitment to continuous learning and
            expertise in various technologies.
          </p>
        </div>

        <CertificatesGrid setSelectedId={setSelectedId} />

        <AnimatePresence>
          {selectedId && (
            <CertificateModal
              certificate={certificates.find((c) => c.id === selectedId) as Certificate}
              setSelectedId={setSelectedId}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function CertificatesGrid({ setSelectedId }: { setSelectedId: React.Dispatch<React.SetStateAction<number | null>> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((certificate, index) => (
        <CertificateCard key={certificate.id} certificate={certificate} index={index} setSelectedId={setSelectedId} />
      ))}
    </div>
  )
}

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  credential: string
  skills: string[]
}

function CertificateCard({
  certificate,
  index,
  setSelectedId,
}: { certificate: Certificate; index: number; setSelectedId: React.Dispatch<React.SetStateAction<number | null>> }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="relative overflow-hidden rounded-xl cursor-pointer group will-change-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSelectedId(certificate.id)}
      layoutId={`certificate-container-${certificate.id}`}
    >
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl border border-blue-900/30 bg-gray-950">
        {/* Certificate image with overlay */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950 z-20" />
          <div className="h-full w-full">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="h-full w-full object-cover object-center transition-transform duration-300 ease-out"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />
          </div>
        </div>

        {/* Content container */}
        <div className="absolute inset-0 z-30 flex flex-col justify-end p-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-400">{certificate.issuer}</span>
              <span className="text-xs text-gray-400">{certificate.date}</span>
            </div>

            <h3 className="text-xl font-bold text-blue-200 mb-3 group-hover:text-blue-300 transition-colors">
              {certificate.title}
            </h3>

            <div className="flex flex-wrap gap-1 mt-2">
              {certificate.skills.slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium bg-blue-900/30 backdrop-blur-sm rounded-full text-blue-200"
                >
                  {skill}
                </span>
              ))}
              {certificate.skills.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium bg-blue-900/30 backdrop-blur-sm rounded-full text-blue-200">
                  +{certificate.skills.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* View certificate button */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-400">Credential: {certificate.credential}</span>
            <span className={`text-sm font-medium text-blue-400 flex items-center gap-1 transition-transform duration-200 ${isHovered ? "translate-x-1" : ""}`}>
              View <span className="inline-block">→</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CertificateModal({
  certificate,
  setSelectedId,
}: { certificate: Certificate; setSelectedId: React.Dispatch<React.SetStateAction<number | null>> }) {
  const [showFullImage, setShowFullImage] = useState(false)

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null)
    },
    [setSelectedId],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [handleEsc])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={() => setSelectedId(null)}
    >
      <motion.div
        layoutId={`certificate-container-${certificate.id}`}
        className="relative bg-gray-900 rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
          onClick={() => setSelectedId(null)}
        >
          ✕
        </button>

        {/* Certificate image */}
        <div className="w-full md:w-1/2 h-60 md:h-auto relative">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 hidden md:block" />
        </div>

        {/* Certificate details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-200 mb-2">{certificate.title}</h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-blue-400">{certificate.issuer}</span>
              <span className="text-sm text-gray-400">{certificate.date}</span>
            </div>
            <p className="text-gray-300 mb-4">
              This certification validates expertise in {certificate.skills.join(", ")}, demonstrating proficiency in
              key industry technologies and methodologies.
            </p>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">CREDENTIAL ID</h4>
              <p className="text-blue-300 font-mono text-sm">{certificate.credential}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">SKILLS</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {certificate.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm font-medium bg-blue-900/30 backdrop-blur-sm rounded-full text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 text-sm transition-colors"
              onClick={() => setSelectedId(null)}
            >
              Close
            </button>
            <button
              onClick={() => setShowFullImage(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm flex items-center gap-2 transition-colors"
            >
              Verify Certificate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {showFullImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setShowFullImage(false)}
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </motion.div>
      )}
    </motion.div>
  )
}
