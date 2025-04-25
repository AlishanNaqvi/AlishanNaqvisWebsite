"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectModalProps {
  title: string
  description: string
  date: string
  image: string
  tags: string[]
  githubLink?: string
  instagramLink?: string
  githubExplanation?: string
}

export function ProjectModal({
  title,
  description,
  date,
  image,
  tags,
  githubLink,
  instagramLink,
  githubExplanation,
}: ProjectModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{date}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
          <CardFooter className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{date}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Project Description</h4>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          {githubExplanation && (
            <>
              <h4 className="text-sm font-medium mb-2">GitHub Explanation</h4>
              <p className="text-sm text-muted-foreground mb-4">{githubExplanation}</p>
            </>
          )}
          <div className="flex justify-between items-center">
            {githubLink && (
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </Link>
            )}
            {instagramLink && (
              <Link href={instagramLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Instagram className="mr-2 h-4 w-4" />
                  View on Instagram
                </Button>
              </Link>
            )}
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

