"use client"

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b px-4 md:px-10 lg:px-20 xl:px-40 ml-[-50px]">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center text-center md:text-left gap-8">
        <img
          src="sabbirMain.png"
          alt="Md. Sabbir Hossain"
          className="w-52 h-52 md:w-120 md:mt-[-50] md:h-120 object-cover object-center"
        />
        <div className="flex flex-col mt-8 md:mt-14 mr-[-100] items-center md:items-start">
          <p className="text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-300">I'm</p>
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-extrabold leading-tight dark:text-blue-200">
            Md. Sabbir Hossain
          </h1>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-6 items-center md:items-start justify-center md:justify-start text-base md:text-xl font-semibold text-gray-700 dark:text-gray-200">
            <li className="text-blue-600 dark:text-blue-300">Software Engineer</li>
            <li className="hidden md:inline text-gray-400 dark:text-gray-500">|</li>
            <li className="text-blue-600 dark:text-blue-300">UI/UX Designer</li>
            <li className="hidden md:inline text-gray-400 dark:text-gray-500">|</li>
            <li className="text-blue-600 dark:text-blue-300">Web Developer</li>
          </ul>
          <p className="mt-4 md:mt-6 text-base md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed tracking-wide text-center md:text-left">
            I am a passionate software engineer with a strong focus on web development and UI/UX design. I love creating
            beautiful and functional applications that provide great user experiences.
          </p>
          <a
            href="/cv.pdf"
            download
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
