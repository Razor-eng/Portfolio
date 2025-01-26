import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import LightCursorBackground from '@/components/cursor-background'
import { Footer } from '@/components/footer'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-mont'
})

export const metadata = {
  title: 'Rajat Kumar Maharana - Full Stack Developer',
  description: 'Interactive portfolio of Rajat Kumar Maharana, a creative developer specializing in cutting-edge web experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`${montserrat.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}>
            <LightCursorBackground />
            <Navbar />
            <AnimatePresence mode='wait'>
              {children}
            </AnimatePresence>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

