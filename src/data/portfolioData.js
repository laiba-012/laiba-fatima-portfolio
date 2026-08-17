export const personalData = {
  name: "LAIBA FATIMA",
  title: "Full MERN Stack Developer",
  subtitle: "Software & Web Developer | Unreal Engine 3D Developer",
  location: "Haripur, Pakistan",
  phone: "+92 321-6272140",
  email: "laibafatima0116@gmail.com",
  linkedin: "https://linkedin.com/in/laiba-fatima7760b1325",
  github: "https://github.com/laiba-012",
  status: "Available for Full-Time / Remote / On-Site Roles (2026 BS CS Grad)",
  bio: "Passionate Full MERN Stack Developer and Software Engineer with a solid foundation in Computer Science from the University of Haripur. Skilled in building full-stack web applications with React, Node.js, Express, and MongoDB, alongside hands-on industry internship experience at Giga Developers Pvt. Ltd. Experienced in C++ and Unreal Engine for 3D mission-based game development, as well as IoT and AI cloud systems.",
  
  recruiterSummary: {
    tagline: "High-Performing MERN Stack Developer Ready for Impact",
    highlights: [
      "Full MERN Stack Expertise (MongoDB, Express, React, Node.js)",
      "Hands-on Industry Internship Experience at Giga Developers Pvt. Ltd. (Feb - Aug 2025)",
      "Final Year Project: 3D Mission-Based Game built using Unreal Engine & C++",
      "Solid Computer Science Fundamentals (BS CS 2022-2026 @ University of Haripur)",
      "Versatile tech background including Java, Python, SQL, REST APIs & IoT systems",
      "Clean, maintainable code with strong UI/UX aesthetic design"
    ],
    quickStats: [
      { label: "MERN Stack Projects", value: "5+" },
      { label: "Internship Experience", value: "6 Mos" },
      { label: "Core Technologies", value: "10+" },
      { label: "Degree Graduation", value: "2026" }
    ]
  }
};

export const skillsData = [
  {
    category: "MERN Stack",
    icon: "Layers",
    skills: [
      { name: "React.js", level: 92, badge: "Frontend Framework" },
      { name: "Node.js", level: 88, badge: "Backend Runtime" },
      { name: "Express.js", level: 86, badge: "RESTful APIs" },
      { name: "MongoDB", level: 85, badge: "NoSQL Database" }
    ]
  },
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", level: 95, badge: "Web Core" },
      { name: "Java", level: 85, badge: "OOP & Enterprise" },
      { name: "Python", level: 82, badge: "AI & Scripting" },
      { name: "C++", level: 80, badge: "Unreal Engine Logic" },
      { name: "SQL", level: 85, badge: "Relational DBs" }
    ]
  },
  {
    category: "Web & Styling",
    icon: "Palette",
    skills: [
      { name: "HTML5 & CSS3", level: 95, badge: "Responsive Web" },
      { name: "Tailwind CSS", level: 90, badge: "Modern Utility CSS" },
      { name: "Three.js / WebGL", level: 78, badge: "3D Web Visuals" },
      { name: "REST APIs", level: 88, badge: "API Integration" }
    ]
  },
  {
    category: "Game & 3D Tech",
    icon: "Gamepad2",
    skills: [
      { name: "Unreal Engine", level: 85, badge: "FYP Game Engine" },
      { name: "C++ Game Logic", level: 82, badge: "Unreal Scripting" },
      { name: "Unity", level: 75, badge: "3D Mechanics" }
    ]
  },
  {
    category: "Tools & Ecosystem",
    icon: "Wrench",
    skills: [
      { name: "VS Code", level: 95, badge: "IDE" },
      { name: "Git & GitHub", level: 90, badge: "Version Control" },
      { name: "Postman", level: 88, badge: "API Testing" },
      { name: "WordPress", level: 82, badge: "CMS & E-Commerce" }
    ]
  }
];

export const projectsData = [
  {
    id: "unreal-3d-game",
    title: "3D Mission-Based Game (Final Year Project)",
    category: "3D & Game Dev",
    tech: ["Unreal Engine", "C++", "3D Graphics", "Game Mechanics"],
    summary: "Immersive 3D mission-based game featuring state machine AI behaviors, mission checkpoints, dynamic 3D lighting, and player movement systems.",
    description: "Built as a capstone Final Year Project using Unreal Engine and C++. Integrates custom player movement mechanics, enemy AI patrol & combat states, interactive mission triggers, audio spatialization, and optimized rendering shaders.",
    featured: true,
    accentColor: "from-blue-600 to-indigo-600",
    metrics: "High Frame-Rate 3D Physics Engine"
  },
  {
    id: "mern-ecommerce",
    title: "Full-Stack MERN E-Commerce Store",
    category: "MERN Stack",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    summary: "Full-fledged MERN application with product listings, dynamic shopping cart, RESTful API backend, and database schema management.",
    description: "Designed and engineered an end-to-end e-commerce solution. Features JWT authentication, MongoDB collection indexing, Express routing middleware, and a responsive React UI state architecture.",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    metrics: "Complete MERN CRUD & Cart System"
  },
  {
    id: "marketing-website",
    title: "Responsive Corporate Marketing Website",
    category: "Web Development",
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    summary: "A high-performance responsive marketing website focusing on modern aesthetic navigation, accessibility, and speed.",
    description: "Built during internship at Giga Developers Pvt. Ltd. focused on converting Figma UI/UX designs into pixel-perfect code with clean animations and fast DOM loading times.",
    featured: true,
    accentColor: "from-purple-500 to-pink-600",
    metrics: "100/100 Lighthouse Speed Score"
  },
  {
    id: "iot-fall-detection",
    title: "Fall Detection & Alert System (IoT)",
    category: "IoT & Systems",
    tech: ["IoT Sensors", "Python", "Microcontrollers", "Cloud Alert API"],
    summary: "Hardware-software IoT solution detecting sudden physical falls and triggering instant emergency notifications.",
    description: "Utilizes accelerometer sensor data processing algorithms to detect abnormal velocity shifts, automatically triggering real-time cloud alert notifications to emergency contacts.",
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
    metrics: "Real-time Emergency Alert Signal"
  },
  {
    id: "sign-language-translator",
    title: "Sign Language Translator (Cloud Computing)",
    category: "AI & Cloud",
    tech: ["Cloud Computing", "Python", "AI/ML", "REST API"],
    summary: "Cloud-powered sign language translator converting hand gesture inputs into textual and verbal translations.",
    description: "Leverages cloud computing infrastructure and machine learning image classification models to deliver low-latency sign language translation for inclusive communication.",
    featured: false,
    accentColor: "from-cyan-500 to-blue-600",
    metrics: "Cloud Serverless Pipeline"
  },
  {
    id: "ai-python-projects",
    title: "Artificial Intelligence & Data Processing Suite",
    category: "AI & Cloud",
    tech: ["Python", "Machine Learning", "Data Processing", "NumPy"],
    summary: "Suite of AI-driven Python algorithms implementing ML classification, predictive analysis, and data transformation routines.",
    description: "Developed AI scripts showcasing data preprocessing, model evaluation, feature engineering, and statistical analysis for automated insight generation.",
    featured: false,
    accentColor: "from-emerald-600 to-green-700",
    metrics: "Intelligent Data Automation"
  },
  {
    id: "task-master-app",
    title: "To-Do & Task Management Application",
    category: "MERN Stack",
    tech: ["JavaScript", "React.js", "CSS3", "LocalStorage"],
    summary: "Interactive daily task organization tool allowing users to create, categorize, filter, and track work progress.",
    description: "Built with clean component state architecture, tag filters, task completion animations, and persistent local storage synchronization.",
    featured: false,
    accentColor: "from-violet-500 to-purple-600",
    metrics: "Smooth Productivity UI"
  },
  {
    id: "wordpress-blog-store",
    title: "WordPress Social Blog & E-Commerce Platform",
    category: "Web Development",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS"],
    summary: "Custom WordPress portal featuring blog publishing, user discussions, and complete WooCommerce store setup.",
    description: "Customized themes, configured payment/checkout flows, managed product listings, and optimized WordPress speed performance.",
    featured: false,
    accentColor: "from-sky-500 to-indigo-500",
    metrics: "Live Content & Store Setup"
  }
];

export const experienceData = [
  {
    role: "Web Development Intern",
    company: "Giga Developers Pvt. Ltd.",
    location: "Haripur, Pakistan",
    period: "Feb 2025 – Aug 2025",
    type: "Internship",
    description: "Served as a core front-end and web development intern creating modern, responsive web experiences and optimizing web performance.",
    bulletPoints: [
      "Developed responsive web pages using HTML, CSS, JavaScript, and front-end best practices.",
      "Converted UI/UX design specifications into clean, functional, pixel-perfect code.",
      "Improved overall website loading performance and optimized Core Web Vitals.",
      "Ensured thorough cross-browser and cross-device compatibility across desktop and mobile.",
      "Identified and fixed complex front-end technical bugs and layout glitches.",
      "Collaborated closely with backend developers and project leads on live client projects."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelors in Computer Science (BS CS)",
    institution: "University of Haripur",
    period: "2022 – 2026",
    status: "Graduating Final Semester",
    details: "Specialized in Full-Stack Web Development, Software Engineering, Object-Oriented Programming (OOP), Data Structures & Algorithms, and 3D Game Development in Unreal Engine (FYP)."
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Punjab Group of Colleges",
    period: "2020 – 2022",
    status: "Completed",
    details: "Focused on Advanced Mathematics, Physics, and Analytical Logic."
  },
  {
    degree: "Matriculation",
    institution: "Allied School Lahore",
    period: "2017 – 2019",
    status: "Completed",
    details: "Science major with foundational computer science coursework."
  }
];
