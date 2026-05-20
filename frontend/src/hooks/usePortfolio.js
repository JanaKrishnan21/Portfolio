import { useState, useEffect } from 'react';
import axios from 'axios';

// Static fallback data (works without backend)
const STATIC_DATA = {
  name: "Jana Krishnan D",
  title: "MERN Stack Developer",
  tagline: "Your Next MEAN Stack Developer",
  email: "janakrishnan2172005@gmail.com",
  phone: "7558163201",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  summary: "Computer Science graduate with hands-on experience as a MERN Stack Developer, skilled in building scalable full-stack web applications. Strong foundation in problem-solving, data structures, and modern web technologies. Seeking an entry-level software development role to apply technical expertise, contribute to innovative projects, and grow within a forward-thinking organization.",
  skills: [
    { category: "Programming Languages", icon: "⌨️", items: ["JavaScript (ES6+)", "Java"] },
    { category: "Frameworks & Platforms", icon: "🛠️", items: ["React.js", "Node.js", "Express.js"] },
    { category: "Databases", icon: "🗄️", items: ["MySQL", "MongoDB"] },
    { category: "Web Technologies", icon: "🌐", items: ["HTML5", "CSS3", "REST APIs"] },
    { category: "Tools & IDEs", icon: "🔧", items: ["VS Code", "Git", "GitHub"] },
    { category: "Soft Skills", icon: "🤝", items: ["Problem-Solving", "Teamwork", "Leadership", "Critical Thinking"] }
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
      title: "AI-Based Plant Disease Detection & Agri E-Commerce",
      description: "AI-powered web app to detect plant diseases using YOLOv8 deep learning, integrated with an agricultural e-commerce platform for farmers.",
      bullets: [
        "Built AI plant disease detection with YOLOv8 deep learning model",
        "Flask backend for image upload, prediction, and result display",
        "Integrated Agri E-Commerce module for farmers",
        "Real-time disease detection with confidence score visualization",
        "Deployed with Git and GitHub version control"
      ],
      techStack: ["YOLOv8", "Flask", "Python", "React.js", "MongoDB"],
      period: "Dec 2025 – Apr 2026",
      featured: true
    },
    {
      title: "Transport Management System",
      description: "Comprehensive campus transportation portal with full CRUD operations for vehicle management, routes, and fee tracking.",
      bullets: [
        "Full CRUD operations for vehicle and route management",
        "Student/staff allocation and fee tracking modules",
        "Built with MERN stack for scalability"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "MySQL"],
      period: "Aug 2025 – Oct 2025",
      featured: true
    },
    {
      title: "Student Database Management",
      description: "Student database system enabling fast storage, retrieval, and management of academic information.",
      bullets: ["Fast storage, retrieval, and management of academic records"],
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
        "Developed web applications using MongoDB, Express.js, React.js, and Node.js",
        "Gained hands-on experience in API integration and collaborative coding",
        "Contributed to UI/UX improvements, backend logic, and code reviews"
      ]
    },
    {
      role: "Java and Database Internship",
      company: "Aalan Tech Soft",
      period: "2024",
      bullets: [
        "Gained hands-on experience with Java programming and SQL database management",
        "Worked on practical applications using Java and relational databases"
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

export const usePortfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/portfolio', { timeout: 3000 });
        if (res.data.success) {
          setData(res.data.data);
          setSource('api');
        } else {
          setData(STATIC_DATA);
          setSource('static');
        }
      } catch {
        setData(STATIC_DATA);
        setSource('static');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, source };
};
