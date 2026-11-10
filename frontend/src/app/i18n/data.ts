export const dataTranslations = {
  es: {
    experience: [
      {
        role: 'Especialista en Robótica',
        company: 'Alisys',
        period: 'Mayo 2026 - Actualidad',
        description: 'Desarrollo desde cero de navegación autónoma para UGVs, fusión de sensores y conectividad cloud, además de integración y pruebas de cuadrúpedos en entornos industriales.'
      },
      {
        role: 'Software Developer / AI Engineer',
        company: 'Syntonize',
        period: 'Julio 2025 - Mayo 2026',
        description: 'Diseño de soluciones de IA generativa para UNIR (Proeduca): personalización de ventas, auditoría de hasta 3.000 llamadas diarias y agentes conversacionales. Orquestación con LangGraph y despliegue de microservicios en Microsoft Azure.'
      },
      {
        role: 'Software Developer @ Digital Hub',
        company: 'Acciona',
        period: 'Enero 2023 - Julio 2025',
        description: 'Ingeniero de Software Full Stack especializado en **Robótica** e **Inteligencia Artificial Generativa**. Desarrollo de soluciones de robótica colaborativa y móvil, desde control de fuerza en cobots hasta navegación autónoma y teleoperación. Creación de sistemas de **IA Generativa**, agentes **RAG**, modelos predictivos y visión artificial, integrando tecnologías cloud y necesidades de negocio.'
      }
    ],
    teachingExperience: [
      {
        role: 'Profesor Asociado de Robótica Móvil',
        company: 'ICAI - Universidad Pontificia Comillas',
        period: 'Enero 2026 - Actualidad',
        description: 'Dirección de sesiones prácticas y laboratorios de navegación autónoma, localización y control de plataformas robóticas, y mentoría en software embarcado y arquitecturas de control.'
      },
      {
        role: 'Profesor Invitado / Executive Program',
        company: 'ISDI',
        period: 'Octubre 2026',
        description: 'Impartición puntual de una masterclass ejecutiva, en alianza con EY, sobre la adopción estratégica de Inteligencia Artificial, Robótica y Sistemas Autónomos.'
      }
    ],
    education: [
      {
        degree: 'Máster en Robótica y Automatización',
        institution: 'Universidad Carlos III de Madrid',
        year: '2023',
        details: 'Especialización en robótica médica y colaboración humano-robot.'
      },
      {
        degree: 'Grado en Ingeniería en Tecnologías Industriales',
        institution: 'Universidad de Málaga',
        year: '2021',
        details: 'Especialización en automatización y robótica móvil.'
      }
    ],
    courses: [
      { name: 'LangGraph - Develop LLM AI agents with LangGraph', year: '2024' },
      { name: 'LangChain - Develop LLM applications with LangChain', year: '2024' },
      { name: 'Introduction to Monte Carlo Methods', year: '2024' },
      { name: 'Responsive Web Design', year: '2023' },
      { name: 'Introduction to ROS (Robot Operating System)', year: '2022' }
    ]
  },
  en: {
    experience: [
      {
        role: 'Robotics Specialist',
        company: 'Alisys',
        period: 'May 2026 - Present',
        description: 'Building autonomous UGV navigation from scratch, integrating sensor fusion and cloud connectivity, and deploying and testing quadrupeds in industrial environments.'
      },
      {
        role: 'Software Developer / AI Engineer',
        company: 'Syntonize',
        period: 'July 2025 - May 2026',
        description: 'Designed Generative AI solutions for UNIR (Proeduca): sales personalization, auditing up to 3,000 calls per day, and conversational agents. Orchestrated workflows with LangGraph and deployed microservices on Microsoft Azure.'
      },
      {
        role: 'Software Developer @ Digital Hub',
        company: 'Acciona',
        period: 'January 2023 - July 2025',
        description: 'Full Stack Software Engineer specialized in **Robotics** and **Generative AI**. Developed collaborative and mobile robotics solutions, from force-controlled cobot applications to autonomous navigation and teleoperation. Built **Generative AI** systems, **RAG** agents, predictive models, and computer vision solutions, connecting cloud technologies with business needs.'
      }
    ],
    teachingExperience: [
      {
        role: 'Associate Professor of Mobile Robotics',
        company: 'ICAI - Universidad Pontificia Comillas',
        period: 'January 2026 - Present',
        description: 'Leading practical sessions and labs on autonomous navigation, localization, and robotic-platform control, while mentoring students in embedded software and control architectures.'
      },
      {
        role: 'Guest Lecturer / Executive Program',
        company: 'ISDI',
        period: 'October 2026',
        description: 'Delivered a one-off executive masterclass, in partnership with EY, on the strategic adoption of Artificial Intelligence, Robotics, and Autonomous Systems.'
      }
    ],
    education: [
      {
        degree: 'Master\'s in Robotics and Automation',
        institution: 'Universidad Carlos III de Madrid',
        year: '2023',
        details: 'Specialization in medical robotics and human-robot collaboration.'
      },
      {
        degree: 'B.S. in Industrial Technologies Engineering',
        institution: 'Universidad de Málaga',
        year: '2021',
        details: 'Specialization in automation and mobile robotics.'
      }
    ],
    courses: [
      { name: 'LangGraph - Develop LLM AI agents with LangGraph', year: '2024' },
      { name: 'LangChain - Develop LLM applications with LangChain', year: '2024' },
      { name: 'Introduction to Monte Carlo Methods', year: '2024' },
      { name: 'Responsive Web Design', year: '2023' },
      { name: 'Introduction to ROS (Robot Operating System)', year: '2022' }
    ]
  }
} as const;

// Skills data is language-agnostic (same in both languages)
export const skillsData = [
  'Python', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS',
  'ROS/ROS2', 'Mobile Robotics', 'SLAM', 'Navigation', 'Robot Manipulation', 'Sensor Fusion', 'LiDAR', 'GNSS RTK', 'Gazebo', 'OpenCV', 'PCL',
  'Generative AI', 'LLMs', 'RAG', 'Agents', 'LangChain', 'LangGraph', 'NLP', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Reinforcement Learning', 'Knowledge Graphs',
  'GCP', 'Azure', 'Docker', 'Terraform', 'Linux', 'FastAPI', 'Django', 'Livekit', 'Celery', 'NGINX', 'Git',
  'FullStack Dev', 'Web Design', 'Databases'
];
