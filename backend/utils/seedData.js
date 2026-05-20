const Portfolio = require('../models/Portfolio');

const portfolioData = {
  name: "Jana Krishnan D",
  title: "MERN Stack Developer",
  tagline: "Your Next MEAN Stack Developer",
  email: "janakrishnan2172005@gmail.com",
  phone: "7558163201",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  summary: "Computer Science graduate with hands-on experience as a MERN Stack Developer, skilled in building scalable full-stack web applications. Strong foundation in problem-solving, data structures, and modern web technologies. Seeking an entry-level software development role to apply technical expertise, contribute to innovative projects, and grow within a forward-thinking organization.",
  skills: [
    {
      category: "Programming Languages",
      icon: "⌨️",
      items: ["JavaScript (ES6+)", "Java"," Python "]
    },
    {
      category: "Frameworks & Platforms",
      icon: "🛠️",
      items: ["React.js", "Node.js", "Express.js"," Flask "]
    },
    {
      category: "Databases",
      icon: "🗄️",
      items: ["MySQL", "MongoDB"]
    },
    {
      category: "Web Technologies",
      icon: "🌐",
      items: ["HTML5", "CSS3", "REST APIs"]
    },
    {
      category: "Tools & IDEs",
      icon: "🔧",
      items: ["VS Code", "Git", "GitHub"]
    },
    {
      category: "Soft Skills",
      icon: "🤝",
      items: ["Teamwork & Collaboration", "Problem-Solving", "Management & Leadership", "Critical Thinking & Innovation"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science",
      institution: "R P Sarathy Institute of Technology",
      location: "Poosaripatti, Salem, India",
      period: "Jan 2022 – Apr 2026",
      score: "7.3/10",
      scoreType: "CGPA"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "CSI HR Sec School",
      location: "Salem, India",
      period: "Completed: 2022",
      score: "62%",
      scoreType: "Percentage"
    },
    {
      degree: "SSLC (10th Standard)",
      institution: "Glazebrook Matric HR Sec School",
      location: "Salem, India",
      period: "Completed: 2020",
      score: "58%",
      scoreType: "Percentage"
    }
  ],
  projects: [
    {
      title: "AI-Based Plant Disease Detection & Agri E-Commerce System",
      description: "An AI-powered web application to detect plant diseases using deep learning, integrated with an agricultural e-commerce platform.",
      bullets: [
        "Developed an AI-powered web application to detect plant diseases using YOLOv8 deep learning model",
        "Built a Flask-based backend to handle image upload, prediction, and result display",
        "Integrated an Agri E-Commerce module for farmers to browse and purchase agricultural products",
        "Implemented real-time disease detection with confidence score visualization",
        "Managed project deployment and version control using Git and GitHub"
      ],
      techStack: ["YOLOv8", "Flask", "Python", "React.js", "MongoDB"],
      period: "Dec 2025 – Apr 2026",
      featured: true
    },
    {
      title: "Transport Management System",
      description: "A comprehensive portal for managing student and staff transportation within a college campus.",
      bullets: [
        "Developed a comprehensive portal designed for managing student and staff transportation within a college campus",
        "Built using the MERN stack with full CRUD operations",
        "Modules include vehicle management, route scheduling, student/staff allocation, fee management and tracking"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "MySQL"],
      period: "Aug 2025 – Oct 2025",
      featured: true
    },
    {
      title: "Student Database Management",
      description: "A student database system enabling fast storage, retrieval, and management of academic information.",
      bullets: [
        "Implemented a student database system enabling fast storage, retrieval, and management of academic information"
      ],
      techStack: ["MySQL", "Node.js", "Express.js"],
      period: "Jun 2025 – Jul 2025",
      featured: false
    }
  ],
  experience: [
    {
      role: "MERN Stack Developer Intern",
      company: "Trugo Technologies",
      period: "2024",
      bullets: [
        "Developed web applications using MongoDB, Express.js, React.js, and Node.js as part of the development team",
        "Gained hands-on experience in full-stack development processes, API integration, and collaborative coding",
        "Contributed to UI/UX improvements, backend logic, and code reviews in a professional environment"
      ]
    },
    {
      role: "Java and Database Internship",
      company: "Aalan Tech Soft",
      period: "2024",
      bullets: [
        "Gained hands-on experience with Java programming and database management",
        "Worked on practical applications using SQL and Java"
      ]
    }
  ],
  certifications: [
    { name: "Java Programming", issuer: "Udemy" },
    { name: "Full Stack Development Course", issuer: "Novitech" },
    { name: "SQL Certification", issuer: "Infosys" }
  ],
  languages: ["Tamil", "English"]
};

const seedData = async () => {
  try {
    const existing = await Portfolio.findOne();
    if (!existing) {
      await Portfolio.create(portfolioData);
      console.log('✅ Portfolio data seeded successfully');
    } else {
      console.log('ℹ️  Portfolio data already exists, skipping seed');
    }
  } catch (err) {
    console.error('❌ Seed error:', err.message);
  }
};

module.exports = seedData;
module.exports.portfolioData = portfolioData;
