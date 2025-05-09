"use client"

import { GraduationCap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Programming",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "HTML", "CSS", "SQL", "R"],
    },
    {
      name: "Frameworks",
      skills: ["React", "React Native", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      name: "Tools",
      skills: [
        "Git",
        "Fusion360",
        "SolidWorks",
        "AutoCAD",
        "Figma",
        "Jira",
        "Tableau",
        "Excel",
        "VS Code",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      name: "Databases",
      skills: ["Firebase", "PostgreSQL", "MongoDB", "MySQL", "AWS", "Google Cloud Platform"],
    },
  ]

  return (
    <div className="space-y-12">
      <section id="skills" className="py-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>

        <Tabs defaultValue="Programming" className="w-full">
          <TabsList className="w-full grid grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <Card key={skill} className="hover:bg-accent transition-colors">
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-xl font-semibold">{skill}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section id="certifications" className="py-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <GraduationCap className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold">Harvard University CS50x</h3>
                <p className="text-muted-foreground">Computer Science</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <GraduationCap className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold">Certified Prompt Engineer</h3>
                <p className="text-muted-foreground">Blockchain Council</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <GraduationCap className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-semibold">HackerRank</h3>
                <p className="text-muted-foreground">NodeJS Certificate</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

