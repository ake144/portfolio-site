"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Instagram, Twitter, Youtube, Facebook, Github, Home, FolderKanban, Mail, FileText, Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Blogs", href: "/blogs", icon: FileText },
]

const socials = [
  { name: "Instagram", href: "https://instagram.com/username", icon: Instagram },
  { name: "Twitter", href: "https://twitter.com/username", icon: Twitter },
  { name: "YouTube", href: "https://youtube.com/@username", icon: Youtube },
  { name: "Facebook", href: "https://facebook.com/username", icon: Facebook },
  { name: "GitHub", href: "https://github.com/username", icon: Github },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-gray-800/40bg-bg-gray-950/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60 dark:bg-gray-950/80 dark:border-gray-800/40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">AK</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <NavItem key={link.href} {...link} pathname={pathname} />
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-6">
            {socials.map((social) => (
              <SocialLink key={social.href} {...social} />
            ))}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="hover:bg-accent"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? "dark" : "light"}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] dark:bg-gray-950 border-l dark:border-gray-800"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-lg font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-6 mt-8">
                {links.map((link) => (
                  <NavItem 
                    key={link.href} 
                    {...link} 
                    pathname={pathname} 
                    onClick={() => setIsOpen(false)} 
                  />
                ))}
                <div className="pt-4 border-t dark:border-gray-800">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={toggleTheme}
                    className="w-full justify-start hover:bg-accent"
                  >
                    {isDark ? (
                      <>
                        <Moon className="h-5 w-5 mr-2" />
                        Dark Mode
                      </>
                    ) : (
                      <>
                        <Sun className="h-5 w-5 mr-2" />
                        Light Mode
                      </>
                    )}
                  </Button>
                </div>
              </nav>
              <div className="flex justify-center space-x-6 mt-8">
                {socials.map((social) => (
                  <SocialLink key={social.href} {...social} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

function NavItem({ 
  name, 
  href, 
  icon: Icon, 
  pathname, 
  onClick 
}: { 
  name: string
  href: string
  icon: React.ElementType
  pathname: string
  onClick?: () => void 
}) {
  const isActive = pathname === href
  
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center space-x-2 text-sm font-medium transition-colors relative",
        isActive 
          ? "text-primary" 
          : "text-muted-foreground hover:text-primary"
      )}
      onClick={onClick}
    >
      <Icon className={cn(
        "h-4 w-4 transition-transform group-hover:scale-110",
        isActive && "text-primary"
      )} />
      <span>{name}</span>
      {isActive && (
        <motion.div
          className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
          layoutId="navbar-indicator"
          transition={{ type: "spring", bounce: 0.25 }}
        />
      )}
    </Link>
  )
}

function SocialLink({ 
  name, 
  href, 
  icon: Icon 
}: { 
  name: string
  href: string
  icon: React.ElementType 
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{name}</span>
    </Link>
  )
}

