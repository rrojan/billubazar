import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { ModalProvider } from "~/components/Context/ModalContext"
import { Header } from "~/components/Layout/Header"
import { Sidebar } from "~/components/Layout/Sidebar"
import "./globals.css"
import { Footer } from "~/components/Layout/Footer"

export const metadata: Metadata = {
  title: "BilluBazar - Home",
  description: "Your one stop shop for all things cat",
  keywords: [
    "cat",
    "products",
    "shop",
    "biralo",
    "billu",
    "nepal",
    "outside",
    "studio",
    "Rojan",
    "Rajbhandari",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClerkProvider
          // Can't be bothered to set up proper oauth. Don't do this in production.
          appearance={{
            layout: {
              unsafe_disableDevelopmentModeWarnings: true,
            },
          }}
        >
          <ModalProvider>
            <div className="max-w-screen-xl mx-auto p-4">
              <Header />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <Sidebar />
                <div className="col-span-3">
                  <hr className="mb-16" />
                  {/* Inject layout children */}
                  <main>{children}</main>
                  <Footer />
                </div>
              </div>
            </div>
          </ModalProvider>
        </ClerkProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
