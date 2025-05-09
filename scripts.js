
        const canvas = document.getElementById('backgroundCanvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = '01ハッカーセキュリティコード';
        const fontSize = 18;
        const columns = Math.floor(canvas.width / fontSize * 1.5); 
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = Math.random() * canvas.height / fontSize; 
        }

        function draw() {
            ctx.fillStyle = 'rgba(15, 15, 30, 0.03)'; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff88';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                const yPos = drops[i] * fontSize;

               
                ctx.shadowColor = '#00ff88';
                ctx.shadowBlur = 8;
                ctx.fillText(text, i * fontSize, yPos);

                
                if (Math.random() > 0.95) {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillText(text, i * fontSize, yPos - fontSize);
                    ctx.fillStyle = '#00ff88';
                }

                if (yPos > canvas.height && Math.random() > 0.98) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        setInterval(draw, 40); 

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const newColumns = Math.floor(canvas.width / fontSize * 1.5);
            while (drops.length < newColumns) {
                drops.push(Math.random() * canvas.height / fontSize);
            }
            drops.length = newColumns; 
        });

       
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const numParticles = 50;

            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.animationDelay = Math.random() * 10 + 's';
                particle.style.animationDuration = Math.random() * 10 + 5 + 's';
                particlesContainer.appendChild(particle);
            }
        }

        createParticles();

       
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

    
        const modal = document.getElementById('certificateModal');
        const modalText = document.getElementById('modalText');
        const closeModal = document.querySelector('.close');
        const verifyLinks = document.querySelectorAll('.verify-link');

        verifyLinks.forEach(link => {
            link.addEventListener('click', function() {
                const certType = this.getAttribute('data-cert');
                let certName = '';

                switch(certType) {
                    case 'anz-cyber-security':
                        certName = 'ANZ Cyber Security Management Job Simulation';
                        break;
                    case 'opswat-web-traffic':
                        certName = 'OPSWAT Web Traffic Protection Associate (OWPA)';
                        break;
                    case 'opswat-critical-infra':
                        certName = 'Introduction to Critical Infrastructure Protection (ICIP)';
                        break;
                    case 'opswat-network-security':
                        certName = 'OPSWAT Network Security Associate (ONSA)';
                        break;
                    case 'opswat-file-security':
                        certName = 'OPSWAT File Security Associate (OFSA)';
                        break;
                }

                modalText.textContent = `Certificate Placeholder: ${certName} would be displayed here.`;
                modal.style.display = 'flex';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        const btn = document.querySelector('#hero .btn');
        btn.addEventListener('click', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            btn.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
