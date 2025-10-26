// Tema oscuro/claro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar preferencia del usuario
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Alternar tema
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Idioma
const languageToggle = document.getElementById('languageToggle');
const languageText = document.querySelector('.language-text');

// Verificar preferencia de idioma
const currentLanguage = localStorage.getItem('language') || 'es';
document.documentElement.lang = currentLanguage;

// Actualizar texto del botón de idioma
if (currentLanguage === 'en') {
    languageText.textContent = 'EN';
    languageText.setAttribute('data-i18n', 'language.en');
} else {
    languageText.textContent = 'ES';
    languageText.setAttribute('data-i18n', 'language.es');
}

// Traducciones
const translations = {
    es: {
        // Navegación
        "logo": "Portafolio",
        "nav.about": "Sobre mí",
        "nav.study": "Estudios",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.skills": "Habilidades",
        "nav.contact": "Contacto",

        // Idioma
        "language.es": "ES",
        "language.en": "EN",

        // Skip link
        "skip.link": "Saltar al contenido principal",

        // Perfil
        "profile.title": "Desarrollador Backend",
        "cv.download": "Descargar CV",

        // Secciones
        "about.title": "Sobre mí",
        "study.title": "Estudios",
        "experience.title": "Experiencia",
        "projects.title": "Proyectos",
        "skills.title": "Habilidades Técnicas",
        "contact.title": "Contacto",

        // Sobre mí
        "about.paragraph1": "Hola, soy Christián Vazquez, un Ingeniero en Ciencias Informáticas apasionado por el desarrollo de software y la creación de soluciones web innovadoras. Mi formación en la UCI me proporcionó una base sólida en ingeniería de software, la cual he consolidado a través de proyectos personales donde aplico mi conocimiento en la práctica.",
        "about.paragraph2": "Mi motivación es transformar ideas en código funcional, limpio y eficiente, siguiendo las mejores prácticas y estándares de la industria. Aunque mi trayectoria profesional inicial ha estado fuera del ámbito del desarrollo, he dedicado los últimos dos años a mantener y potenciar mis habilidades de forma autodidacta, construyendo aplicaciones y explorando tecnologías modernas de front-end y back-end.",
        "about.paragraph3": "Mi experiencia se centra principalmente en el desarrollo backend con Java y PHP, donde he trabajado con frameworks como Spring Boot y Symfony. También tengo capacidad para crear interfaces frontend básicas y me adapto bien a entornos full-stack cuando el proyecto lo requiere, siempre con la humildad de reconocer que el aprendizaje en este campo es continuo.",
        "about.paragraph4": "Actualmente, curso una Maestría en Informática Aplicada para profundizar en mis conocimientos y especializarme, demostrando mi firme compromiso con el crecimiento continuo en este campo.",
        "about.paragraph5": "Cuando no estoy programando, disfruto de la lectura, el tiempo en familia y aprender sobre nuevas tecnologías. Creo firmemente en el aprendizaje continuo y en mantenerme actualizado con las últimas tendencias en desarrollo web.",

        // Estudios
        "study.masters.date": "2025 - Presente",
        "study.masters.title": "Maestría en Informática Aplicada",
        "study.masters.university": "Universidad José Martí (UNISS)",
        "study.masters.description": "Complementando mi formación de grado con una especialización que busca cerrar la brecha entre la teoría avanzada en informática y su aplicación práctica en entornos empresariales y de investigación. Me estoy enfocando en adquirir competencias de alto nivel para el diseño e implementación de sistemas complejos que respondan a desafíos tecnológicos actuales.",

        "study.degree.date": "2017 - 2022",
        "study.degree.title": "Ingeniería en Ciencias Informáticas",
        "study.degree.university": "Universidad de las Ciencias Informáticas (UCI)",
        "study.degree.description": "Graduado de un programa de ingeniería con un enfoque práctico en el desarrollo de software. La formación en la UCI se caracterizó por un modelo de aprendizaje basado en proyectos reales, donde consolidé mis conocimientos en fundamentos de la computación, ingeniería de software, bases de datos y tecnologías de vanguardia, preparándome para enfrentar desafíos complejos en el ámbito del desarrollo de software.",

        // Experiencia
        "experience.freelance.date": "2024 - Presente",
        "experience.freelance.title": "Desarrollador Backend",
        "experience.freelance.company": "Freelance / Proyectos Independientes",
        "experience.freelance.description": "Desarrollo de aplicaciones web robustas utilizando Symfony y Spring Boot. Implementación de APIs RESTful, diseño de bases de datos MySQL, y creación de arquitecturas escalables. Colaboración en el ciclo completo de desarrollo desde el análisis hasta el despliegue.",

        "experience.junior.date": "2021 - 2024",
        "experience.junior.title": "Desarrollador Backend Junior",
        "experience.junior.company": "Centro de Desarrollo Local",
        "experience.junior.description": "Desarrollo de aplicaciones móviles nativas para Android utilizando Java (Android Nativo). Desarrollo y mantenimiento de aplicaciones web utilizando Java y Spring Boot. Creación de interfaces de usuario con HTML, CSS y JavaScript. Soporte técnico y resolución de incidencias en sistemas existentes. Participación en equipos ágiles para el desarrollo de soluciones empresariales.",

        "experience.intern.date": "2018 - 2021",
        "experience.intern.title": "Practicante de Desarrollo de Software",
        "experience.intern.company": "Universidad de las Ciencias Informáticas",
        "experience.intern.description": "Desarrollo de proyectos académicos y de investigación aplicando metodologías de ingeniería de software. Implementación de soluciones con Java y PHP. Aprendizaje y aplicación de patrones de diseño, bases de datos y mejores prácticas de desarrollo bajo supervisión académica.",

        // Proyectos
        "projects.inventory.type": "Sistema Backend",
        "projects.inventory.title": "Sistema de Gestión de Inventario y Ventas",
        "projects.inventory.description": "Sistema completo desarrollado con Symfony para gestión de inventario, ventas, compras y análisis de datos. Incluye control de stock, facturación PDF, dashboard con métricas y servicios especializados para lógica de negocio compleja.",

        "projects.auth.type": "Sistema Backend Seguro",
        "projects.auth.title": "Sistema de Autenticación y Control de Acceso",
        "projects.auth.description": "Sistema completo de seguridad desarrollado con Symfony que implementa autenticación JWT, autorización granular con Voters, registro de auditoría exhaustivo y gestión de usuarios. Incluye sistema de roles, validación de DTOs, logs de seguridad y pruebas unitarias completas.",

        "projects.microservices.type": "Arquitectura Microservicios",
        "projects.microservices.title": "Sistema de Biblioteca con Arquitectura de Microservicios",
        "projects.microservices.description": "Sistema distribuido escalable desarrollado con Spring Boot para gestión completa de biblioteca. Implementa microservicios especializados para libros, usuarios, préstamos y notificaciones, con API Gateway, service discovery y comunicación asíncrona mediante mensajería.",

        "projects.android.type": "Aplicación Móvil",
        "projects.android.title": "Sistema Móvil para Gestión de Solicitudes de Tarjetas BANCEC",
        "projects.android.description": "Aplicación Android completa desarrollada para optimizar el proceso de recepción de solicitudes de tarjetas magnéticas en entornos bancarios. Incluye captura de datos mediante QR, gestión de clientes, exportación/importación Excel, estadísticas en tiempo real y transferencia segura de datos entre dispositivos.",

        "projects.portfolio.type": "Portafolio Profesional - Sitio Actual",
        "projects.portfolio.title": "Portafolio Profesional Responsive",
        "projects.portfolio.description": "Single Page Application moderna desarrollada con HTML5, CSS3 y JavaScript vanilla. Incluye diseño responsive, tema claro/oscuro persistente, navegación suave, animaciones al scroll y formulario de contacto interactivo.",

        "projects.demo": "Demo en desarrollo",
        "projects.code": "Código",

        // Habilidades
        "skills.languages": "Lenguajes de Programación",
        "skills.web": "Tecnologías Web",
        "skills.frameworks": "Frameworks y Tecnologías",
        "skills.databases": "Bases de Datos",
        "skills.tools": "Herramientas de Desarrollo",
        "skills.architecture": "Arquitectura y Conceptos",
        "skills.soft": "Habilidades Blandas",
        "skills.problem_solving": "Resolución de Problemas",
        "skills.teamwork": "Trabajo en Equipo",
        "skills.learning": "Aprendizaje Autónomo",

        // Contacto
        "contact.bot_trap": "No completar este campo",
        "contact.name": "Nombre",
        "contact.email": "Email",
        "contact.subject": "Asunto",
        "contact.message": "Mensaje",
        "contact.submit": "Enviar Mensaje",
        // CTA
        "cta.text": "¿Interesado en colaborar?",
        "cta.button": "Contáctame ahora",

        // Footer
        "footer.copyright": "2025 Christián R. Vazquez. Todos los derechos reservados."
    },
    en: {
        // Navigation
        "logo": "Portfolio",
        "nav.about": "About Me",
        "nav.study": "Education",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.contact": "Contact",

        // Language
        "language.es": "ES",
        "language.en": "EN",

        // Skip link
        "skip.link": "Skip to main content",

        // Profile
        "profile.title": "Backend Developer",
        "cv.download": "Download CV",

        // Sections
        "about.title": "About Me",
        "study.title": "Education",
        "experience.title": "Experience",
        "projects.title": "Projects",
        "skills.title": "Technical Skills",
        "contact.title": "Contact",

        // About Me
        "about.paragraph1": "Hello, I am Christián Vazquez, a Computer Science Engineer passionate about software development and creating innovative web solutions. My education at UCI provided me with a solid foundation in software engineering, which I have consolidated through personal projects where I apply my knowledge in practice.",
        "about.paragraph2": "My motivation is to transform ideas into functional, clean, and efficient code, following industry best practices and standards. Although my initial professional career has been outside the development field, I have dedicated the last two years to maintaining and enhancing my skills through self-learning, building applications, and exploring modern front-end and back-end technologies.",
        "about.paragraph3": "My experience is mainly focused on backend development with Java and PHP, where I have worked with frameworks like Spring Boot and Symfony. I also have the capacity to create basic front-end interfaces and adapt well to full-stack environments when the project requires it, always with the humility to recognize that learning in this field is continuous.",
        "about.paragraph4": "I am currently pursuing a Master's degree in Applied Informatics to deepen my knowledge and specialize, demonstrating my firm commitment to continuous growth in this field.",
        "about.paragraph5": "When I'm not coding, I enjoy reading, family time, and learning about new technologies. I strongly believe in continuous learning and staying updated with the latest trends in web development.",

        // Education
        "study.masters.date": "2025 - Present",
        "study.masters.title": "Master's Degree in Applied Informatics",
        "study.masters.university": "Universidad José Martí (UNISS)",
        "study.masters.description": "Complementing my undergraduate education with a specialization that seeks to bridge the gap between advanced computer science theory and its practical application in business and research environments. I am focusing on acquiring high-level competencies for the design and implementation of complex systems that respond to current technological challenges.",

        "study.degree.date": "2017 - 2022",
        "study.degree.title": "Computer Science Engineering",
        "study.degree.university": "Universidad de las Ciencias Informáticas (UCI)",
        "study.degree.description": "Graduate of an engineering program with a practical focus on software development. The education at UCI was characterized by a project-based learning model, where I consolidated my knowledge in computing fundamentals, software engineering, databases, and cutting-edge technologies, preparing me to face complex challenges in the field of software development.",

        // Experience
        "experience.freelance.date": "2024 - Present",
        "experience.freelance.title": "Backend Developer",
        "experience.freelance.company": "Freelance / Independent Projects",
        "experience.freelance.description": "Development of robust web applications using Symfony and Spring Boot. Implementation of RESTful APIs, MySQL database design, and creation of scalable architectures. Collaboration in the full development cycle from analysis to deployment.",

        "experience.junior.date": "2021 - 2024",
        "experience.junior.title": "Junior Backend Developer",
        "experience.junior.company": "Local Development Center",
        "experience.junior.description": "Development of native Android mobile applications using Java (Native Android). Development and maintenance of web applications using Java and Spring Boot. Creation of user interfaces with HTML, CSS, and JavaScript. Technical support and resolution of incidents in existing systems. Participation in agile teams for the development of business solutions.",

        "experience.intern.date": "2018 - 2021",
        "experience.intern.title": "Software Development Intern",
        "experience.intern.company": "Universidad de las Ciencias Informáticas",
        "experience.intern.description": "Development of academic and research projects applying software engineering methodologies. Implementation of solutions with Java and PHP. Learning and application of design patterns, databases, and development best practices under academic supervision.",

        // Projects
        "projects.inventory.type": "Backend System",
        "projects.inventory.title": "Inventory and Sales Management System",
        "projects.inventory.description": "Complete system developed with Symfony for inventory, sales, purchasing, and data analysis management. Includes stock control, PDF invoicing, dashboard with metrics, and specialized services for complex business logic.",

        "projects.auth.type": "Secure Backend System",
        "projects.auth.title": "Authentication and Access Control System",
        "projects.auth.description": "Complete security system developed with Symfony that implements JWT authentication, granular authorization with Voters, comprehensive audit logging, and user management. Includes role system, DTO validation, security logs, and complete unit tests.",

        "projects.microservices.type": "Microservices Architecture",
        "projects.microservices.title": "Library System with Microservices Architecture",
        "projects.microservices.description": "Scalable distributed system developed with Spring Boot for complete library management. Implements specialized microservices for books, users, loans, and notifications, with API Gateway, service discovery, and asynchronous communication via messaging.",

        "projects.android.type": "Mobile Application",
        "projects.android.title": "Mobile System for BANCEC Card Request Management",
        "projects.android.description": "Complete Android application developed to optimize the process of receiving magnetic card requests in banking environments. Includes data capture via QR, client management, Excel export/import, real-time statistics, and secure data transfer between devices.",

        "projects.portfolio.type": "Professional Portfolio - Current Site",
        "projects.portfolio.title": "Responsive Professional Portfolio",
        "projects.portfolio.description": "Modern Single Page Application developed with HTML5, CSS3, and vanilla JavaScript. Includes responsive design, persistent light/dark theme, smooth navigation, scroll animations, and an interactive contact form.",

        "projects.demo": "Demo in development",
        "projects.code": "Code",

        // Skills
        "skills.languages": "Programming Languages",
        "skills.web": "Web Technologies",
        "skills.frameworks": "Frameworks and Technologies",
        "skills.databases": "Databases",
        "skills.tools": "Development Tools",
        "skills.architecture": "Architecture and Concepts",
        "skills.soft": "Soft Skills",
        "skills.problem_solving": "Problem Solving",
        "skills.teamwork": "Teamwork",
        "skills.learning": "Autonomous Learning",

        // Contact
        "contact.bot_trap": "Do not complete this field",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.subject": "Subject",
        "contact.message": "Message",
        "contact.submit": "Send Message",

        // CTA
        "cta.text": "Interested in collaborating?",
        "cta.button": "Contact me now",

        // Footer
        "footer.copyright": "2025 Christián R. Vazquez. All rights reserved."
    }
};

// Función para cambiar idioma
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);

    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Actualizar texto del botón de idioma
    if (lang === 'en') {
        languageText.textContent = 'EN';
        languageText.setAttribute('data-i18n', 'language.en');
    } else {
        languageText.textContent = 'ES';
        languageText.setAttribute('data-i18n', 'language.es');
    }
}

// Aplicar idioma al cargar
changeLanguage(currentLanguage);

// Alternar idioma
languageToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
});

// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Debounce para optimizar performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Barra de progreso de lectura
const readingProgress = document.getElementById('readingProgress');

function updateReadingProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const progress = (scrollTop / documentHeight) * 100;

    readingProgress.style.width = `${progress}%`;
}

const debouncedUpdateProgress = debounce(updateReadingProgress, 10);

// Botón Volver Arriba
const backToTop = document.getElementById('backToTop');

function toggleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animaciones al hacer scroll
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Navegación suave con debounce
function smoothScrollTo(targetElement) {
    window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
    });
}

const debouncedSmoothScroll = debounce(smoothScrollTo, 50);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            debouncedSmoothScroll(targetElement);

            // Actualizar enlace activo
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Actualizar enlace activo al hacer scroll con debounce
function updateActiveNavLink() {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

const debouncedUpdateNav = debounce(updateActiveNavLink, 25);

// Event listeners para scroll
window.addEventListener('scroll', () => {
    debouncedUpdateProgress();
    debouncedUpdateNav();
    toggleBackToTop();
});

// Inicializar elementos
updateReadingProgress();
toggleBackToTop();

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validación de campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            showFormMessage('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Por favor, introduce un email válido.', 'error');
            return;
        }

        // Estado de envío
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(contactForm);

            // Timeout para evitar esperas infinitas
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: new URLSearchParams(formData).toString(),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (response.ok) {
                showFormMessage('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
                contactForm.reset();
            } else {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error enviando formulario:', error);
            let errorMessage = 'Hubo un error al enviar el mensaje. ';

            if (error.name === 'AbortError') {
                errorMessage += 'La solicitud tardó demasiado tiempo. ';
            }

            errorMessage += 'Por favor, envíame un email directamente a christianrvdv.1999@gmail.com';
            showFormMessage(errorMessage, 'error');
        } finally {
            btnText.style.display = 'flex';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        formMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 8000);
    }

    contactForm.addEventListener('input', () => {
        if (formMessage.style.display === 'block') {
            formMessage.style.display = 'none';
        }
    });
}

// Mejorar accesibilidad del teclado
document.addEventListener('keydown', (e) => {
    // Cerrar menú con Escape
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
    }
});

// Precargar imágenes críticas
function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

// Precargar imagen de perfil
window.addEventListener('load', () => {
    preloadImage('https://avatars.githubusercontent.com/u/61900349?s=400&u=9babd1740dd87e49cb0e7ca0be505830fad63365&v=4');
});