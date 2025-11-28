import React, { useState } from "react";
import {
  FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaMoon, FaSun, FaUser, FaGraduationCap, FaProjectDiagram, FaTools, FaMapMarkerAlt,
} from "react-icons/fa";
import {
  FaReact, FaPhp, FaBootstrap, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaCuttlefish, // placeholder for C#
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiNextdotjs, SiMysql } from "react-icons/si";
import { FaCircle } from "react-icons/fa";


export default function App() {



  const portfolioItems = [
    {
      id: 1,
      title: "CPU Scheduling Simulator",
      description:
        "The CPU Scheduling Simulator is an interactive tool that demonstrates how CPU scheduling algorithms manage process execution inside an operating system.It visually shows how processes are selected, how long they wait, and how the CPU distributes time among tasks.",
      link: "https://cpu-scheduling-algorithms.netlify.app/",
      image: "/CPU Scheduling Simulators.PNG",
      openInNewTab: true,
    },
    {
      id: 2,
      title: "E-commerce Shop",
      description:
        "An E-commerce Shop is an online platform that allows customers to browse products, add items to a cart, and complete purchases through a secure checkout process. It typically includes features such as product listings, categories, user authentication, order tracking, and payment integration.",
      link: "https://mastering-react-and-api-integration.vercel.app",
      image: "/E-Commerce.PNG",
      openInNewTab: true,
    },
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "C#", icon: <FaCuttlefish className="text-blue-700" /> }, // placeholder
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "UI Design (Figma)", icon: <FaFigma className="text-pink-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];


  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* NAVBAR */}


      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* HERO SECTION */}
        <header className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-300">

          <img
            src={isHovered ? "/Jhoanna.jpg" : "/Edwin.jpg"}
            alt="Edwin"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
      w-40 h-40 rounded-full object-cover shadow-lg
      transition-all duration-500 ease-out
      hover:scale-110
    "
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">
              Edwin G. Angoring Jr <span className="text-blue-500"></span>
            </h2>
            <p className="flex items-center gap-2 text-gray-500 dark:text-gray-300 mb-1">
              <FaMapMarkerAlt className="text-red-500" /> Poblacion Cordova
            </p>
            <p className="text-lg font-medium mb-4">IT Student</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:angoringedwin12@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <FaEnvelope /> Send Email
              </a>





              <button
                type="button"
                onClick={() => {
                  const section = document.getElementById("projects");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <FaProjectDiagram /> View Projects
              </button>


            </div>
          </div>
        </header>

        {/* ABOUT + EDUCATION */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="font-semibold text-xl mb-3 flex items-center gap-2">
              <FaUser className="text-blue-500" /> About
            </h4>
            <p>
              I am passionate about Information Technology, especially in fields like technical support, hardware/software troubleshooting, and web development. I enjoy learning how systems work and solving technical problems. I’ve practiced setting up basic websites using HTML, CSS, and JavaScript, and I’m actively improving my skills through self-learning and small personal projects. My goal is to grow into an IT support role where I can help users solve issues, maintain systems, and contribute to technology solutions that make work easier and more efficient.


            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="font-semibold text-xl mb-3 flex items-center gap-2">
              <FaGraduationCap className="text-green-500" /> Educational Background
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaCircle className="text-green-500 text-xs mr-5" />

                <span>
                  <strong> 2023 — College</strong><br />Cordova Public College
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaCircle className="text-green-500 text-xs mr-5" />
                <span>
                  <strong>2018 - 2019 — Senior High</strong><br />Baybay City National High School
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaCircle className="text-green-500 text-xs mr-5" />
                <span>
                  <strong>2016 - 2017 — Junior High</strong><br />Baybay National High School
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaCircle className="text-green-500 text-xs mr-5" />
                <span>
                  <strong>2012 - 2013 — Elementary</strong><br />Gaas Elementary School
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* PROJECTS */}
        <section id="projects" className="space-y-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaProjectDiagram className="text-purple-500" /> Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target={project.openInNewTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS + CONTACT INFO SIDE BY SIDE */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* SKILLS */}
          <section className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaTools className="text-yellow-500" /> Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </section>


          {/* CONTACT INFO */}
          <section className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> Contact Info
            </h3>
            <div className="grid sm:grid-cols-1 gap-4">
              <a href="mailto:angoringedwin12@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                <FaEnvelope className="text-blue-600" /> Email
              </a>
              <a href="tel:+6399518311650" className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                <FaPhone className="text-green-600" /> Phone
              </a>
              <a href="https://www.facebook.com/edwingangoringjr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                <FaFacebook className="text-blue-700" /> Facebook
              </a>
              <a href="https://www.instagram.com/edwinangoring/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                <FaInstagram className="text-pink-500" /> Instagram
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
