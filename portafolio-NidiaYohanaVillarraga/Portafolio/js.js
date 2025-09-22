// Funcionalidad principal //
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegación para los enlaces internos //
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const header = document.querySelector('.header');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { 
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Actualizar enlace activo //
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Cambio de tema (claro/oscuro)
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-theme');
            
            const icon = this.querySelector('i');
            if (body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    // Navegación activa basada en scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);

    // Animaciones de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animateElements = document.querySelectorAll('.info-block, .stats-block, .skill-item, .title-item, .project-card');
    animateElements.forEach(el => observer.observe(el));

    // Formulario de contacto //
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombres = this.querySelector('#nombres').value;
            const correo = this.querySelector('#correo').value;
            const mensaje = this.querySelector('#mensaje').value;
            
            if (nombres && correo && mensaje) {
                // Simular envío del formulario //
                showNotification('¡Mensaje enviado! Te contactaremos pronto.', 'success');
                this.reset();
            } else {
                showNotification('Por favor completa todos los campos.', 'error');
            }
        });
    }

    // Función para mostrar notificaciones
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Estilos de la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        // Colores según el tipo
        if (type === 'success') {
            notification.style.background = '#10b981';
        } else if (type === 'error') {
            notification.style.background = '#ef4444';
        } else {
            notification.style.background = '#3b82f6';
        }
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover después de 5 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Efectos hover para las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contador animado para las estadísticas
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = parseInt(element.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 16);
    }
    
    // Observar estadísticas para animación
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));

    // Scroll suave para el botón "Escribeme"
    const writeMeLink = document.querySelector('.write-me');
    if (writeMeLink) {
        writeMeLink.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.querySelector('#contacto');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // Menú móvil (para pantallas pequeñas)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.style.cssText = `
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #666;
    cursor: pointer;
    padding: 0.5rem;
`;

const headerContainer = document.querySelector('.header .container');
if (headerContainer) {
    headerContainer.appendChild(mobileMenuToggle);
    
    // Mostrar/ocultar menú móvil
    mobileMenuToggle.addEventListener('click', function() {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('mobile-open');
        
        const icon = this.querySelector('i');
        if (nav.classList.contains('mobile-open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Media query para menú móvil
    function handleMobileMenu() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';
            document.querySelector('.nav').classList.add('mobile-nav');
        } else {
            mobileMenuToggle.style.display = 'none';
            document.querySelector('.nav').classList.remove('mobile-nav', 'mobile-open');
        }
    }
    
    handleMobileMenu();
    window.addEventListener('resize', handleMobileMenu);
}

    // Efectos de escritura para el título principal
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 100);
    }

    // Validación en tiempo real del formulario
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#e0e0e0';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(239, 68, 68)') {
                this.style.borderColor = '#e0e0e0';
            }
        });
    });

    console.log('🚀 Landing page de Nidia Yohana cargada exitosamente!');
        
    // Optimización de performance para el parallax de num y de nombre //
    let ticking = false;
    
    function updateParallax() {
        if (!ticking) {
            requestAnimationFrame(function() {
                if (parallaxElements.length > 0) {
                    applyParallax();
                }
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateParallax, { passive: true });
});

// Estilos adicionales para el menú móvil
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    @media (max-width: 768px) {
        .mobile-nav {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            transition: transform 0.3s ease;
        }
        
        .mobile-nav.mobile-open {
            transform: translateY(0);
        }
        
        .mobile-nav .nav-link {
            padding: 1rem 0;
            border-bottom: 1px solid #f0f0f0;
            width: 100%;
            text-align: center;
        }
        
        .mobile-nav .nav-link:last-child {
            border-bottom: none;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .dark-theme {
        background: #1a1a1a;
        color: #ffffff;
    }
    
    .dark-theme .header {
        background: #2d2d2d;
        border-bottom-color: #404040;
    }
    
    .dark-theme .logo {
        color: #ffffff;
    }
    
    .dark-theme .nav-link {
        color: #cccccc;
    }
    
    .dark-theme .nav-link.active,
    .dark-theme .nav-link:hover {
        color: #ffffff;
    }
    
    .dark-theme .hero-content h1,
    .dark-theme .hero-content h2 {
        color: #ffffff;
    }
    
    .dark-theme .section-header h2 {
        color: #ffffff;
    }
    
    .dark-theme .skills-section,
    .dark-theme .projects-section {
        background: #2d2d2d;
    }
    
    .dark-theme .project-card {
        background: #404040;
    }
    
    .dark-theme .info-block h3,
    .dark-theme .stats-block h3,
    .dark-theme .skills-category h3,
    .dark-theme .titles-column h3 {
        color: #cccccc;
    }
    
    .dark-theme .info-block p,
    .dark-theme .stats-block .stat-number,
    .dark-theme .skill-info h4,
    .dark-theme .title-item h4 {
        color: #ffffff;
    }
    
    .dark-theme .skill-info p,
    .dark-theme .title-item p {
        color: #cccccc;
    }
    
    .dark-theme .profile-oval {
        background: #404040;
        border-color: #666;
    }
    
    .dark-theme .form-group input,
    .dark-theme .form-group textarea {
        background: #404040;
        border-color: #666;
        color: #ffffff;
    }
    
    .dark-theme .submit-btn {
        background: #666;
    }
    
    .dark-theme .submit-btn:hover {
        background: #888;
    }
`;

document.head.appendChild(mobileStyles);