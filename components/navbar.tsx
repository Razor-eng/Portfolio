"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { MenuIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "@/data/icons"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full top-0 z-20 bg-background/50 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto pl-0 px-4 py-1">
        <div className="flex items-center justify-between">
          <Link href="/" prefetch={false}>
            <Image
              priority
              height={500}
              width={500}
              src={'/logo.png'}
              alt="logo"
              className="w-20 h-14"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <CustomLink
                key={item.name}
                href={item.href}
                title={item.name}
              />
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <motion.a href="https://github.com/razor-eng" target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-2'
            >
              <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/rajat-kumar-maharana" target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-2'
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a href="mailto:mrajat00@gmail.com" target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-2'
            >
              <Image priority height={500} width={500} className="size-full" src={'/svgs/gmail.svg'} alt="mail" />
            </motion.a>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`ml-2 size-8 flex items-center justify-center rounded-full p-1 ${theme === "dark" ? "bg-zinc-200 text-zinc-800" : "bg-zinc-800 text-yellow-500"}`}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="hidden">Navbar</SheetTitle>
                <SheetDescription className="hidden">Navbar Toggle</SheetDescription>
              </SheetHeader>
              <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
                JD
              </Link>
              <div className="container flex flex-col justify-between h-full mx-auto px-4 py-4">
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      prefetch={false}
                      className={`flex w-full pl-4 items-center justify-between py-2 text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors`}
                    >
                      {item.name}
                      <div className={`${pathname === item.href ? 'bg-primary size-3 rounded-full' : 'hidden'}`} />
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <motion.a href="https://github.com/razor-eng" target={"_blank"}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className='w-6 mx-2'
                    >
                      <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/rajat-kumar-maharana-80103820b/" target={"_blank"}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className='w-6 mx-2'
                    >
                      <LinkedInIcon />
                    </motion.a>
                    <motion.a href="mailto:mrajat00@gmail.com" target={'_blank'}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className='w-6 mx-2'
                    >
                      <Image priority height={500} width={500} className="size-full" src={'/svgs/gmail.svg'} alt="mail" />
                    </motion.a>
                  </div>
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className={`ml-2 size-8 flex items-center justify-center rounded-full p-1 ${theme === "dark" ? "bg-zinc-200 text-zinc-800" : "bg-zinc-800 text-yellow-500"}`}
                  >
                    {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const path = usePathname();
  return (
    <Link href={href} className={`${className} ${path === href ? "dark:text-white text-black font-extrabold" : "dark:text-zinc-400 text-zinc-600"} relative text-sm px-1 pb-1 font-semibold group`}>
      {title}
      {/* <span className={`
              h-[2px] inline-block bg-[#101010] 
              absolute left-0 -bottom-0.5
              group-hover:w-full translate-[width] ease duration-300
              ${path === href ? 'w-full' : 'w-0'}
              dark:bg-[#f9f9f9] `}
      >
        &nbsp;
      </span> */}
    </Link>
  )
}