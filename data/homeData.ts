import { Code, Palette, Globe, Zap, Server, Database } from 'lucide-react'

export const heroData = {
  greeting: "Hello, I'm",
  name: "John Doe",
  title: "Creative Developer",
  description: `As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.`,
  cta: {
    primary: {
      text: "View My Work",
      link: "/projects"
    },
    secondary: {
      text: "Contact Me",
      link: "/contact"
    }
  },
  image: "/dev.png"
}

export const aboutMeData = {
  title: "About Me",
  description: [
    "Hi, I'm John Doe, a passionate full-stack developer with over 5 years of experience in creating innovative web applications. I specialize in React, Node.js, and cloud technologies, always striving to build scalable and efficient solutions.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community meetups."
  ],
  cta: {
    text: "Learn More",
    link: "/about"
  },
  image: "/placeholder.svg?height=400&width=400"
}

export const skillsData = [
  {
    icon: Code,
    name: "Web Development",
    description: "HTML, CSS, JavaScript, React, Next.js",
    level: 90,
    details: "Proficient in creating responsive and interactive web applications using modern frameworks and libraries."
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Figma, Adobe XD, Sketch",
    level: 85,
    details: "Experienced in creating user-centered designs and prototypes for web and mobile applications."
  },
  {
    icon: Globe,
    name: "Responsive Design",
    description: "Mobile-first approach, Cross-browser compatibility",
    level: 95,
    details: "Skilled in developing websites that provide optimal viewing experience across a wide range of devices."
  },
  {
    icon: Zap,
    name: "Performance Optimization",
    description: "Lazy loading, Code splitting, Caching strategies",
    level: 80,
    details: "Knowledgeable in implementing various techniques to improve website speed and performance."
  },
  {
    icon: Server,
    name: "Backend Development",
    description: "Node.js, Express, Python, Django",
    level: 75,
    details: "Capable of building robust server-side applications and RESTful APIs."
  },
  {
    icon: Database,
    name: "Database Management",
    description: "MongoDB, PostgreSQL, MySQL",
    level: 70,
    details: "Experienced in designing, implementing, and optimizing database systems for various applications."
  },
]

export const featuredProjectsData = [
  {
    id: 1,
    title: "Interactive Portfolio",
    description: "A dynamic and engaging portfolio website showcasing creative work.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/interactive-portfolio",
    tags: ["Next.js", "React", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with seamless user experience.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/e-commerce-platform",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "An all-in-one dashboard for managing multiple social media accounts.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/social-media-dashboard",
    tags: ["Vue.js", "Express", "PostgreSQL"]
  },
]

export const latestBlogPostsData = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-06-15",
    link: "/blog/future-of-web-development"
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    excerpt: "A comprehensive guide to using React Hooks effectively.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-06-01",
    link: "/blog/mastering-react-hooks"
  },
  {
    id: 3,
    title: "Optimizing Website Performance",
    excerpt: "Tips and tricks to improve your website's loading speed.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-05-20",
    link: "/blog/optimizing-website-performance"
  },
]

export const contactData = {
  title: "Get in Touch",
  description: "Have a project in mind or want to collaborate? I'd love to hear from you!",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  ]
}

