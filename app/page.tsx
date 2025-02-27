"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SkillsSection from "@/components/skills-section"
import { ProjectModal } from "@/components/project-modal"

export default function Home() {
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true)
          observer.unobserve(entry.target)
        } else {
          setIsAboutVisible(false)
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.2,
      },
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  const projects = [
    {
      title: "Smart Banking App",
      date: "Feb 2025",
      description:
        "Developed a comprehensive banking application with features including account management, transaction history, and secure payment processing. Implemented with React Native and Firebase, serving 200+ test users with a 4.8/5 satisfaction rating.",
      image: "/BankSS.png",
      tags: ["React Native", "Firebase", "JavaScript"],
      githubLink: "https://github.com/AlishanNaqvi/Smart-Banking-App",
      githubExplanation:
        "This repository contains a React Native application for a smart banking system. It includes features such as user authentication, account management, transaction history, and secure payment processing. The app uses Firebase for backend services, ensuring real-time data synchronization and secure storage. The codebase is structured following best practices for React Native development, with separate components for different banking features. It also includes custom hooks for state management and API interactions.",
    },
    {
      title: "Password Generator",
      date: "Dec 2024",
      description:
        "Developed a customizable password generator, securing over 100 user passwords with advanced randomization algorithms. Enhanced user experience with interactive animations and real-time feedback features, achieving a 40% increase in user retention.",
      image: "/Lock.png",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/AlishanNaqvi/Password-Generator",
      githubExplanation:
        "This project is a web-based password generator built with HTML, CSS, and JavaScript. It features a responsive design and uses advanced randomization algorithms to create secure passwords. The generator allows users to customize password length and character types (uppercase, lowercase, numbers, symbols). It includes interactive animations for better user engagement and provides real-time feedback on password strength. The codebase is well-documented and follows modern JavaScript practices.",
    },
    {
      title: "ScorpioCustoms Content Creator",
      date: "Mar 2024 - Sept 2024",
      description:
        "Produced high-quality social media content, achieving 5K+ views per video and growing follower base by 40%. Designed targeted digital marketing strategies, increasing brand visibility and engagement by 30% across 3 major platforms.",
      image: "/ScorpioCustomsSS.png",
      tags: ["Content Creation", "Digital Marketing", "Social Media"],
      instagramLink: "https://www.instagram.com/reel/DABZpfcRGNh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ]

  const RESUME_FILE_PATH = "/Alishan_Naqvi_Resume.pdf"

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = RESUME_FILE_PATH
    link.download = "Alishan_Naqvi_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const headerHeight = 64 // Height of the fixed header
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 0)
      }
    }

    // Call handleHashChange on initial load
    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">AN</span>
            </Link>
            <nav className="hidden md:flex flex-row items-center gap-5 text-sm lg:gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="flex items-center space-x-1">
              <Link href="https://github.com/alishannaqvi" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="http://www.linkedin.com/in/alishan-naqvi" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:alishannaqvi416@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section with new background */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center relative overflow-hidden hero-background">
          <div className="absolute inset-0 z-0">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                  <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                  <stop offset="0%" stopColor="rgba(255, 0, 255, 0.1)"></stop>
                  <stop offset="100%" stopColor="rgba(255, 0, 255, 0.05)"></stop>
                </radialGradient>
                <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
                  <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                  <stop offset="0%" stopColor="rgba(255, 255, 0, 0.1)"></stop>
                  <stop offset="100%" stopColor="rgba(255, 255, 0, 0.05)"></stop>
                </radialGradient>
                <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
                  <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                  <stop offset="0%" stopColor="rgba(0, 255, 255, 0.1)"></stop>
                  <stop offset="100%" stopColor="rgba(0, 255, 255, 0.05)"></stop>
                </radialGradient>
              </defs>
              <rect
                x="13.744%"
                y="1.18473%"
                width="100%"
                height="100%"
                fill="url(#Gradient1)"
                transform="rotate(334.41 50 50)"
              >
                <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
                <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="7s"
                  repeatCount="indefinite"
                ></animateTransform>
              </rect>
              <rect
                x="-2.17916%"
                y="35.4267%"
                width="100%"
                height="100%"
                fill="url(#Gradient2)"
                transform="rotate(255.072 50 50)"
              >
                <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
                <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="12s"
                  repeatCount="indefinite"
                ></animateTransform>
              </rect>
              <rect
                x="9.00483%"
                y="14.5733%"
                width="100%"
                height="100%"
                fill="url(#Gradient3)"
                transform="rotate(139.903 50 50)"
              >
                <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 50 50"
                  to="0 50 50"
                  dur="9s"
                  repeatCount="indefinite"
                ></animateTransform>
              </rect>
            </svg>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center relative z-20">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Headshot-mrIetwIK8bnYTAFFOnyXGodKS60jZi.png"
                alt="Alishan Naqvi"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">Alishan Naqvi</h1>
            <p className="text-xl text-gray-300">Software Engineer</p>
            <div className="flex gap-4">
              <Link href="#contact">
                <Button variant="secondary">Get in Touch</Button>
              </Link>
              <Link href="#projects">
                <Button variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className={`py-12 md:py-24 transition-opacity duration-500 ${
            isAboutVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none h-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  I'm a passionate Software Engineer and App Developer based in Toronto, currently pursuing a
                  Bachelor of Science double majoring in Computer Science and Statistics at the University of Toronto.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  My goal is to design and build digital solutions that are not only efficient and user-friendly but also engaging and aesthetically pleasing. I bring a unique perspective to every project by blending technical expertise with creativity. Whether it's a dynamic web application or a thoughtful design, I strive to deliver solutions that effectively convey your message and identity. I've collaborated with diverse teams and contributed to projects that have made a meaningful impact.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Name:</span>
                  <span>Alishan Naqvi</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Email:</span>
                  <span>alishannaqvi416@gmail.com</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Toronto, ON</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Education:</span>
                  <span>University of Toronto</span>
                </div>
                <div className="flex items-align justify-between">
                  <span className="font-medium">Degree:</span>
                  <span className="text-right">Honours Bachelor of Science Double Major in Computer Science & Statistics (2027)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Experience</h2>
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>App Developer Intern</CardTitle>
                      <CardDescription>Evolvere, Toronto, ON</CardDescription>
                    </div>
                    <Badge>Jan 2024 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Developed and maintained user-friendly React Native interfaces, improving user engagement by 30%
                      and reducing bounce rates by 15%
                    </li>
                    <li>
                      Implemented robust backend functionality with Firebase, ensuring 99% uptime and real-time data
                      synchronization for 5,000+ daily active users
                    </li>
                    <li>
                      Automated CI/CD pipelines with Git, reducing deployment times by 40% and enhancing update
                      reliability across 3 major platform versions
                    </li>
                    <li>
                      Collaborated with cross-functional teams using Figma, streamlining design-to-development workflows
                      and cutting iteration time by 25%
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-2 flex-wrap">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Figma</Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Software Engineer Intern</CardTitle>
                      <CardDescription>Weel, Toronto, ON</CardDescription>
                    </div>
                    <Badge>Nov 2024 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Built scalable APIs using Go, integrating PostgreSQL, Firestore, and JWT, boosting system security
                      by 50% and handling 200+ requests per second
                    </li>
                    <li>
                      Enhanced real-time React Native features, improving app responsiveness by 35% and reducing load
                      times by 40% for 10,000+ monthly users
                    </li>
                    <li>
                      Containerized microservices with Docker, optimizing resource utilization by 45% and enabling
                      seamless deployment across 8 different environments
                    </li>
                    <li>
                      Contributed to Agile development processes, delivering solutions 20% faster using Go, TypeScript,
                      and SQL, completing 35+ story points per sprint
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Go</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Firestore</Badge>
                  <Badge variant="outline">JWT</Badge>
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">SQL</Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Cofounder</CardTitle>
                      <CardDescription>ScorpioCustoms Ltd., Toronto, ON</CardDescription>
                    </div>
                    <Badge>Oct 2023 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Co-founded and scaled ScorpioCustoms Ltd., generating 30% revenue growth through strategic product
                      design and marketing, acquiring 500+ customers in the first year
                    </li>
                    <li>
                      Directed product design using Fusion360, SolidWorks, and resin 3D printing, launching 10+
                      trend-driven products with a 95% customer satisfaction rate
                    </li>
                    <li>
                      Developed a responsive e-commerce website with HTML/CSS, streamlining production workflows by 25%
                      and increasing online sales by 40% quarter-over-quarter
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Fusion360</Badge>
                  <Badge variant="outline">SolidWorks</Badge>
                  <Badge variant="outline">3D Printing</Badge>
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">E-commerce</Badge>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectModal key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 pt-20 md:pt-24">
          <div className="container mx-auto">
            <SkillsSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision. Feel free to contact me using the form or through my contact information.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>alishannaqvi416@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="http://www.linkedin.com/in/alishan-naqvi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/alishan-naqvi
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form action="https://formspree.io/f/xrbewnrp" method="POST" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Alishan Naqvi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/alishannaqvi" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="http://www.linkedin.com/in/alishan-naqvi" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:alishannaqvi416@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

