export const dataTranslations = {
  es: {
    experience: [
      {
        role: 'Especialista en Robótica',
        company: 'Alisys',
        period: 'Mayo 2026 - Actualidad',
        description: 'Desarrollo de software de navegación autónoma, integración de sensores y pruebas de campo para robots móviles (UGVs y cuadrúpedos) en entornos críticos e industriales.'
      },
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
      },
      {
        role: 'Software Developer',
        company: 'Syntonize',
        period: 'Julio 2025 - Abril 2026',
        description: 'Consultoría para la UNIR (Proeduca) en aplicaciones basadas en IA generativa, incluyendo NLP y Marketing Predictivo.'
      },
      {
        role: 'Software Developer @ Digital Hub',
        company: 'Acciona',
        period: 'Enero 2023 - Julio 2025',
        description: 'Ingeniero de Software Full Stack especializado en **Robótica** e **Inteligencia Artificial Generativa**. Liderazgo del ciclo completo de desarrollo de **sistemas autónomos** (**ROS**, **Spot**, **ROVs**) y arquitecturas **RAG** avanzadas (**Agentes**, **HITL**, **Grafos de Conocimiento**), integrando soluciones cloud robustas (**GCP**, **Docker**, **Celery**) directamente con las necesidades de negocio.'
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
        description: 'Developing autonomous navigation software, integrating sensors, and conducting field tests for mobile robotic platforms (UGVs and quadrupeds) in critical and industrial environments.'
      },
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
      },
      {
        role: 'Software Developer',
        company: 'Syntonize',
        period: 'July 2025 - April 2026',
        description: 'Consulting for UNIR (Proeduca) on generative AI applications, including NLP and Predictive Marketing.'
      },
      {
        role: 'Software Developer @ Digital Hub',
        company: 'Acciona',
        period: 'January 2023 - July 2025',
        description: 'Full Stack Software Engineer specialized in **Robotics** and **Generative AI**. Leadership of the full development lifecycle of **autonomous systems** (**ROS**, **Spot**, **ROVs**) and advanced **RAG** architectures (**Agents**, **HITL**, **Knowledge Graphs**), integrating robust cloud solutions (**GCP**, **Docker**, **Celery**) directly with business needs.'
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
