"use client"

import { useState, useRef, useEffect, JSX } from "react"
import { motion, useScroll, useInView, useSpring } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  User,
  FileText,
  Sparkles,
  Heart,
  Facebook,
  Instagram,
} from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "sabbir1808769@gmail.com",
    color: "#3B82F6",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+880 179 815 5814",
    color: "#2563EB",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: (
      <a
        href="https://maps.app.goo.gl/hA6ZioFFvRWReu9Z9"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Dhaka, Bangladesh
      </a>
    ),
    color: "#1D4ED8",
  },
]
const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/sabbir5959",
    color: "#3B82F6",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sabbir-hossain",
    color: "#2563EB",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "Twitter",
    href: "https://twitter.com/sabbir_hossain",
    color: "#1D4ED8",
  },
]

export default function Contact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    interface MousePosition {
      x: number
      y: number
    }

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-10 lg:px-20 xl:px-40 relative overflow-hidden">
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }} />

      {/* Mouse follower */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-blue-500/20 pointer-events-none z-40 hidden md:block"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />

      {/* Enhanced background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              backgroundColor: i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#2563EB" : "#1D4ED8",
            }}
            animate={{
              y: [0, -100 - Math.random() * 100],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center relative"
        >
          <motion.div
            className="relative inline-block"
            animate={{
              textShadow: [
                "0 0 10px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.8)",
                "0 0 10px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <h2 className="text-lg md:text-2xl font-bold text-blue-500 mb-2">GET IN TOUCH</h2>

            {/* Sparkle effects around title */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute text-blue-400"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              >
                <Sparkles className="w-3 h-3" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-200"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            style={{
              background: "linear-gradient(90deg, #DBEAFE, #3B82F6, #DBEAFE)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </motion.h1>

          <motion.p
            className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Let's discuss your next project or just say hello. I'm always open to new opportunities and interesting
            conversations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </section>
  )
}

function ContactInfo() {
  const infoRef = useRef(null)
  const isInView = useInView(infoRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={infoRef}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8 relative"
    >
      {/* Animated background blob */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">
        <motion.h3
          className="text-2xl font-bold text-blue-200 mb-4"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Let's Connect
        </motion.h3>
        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I'm always excited to work on new projects and collaborate with amazing people. Whether you have a project in
          mind or just want to chat about technology, feel free to reach out!
        </motion.p>
      </div>

      <div className="space-y-6 relative z-10">
        {contactInfo.map((info, index) => (
          <ContactInfoItem key={info.label} info={info} index={index} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

interface ContactInfo {
  icon: JSX.Element;
  label: string;
  value: string;
  color: string;
}

function ContactInfoItem({ info, index, isInView }: { info: ContactInfo; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 transition-all duration-300 group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="w-12 h-12 rounded-lg flex items-center justify-center text-white relative z-10"
        style={{ backgroundColor: info.color }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? [0, -5, 5, 0] : 0,
          boxShadow: isHovered
            ? `0 0 20px 0 rgba(${hexToRgb(info.color)}, 0.5)`
            : `0 0 0px 0 rgba(${hexToRgb(info.color)}, 0)`,
        }}
        transition={{ duration: 0.3 }}
      >
        {info.icon}

        {/* Pulsing ring effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-lg border-2"
            style={{ borderColor: info.color }}
            animate={{
              scale: [1, 1.5, 2],
              opacity: [0.5, 0.2, 0],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        )}
      </motion.div>

      <div className="relative z-10">
        <motion.h4
          className="text-lg font-semibold text-blue-200 transition-colors"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {info.label}
        </motion.h4>
        <motion.p
          className="text-gray-400 transition-colors"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {info.value}
        </motion.p>
      </div>

      {/* Decorative elements */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: info.color,
                right: 10 + i * 15,
                top: "50%",
              }}
              animate={{
                scale: [0, 1, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  )
}

// Replace the ContactForm component with this Formspree implementation

function ContactForm() {
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)

  // Formspree integration
  const [state, handleSubmit] = useForm("mdkgvbng")
  const [showSuccess, setShowSuccess] = useState(false)

  // Show success message when form is successfully submitted
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true)
      // Hide success message after 3 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* Animated background blob */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-l from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, -1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="p-8 rounded-xl bg-gray-900/50 border border-gray-800 relative z-10 overflow-hidden">
        {/* Success animation overlay */}
        {showSuccess && (
          <motion.div
            className="absolute inset-0 bg-green-500/20 flex items-center justify-center z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <motion.div
              className="text-center"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: 2,
              }}
            >
              <Heart className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-green-400 text-xl font-bold">Message Sent!</p>
              <p className="text-green-300">Thank you for reaching out!</p>
            </motion.div>
          </motion.div>
        )}

        <motion.h3
          className="text-2xl font-bold text-blue-200 mb-6"
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Send a Message
        </motion.h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              icon={<User className="w-5 h-5" />}
              label="Name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              rows={1}
            />
            <FormField
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              name="email"
              type="email"
              placeholder="your_email@gmail.com"
              required
              rows={1}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm" />
          </div>

          <FormField
            icon={<FileText className="w-5 h-5" />}
            label="Subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
            required
            rows={1}
          />

          <FormField
            icon={<MessageCircle className="w-5 h-5" />}
            label="Message"
            name="message"
            type="textarea"
            placeholder="Tell me about your project or just say hello..."
            required
            rows={5}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm" />

                    <motion.button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Button background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          
            <span className="relative z-10 flex items-center gap-2">
              {state.submitting ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}

// Replace the FormField component with this updated version
function FormField({
  icon,
  label,
  name,
  type,
  placeholder,
  required,
  rows,
}: {
  icon: JSX.Element;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  rows: number;
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
      <label htmlFor={name} className="text-sm font-medium text-gray-300">
        {label}
      </label>
      <div className="relative">
        <motion.div
          className={`absolute left-3 ${
            type === "textarea" ? "top-3" : "top-1/2 -translate-y-1/2"
          } text-gray-400 z-10`}
          animate={{
            scale: isFocused ? 1.1 : 1,
            color: isFocused ? "#3B82F6" : "#9CA3AF",
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      
        {type === "textarea" ? (
          <motion.textarea
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            rows={rows}
            className="w-full pl-12 pt-3 pr-4 pb-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            animate={{
              boxShadow: isFocused
                ? "0 0 0 2px rgba(59, 130, 246, 0.2)"
                : "0 0 0 0px rgba(59, 130, 246, 0)",
              borderColor: isFocused ? "#3B82F6" : "#374151",
            }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            animate={{
              boxShadow: isFocused
                ? "0 0 0 2px rgba(59, 130, 246, 0.2)"
                : "0 0 0 0px rgba(59, 130, 246, 0)",
              borderColor: isFocused ? "#3B82F6" : "#374151",
            }}
            transition={{ duration: 0.3 }}
          />
        )}
      
        {/* Animated border effect */}
        {isFocused && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    </motion.div>
  )
}

function SocialLinks() {
  const socialRef = useRef(null)
  const isInView = useInView(socialRef, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={socialRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-16 text-center relative"
    >
      <motion.h3
        className="text-3xl font-bold text-blue-200 mb-6 relative z-10"
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        Follow Me
      </motion.h3>
        <div className="flex justify-center gap-4 mb-8">
        <a href="https://github.com/sabbir5959" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
        <Github className="w-8 h-8" />
        </a>
        <a href="https://www.facebook.com/Sabbir141368" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
        <Facebook className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/s_sabbir_r/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
        <Instagram className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/md-sabbir55hossain/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
        <Linkedin className="w-8 h-8" />
        </a>      
      </div>
      <div className="flex justify-center gap-6 relative z-10">
        {socialLinks.map((social, index) => (
          <SocialLink key={social.label} social={social} index={index} isInView={isInView} />
        ))}
      </div>
    </motion.div>
  )
}

interface SocialLinkProps {
  social: {
    icon: JSX.Element;
    label: string;
    href: string;
    color: string;
  };
  index: number;
  isInView: boolean;
}

function SocialLink({ social, index, isInView }: SocialLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
      className="w-14 h-14 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-blue-400 hover:text-white transition-all duration-300 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.15,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.5 },
      }}
      animate={{
        backgroundColor: isHovered ? social.color : "#111827",
        borderColor: isHovered ? social.color : "#374151",
        boxShadow: isHovered ? `0 0 25px 0 rgba(${hexToRgb(social.color)}, 0.6)` : "0 0 0px 0 rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Ripple effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{ backgroundColor: social.color }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {social.icon}
      </motion.div>
    </motion.a>
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
