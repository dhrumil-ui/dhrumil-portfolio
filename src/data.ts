// This file contains all the data for your portfolio
// Replace the placeholder values with your actual information

export const personalInfo = {
  name: "Dhrumil Pipaliya",
  title: "Masters Student",
  specialization: "Computer Science",
  summary: "Dedicated Masters student with a passion for technology and innovation. Experienced in full-stack development and machine learning, seeking opportunities in software engineering.",
  location: "Jersey city, USA",
  email: "dp66107n@pace.edu",
  phone: "+1 201 920 1944",
  photo: "/dhrumil-pfp.jpg", // Replace with your actual photo
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dhrumil-pipaliya/",
    icon: "Linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/dhrumil-ui",
    icon: "Github"
  },
];

export const education = [
  {
    degree: "MS in Computer Science",
    institution: "Pace University",
    location: "New York , USA",
    duration: "2024 - 2026",
    description: "Focusing on Artificial Intelligence and Machine Learning. Maintaining a 3.7 GPA.",
    logo: "https://tse3.mm.bing.net/th?id=OIP.39Ac7u3QBBTwgz-j5D9YIQHaHa&pid=Api&P=0&h=180https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    degree: "BS  in Computer Engineering",
    institution: "KJSIT",
    location: "Mumbai, India",
    duration: "2020 - 2024",
    description: "Graduated with honors. Specialized in Computer Networks and Security.",
    logo: "https://www.careerindia.com/college-logo/128x128/29/Logo_1501486207.png"
  }
];

export const experience = [
  {
    position: "Full Stack Developer",
    company: "Marquee Solutions",
    location: "Pune, India",
    duration: "May 2024 - August 2024",
    description: "•	Contributed as a junior developer on OCI C driver for PostgreSQL, achieving improved Oracle compatibility through reverse engineering. Optimized & enhanced ODBC C driver for PostgreSQL databases with Oracle compatibility, resulting in performance gain in query executions. • Resolved 20+ critical issues in the Python driver for Apache AGE project as an open-source contributor, enhancing its stability and reliability. Initiated Oracle OCI driver development in C for PostgreSQL databases from scratch, achieving compatibility with Oracle and scalability, and providing a framework for subsequent phases.",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGxaeZkCgRDDQ/company-logo_200_200/company-logo_200_200/0/1735884057691/marqueesolution_logo?e=1752710400&v=beta&t=w9Qi0_NIv-9pyJhLsW1vMy8SlQ3DzLsbO4bjPvZgbOM"
  },
  {
    position: "Web Development Intern",
    company: "GoldenmaceITsolutions",
    location: "Navsari, India",
    duration: "June 2023 - August 2023",
    description: "Developed and optimized RESTful APIs using Node.js and Express. Implemented new features in React frontend applications. Collaborated with senior engineers on database optimization.",
    logo: "https://tse4.mm.bing.net/th?id=OIP.8QYKsuZhe-AX_eOVZqR3wQHaG8&pid=Api&P=0&h=180"
  },
  {
    position: "Software Engineering  Intern",
    company: "InnoQuad",
    location: "Mumbai, India",
    duration: " April 2022 - July 2022",
    description: "Contributed to the development of full-stack web applications using React, Node.js, and MongoDB in an agile team environment. Designed and implemented dynamic UI components, integrated RESTful APIs, and optimized backend logic for performance and scalability. Participated in code reviews and sprint planning, actively improving code quality and team collaboration. Enhanced application responsiveness by optimizing database queries and introduced automated testing with Jest to reduce regression bugs. Gained hands-on experience with Git workflows, Docker, and deploying applications on cloud platforms like AWS.",
    logo: "https://tse2.mm.bing.net/th?id=OIP.Ax08cKYh35msvnl6MaU7zwHaBm&pid=Api&P=0&h=180"
  }
];

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "C++", level: 85 },
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 100 },
      { name: "Express.js", level: 85 },
    ]
  },
  {
    category: "Data Science & ML",
    items: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 90 },
      { name: "Data Analysis", level: 95 },
      { name: "Statistical Modeling", level: 95 },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 90 },
      { name: "AWS", level: 85 },
      { name: "Database Design", level: 95 },
    ]
  }
];

export const projects = [
  {
    title: "SQL Injection Detection using Reinforcement Learning",
    image: "https://www.thesslstore.com/blog/wp-content/uploads/2020/04/sql-injection-attack.jpg",
    description: "•	Developed a reinforcement learning model using Q-learning and a hybrid CNN-SVM architecture to detect SQL injection attacks, enhancing real-time threat detection and system security. 	Designed and conducted experiments using benchmark datasets to evaluate the performance of the RL-based approach, validating the model's accuracy and resilience in detecting SQL injection attacks.Published my research paper in ANVESAK journal.",
    technologies: ["Python", "TensorFlow", "Flask", "RL"],
    github: "https://github.com/dhrumil-ui/sqli_detection_RL",
    demo: null
  },
  {
    title: "Break-Bite app",
    image: "https://miro.medium.com/max/1984/0*7fJU4VtlK5HoQvzy.png",
    description: "•	Engineered a mobile-first application utilizing the Flutter framework to develop a cross-platform canteen ordering system, leveraging Dart language features for UI rendering and state management.•	Designed a RESTful API to handle asynchronous communication between the mobile application and the backend, facilitating data exchange for menu display, order placement, and real-time updates and integrated Razorpay API.",
    technologies: ["React", "Node.js", "DART", "Restfull API", "Flutter"],
    github: "https://github.com/dhrumil-ui/Break-Bite",
    demo: null
  },
  {
    title: "Mediaid",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A comprehensive healthcare application that uses machine learning and chatbot technology to provide personalized medical assistance and information to users.•	Built a responsive AI healthcare assistant web app using TypeScript, React, and Tailwind CSS, enabling users to input symptoms and receive specialist recommendations with ~85% accuracy, increasing diagnostic guidance efficiency by 60%.•	Integrated AI-based symptom classification using NLP techniques to interpret user inputs and match them to relevant medical specialties, reducing false matches by 23% through iterative model refinement and real-world test cases.•	Implemented secure user authentication, structured frontend architecture with TypeScript typings, and deployed the app via Netlify (frontend) and Render (backend), achieving 99.8% uptime .",
    technologies: ["ML", "chatbot", "typescript", "React Native","Node.js"],
    github: "https://github.com/dhrumil-ui/Ayurmedai",
    demo: null
  }
];

export const achievements = [
  {
    title: "Research Publication",
    description: "Co-authored a paper on SQL Injection Detection using Reinforcement Learning and published it in ANVESAK journal."
  }
];