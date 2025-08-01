import { Project } from "@/lib/types";

export const allProjects: Project[] = [
  {
    id: "0",
    title: "ProPrep",
    slug: "proprep",
    description:
      "A comprehensive interview preparation platform for developers, offering resources, exercises, and tools for interview success.",
    longDescription:
      "ProPrep is an interview preparation platform specifically designed for developers. It provides various resources and exercises, including coding challenges, UI components built with Radix UI, and smooth animations using Framer Motion. The platform is styled with Tailwind CSS and supports both light and dark themes using Next Themes. It also integrates React Hook Form with Zod for form validation, and includes features like data visualization through Recharts and date manipulation with date-fns.",
    challenge:
      "Providing a seamless, interactive interview preparation experience with modern UI and tools for developers.",
    solution:
      "Built using a modern stack including Next.js, React, and Tailwind CSS to ensure a responsive and engaging experience. Integrated various libraries for form management, date handling, and animations.",
    technicalDetails:
      "Built with Next.js, React, Tailwind CSS, Radix UI, React Hook Form, Zod, Framer Motion, date-fns, Recharts, and Next Themes.",
    category: "Featured",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "Typescript",
      "Framer Motion",
      "date-fns",
      "Next Themes",
    ],
    tags: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Typescript",
      "Framer Motion",
      "Zod",
      "Recharts",
      "React Hook Form",
      "Next Themes",
    ],
    images: [
      "/images/projects/Proprep/img1.png",
      "/images/projects/Proprep/img2.png",
      "/images/projects/Proprep/img3.png",
    ],
    year: 2025,
    complexity: "Advanced",
    demoUrl: "https://proprep.com",
    repoUrl: "https://github.com/Razor-eng/ProPrep",
    features: [
      "Comprehensive interview preparation tools and resources.",
      "Accessible UI components with Radix UI.",
      "Smooth animations with Framer Motion.",
      "Form management and validation with React Hook Form and Zod.",
      "Multiple themes (light/dark mode) with Next Themes.",
      "Data visualization with Recharts.",
      "Responsive, mobile-friendly design with Tailwind CSS.",
    ],
  },
  {
    id: "1",
    title: "StoreIt",
    slug: "storeit",
    description:
      "A file storage web app built with Next.js, TypeScript, Appwrite, and Tailwind CSS.",
    longDescription:
      "StoreIt is a file storage web app built with Next.js, TypeScript, Appwrite, and Tailwind CSS. It offers a seamless and secure way to upload, store, and manage files, utilizing Next.js for fast performance, TypeScript for reliable development, Appwrite for backend file storage, and Tailwind CSS for a responsive, user-friendly design.",
    challenge:
      "Providing secure and efficient file storage while maintaining a modern design.",
    solution:
      "Leveraged Next.js for fast performance, Appwrite for reliable storage solutions, and TailwindCSS for responsive UI.",
    technicalDetails:
      "Built using Next.js, TypeScript, Appwrite for backend, and TailwindCSS for design.",
    category: "Featured",
    technologies: ["Next.js", "TypeScript", "Appwrite", "TailwindCSS"],
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Appwrite"],
    images: [
      "/images/projects/Storeit/img1.png",
      "/images/projects/Storeit/img3.png",
      "/images/projects/Storeit/img2.png",
    ],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://storeit-r.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/StoreIt-2024",
    features: [
      "Secure file uploads and management.",
      "Fast performance using Next.js and TypeScript.",
      "Responsive UI design with TailwindCSS.",
      "Easy-to-use file organization and sharing.",
    ],
  },
  {
    id: "2",
    title: "EasyBuyy",
    slug: "easybuyy",
    description:
      "A fully responsive E-Commerce website with an admin panel for managing products and orders.",
    longDescription:
      "A comprehensive e-commerce solution that combines modern web technologies with features like product management and order tracking.",
    challenge:
      "Building a user-friendly interface with admin functionalities for product and order management.",
    solution:
      "Used Firebase for backend services and Next.js for server-side rendering to improve performance.",
    technicalDetails:
      "Built with Next.js, React, TailwindCSS, and Firebase for backend and storage.",
    category: "Featured",
    technologies: ["Next.js", "React", "Firebase", "TailwindCSS"],
    tags: ["E-Commerce", "Admin Panel", "Firebase"],
    images: [
      "/images/projects/EasyBuyy/img1.png",
      "/images/projects/EasyBuyy/img2.png",
      "/images/projects/EasyBuyy/img3.png",
    ],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://easybuyy.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Ecommerce-2024",
    features: [
      "Product management and order tracking for admins.",
      "Fully responsive e-commerce platform.",
      "Real-time order updates via Firebase.",
      "User-friendly design with TailwindCSS.",
    ],
  },
  {
    id: "3",
    title: "Docx",
    slug: "docx",
    description:
      "A responsive, real-time document editing application inspired by Microsoft Word.",
    longDescription:
      "Docx allows users to create, edit, and collaborate on documents in real-time, providing seamless document editing features.",
    challenge:
      "Creating a collaborative platform with real-time updates for multiple users.",
    solution:
      "Integrated Convex for real-time data synchronization and Clerk for user authentication.",
    technicalDetails:
      "Built with Next.js, React, TailwindCSS, Convex, and Clerk.",
    category: "Featured",
    technologies: ["Next.js", "React", "TailwindCSS", "Convex", "Clerk"],
    tags: ["Document Editing", "Collaboration"],
    images: [
      "/images/projects/Docs/img1.png",
      "/images/projects/Docs/img2.png",
    ],
    year: 2024,
    complexity: "Advanced",
    demoUrl: "https://docx-r.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Docs-2024",
    features: [
      "Real-time document editing and collaboration.",
      "Seamless synchronization of changes using Convex.",
      "User authentication and session management with Clerk.",
      "Responsive and intuitive UI built with TailwindCSS.",
    ],
  },
  {
    id: "4",
    title: "Jira",
    slug: "jira",
    description:
      "A project management tool to track issues, manage tasks, and automate workflows.",
    longDescription:
      "This Jira-like application allows users to create projects, add tasks, and manage workflows with features like user authentication and member invitations.",
    challenge:
      "Developing a scalable and feature-rich project management application.",
    solution:
      "Utilized Appwrite for backend services and implemented efficient project and task management features.",
    technicalDetails:
      "Built using Next.js, TypeScript, Appwrite, and TailwindCSS.",
    category: "Featured",
    technologies: ["Next.js", "TypeScript", "Appwrite", "TailwindCSS"],
    tags: ["Project Management", "Team Collaboration"],
    images: [
      "/images/projects/Jira/img2.png",
      "/images/projects/Jira/img1.png",
    ],
    year: 2024,
    complexity: "Advanced",
    demoUrl: "https://jira-2024.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Jira-2024",
    features: [
      "Create and manage projects and tasks.",
      "Track project progress and automate workflows.",
      "User authentication and member management.",
      "Collaborative platform for team task tracking.",
    ],
  },
  {
    id: "5",
    title: "Slack",
    slug: "slack",
    description:
      "A Slack clone for professional communication with workspaces, channels, and direct messaging.",
    longDescription:
      "A communication tool inspired by Slack, enabling users to create workspaces, add channels, and collaborate with teams efficiently.",
    challenge:
      "Creating a real-time communication platform with multiple features and scalability.",
    solution:
      "Utilized Convex for real-time messaging and implemented intuitive workspace management features.",
    technicalDetails:
      "Built with Next.js, TypeScript, TailwindCSS, and Convex.",
    category: "Clone",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Convex"],
    tags: ["Communication", "Real-Time"],
    images: [
      "/images/projects/Slack/img2.png",
      "/images/projects/Slack/img1.png",
    ],
    year: 2024,
    complexity: "Advanced",
    demoUrl: "https://slack-r.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Slack-2024",
    features: [
      "Create and manage workspaces and channels.",
      "Real-time messaging using Convex.",
      "File sharing and collaboration within channels.",
      "Intuitive user interface with TailwindCSS.",
    ],
  },
  {
    id: "6",
    title: "Gemini AI",
    slug: "gemini-ai",
    description:
      "An AI-powered text generator inspired by OpenAI GPT-based applications.",
    longDescription:
      "Gemini AI is a clone of OpenAI’s text generation applications, designed to provide text-based responses to user prompts with an intuitive UI.",
    challenge: "Building an interactive UI for AI-powered text generation.",
    solution:
      "Integrated Firebase for backend and optimized the design using TailwindCSS.",
    technicalDetails: "Built using Vite, React, TailwindCSS, and Firebase.",
    category: "Clone",
    technologies: ["Vite", "React", "TailwindCSS", "Firebase"],
    tags: ["AI", "Text Generation"],
    images: [
      "/images/projects/Gemini/img3.png",
      "/images/projects/Gemini/img1.png",
      "/images/projects/Gemini/img2.png",
    ],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://gemini-r.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Gemini-2024",
    features: [
      "AI-powered text generation based on user input.",
      "Real-time processing using Firebase.",
      "Responsive design built with TailwindCSS.",
      "User-friendly interface for seamless interaction.",
    ],
  },
  {
    id: "7",
    title: "Instagram",
    slug: "instagram",
    description:
      "Instagram clone with features like posting, commenting, and following.",
    longDescription:
      "A social media platform inspired by Instagram, allowing users to post photos, follow others, and comment on posts.",
    challenge:
      "Recreating a social media platform with real-time features like posts and comments.",
    solution:
      "Implemented Firebase for real-time updates and used React and Redux for smooth data handling.",
    technicalDetails:
      "Built using React, Redux, Chakra-UI, Firebase, and React-Router-Dom.",
    category: "Clone",
    technologies: [
      "React",
      "Redux",
      "Chakra-UI",
      "Firebase",
      "React-Router-Dom",
    ],
    tags: ["Social Media", "Real-Time"],
    images: [
      "/images/projects/Instagram/img1.png",
      "/images/projects/Instagram/img2.png",
    ],
    year: 2024,
    complexity: "Advanced",
    demoUrl: "https://instagram-2024.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Instagram-2024",
    features: [
      "Real-time posts, comments, and likes with Firebase.",
      "User authentication and profile management.",
      "Follow other users and see their posts.",
      "Responsive UI with Chakra-UI and React Router.",
    ],
  },
  {
    id: "8",
    title: "Twitter",
    slug: "twitter",
    description:
      "Twitter clone with functionalities like posting, retweeting, and following users.",
    longDescription:
      "A Twitter-inspired clone allowing users to post tweets, retweet, and follow other users for real-time updates.",
    challenge:
      "Building a scalable platform for real-time tweet updates and social interactions.",
    solution:
      "Utilized Firebase for real-time tweet updates and optimized the design with TailwindCSS.",
    technicalDetails: "Built using React, Firebase, and TailwindCSS.",
    category: "Clone",
    technologies: ["React", "Firebase", "TailwindCSS"],
    tags: ["Social Media", "Real-Time"],
    images: [
      "/images/projects/Twitter/img1.png",
      "/images/projects/Twitter/img2.png",
    ],
    year: 2024,
    complexity: "Advanced",
    demoUrl: "https://twitter-2024-r.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Twitter-2024-",
    features: [
      "Post tweets, retweet, and interact with others.",
      "Real-time tweet updates using Firebase.",
      "Follow other users and see their tweets.",
      "Responsive layout with TailwindCSS.",
    ],
  },
  {
    id: "9",
    title: "Google",
    slug: "google-clone",
    description:
      "A responsive clone of Google search engine with basic search functionality.",
    longDescription:
      "A clone of the Google search engine, allowing users to search for information and see results in a Google-like interface.",
    challenge:
      "Recreating the iconic Google search interface while maintaining responsiveness.",
    solution:
      "Used React for the UI and optimized performance for fast loading with minimal assets.",
    technicalDetails: "Built using React and TailwindCSS.",
    category: "Clone",
    technologies: ["React", "TailwindCSS"],
    tags: ["Search Engine", "Clone"],
    images: [
      "/images/projects/Google/img1.png",
      "/images/projects/Google/img2.png",
    ],
    year: 2024,
    complexity: "Beginner",
    demoUrl: "https://google-2024.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Google-2024",
    features: [
      "Simple and fast Google-like search functionality.",
      "Responsive design optimized for mobile and desktop.",
      "Clean UI with minimal loading time.",
    ],
  },
  {
    id: "10",
    title: "Gmail",
    slug: "gmail-clone",
    description:
      "An email application clone with features like sending and receiving emails.",
    longDescription:
      "A Gmail-inspired clone with email sending and receiving capabilities, built with React and Firebase.",
    challenge:
      "Building a real-time email system with features like composing and receiving emails.",
    solution: "Used Firebase for real-time email storage and data handling.",
    technicalDetails: "Built using React, Firebase, and TailwindCSS.",
    category: "Recent",
    technologies: ["React", "Firebase", "TailwindCSS"],
    tags: ["Email", "Clone"],
    images: ["/images/projects/Gmail/img1.png"],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://gmail-tau.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Gmail",
    features: [
      "Send and receive emails with real-time updates.",
      "User authentication for secure login.",
      "Fully responsive layout with TailwindCSS.",
      "Search and sort email inbox.",
    ],
  },
  {
    id: "11",
    title: "Vercel",
    slug: "vercel-clone",
    description:
      "A Vercel-inspired clone with features like project deployment and URL generation.",
    longDescription:
      "A clone of Vercel, allowing users to deploy their projects and generate live preview links.",
    challenge:
      "Recreating Vercel’s functionality for project deployment and live URL generation.",
    solution:
      "Utilized Next.js for rendering, optimized for performance and user experience.",
    technicalDetails: "Built using Next.js and TailwindCSS.",
    category: "Recent",
    technologies: ["Next.js", "TailwindCSS"],
    tags: ["Deployment", "Clone"],
    images: [
      "/images/projects/Vercel/img1.png",
      "/images/projects/Vercel/img2.png",
    ],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://vercel-r.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Vercel-2024",
    features: [
      "Deploy your project and generate live preview URLs.",
      "Fully responsive design optimized for mobile and desktop views.",
      "Efficient performance with Next.js.",
    ],
  },
  {
    id: "12",
    slug: "github-clone",
    title: "GitHub",
    description: "A clone of GitHub with repository creation functionality.",
    longDescription:
      "Recreating the GitHub interface, including the ability to create and manage repositories, view users, and more.",
    challenge: "Implementing GitHub-like features and user interactions.",
    solution:
      "Used React.js with Firebase for the back-end to manage repository data.",
    technicalDetails: "React.js, Firebase, TailwindCSS.",
    category: "Featured",
    technologies: ["React.js", "Firebase", "TailwindCSS"],
    images: [
      "/images/projects/Github/img3.png",
      "/images/projects/Github/img2.png",
      "/images/projects/Github/img1.png",
    ],
    tags: ["GitHub Clone", "Repository Management", "Web App"],
    year: 2024,
    complexity: "Advanced",
    demoUrl: "https://github-2024.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Github-2024",
    features: [
      "User Authentication",
      "Create/View Repositories",
      "Real-time Data Sync",
    ],
  },
  {
    id: "13",
    slug: "brainwave",
    title: "Brainwave",
    description:
      "A futuristic landing page showcasing sleek UI design and animations.",
    longDescription:
      "Brainwave is a visually stunning landing page that uses advanced animations and smooth UI transitions to present information.",
    challenge:
      "Implementing complex animations and a clean, futuristic design.",
    solution:
      "Utilized CSS animations, TailwindCSS, and advanced React hooks for interactive components.",
    technicalDetails: "React.js, TailwindCSS, CSS Animations.",
    category: "Landing Page",
    technologies: ["React.js", "TailwindCSS"],
    images: ["/images/projects/Brainwave/img1.png"],
    tags: ["Landing Page", "Futuristic", "UI/UX"],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://brainwave-r.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Brainwave-2024",
    features: ["Smooth Animations", "Responsive Design", "Interactive UI"],
  },
  {
    id: "14",
    title: "Klimate",
    slug: "klimate",
    description:
      "A fully responsive application to know the weather forecast along with way other details of every location.",
    longDescription:
      "Klimate is a fully responsive weather forecast application that provides real-time weather updates along with various other details about any location, including temperature, humidity, and forecast trends.",
    challenge:
      "Integrating real-time weather data and providing a responsive interface for various devices.",
    solution:
      "Used Next.js for fast rendering, integrated weather API for real-time data, and ensured full responsiveness with TailwindCSS.",
    technicalDetails:
      "Built using Next.js, TailwindCSS, and integrated weather API.",
    category: "Featured",
    technologies: ["Next.js", "TailwindCSS"],
    tags: ["Weather", "API", "Responsive"],
    images: [
      "/images/projects/Klimate/img1.png",
      "/images/projects/Klimate/img2.png",
    ],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://klimate-r.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Klimate-2024",
  },
  {
    id: "15",
    title: "ChatEasy",
    slug: "chateasy",
    description:
      "A fully responsive chat app to communicate as well add new friend.",
    longDescription:
      "ChatEasy is a real-time messaging application that allows users to chat with others, create new conversations, and add friends, with a responsive design.",
    challenge:
      "Implementing real-time messaging and ensuring scalability with dynamic user interfaces.",
    solution:
      "Utilized Firebase for backend services and Next.js for server-side rendering to improve performance.",
    technicalDetails:
      "Built with Next.js, React, and Firebase for backend and storage.",
    category: "Recent",
    technologies: ["Next.js", "React", "Firebase"],
    tags: ["Chat", "Real-Time", "Friendship"],
    images: ["/images/projects/ChatEasy/img1.png"],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://chateasy.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/ChatEasy-2024",
  },
  {
    id: "16",
    title: "Nike",
    slug: "nike",
    description:
      "A responsive Nike-themed project showcasing product listings and more.",
    longDescription:
      "A Nike-themed web project designed to showcase product listings, featuring a user-friendly interface and responsiveness.",
    challenge:
      "Creating a scalable, responsive layout similar to the official Nike website.",
    solution:
      "Leveraged Next.js for performance optimization and TailwindCSS for styling and responsiveness.",
    technicalDetails: "Built using Next.js, TailwindCSS.",
    category: "Landing Page",
    technologies: ["Next.js", "TailwindCSS"],
    tags: ["Nike", "E-commerce", "Responsive"],
    images: [
      "/images/projects/Nike/img1.png",
      "/images/projects/Nike/img2.png",
    ],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://nike-2024.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Nike-2024",
  },
  {
    id: "17",
    title: "Student Management System",
    slug: "stms",
    description: "A system for managing students, their data, and grades.",
    longDescription:
      "The Student Management System allows institutions to manage student data, track academic performance, and organize student records.",
    challenge:
      "Building a scalable system for student management with easy-to-use interfaces.",
    solution:
      "Used React.js and Next.js for front-end rendering and Firebase for backend data storage.",
    technicalDetails:
      "Built using React.js, Next.js, and Firebase for backend.",
    category: "Recent",
    technologies: ["React.js", "Next.js", "Firebase"],
    tags: ["Student Management", "System"],
    images: [
      "/images/projects/STMS/img2.png",
      "/images/projects/STMS/img3.png",
      "/images/projects/STMS/img1.png",
    ],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://stms-2024.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/Student-Management-System-2024",
  },
  {
    id: "18",
    title: "Multi Apps",
    slug: "multi-apps",
    description: "A platform offering multiple utility apps in one place.",
    longDescription:
      "Multi Apps is a platform that hosts several utility apps for users to access, such as calculators, weather apps, and to-do lists.",
    challenge:
      "Designing a platform to support multiple mini-applications in a cohesive interface.",
    solution:
      "Used Next.js for routing between different apps and TailwindCSS for unified styling.",
    technicalDetails: "Built with Next.js, TailwindCSS.",
    category: "Recent",
    technologies: ["Next.js", "TailwindCSS"],
    tags: ["Multi-Utility", "Apps", "Platform"],
    images: [
      "/images/projects/MultiApps/img2.png",
      "/images/projects/MultiApps/img1.png",
    ],
    year: 2024,
    complexity: "Intermediate",
    demoUrl: "https://multi-apps-2024.vercel.app/",
    repoUrl: "https://github.com/Razor-eng/MultiApps-2024",
  },
  // {
  //   id: "19",
  //   slug: "award-winning-website",
  //   title: "Award-Winning Website",
  //   description: "Build a visually captivating website inspired by Zentry, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling.",
  //   longDescription: `
  //     Build a visually captivating website inspired by **Zentry**, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling.
  //     Learn how to deliver a luxurious, modern feel, focusing on engaging UI/UX and smooth responsiveness, capturing the essence of what makes an Awwwards winner.
  //   `,
  //   challenge: "Creating engaging UI/UX with smooth transitions and responsive design.",
  //   solution: "Used GSAP for scroll-based animations, Tailwind CSS for responsive design, and integrated video storytelling elements.",
  //   technicalDetails: `
  //     The project uses **React.js** for the frontend, **GSAP** for animations, and **Tailwind CSS** for styling. The design features smooth scrolling animations,
  //     3D hover effects, and video transitions, offering a modern, luxurious feel.
  //   `,
  //   category: 'Landing Page',
  //   technologies: ['React.js', 'GSAP', 'Tailwind CSS'],
  //   images: [
  //     '/images/projects/Redefine/img1.png',
  //     "https://github.com/user-attachments/assets/ab600f24-f4d9-4cef-8f1e-3fd9194afb30",
  //   ],
  //   tags: ['animations', 'scroll-based', '3d hover effects', 'video transitions', 'responsive', 'luxurious'],
  //   year: 2025,
  //   complexity: 'Advanced',
  //   demoUrl: "https://redefine-iota.vercel.app",
  //   repoUrl: "https://github.com/razor-eng/Redefine",
  //   features: [
  //     "Scroll-Based Animations",
  //     "Clip Path Shaped Animations",
  //     "3D Hover Effects",
  //     "Video Transitions",
  //     "Smooth UI/UX",
  //     "Completely Responsive"
  //   ]
  // }
];
