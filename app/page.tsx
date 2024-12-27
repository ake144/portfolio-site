import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Github, Twitter, Instagram, Linkedin, ExternalLink, Heart } from 'lucide-react'
import {  Exprience, Projects } from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen  text-white">
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 max-w-3xl">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              AKle Junior (Akjr)
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Hello! This is Ak, a passionate Full-stack web developer, blockchain developer, and machine learning engineer from South Africa.
              Originally from austo, Austria, I specialize in technology, software, and cryptocurrency.
            </p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, href: "https://github.com/username" },
                { icon: Twitter, href: "https://twitter.com/username" },
                { icon: Instagram, href: "https://instagram.com/username" },
                { icon: Linkedin, href: "https://linkedin.com/in/username" },
              ].map((social, index) => (
                <Link key={index} href={social.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <section className="w-full max-w-5xl space-y-8">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {Exprience.map((exp) => (
                <Card key={exp.id} className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                      <Badge variant="secondary">{exp.date}</Badge>
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </CardContent>
                  <CardFooter className="border-t border-gray-800 px-6 py-4">
                    <p className="text-sm text-gray-500">
                      {exp.company}, {exp.location}
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Goals Section */}
          <section className="w-full max-w-5xl space-y-8">
            <h2 className="text-3xl font-bold text-center">Goals</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <p className="text-gray-400 leading-relaxed">
                  I aim to reach wider audiences by sharing knowledge in the fields of cryptocurrency and technology. 
                  With a focus on innovative thinking and professionalism, I strive to make a difference, 
                  especially in community management and social media.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Projects Section */}
          <section className="w-full max-w-5xl space-y-8">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {Projects.map((project) => (
                <Card key={project.id} className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 group">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                      <Button asChild variant="outline" className="hover:bg-blue-500 hover:text-white transition-colors">
                        <Link href={project.url} className="flex items-center gap-2">
                          Visit Project
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Button asChild variant="outline" className="hover:bg-blue-500 text-black hover:text-white transition-colors">
              <Link href="mailto:umutbayraktar55@hotmail.com" className="flex items-center gap-2">
                Contact Me
                <Heart className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 transition-colors">
              <Link href="https://discord.gg/your-server" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Join My Discord
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

