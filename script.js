document.addEventListener('DOMContentLoaded', () => {
    // 1. FAQ Interactivity
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');

            // Close other items
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.nextElementSibling.classList.remove('active');
                    otherButton.querySelector('.faq-icon').classList.remove('active');
                }
            });

            // Toggle current item
            content.classList.toggle('active');
            icon.classList.toggle('active');
        });
    });

    // 2. Tracking Simulation
    const trackingForm = document.getElementById('tracking-form');
    const trackingResult = document.getElementById('tracking-result');

    if (trackingForm) {
        trackingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nf = document.getElementById('input-nf').value;
            const serie = document.getElementById('input-serie').value;
            const cnpj = document.getElementById('input-cnpj').value;

            // Simple loading state
            const submitBtn = trackingForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin" data-icon="sync">sync</span> PROCESSANDO...';

            setTimeout(() => {
                trackingResult.classList.remove('hidden');
                trackingResult.innerHTML = `
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                            <span class="material-symbols-outlined text-secondary" data-icon="local_shipping">local_shipping</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-[#001B3D]">NF: ${nf} | Série: ${serie}</h4>
                            <p class="text-xs text-slate-500 uppercase">CNPJ: ${cnpj}</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex gap-4">
                            <div class="flex flex-col items-center">
                                <div class="w-3 h-3 bg-secondary rounded-full"></div>
                                <div class="w-0.5 h-full bg-slate-200"></div>
                            </div>
                            <div class="pb-4">
                                <p class="text-sm font-bold">CARGA COLETADA</p>
                                <p class="text-xs text-slate-500">Natal/RN - 24/04/2024 14:30</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex flex-col items-center">
                                <div class="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                                <div class="w-0.5 h-full border-l-2 border-dashed border-slate-200"></div>
                            </div>
                            <div>
                                <p class="text-sm font-bold text-secondary">EM TRÂNSITO</p>
                                <p class="text-xs text-slate-500">Unidade de Distribuição - Em rota para entrega</p>
                            </div>
                        </div>
                    </div>
                `;

                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;

                // Scroll to result
                trackingResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 1500);
        });
    }

    // 3. Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // 4. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
        const toggleMenu = () => {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        };

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }

    // 5. Header Scroll Effect
    const header = document.querySelector('header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-[#001B3D]', 'shadow-2xl');
                header.classList.remove('bg-primary-container/10', 'backdrop-blur-lg', 'border-white/5');
            } else {
                header.classList.remove('bg-[#001B3D]', 'shadow-2xl');
                header.classList.add('bg-primary-container/10', 'backdrop-blur-lg', 'border-white/5');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run once on load to catch current scroll position
        handleScroll();
    }

    // 6. Force Video Autoplay on Mobile
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        // Force play
        heroVideo.play().catch(error => {
            console.log("Autoplay prevented, waiting for interaction", error);
            // Fallback: play on first touch
            document.addEventListener('touchstart', () => {
                heroVideo.play();
            }, { once: true });
        });
    }

    // 7. Scroll-Linked Video Animation (High Performance Smooth Version)
    const scrollContainer = document.getElementById('scroll-video-container');
    const scrollVideo = document.getElementById('scroll-video');
    const scrollTexts = document.querySelectorAll('.scroll-text');

    if (scrollContainer && scrollVideo) {
        let targetProgress = 0;
        let currentProgress = 0;
        let isVideoReady = false;

        // Force video to load and be ready for seeking
        scrollVideo.addEventListener('loadedmetadata', () => {
            isVideoReady = true;
            console.log("Video Scroll: Ready to seek.");
        });

        // Loop for optimized mapping (Fast LERP + Seek Lock)
        let isSeeking = false;

        scrollVideo.addEventListener('seeked', () => {
            isSeeking = false;
        });

        const renderLoop = () => {
            // Fast LERP (0.5): smooths out mouse wheel "ticks" but feels instant
            currentProgress += (targetProgress - currentProgress) * 0.5;

            if (isVideoReady && scrollVideo.duration && !isSeeking) {
                // Limita a reprodução aos primeiros 5 segundos
                const maxTime = Math.min(5, scrollVideo.duration);
                const targetTime = maxTime * currentProgress;
                
                // Only seek if the difference is at least 1 frame (~33ms at 30fps)
                if (Math.abs(scrollVideo.currentTime - targetTime) > 0.033) {
                    isSeeking = true;
                    scrollVideo.currentTime = targetTime;
                }
            }

            // Sincronização das Legendas com o movimento do vídeo
            scrollTexts.forEach((text, index) => {
                const total = scrollTexts.length;
                const part = 1 / total;
                const start = index * part;
                const end = (index + 1) * part;
                
                // Usamos currentProgress para que o texto apareça junto com o movimento do vídeo
                if (currentProgress >= start && currentProgress <= end) {
                    text.classList.add('active');
                } else {
                    text.classList.remove('active');
                }
            });

            requestAnimationFrame(renderLoop);
        };

        const handleScroll = () => {
            const rect = scrollContainer.getBoundingClientRect();
            const totalHeight = scrollContainer.offsetHeight - window.innerHeight;
            let p = -rect.top / totalHeight;
            targetProgress = Math.max(0, Math.min(1, p));
        };

        window.addEventListener('scroll', handleScroll);
        
        // Start the loop
        requestAnimationFrame(renderLoop);

        // Preload video explicitly
        scrollVideo.load();
    }
});
