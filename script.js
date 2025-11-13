// JavaScript simple para funcionalidades básicas
        document.addEventListener('DOMContentLoaded', function() {
            // Menú móvil
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });

            // Smooth scroll para enlaces internos
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        // Cerrar menú móvil si está abierto
                        navLinks.classList.remove('active');
                    }
                });
            });

            // Formulario de contacto - ENVÍO A WHATSAPP
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Obtener valores del formulario
                const nombre = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const telefono = document.getElementById('phone').value;
                const servicio = document.getElementById('service').value;
                const mensaje = document.getElementById('message').value;
                
                // Número de WhatsApp (REEMPLAZA CON TU NÚMERO)
                // Formato: código de país + número sin espacios ni símbolos
                // Ejemplo para Argentina: 5491167034750
                const numeroWhatsApp = "5491167034750";
                
                // Crear mensaje estructurado
                const texto = `¡Hola! Me interesa contactarme con Sforza & Asociados.

*Información de contacto:*
• *Nombre:* ${nombre}
• *Email:* ${email}
• *Teléfono:* ${telefono}

*Servicio de interés:* ${servicio}

*Mensaje:*
${mensaje}

Espero su respuesta. ¡Gracias!`;
                
                // Codificar el mensaje para URL
                const mensajeCodificado = encodeURIComponent(texto);
                
                // Crear URL de WhatsApp
                const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
                
                // Abrir WhatsApp en una nueva pestaña
                window.open(url, '_blank');
                
                // Opcional: resetear el formulario después del envío
                // this.reset();
            });

            // Cambiar clase activa en navegación al hacer scroll
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('section');
                const navLinks = document.querySelectorAll('.nav-links a');
                
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollY >= (sectionTop - 100)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
        });