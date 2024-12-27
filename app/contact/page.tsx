"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Instagram, Send as Telegram } from "lucide-react"
import { FaDiscord } from "react-icons/fa"

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-lg text-muted-foreground">
            Other addresses where you can contact me.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <FaDiscord className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Discord</h3>
                <p className="text-muted-foreground">@umutxyp</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <Instagram className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-muted-foreground">@umutxyp</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <Telegram className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Telegram</h3>
                <p className="text-muted-foreground">@umutxyp</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <Mail className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">umutbayraktar55@hotmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}