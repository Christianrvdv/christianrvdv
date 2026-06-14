// ========================
// TEMA OSCURO/CLARO (clase 'dark' en <html>)
// ========================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    if (themeToggle) themeToggle.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
} else {
    htmlElement.classList.remove('dark');
    if (themeToggle) themeToggle.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
        }
    });
}

// ========================
// IDIOMA
// ========================
const languageToggle = document.getElementById('languageToggle');
const languageText = document.querySelector('.language-text');

const currentLang = localStorage.getItem('language') || 'es';
document.documentElement.lang = currentLang;
if (languageText) languageText.textContent = currentLang === 'en' ? 'EN' : 'ES';

const translations = {
    es: {
        // Navbar y general
        "logo": "BackendDev",
        "nav.about": "Sobre mí",
        "nav.study": "Estudios",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.skills": "Habilidades",
        "nav.contact": "Contacto",
        "profile.title": "Backend Architect",
        "cv.download": "Descargar CV",

        // Hero
        "hero.badge": "Disponible para proyectos",
        "hero.button.projects": "VER PROYECTOS",
        "hero.button.cv": "DESCARGAR CV",
        "hero.description": "Especializado en la construcción de sistemas distribuidos, microservicios de alto rendimiento y arquitecturas escalables. Transformo lógica compleja en soluciones elegantes y eficientes.",

        // Sobre mí
        "about.title": "Sobre mí",
        "about.paragraph1": "Hola, soy Christián Vazquez, un Ingeniero en Ciencias Informáticas apasionado por el desarrollo de software y la creación de soluciones web innovadoras. Mi formación en la UCI me proporcionó una base sólida en ingeniería de software, la cual he consolidado a través de proyectos personales donde aplico mi conocimiento en la práctica.",
        "about.paragraph2": "Mi motivación es transformar ideas en código funcional, limpio y eficiente, siguiendo las mejores prácticas y estándares de la industria. Aunque mi trayectoria profesional inicial ha estado fuera del ámbito del desarrollo, he dedicado los últimos dos años a mantener y potenciar mis habilidades de forma autodidacta, construyendo aplicaciones y explorando tecnologías modernas de front-end y back-end.",
        "about.paragraph3": "Mi experiencia se centra principalmente en el desarrollo backend con Java y PHP, donde he trabajado con frameworks como Spring Boot y Symfony. También tengo capacidad para crear interfaces frontend básicas y me adapto bien a entornos full-stack cuando el proyecto lo requiere, siempre con la humildad de reconocer que el aprendizaje en este campo es continuo.",
        "about.paragraph4": "Actualmente, curso una Maestría en Informática Aplicada para profundizar en mis conocimientos y especializarme, demostrando mi firme compromiso con el crecimiento continuo en este campo.",
        "about.paragraph5": "Cuando no estoy programando, disfruto de la lectura, el tiempo en familia y aprender sobre nuevas tecnologías. Creo firmemente en el aprendizaje continuo y en mantenerme actualizado con las últimas tendencias en desarrollo web.",

        // Estudios
        "study.title": "Estudios",
        "study.masters.date": "2025 - Presente",
        "study.masters.title": "Maestría en Informática Aplicada",
        "study.masters.university": "Universidad José Martí (UNISS)",
        "study.masters.description": "Complementando mi formación de grado con una especialización que busca cerrar la brecha entre la teoría avanzada en informática y su aplicación práctica en entornos empresariales y de investigación. Me estoy enfocando en adquirir competencias de alto nivel para el diseño e implementación de sistemas complejos que respondan a desafíos tecnológicos actuales.",
        "study.degree.date": "2017 - 2022",
        "study.degree.title": "Ingeniería en Ciencias Informáticas",
        "study.degree.university": "Universidad de las Ciencias Informáticas (UCI)",
        "study.degree.description": "Graduado de un programa de ingeniería con un enfoque práctico en el desarrollo de software. La formación en la UCI se caracterizó por un modelo de aprendizaje basado en proyectos reales, donde consolidé mis conocimientos en fundamentos de la computación, ingeniería de software, bases de datos y tecnologías de vanguardia, preparándome para enfrentar desafíos complejos en el ámbito del desarrollo de software.",

        // Experiencia
        "experience.title": "Experiencia",
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
        "projects.title": "Proyectos Destacados",
        "projects.view_all": "VER TODO EL GITHUB",
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
        "projects.portfolio.type": "Portafolio Profesional",
        "projects.portfolio.title": "Portafolio Profesional Responsive",
        "projects.portfolio.description": "Single Page Application moderna desarrollada con HTML5, CSS3 y JavaScript vanilla. Incluye diseño responsive, tema claro/oscuro persistente, navegación suave, animaciones al scroll y formulario de contacto interactivo.",
        "projects.demo": "Demo en desarrollo",
        "projects.demo_portfolio": "Este sitio",
        "projects.code": "Código",

        // Habilidades (Skills - nueva estructura)
        "skills.title": "Habilidades Técnicas",
        "skills.languages.title": "Lenguajes",
        "skills.languages.desc": "Dominio en los siguientes lenguajes de programación para desarrollo backend y sistemas.",
        "skills.frameworks.title": "Frameworks Backend",
        "skills.frameworks.desc": "Frameworks principales utilizados en proyectos profesionales y personales.",
        "skills.databases.title": "Bases de Datos",
        "skills.databases.desc": "Gestión y diseño de bases de datos relacionales y NoSQL.",
        "skills.devops.title": "DevOps & Cloud",
        "skills.devops.desc": "Herramientas de contenerización, orquestación y nube.",
        "skills.frontend.title": "Frontend (Básico)",
        "skills.frontend.desc": "Conocimientos para construir interfaces funcionales y responsivas.",
        "skills.architecture.title": "Arquitectura & Metodologías",
        "skills.architecture.desc": "Patrones de diseño, estilos arquitectónicos y metodologías ágiles.",

        // Contacto
        "contact.title": "¿Tienes un sistema complejo que escalar?",
        "contact.description": "Hablemos sobre cómo puedo ayudarte a optimizar tu arquitectura backend y mejorar el rendimiento de tus servicios.",
        "contact.name": "Tu nombre",
        "contact.email": "Tu email",
        "contact.subject": "Asunto",
        "contact.message": "Mensaje",
        "contact.submit": "ENVIAR MENSAJE",

        // Footer
        "footer.brand": "Backend Architect",
        "footer.copyright": "© 2025 Christián R. Vazquez. Construido con precisión y lógica.",
        "footer.privacy": "Privacidad",
        "footer.terms": "Términos",
        "footer.github": "GitHub",
        "footer.telegram": "Telegram"
    },
    en: {
        // Navbar
        "logo": "BackendDev",
        "nav.about": "About Me",
        "nav.study": "Education",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "profile.title": "Backend Architect",
        "cv.download": "Download CV",

        // Hero
        "hero.badge": "Available for projects",
        "hero.button.projects": "VIEW PROJECTS",
        "hero.button.cv": "DOWNLOAD CV",
        "hero.description": "Specialized in building distributed systems, high-performance microservices, and scalable architectures. I transform complex logic into elegant and efficient solutions.",

        // About
        "about.title": "About Me",
        "about.paragraph1": "Hello, I am Christián Vazquez, a Computer Science Engineer passionate about software development and creating innovative web solutions. My education at UCI provided me with a solid foundation in software engineering, which I have consolidated through personal projects where I apply my knowledge in practice.",
        "about.paragraph2": "My motivation is to transform ideas into functional, clean, and efficient code, following industry best practices and standards. Although my initial professional career has been outside the development field, I have dedicated the last two years to maintaining and enhancing my skills through self-learning, building applications, and exploring modern front-end and back-end technologies.",
        "about.paragraph3": "My experience is mainly focused on backend development with Java and PHP, where I have worked with frameworks like Spring Boot and Symfony. I also have the capacity to create basic front-end interfaces and adapt well to full-stack environments when the project requires it, always with the humility to recognize that learning in this field is continuous.",
        "about.paragraph4": "I am currently pursuing a Master's degree in Applied Informatics to deepen my knowledge and specialize, demonstrating my firm commitment to continuous growth in this field.",
        "about.paragraph5": "When I'm not coding, I enjoy reading, family time, and learning about new technologies. I strongly believe in continuous learning and staying updated with the latest trends in web development.",

        // Education
        "study.title": "Education",
        "study.masters.date": "2025 - Present",
        "study.masters.title": "Master's Degree in Applied Informatics",
        "study.masters.university": "Universidad José Martí (UNISS)",
        "study.masters.description": "Complementing my undergraduate education with a specialization that seeks to bridge the gap between advanced computer science theory and its practical application in business and research environments. I am focusing on acquiring high-level competencies for the design and implementation of complex systems that respond to current technological challenges.",
        "study.degree.date": "2017 - 2022",
        "study.degree.title": "Computer Science Engineering",
        "study.degree.university": "University of Informatics Sciences (UCI)",
        "study.degree.description": "Graduate of an engineering program with a practical focus on software development. The education at UCI was characterized by a project-based learning model, where I consolidated my knowledge in computing fundamentals, software engineering, databases, and cutting-edge technologies, preparing me to face complex challenges in the field of software development.",

        // Experience
        "experience.title": "Experience",
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
        "experience.intern.company": "University of Informatics Sciences",
        "experience.intern.description": "Development of academic and research projects applying software engineering methodologies. Implementation of solutions with Java and PHP. Learning and application of design patterns, databases, and development best practices under academic supervision.",

        // Projects
        "projects.title": "Featured Projects",
        "projects.view_all": "VIEW ALL GITHUB",
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
        "projects.portfolio.type": "Professional Portfolio",
        "projects.portfolio.title": "Responsive Professional Portfolio",
        "projects.portfolio.description": "Modern Single Page Application developed with HTML5, CSS3, and vanilla JavaScript. Includes responsive design, persistent light/dark theme, smooth navigation, scroll animations, and an interactive contact form.",
        "projects.demo": "Demo in development",
        "projects.demo_portfolio": "This site",
        "projects.code": "Code",

        // Skills
        "skills.title": "Technical Skills",
        "skills.languages.title": "Languages",
        "skills.languages.desc": "Proficiency in programming languages for backend development and systems.",
        "skills.frameworks.title": "Backend Frameworks",
        "skills.frameworks.desc": "Main frameworks used in professional and personal projects.",
        "skills.databases.title": "Databases",
        "skills.databases.desc": "Management and design of relational and NoSQL databases.",
        "skills.devops.title": "DevOps & Cloud",
        "skills.devops.desc": "Containerization, orchestration, and cloud tools.",
        "skills.frontend.title": "Frontend (Basic)",
        "skills.frontend.desc": "Knowledge to build functional and responsive interfaces.",
        "skills.architecture.title": "Architecture & Methodologies",
        "skills.architecture.desc": "Design patterns, architectural styles, and agile methodologies.",

        // Contact
        "contact.title": "Do you have a complex system to scale?",
        "contact.description": "Let's talk about how I can help you optimize your backend architecture and improve the performance of your services.",
        "contact.name": "Your name",
        "contact.email": "Your email",
        "contact.subject": "Subject",
        "contact.message": "Message",
        "contact.submit": "SEND MESSAGE",

        // Footer
        "footer.brand": "Backend Architect",
        "footer.copyright": "© 2025 Christián R. Vazquez. Built with precision and logic.",
        "footer.privacy": "Privacy",
        "footer.terms": "Terms",
        "footer.github": "GitHub",
        "footer.telegram": "Telegram"
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    if (languageText) languageText.textContent = lang === 'en' ? 'EN' : 'ES';
}

changeLanguage(currentLang);

if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        const newLang = document.documentElement.lang === 'es' ? 'en' : 'es';
        changeLanguage(newLang);
    });
}

// ========================
// MENÚ MÓVIL
// ========================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });
    document.querySelectorAll('.nav-link-mobile, .nav-link, .side-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// ========================
// STICKY NAVBAR
// ========================
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        navbar.classList.remove('-translate-y-full');
        return;
    }
    if (currentScroll > lastScroll && currentScroll > 80) {
        navbar.classList.add('-translate-y-full');
    } else {
        navbar.classList.remove('-translate-y-full');
    }
    lastScroll = currentScroll;
});

// ========================
// BOTÓN VOLVER ARRIBA
// ========================
const backToTop = document.getElementById('backToTop');

function toggleBackToTop() {
    if (!backToTop) return;
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
}

// ========================
// ANIMACIONES AL SCROLL
// ========================
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, {threshold: 0.1, rootMargin: '0px 0px -50px 0px'});
sections.forEach(s => observer.observe(s));

document.querySelectorAll('[data-animate]').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-4');
    observer.observe(el);
});

// ========================
// NAVEGACIÓN SUAVE Y ENLACE ACTIVO
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = navbar ? navbar.offsetHeight : 64;
            window.scrollTo({top: target.offsetTop - navHeight, behavior: 'smooth'});
            updateActiveNavLink(targetId);
        }
    });
});

function updateActiveNavLink(activeId) {
    document.querySelectorAll('.nav-link, .side-link, .nav-link-mobile').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('text-primary', 'dark:text-primary-fixed', 'font-bold', 'border-b-2', 'border-primary', 'dark:border-primary-fixed', 'border-l-2', 'pl-4', 'pb-1');
        link.classList.add('text-on-surface-variant', 'dark:text-surface-variant');
        if (href === activeId || href === `#${activeId}`) {
            link.classList.add('text-primary', 'dark:text-primary-fixed', 'font-bold');
            link.classList.remove('text-on-surface-variant', 'dark:text-surface-variant');
            if (link.classList.contains('side-link')) {
                link.classList.add('border-l-2', 'border-primary', 'dark:border-primary-fixed', 'pl-4');
            } else if (link.classList.contains('nav-link')) {
                link.classList.add('border-b-2', 'border-primary', 'dark:border-primary-fixed', 'pb-1');
            }
        }
    });
}

function updateActiveOnScroll() {
    let current = '';
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
        const top = section.offsetTop, height = section.clientHeight;
        if (scrollPos >= top && scrollPos < top + height) current = section.getAttribute('id');
    });
    if (current) updateActiveNavLink(current);
}

window.addEventListener('scroll', () => {
    toggleBackToTop();
    updateActiveOnScroll();
});

// ========================
// FORMULARIO DE CONTACTO
// ========================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !subject || !message) {
            showFormMsg('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showFormMsg('Por favor, introduce un email válido.', 'error');
            return;
        }
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn?.querySelector('.btn-text');
        const btnLoading = submitBtn?.querySelector('.btn-loading');
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'flex';
        if (submitBtn) submitBtn.disabled = true;
        try {
            const formData = new FormData(contactForm);
            const res = await fetch('/', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: new URLSearchParams(formData).toString()
            });
            if (res.ok) {
                showFormMsg('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
                contactForm.reset();
            } else throw new Error('Error');
        } catch {
            showFormMsg('Hubo un error. Envíame un email a christianrvdv.1999@gmail.com', 'error');
        } finally {
            if (btnText) btnText.style.display = 'flex';
            if (btnLoading) btnLoading.style.display = 'none';
            if (submitBtn) submitBtn.disabled = false;
        }
    });

    function showFormMsg(msg, type) {
        if (!formMessage) return;
        formMessage.textContent = msg;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        setTimeout(() => formMessage.style.display = 'none', 8000);
    }
}

// Escape para menú
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Inicialización
window.addEventListener('load', () => {
    toggleBackToTop();
    updateActiveOnScroll();
    setTimeout(() => {
        document.querySelectorAll('[data-animate]').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
        });
    }, 100);
});