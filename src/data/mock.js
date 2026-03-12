// Mock data for portfolio

export const profile = {
  name: "Nguyen Thanh Luan",
  role: "Full-Stack Developer",
  bio: "Third-year Software Engineering student focused on full-stack web development and modern technologies including React, Node.js, and Python.",
  avatar: "/avatar.png",
  email: "thanhluan200510a@gmail.com",
  github: "https://github.com/Santadura",
  linkedin: "#",
  resume: "/resume.pdf"
};

export const skills = {
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Python", "PHP", "FastAPI"],
  database: ["MySQL", "MongoDB", "FAISS"],
  aiml: ["LangChain", "Ollama", "RAG Systems", "Qwen2.5"],
  tools: ["Git", "XAMPP", "Streamlit", "Docker"]
};

export const projects = [
  {
    id: 1,
    name: "SmartDoc AI",
    tagline: "Intelligent Document Q&A System",
    description: "SmartDoc AI is an intelligent document question answering system built using Retrieval Augmented Generation (RAG). The system allows users to upload PDF documents and query them using natural language. The pipeline automatically extracts text, splits documents into semantic chunks, converts them into vector embeddings and stores them in a FAISS vector database for fast similarity search. When users ask questions, the system retrieves the most relevant document segments and sends them to the LLM to generate accurate context-aware responses.",
    tech: ["Python", "LangChain", "FAISS", "Ollama", "Qwen2.5", "Streamlit"],
    metrics: [
      { label: "Retrieval Accuracy", value: "85-90%" },
      { label: "Answer Relevance", value: "80-85%" },
      { label: "Languages", value: "50+" },
      { label: "Local Data Privacy", value: "100%" }
    ],
    image: "/smartdoc.png",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    name: "Badminton Store Management System",
    tagline: "Comprehensive Store Management Solution",
    description: "Developed a badminton equipment store management system with CRUD modules for employees and administrators. Implemented product management, sales revenue tracking, invoice processing, and warranty service management. Designed a role-based access control system allowing administrators to manage employee accounts and permissions. Used MySQL database (via PHPMyAdmin) for persistent data storage and management.",
    tech: ["Java", "MySQL", "XAMPP", "Swing", "JDBC"],
    features: [
      "Product inventory management with CRUD operations",
      "Sales revenue tracking and analytics",
      "Invoice generation and processing",
      "Warranty service management",
      "Role-based access control for admin and employees",
      "Employee account management"
    ],
    image: "/badminton.png",
    github: "#"
  },
  {
    id: 3,
    name: "Dolce Bakery",
    tagline: "E-Commerce Platform for Artisan Cakes",
    description: "Developed a full-stack bakery e-commerce website using a LAMP architecture. Implemented product browsing, search, shopping cart, checkout, and customer profile management. Built an admin dashboard supporting product CRUD, supplier management, order processing, and sales reporting. Designed a responsive user interface using modern HTML5, CSS3, and JavaScript (ES6+). Implemented role-based access control allowing administrators to assign permissions for staff members.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: [
      "Product catalog with advanced search and filtering",
      "Shopping cart and checkout system",
      "Customer profile and order history",
      "Admin dashboard with analytics",
      "Supplier and inventory management",
      "Order processing and status tracking",
      "Sales reporting and insights",
      "Role-based permission system"
    ],
    image: "/dolce.png",
    github: "#",
    demo: "#"
  }
];

export const experience = [
  {
    title: "Full-Stack Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    description: "Building AI-powered applications and scalable web platforms"
  }
];

export const about = {
  introduction: "I'm a passionate Full-Stack Developer with a strong focus on building intelligent, scalable web applications. My expertise spans across modern web technologies and AI-powered systems, particularly in Retrieval Augmented Generation (RAG) and document processing.",
  highlights: [
    "Specialized in AI-powered application development using LangChain and RAG systems",
    "Experienced in building full-stack web applications with React, Node.js, and Python",
    "Strong background in database design and management (MySQL, MongoDB, FAISS)",
    "Proven track record of delivering end-to-end solutions from concept to deployment"
  ]
};