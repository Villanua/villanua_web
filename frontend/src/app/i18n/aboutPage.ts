export const aboutPageTranslations = {
  es: {
    // Hero section
    greeting: "¡Hola a todos!",
    imName: "Soy Nacho Villanúa",
    intro1: "Soy ingeniero de software y especialista en robótica e IA, con casi cuatro años de experiencia desarrollando tecnología para entornos industriales.",
    intro2: "Actualmente diseño navegación autónoma para UGVs en Alisys. Antes desarrollé robots móviles y colaborativos en Acciona y soluciones de IA generativa para UNIR a través de Syntonize. También imparto robótica móvil en ICAI.",
    
    // Section headers
    professionalPath: "Experiencia profesional",
    teachingPath: "Experiencia docente",
    academicJourney: "Educación",
    technicalEcosystem: "Habilidades",
    certificationsTitle: "Certificaciones y Cursos",
    
    // Labels (unused as titles now)
    experienceLabel: "01 / Experiencia",
    educationLabel: "02 / Educación",
    skillsLabel: "03 / Habilidades",
    
    // Experience details
    alisys: {
      clickToExpand: "Ver más detalles",
      clickToCollapse: "Ver menos detalles",
      intro1: "Desarrollo de software de principio a fin para sistemas de navegación autónoma, integración de sensores y pruebas de campo en plataformas robóticas móviles para entornos críticos e industriales.",
      projectTitle: "Robótica y Sistemas Autónomos",
      projectList: [
        "**Navegación autónoma de UGV y gemelo digital:** desarrollo desde cero del software de navegación exterior, fusionando LiDAR 3D **Ouster**, GNSS RTK de doble antena y encoders de rueda para posicionamiento preciso. Creación de un gemelo digital de alta fidelidad en **Gazebo** para validar el sistema antes de su despliegue crítico 24/7 en una base militar.",
        "**Docking autónomo por visión:** desarrollo de un sistema de recarga de precisión con cámara de profundidad **Intel RealSense** y tres marcadores **AprilTag**.",
        "**Integración de carga útil en Spot y escaneo 3D:** integración de un LiDAR **Leica** con Spot CORE en un robot **Boston Dynamics Spot** para generar nubes de puntos 3D y mapas espaciales en obras de nueva construcción.",
        "**Pruebas en entornos extremos:** evaluación de un cuadrúpedo **V60** en un incendio simulado en túnel. Análisis de la estabilidad de localización, deriva térmica y degradación de sensores LiDAR/IMU bajo humo denso y altas temperaturas para valorar su uso en operaciones de búsqueda y rescate."
      ]
    },
    icai: {
      clickToExpand: "Ver más detalles",
      clickToCollapse: "Ver menos detalles",
      intro1: "Dirección de sesiones prácticas y laboratorios de robótica móvil para alumnos de grado, enfocados en el diseño e implementación de sistemas de **navegación autónoma**, **localización** y **control** de plataformas robóticas.",
      projectTitle: "Docencia y Mentoría",
      projectList: [
        "Mentoría a alumnos en el desarrollo de **software embarcado** y **arquitecturas de control**, utilizando herramientas estándar de la industria."
      ]
    },
    isdi: {
      clickToExpand: "Ver más detalles",
      clickToCollapse: "Ver menos detalles",
      intro1: "Impartición puntual, en octubre de 2026, de una masterclass ejecutiva para directivos y mandos intermedios en el Executive Program de **ISDI**, en alianza con **EY**.",
      projectTitle: "Tecnología y Estrategia",
      projectList: [
        "Adopción estratégica de **Inteligencia Artificial**, **Robótica** y **Sistemas Autónomos** en organizaciones."
      ]
    },
    syntonize: {
      clickToExpand: "Ver más detalles",
      clickToCollapse: "Ver menos detalles",
      intro1: "Como **Software Developer / AI Engineer**, desarrollo y diseño arquitecturas de soluciones de **IA Generativa** para **UNIR (Proeduca)**. El ecosistema se orquesta con **LangGraph** para gestionar flujos agénticos complejos y se despliega como microservicios en **Microsoft Azure**.",
      projectTitle: "Proyectos de IA Generativa y Automatización",
      projectList: [
        "**1. Perfilado predictivo y personalización de ventas:** motor con **LangGraph** que extrae experiencia, formación e intereses académicos de cada lead y genera en tiempo real intereses estimados, palancas de venta y mensajes personalizados. Desplegado en **Azure Web Apps**, con almacenamiento NoSQL e integración bidireccional con **Salesforce** mediante middleware y APIs REST.",
        "**2. Auditoría inteligente de llamadas:** pipeline **Speech-to-Text + LLMs** que analiza hasta **3.000 llamadas diarias**, extrae datos del alumno y evalúa a los asesores con rúbricas de calidad. **Arize Phoenix** monitoriza trazas; **MLflow** y **Metabase** gestionan versiones de prompts y métricas. Evaluadores **LLM-as-a-Judge** miden faithfulness, relevancia y cumplimiento de rúbricas frente a un baseline.",
        "**3. Agentes autónomos de voz y texto:** agentes de voz en tiempo real con **Deepgram**, **ElevenLabs** y **LiveKit (WebRTC)**, con gestión de interrupciones, tool-calling y transferencia a asesores en **Salesforce**. Agente de **WhatsApp** para continuidad asíncrona y agentes adversarios para red teaming y pruebas de casos límite. Despliegue en clústeres **Kubernetes de Azure**, con alertas y observabilidad en tiempo real mediante **Microsoft Teams** y **Telegram**.",
        "**4. Recomendación de carreras:** aplicación de **IA Generativa** que recomienda itinerarios formativos a partir de trayectorias profesionales."
      ]
    },
    acciona: {
      clickToExpand: "Ver más detalles",
      clickToCollapse: "Ver menos detalles",
      summary: "Ingeniero de Software Full Stack especializado en **Robótica** e **Inteligencia Artificial Generativa**. Liderazgo del ciclo completo de desarrollo de **sistemas autónomos** (**ROS**, **Spot**, **ROVs**) y arquitecturas **RAG** avanzadas (**Agentes**, **HITL**, **Grafos de Conocimiento**), integrando soluciones cloud robustas (**GCP**, **Docker**, **Celery**) directamente con las necesidades de negocio.",
      intro1: "Desarrollo de Software en el Digital Hub de Acciona, con foco en el diseño y creación de aplicaciones innovadoras que incorporan tecnologías de vanguardia en soluciones de negocio reales. Contribución tanto en desarrollo backend (rol principal) como en tareas de frontend en diversos proyectos.",
      intro2: "Participación en proyectos desde etapas iniciales: recopilación de requisitos de clientes, análisis de necesidades, diseño de arquitecturas, planificación de recursos y desarrollo del producto final. Seguimiento continuo para alinear el progreso con expectativas y mejora iterativa de soluciones.",
      
      // Robotics section
      roboticsSection: {
        title: "Robótica",
        manipulation: {
            title: "Manipulación y Robots Colaborativos",
            items: [
                "**Clasificación de residuos con IA (UR3):** programación de un cobot **UR3** para tareas de pick-and-place. Desarrollo de una tubería de visión artificial con nubes de puntos 3D y modelos de clasificación por IA para detectar, recoger y depositar residuos en sus contenedores.",
                "**Lijado de superficies con control de fuerza (UR10):** desarrollo de una aplicación de lijado de paredes con un cobot **UR10**, sensor fuerza-par y herramienta de lijado. Implementación de un control **PID** para regular dinámicamente fuerzas lineales y angulares y lograr un acabado uniforme.",
                "**Inspección submarina:** calibración y configuración de **ROVs** para la inspección y el mantenimiento de infraestructuras submarinas."
            ]
        },
        navigation: {
            title: "Navegación Autónoma y Robots Móviles",
            items: [
                "**Navegación exterior y teleoperación (Summit-XL):** diseño e implementación del sistema de localización y navegación autónoma para un UGV **Summit-XL**, con mapas georreferenciados y evitación local de obstáculos. Fusión de **LiDAR 2D**, **GPS-RTK** e **IMU** mediante filtros de Kalman y **AMCL**. Desarrollo de una interfaz web de teleoperación de baja latencia con **WebRTC** y **WebSockets**, generación de misiones autónomas y patrullas nocturnas con detección de anomalías.",
                "**Desinfección del campus (MiR):** despliegue de un robot **MiR** en el campus corporativo para desinfección automatizada. Mapeo de grandes espacios, optimización de rutas y definición semántica de zonas restringidas y preferentes."
            ]
        },
        interfaces: {
            title: "Plataformas de Servicio e Inspección",
            items: [
                "**Automatización en hostelería:** programación y despliegue de robots de servicio **Pudu KettyBot** y **BellaBot** en el restaurante del campus para entrega autónoma de comida e interacción con clientes.",
                "**Inspección industrial:** operación y despliegue de **Spot** de Boston Dynamics para demostraciones a clientes en grandes eventos e inspecciones en zonas corporativas de alto riesgo."
            ]
        }
      },

      // Generative AI section
      aiSection: {
        title: "Inteligencia Artificial y Data Science",
        generativeAi: {
          title: "IA Generativa y Agentes",
          items: [
            "**Ingesta documental multimodal:** desarrollo de una tubería para documentos PDF, Word, Excel, PowerPoint e imágenes. Uso de **OCR** y **YOLO** para transcripción multimodal, detección de tablas y extracción de elementos visuales; generación de resúmenes y embeddings semánticos, con orquestación asíncrona mediante microservicios **Celery**.",
            "**RAG agéntico con interacción humana:** arquitectura **RAG** basada en agentes con capacidades **HITL**. Los agentes formulan y ejecutan consultas **SQL**, reformulan preguntas complejas, desambiguan intenciones y citan las fuentes de datos, gestionando referencias solapadas o contradictorias.",
            "**Detección de inconsistencias con grafos de conocimiento:** algoritmo semántico para grandes colecciones documentales corporativas. Uso de **Knowledge Graphs** y relaciones jerárquicas para comparar documentos en varios niveles e identificar contradicciones y cláusulas solapadas en textos legales y técnicos.",
            "**Ajuste fino local de LLMs:** fine-tuning de modelos **DeepSeek** mediante **LoRA** y cuantización para optimizar rendimiento e inferencia en hardware limitado. Extracción de métricas de sistemas RAG y despliegue de soluciones en **Google Cloud Platform (GCP)**."
          ]
        },
        dataScience: {
          title: "Ciencia de Datos",
          items: [
            "**Optimización de licitaciones públicas (baja temeraria):** sistema predictivo para optimizar ofertas y pronosticar bajas temerarias. Combinación de simulaciones de **Monte Carlo**, **KNN** para encontrar licitaciones históricas similares, embeddings de **NLP** para analizar documentos y una red neuronal que predice el número exacto de competidores, superando la referencia interna de Acciona. Integración en una aplicación **Django** para ajustar parámetros y explorar escenarios.",
            "**Visión artificial para infraestructuras:** entrenamiento de una red neuronal convolucional (**CNN**) con **TensorFlow** y conjuntos de imágenes anotadas para detectar y clasificar grietas en carreteras y agilizar las inspecciones de infraestructuras."
          ]
        }
      },
      
    },

    
    // Education details
    master: {
      intro: "Obtuve mi Máster en Robótica y Automatización en la Universidad Carlos III de Madrid, donde avancé mis conocimientos en control inteligente, machine learning, visión por computador, robótica médica, humanoides y robótica móvil.",
      thesisTitle: "Tesis: SLAM y Segmentación",
      thesisDesc: "Mi Tesis de Máster, \"Simultaneous Localization and Mapping and Segmentation\", se centró en robótica móvil y comprensión espacial. Desarrollé un algoritmo SLAM capaz de generar mapas 2D y 3D utilizando técnicas de registro de nubes de puntos como ICP y NDT, integrados a través de pose graphs.",
      contributionsTitle: "Contribuciones Técnicas",
      contributionsItems: [
        "Algoritmo SLAM: generación de mapas 2D/3D",
        "Registro de nubes de puntos: ICP y NDT",
        "Pose graphs para optimización de trayectorias",
        "Pipeline de segmentación: puertas y habitaciones usando algoritmos watershed",
        "Fusión multi-método para detección robusta",
        "Generación de mapas topológicos desde datos geométricos"
      ]
    },
    bachelor: {
      intro1: "Obtuve mi Grado en Ingeniería en Tecnologías Industriales en la Universidad de Málaga. Este programa multidisciplinar proporcionó una comprensión amplia y sólida de los fundamentos de ingeniería, incluyendo mecánica, análisis estructural, sistemas eléctricos, termodinámica, dinámica de fluidos y teoría de control.",
      intro2: "Más allá de las asignaturas troncales, el grado enfatizó el pensamiento analítico y la resolución de problemas, equipándome con la habilidad de entender y modelar sistemas complejos y abordar desafíos desde una perspectiva sistémica.",
      specializationTitle: "Especialización",
      specializationDesc: "Me especialicé en el campo de la automatización y electrónica, donde estudié robótica industrial y colaborativa, visión por computador, electrónica digital y analógica, así como técnicas de machine learning y deep learning aplicadas a sistemas inteligentes.",
      thesisTitle: "Tesis: Robótica Quirúrgica CRANEEAL",
      thesisDesc: "Mi Tesis de Grado, \"Estrategia de colaboración humano-robot en cirugía endonasal\", fue parte del Plan Nacional de Investigación. Contribuyó a la publicación \"Collaborative Robotic Assistant Platform for Endonasal Surgery: Preliminary In-Vitro Trials\".",
      contributionsTitle: "Contribuciones Técnicas",
      contributionsItems: [
        "Generación de obstáculos virtuales con retroalimentación de fuerza",
        "Calibración de cámara y mapeo 3D-2D",
        "Máquina de estados basada en ontología para cambio de modo",
        "Arquitectura de software ROS e integración",
        "Interfaz web de monitorización en tiempo real"
      ]
    }
  },
  en: {
    // Hero section
    greeting: "Hello Everyone!",
    imName: "I'm Nacho Villanúa",
    intro1: "I'm a software engineer specializing in robotics and AI, with nearly four years of experience developing technology for industrial environments.",
    intro2: "I currently design autonomous navigation for UGVs at Alisys. Previously, I developed mobile and collaborative robots at Acciona and generative AI solutions for UNIR through Syntonize. I also teach mobile robotics at ICAI.",
    
    // Section headers
    professionalPath: "Professional Experience",
    teachingPath: "Teaching Experience",
    academicJourney: "Education",
    technicalEcosystem: "Skills",
    certificationsTitle: "Certifications & Courses",
    
    // Labels (unused as titles now)
    experienceLabel: "01 / Experience",
    educationLabel: "02 / Education",
    skillsLabel: "03 / Skills",
    
    // Experience details
    alisys: {
      clickToExpand: "See more details",
      clickToCollapse: "See less details",
      intro1: "End-to-end software development for autonomous navigation systems, sensor integration, and field testing on mobile robotic platforms for critical and industrial environments.",
      projectTitle: "Robotics & Autonomous Systems",
      projectList: [
        "**Autonomous UGV navigation & digital twin:** built the outdoor autonomous navigation stack from scratch, fusing 3D **Ouster LiDAR**, dual-antenna GNSS RTK, and wheel encoders for precise positioning. Created a high-fidelity **Gazebo** digital twin to validate the system before critical 24/7 deployment at a military base.",
        "**Vision-based autonomous docking:** developed a precision charging system using an **Intel RealSense** depth camera and three **AprilTag** markers.",
        "**Spot payload integration & 3D scanning:** integrated a **Leica LiDAR** payload with Spot CORE on a **Boston Dynamics Spot** robot to generate 3D point clouds and spatial maps at new construction sites.",
        "**Extreme-environment testing:** evaluated a **V60** quadruped in a simulated tunnel fire. Analyzed localization stability, thermal drift, and LiDAR/IMU sensor degradation in dense smoke and high temperatures to assess its viability for search-and-rescue operations."
      ]
    },
    icai: {
      clickToExpand: "See more details",
      clickToCollapse: "See less details",
      intro1: "Leading practical mobile robotics sessions and labs for undergraduate students, focused on the design and implementation of **autonomous navigation**, **localization**, and **control** systems for robotic platforms.",
      projectTitle: "Teaching & Mentoring",
      projectList: [
        "Mentoring students in the development of **embedded software** and **control architectures** using industry-standard tools."
      ]
    },
    isdi: {
      clickToExpand: "See more details",
      clickToCollapse: "See less details",
      intro1: "Delivered a one-off executive masterclass in October 2026 for executives and middle managers in the **ISDI** Executive Program, in partnership with **EY**.",
      projectTitle: "Technology & Strategy",
      projectList: [
        "Strategic adoption of **Artificial Intelligence**, **Robotics**, and **Autonomous Systems** across organizations."
      ]
    },
    syntonize: {
      clickToExpand: "See more details",
      clickToCollapse: "See less details",
      intro1: "As a **Software Developer / AI Engineer**, I design and architect **Generative AI** solutions for **UNIR (Proeduca)**. The application ecosystem uses **LangGraph** to orchestrate complex agentic workflows and is deployed as microservices on **Microsoft Azure**.",
      projectTitle: "Generative AI and Automation Projects",
      projectList: [
        "**1. Predictive profiling and real-time sales personalization:** a **LangGraph** engine extracts each lead's experience, education, and academic interests, then generates estimated interests, tailored sales strategies, and personalized messages in real time. Deployed on **Azure Web Apps**, with NoSQL profile storage and two-way **Salesforce** integration through middleware and REST APIs.",
        "**2. Intelligent call-auditing pipeline:** a **Speech-to-Text + LLM** pipeline processes up to **3,000 calls per day**, extracts student information, and evaluates sales representatives against quality rubrics. **Arize Phoenix** monitors LLM traces; **MLflow** and **Metabase** manage prompt versions and metrics. **LLM-as-a-Judge** evaluators measure faithfulness, relevance, and rubric adherence against a baseline.",
        "**3. Autonomous voice and text agents:** real-time voice agents integrate **Deepgram**, **ElevenLabs**, and **LiveKit (WebRTC)** for interruption handling, tool calling, and hand-off to human advisors in **Salesforce**. A **WhatsApp** agent provides asynchronous follow-up, while adversarial agents support red teaming and edge-case testing. Deployed on **Azure Kubernetes** clusters with real-time observability and alerts through **Microsoft Teams** and **Telegram**.",
        "**4. Career recommendation:** a **Generative AI** application recommends educational programs based on professional trajectories."
      ]
    },
    acciona: {
      clickToExpand: "See more details",
      clickToCollapse: "See less details",
      summary: "Full Stack Software Engineer specialized in **Robotics** and **Generative AI**. Leadership of the full development lifecycle of **autonomous systems** (**ROS**, **Spot**, **ROVs**) and advanced **RAG** architectures (**Agents**, **HITL**, **Knowledge Graphs**), integrating robust cloud solutions (**GCP**, **Docker**, **Celery**) directly with business needs.",
      intro1: "Software Development at Acciona's Digital Hub, focusing on the design and creation of innovative applications incorporating cutting-edge technologies into real-world business solutions. Contribution to both backend (main role) and frontend tasks across various projects.",
      intro2: "Involvement in projects from initial stages: requirement gathering, needs analysis, system architecture design, resource planning, and final product development. Continuous monitoring to align progress with expectations and iterative solution improvement.",

      // Robotics section
      roboticsSection: {
        title: "Robotics",
        manipulation: {
            title: "Manipulation & Collaborative Robots (Cobots)",
            items: [
                "**AI-Powered Waste Sorting (UR3):** programmed a **UR3** cobot for automated pick-and-place tasks. Developed a computer vision pipeline using 3D point-cloud processing and AI classification models to detect, grasp, and sort waste into designated recycling bins.",
                "**Force-Controlled Surface Sanding (UR10):** engineered a wall-sanding application using a **UR10** cobot, force-torque sensor, and sanding end-effector. Implemented a custom **PID** loop to dynamically regulate linear and angular forces for consistent surface abrasion.",
                "**Underwater Inspection:** calibrated and configured **ROVs** for subsea infrastructure inspection and maintenance."
            ]
        },
        navigation: {
            title: "Autonomous Navigation & Mobile Robots",
            items: [
                "**Outdoor Autonomy & Teleoperation (Summit-XL):** designed and implemented localization and navigation for a **Summit-XL UGV**, enabling outdoor autonomy with georeferenced maps and local obstacle avoidance. Fused **2D LiDAR**, **RTK-GPS**, and **IMU** with Kalman filters and **AMCL**. Built a low-latency web GUI using **WebRTC** and **WebSockets** for remote teleoperation and autonomous mission generation, including nighttime anomaly-detection patrols.",
                "**Campus-Wide Disinfection (MiR):** deployed a **MiR** across the Acciona corporate campus for automated workspace disinfection. Mapped large environments, optimized routes, and semantically defined restricted and preferred navigation zones."
            ]
        },
        interfaces: {
            title: "Service Platforms & Inspection",
            items: [
                "**Hospitality Automation:** programmed and deployed **Pudu Robotics KettyBot and BellaBot** service platforms in the campus restaurant for automated food delivery and autonomous customer interaction.",
                "**Industrial Inspection:** operated and deployed Boston Dynamics **Spot** for client demonstrations at major public events and inspection routines in high-risk corporate zones."
            ]
        }
      },

      // Generative AI section
      aiSection: {
        title: "Artificial Intelligence & Data Science Projects",
        generativeAi: {
          title: "Generative AI & Agents",
          items: [
            "**Multimodal Document Ingestion:** built an ingestion pipeline for PDFs, Word documents, Excel spreadsheets, PowerPoint presentations, and images. Used **OCR** and **YOLO** for multimodal transcription, table detection, and visual-element extraction. Generated summaries and semantic embeddings, orchestrated through asynchronous **Celery** microservices.",
            "**Agentic RAG with Human-in-the-Loop:** developed an agent-driven **RAG** architecture with **HITL** capabilities. Agents formulate and execute **SQL** queries, reformulate complex questions, disambiguate intent, transparently cite data sources, and handle overlapping or conflicting references.",
            "**Knowledge Graph Inconsistency Detection:** designed a semantic inconsistency-detection algorithm for large corporate document collections. Used **Knowledge Graphs** and hierarchical document relationships for multi-level comparisons to identify contradictions and overlapping clauses in legal and technical texts.",
            "**Local LLM Fine-Tuning:** fine-tuned **DeepSeek** models using **LoRA** and quantization to optimize performance and inference on constrained hardware. Extracted metrics from RAG systems and deployed solutions on **Google Cloud Platform (GCP)**."
          ]
        },
        dataScience: {
            title: "Data Science",
            items: [
                "**Public Tender Optimization (Abnormally Low Bids):** developed a predictive system to optimize bids and forecast abnormally low offers. Combined **Monte Carlo** simulations, **KNN** to identify similar historical tenders, **NLP** embeddings for semantic tender-document analysis, and a neural network that predicts the exact number of competitors with greater accuracy than Acciona's internal baseline. Integrated it into a **Django** web application for parameter adjustment and scenario exploration.",
                "**Computer Vision for Infrastructure:** trained a **TensorFlow** convolutional neural network (**CNN**) on annotated image datasets to detect and classify road-surface cracks, streamlining civil infrastructure inspections."
            ]
        }
      },
      
    },

    
    // Education details
    master: {
      intro: "I earned a Master's Degree in Robotics and Automation from Universidad Carlos III de Madrid, where I advanced my knowledge in intelligent control, machine learning, computer vision, medical robotics, humanoids, and mobile robotics.",
      thesisTitle: "Thesis: SLAM & Segmentation",
      thesisDesc: "My Master's Thesis, \"Simultaneous Localization and Mapping and Segmentation\", focused on mobile robotics and spatial understanding. I developed a SLAM algorithm capable of generating 2D and 3D maps using point cloud registration techniques such as ICP and NDT, integrated through pose graphs.",
      contributionsTitle: "Technical Contributions",
      contributionsItems: [
        "SLAM algorithm: 2D/3D map generation",
        "Point cloud registration: ICP & NDT",
        "Pose graphs for trajectory optimization",
        "Segmentation pipeline: doors & rooms using watershed algorithms",
        "Multi-method fusion for robust detection",
        "Topological map generation from geometric data"
      ]
    },
    bachelor: {
      intro1: "I earned my Bachelor's Degree in Industrial Technologies Engineering at the University of Málaga. This multidisciplinary program provided a broad and solid understanding of engineering fundamentals, including mechanics, structural analysis, electrical systems, thermodynamics, fluid dynamics, and control theory.",
      intro2: "Beyond the core subjects, the degree emphasized analytical thinking and problem-solving, equipping me with the ability to understand and model complex systems and to approach challenges from a systemic perspective.",
      specializationTitle: "Specialization",
      specializationDesc: "I specialized in the field of automation and electronics, where I studied industrial and collaborative robotics, computer vision, digital and analog electronics, as well as machine learning and deep learning techniques applied to intelligent systems.",
      thesisTitle: "Thesis: CRANEEAL Surgical Robotics",
      thesisDesc: "My Bachelor's Thesis, \"Human-Robot Collaboration Strategy in Endonasal Surgery\", was part of the National Research Plan. It contributed to the publication \"Collaborative Robotic Assistant Platform for Endonasal Surgery: Preliminary In-Vitro Trials\".",
      contributionsTitle: "Technical Contributions",
      contributionsItems: [
        "Virtual obstacle generation with force feedback",
        "Camera calibration & 3D-2D mapping",
        "State machine based on ontology for mode switching",
        "ROS software architecture & integration",
        "Real-time web monitoring interface"
      ]
    }
  }
} as const;
