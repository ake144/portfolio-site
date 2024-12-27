"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {  Projects } from "@/lib/data"


export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="text-lg text-muted-foreground">
            The projects that I am actively working on are in this field.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
        {Projects.map((project) => (
                <Card className="overflow-hidden" key={project.id}>
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image 
                      src={project.image}
                      alt="Code Share Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <Button asChild>
                      <Link href={project.url}>Visit Project</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
        </div>
      </div>
    </main>
  )
}