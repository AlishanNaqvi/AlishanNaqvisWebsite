"use client"

import { GraduationCap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12">Skills</h1>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-8">
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
          </TabsList>

          <TabsContent value="programming" className="mt-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6">📝 Programming Languages</h2>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-[#3776AB] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  className="w-6 h-6"
                  alt="Python"
                />
                Python
              </div>
              <div className="px-4 py-2 bg-[#007396] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                  className="w-6 h-6"
                  alt="Java"
                />
                Java
              </div>
              <div className="px-4 py-2 bg-[#F7DF1E] text-black rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  className="w-6 h-6"
                  alt="JavaScript"
                />
                JavaScript
              </div>
              <div className="px-4 py-2 bg-[#3178C6] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  className="w-6 h-6"
                  alt="TypeScript"
                />
                TypeScript
              </div>
              <div className="px-4 py-2 bg-[#E34F26] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  className="w-6 h-6"
                  alt="HTML5"
                />
                HTML5
              </div>
              <div className="px-4 py-2 bg-[#1572B6] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  className="w-6 h-6"
                  alt="CSS3"
                />
                CSS3
              </div>
              <div className="px-4 py-2 bg-[#4479A1] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                  className="w-6 h-6"
                  alt="SQL"
                />
                SQL
              </div>
              <div className="px-4 py-2 bg-[#00ADD8] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
                  className="w-6 h-6"
                  alt="Go"
                />
                Go
              </div>
              <div className="px-4 py-2 bg-[#61DAFB] text-black rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  className="w-6 h-6"
                  alt="React"
                />
                React
              </div>
              <div className="px-4 py-2 bg-[#61DAFB] text-black rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  className="w-6 h-6"
                  alt="React Native"
                />
                React Native
              </div>
              <div className="px-4 py-2 bg-[#276DC3] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg"
                  className="w-6 h-6"
                  alt="R"
                />
                R
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="mt-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6">🛠️ Tools & Technologies</h2>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-[#F05032] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                  className="w-6 h-6"
                  alt="Git"
                />
                Git
              </div>
              <div className="px-4 py-2 bg-[#FF5722] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://www.autodesk.com/content/dam/autodesk/www/products/fusion-360/favicon.ico"
                  className="w-6 h-6"
                  alt="Fusion360"
                />
                Fusion360
              </div>
              <div className="px-4 py-2 bg-[#FF3C00] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/solidworks/solidworks-original.svg"
                  className="w-6 h-6"
                  alt="SolidWorks"
                />
                SolidWorks
              </div>
              <div className="px-4 py-2 bg-[#0696D7] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/autocad/autocad-original.svg"
                  className="w-6 h-6"
                  alt="AutoCAD"
                />
                AutoCAD
              </div>
              <div className="px-4 py-2 bg-[#F24E1E] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
                  className="w-6 h-6"
                  alt="Figma"
                />
                Figma
              </div>
              <div className="px-4 py-2 bg-[#0052CC] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg"
                  className="w-6 h-6"
                  alt="Jira"
                />
                Jira
              </div>
              <div className="px-4 py-2 bg-[#E97627] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tableau.svg"
                  className="w-6 h-6 fill-current"
                  alt="Tableau"
                />
                Tableau
              </div>
              <div className="px-4 py-2 bg-[#217346] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoftexcel.svg"
                  className="w-6 h-6 fill-current"
                  alt="Excel"
                />
                Excel
              </div>
            </div>
          </TabsContent>

          <TabsContent value="databases" className="mt-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6">🗄️ Databases & Frameworks</h2>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-[#FFCA28] text-black rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
                  className="w-6 h-6"
                  alt="Firebase"
                />
                Firebase
              </div>
              <div className="px-4 py-2 bg-[#EE4C2C] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg"
                  className="w-6 h-6"
                  alt="PyTorch"
                />
                PyTorch
              </div>
              <div className="px-4 py-2 bg-[#2496ED] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                  className="w-6 h-6"
                  alt="Docker"
                />
                Docker
              </div>
              <div className="px-4 py-2 bg-[#326CE5] text-white rounded-md flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg"
                  className="w-6 h-6"
                  alt="Kubernetes"
                />
                Kubernetes
              </div>
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6 mt-12">📜 Certifications</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
                <GraduationCap className="w-6 h-6" />
                <span className="font-medium">Harvard University CS50x</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-md">
                <GraduationCap className="w-6 h-6" />
                <span className="font-medium">Certified Prompt Engineer - Blockchain Council</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

