document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const closePanelBtn = document.getElementById('closePanelBtn');
    const sidePanel = document.getElementById('sidePanel');
    const panelOverlay = document.getElementById('panelOverlay');
    const sideLinks = document.querySelectorAll('.side-link');
    const navLinks = document.querySelectorAll('.nav-link');

    function openSidePanel() {
        sidePanel.classList.add('open');
        panelOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeSidePanel() {
        sidePanel.classList.remove('open');
        panelOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (burgerBtn) {
        burgerBtn.addEventListener('click', openSidePanel);
    }

    if (closePanelBtn) {
        closePanelBtn.addEventListener('click', closeSidePanel);
    }

    if (panelOverlay) {
        panelOverlay.addEventListener('click', closeSidePanel);
    }

    sideLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            sideLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            closeSidePanel();
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Video Modal Logic
    const videoBox = document.getElementById('videoBox');
    const videoModal = document.getElementById('videoModal');
    const videoModalClose = document.getElementById('videoModalClose');
    const videoIframe = document.getElementById('videoIframe');
    const youtubeEmbedUrl = 'https://www.youtube.com/embed/-FnrCZJw6TE?autoplay=1';

    function openVideoModal() {
        if (videoIframe && videoModal) {
            videoIframe.src = youtubeEmbedUrl;
            videoModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeVideoModal() {
        if (videoIframe && videoModal) {
            videoIframe.src = '';
            videoModal.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    if (videoBox) {
        videoBox.addEventListener('click', openVideoModal);
    }

    if (videoModalClose) {
        videoModalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeVideoModal();
        });
    }

    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // Pricing Plan Category Data & Dynamic Switcher
    const pricingData = {
        skincare: [
            { title: "Fruit Concern", desc: "Clean & simple 40 minutes", price: "₹63", img: "assets/price1.png" },
            { title: "Magic Diamond", desc: "Clean & simple 50 minutes", price: "₹43", img: "assets/price2.png" },
            { title: "Magic Pearl", desc: "Clean & simple 40 minutes", price: "₹74", img: "assets/price2.png" },
            { title: "De-Tan Facial", desc: "Clean & simple 50 minutes", price: "₹89", img: "assets/price3.png" },
            { title: "Fairness & Hydrating", desc: "Clean & simple 30-40 minutes", price: "₹45", img: "assets/price3.png" },
            { title: "Marmalade Radiance", desc: "Clean & simple 50 minutes", price: "₹35", img: "assets/price4.png" },
            { title: "Gold Glow", desc: "Clean & simple 30-40 minutes", price: "₹56", img: "assets/price4.png" },
            { title: "Vitamin-C Facial", desc: "Clean & simple 30-40 minutes", price: "₹27", img: "assets/price1.png" }
        ],
        hairessentials: [
            { title: "Couture Haircut & Wash", desc: "Styling & blow dry 45 minutes", price: "₹49", img: "assets/price1.png" },
            { title: "Scalp Detox Therapy", desc: "Nourishing scalp treatment 40 minutes", price: "₹55", img: "assets/price2.png" },
            { title: "Keratin Smoothing", desc: "Deep hair restoration 90 minutes", price: "₹120", img: "assets/price2.png" },
            { title: "Botanical Hair Spa", desc: "Deep conditioning mask 45 minutes", price: "₹65", img: "assets/price3.png" },
            { title: "Global Hair Color", desc: "Rich vibrant coloring 60 minutes", price: "₹85", img: "assets/price3.png" },
            { title: "Beard Trim & Shape", desc: "Precision grooming 30 minutes", price: "₹35", img: "assets/price4.png" },
            { title: "Balayage & Highlights", desc: "Custom dimension 90 minutes", price: "₹140", img: "assets/price4.png" },
            { title: "Root Touch-Up", desc: "Grey coverage & shine 45 minutes", price: "₹45", img: "assets/price1.png" }
        ],
        makeup: [
            { title: "HD Bridal Makeup", desc: "Flawless high-def finish 120 minutes", price: "₹250", img: "assets/price1.png" },
            { title: "Soft Daytime Look", desc: "Natural glowing finish 45 minutes", price: "₹75", img: "assets/price2.png" },
            { title: "Airbrush Glamour", desc: "Long-lasting weightless 90 minutes", price: "₹190", img: "assets/price2.png" },
            { title: "Eye Drama & Lashes", desc: "Smokey eye & mink lashes 40 minutes", price: "₹55", img: "assets/price3.png" },
            { title: "Party / Event Makeup", desc: "Chic evening look 60 minutes", price: "₹95", img: "assets/price3.png" },
            { title: "Pre-Bridal Glow", desc: "Exfoliation & prep 60 minutes", price: "₹110", img: "assets/price4.png" },
            { title: "Engagement Glam", desc: "Radiant romantic tones 90 minutes", price: "₹160", img: "assets/price4.png" },
            { title: "Saree / Dupatta Draping", desc: "Couture styling 30 minutes", price: "₹30", img: "assets/price1.png" }
        ],
        handsfeet: [
            { title: "Gel Nail Art & Extensions", desc: "Custom acrylics 75 minutes", price: "₹85", img: "assets/price1.png" },
            { title: "French Gel Polish", desc: "Chip-resistant shine 45 minutes", price: "₹45", img: "assets/price2.png" },
            { title: "Aroma Spa Pedicure", desc: "Essential oil soak 50 minutes", price: "₹65", img: "assets/price2.png" },
            { title: "Detox Foot Spa", desc: "Callus removal & massage 50 minutes", price: "₹60", img: "assets/price3.png" },
            { title: "Classic Manicure", desc: "Nail shaping & polish 35 minutes", price: "₹40", img: "assets/price3.png" },
            { title: "Nail Repair & Strengthen", desc: "Keratin nail treatment 30 minutes", price: "₹35", img: "assets/price4.png" },
            { title: "Paraffin Wax Therapy", desc: "Deep moisture treatment 40 minutes", price: "₹50", img: "assets/price4.png" },
            { title: "Deluxe Pedicure & Scrub", desc: "Exfoliating foot therapy 60 minutes", price: "₹75", img: "assets/price1.png" }
        ]
    };

    const pricingTabs = document.querySelectorAll('.pricing-tab');
    const pricingItemsGrid = document.getElementById('pricingItemsGrid');

    function renderPricingCategory(categoryKey) {
        if (!pricingItemsGrid) return;
        const items = pricingData[categoryKey] || pricingData.skincare;
        
        pricingItemsGrid.style.opacity = '0';
        pricingItemsGrid.style.transform = 'translateY(10px)';

        setTimeout(() => {
            pricingItemsGrid.innerHTML = items.map(item => `
                <div class="price-item-card">
                    <div class="price-item-left">
                        <img src="${item.img}" alt="${item.title}" class="price-item-img">
                        <div class="price-item-text">
                            <h4 class="price-item-title">${item.title}</h4>
                            <p class="price-item-desc">${item.desc}</p>
                        </div>
                    </div>
                    <div class="price-item-tag">${item.price}</div>
                </div>
            `).join('');

            pricingItemsGrid.style.opacity = '1';
            pricingItemsGrid.style.transform = 'translateY(0)';
        }, 150);
    }

    if (pricingTabs.length > 0) {
        // Initial render
        renderPricingCategory('skincare');

        pricingTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                pricingTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const category = tab.getAttribute('data-category');
                renderPricingCategory(category);
            });
        });
    }

    // Feedback / Reviews Slider & Swipe Logic
    const reviewsCardsGrid = document.getElementById('reviewsCardsGrid');
    const sliderWrapper = document.getElementById('reviewsSliderWrapper');
    const dotBtns = document.querySelectorAll('.dot-btn');
    let currentSlide = 0;
    const totalSlides = dotBtns.length;
    let autoSlideTimer = null;

    function updateSlider(index) {
        if (!reviewsCardsGrid || totalSlides === 0) return;

        currentSlide = (index + totalSlides) % totalSlides;
        const isMobile = window.innerWidth <= 991;
        const cards = reviewsCardsGrid.children;

        if (cards.length > 0) {
            if (isMobile) {
                reviewsCardsGrid.style.transform = `translateX(-${currentSlide * 100}%)`;
            } else {
                const maxIndex = Math.max(0, totalSlides - 3);
                const clampedIndex = Math.min(currentSlide, maxIndex);
                const cardWidth = cards[0].offsetWidth;
                const gap = 24;
                reviewsCardsGrid.style.transform = `translateX(-${clampedIndex * (cardWidth + gap)}px)`;
            }
        }

        dotBtns.forEach((dot, i) => {
            if (i === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function startAutoSlide() {
        stopAutoSlide();
        autoSlideTimer = setInterval(() => {
            updateSlider(currentSlide + 1);
        }, 3500);
    }

    function stopAutoSlide() {
        if (autoSlideTimer) {
            clearInterval(autoSlideTimer);
            autoSlideTimer = null;
        }
    }

    if (dotBtns.length > 0) {
        // Dot click handlers
        dotBtns.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'), 10);
                updateSlider(index);
                startAutoSlide();
            });
        });

        // Touch Swipe Event Listeners
        let touchStartX = 0;
        let touchEndX = 0;

        if (sliderWrapper) {
            sliderWrapper.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            }, { passive: true });

            sliderWrapper.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                const swipeDistance = touchEndX - touchStartX;
                if (Math.abs(swipeDistance) > 40) {
                    if (swipeDistance < 0) {
                        updateSlider(currentSlide + 1);
                    } else {
                        updateSlider(currentSlide - 1);
                    }
                }
                startAutoSlide();
            }, { passive: true });

            sliderWrapper.addEventListener('mouseenter', stopAutoSlide);
            sliderWrapper.addEventListener('mouseleave', startAutoSlide);
        }

        window.addEventListener('resize', () => {
            updateSlider(currentSlide);
        });

        // Initialize Slider & Auto-slide
        updateSlider(0);
        startAutoSlide();
    }

    // Welcome Block Image Slider Logic
    const welcomeTrack = document.getElementById('welcomeSliderTrack');
    const welcomeDots = document.querySelectorAll('#welcomeSliderDots .welcome-dot');
    const welcomeWrapper = document.getElementById('welcomeSliderWrapper');

    if (welcomeTrack && welcomeDots.length > 0) {
        let currentWelcomeSlide = 0;
        const totalWelcomeSlides = welcomeDots.length;
        let welcomeTimer = null;

        function goToWelcomeSlide(index) {
            currentWelcomeSlide = (index + totalWelcomeSlides) % totalWelcomeSlides;
            welcomeTrack.style.transform = `translateX(-${currentWelcomeSlide * 100}%)`;
            welcomeDots.forEach((dot, i) => {
                if (i === currentWelcomeSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function startWelcomeAutoSlide() {
            stopWelcomeAutoSlide();
            welcomeTimer = setInterval(() => {
                goToWelcomeSlide(currentWelcomeSlide + 1);
            }, 4000);
        }

        function stopWelcomeAutoSlide() {
            if (welcomeTimer) {
                clearInterval(welcomeTimer);
                welcomeTimer = null;
            }
        }

        welcomeDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.getAttribute('data-index'), 10);
                goToWelcomeSlide(idx);
                startWelcomeAutoSlide();
            });
        });

        if (welcomeWrapper) {
            welcomeWrapper.addEventListener('mouseenter', stopWelcomeAutoSlide);
            welcomeWrapper.addEventListener('mouseleave', startWelcomeAutoSlide);

            let startX = 0;
            let endX = 0;
            welcomeWrapper.addEventListener('touchstart', (e) => {
                startX = e.changedTouches[0].screenX;
                stopWelcomeAutoSlide();
            }, { passive: true });

            welcomeWrapper.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].screenX;
                if (Math.abs(endX - startX) > 40) {
                    if (endX < startX) {
                        goToWelcomeSlide(currentWelcomeSlide + 1);
                    } else {
                        goToWelcomeSlide(currentWelcomeSlide - 1);
                    }
                }
                startWelcomeAutoSlide();
            }, { passive: true });
        }

        goToWelcomeSlide(0);
        startWelcomeAutoSlide();
    }

    // Gallery Lightbox Modal Popout Logic
    const galleryCards = document.querySelectorAll('.gallery-card');
    if (galleryCards.length > 0) {
        let galleryModal = document.getElementById('galleryLightboxModal');
        if (!galleryModal) {
            galleryModal = document.createElement('div');
            galleryModal.id = 'galleryLightboxModal';
            galleryModal.className = 'gallery-modal-overlay';
            galleryModal.innerHTML = `
                <div class="gallery-modal-wrapper">
                    <button class="gallery-modal-close" id="galleryModalClose" aria-label="Close modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <button class="gallery-modal-nav gallery-modal-prev" id="galleryModalPrev" aria-label="Previous image">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <img src="" alt="Gallery Image" class="gallery-modal-img" id="galleryModalImg">
                    <button class="gallery-modal-nav gallery-modal-next" id="galleryModalNext" aria-label="Next image">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            `;
            document.body.appendChild(galleryModal);
        }

        const modalImg = document.getElementById('galleryModalImg');
        const modalClose = document.getElementById('galleryModalClose');
        const modalPrev = document.getElementById('galleryModalPrev');
        const modalNext = document.getElementById('galleryModalNext');

        const imageList = Array.from(galleryCards).map(card => {
            const img = card.querySelector('.gallery-img');
            return img ? img.src : '';
        }).filter(src => src !== '');

        let currentGalleryIndex = 0;

        function openGalleryModal(index) {
            if (imageList.length === 0 || !galleryModal || !modalImg) return;
            currentGalleryIndex = (index + imageList.length) % imageList.length;
            modalImg.src = imageList[currentGalleryIndex];
            galleryModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeGalleryModal() {
            if (galleryModal) {
                galleryModal.classList.remove('open');
                document.body.style.overflow = '';
            }
        }

        galleryCards.forEach((card, idx) => {
            card.addEventListener('click', () => {
                openGalleryModal(idx);
            });
        });

        if (modalClose) {
            modalClose.addEventListener('click', (e) => {
                e.stopPropagation();
                closeGalleryModal();
            });
        }

        if (modalPrev) {
            modalPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                openGalleryModal(currentGalleryIndex - 1);
            });
        }

        if (modalNext) {
            modalNext.addEventListener('click', (e) => {
                e.stopPropagation();
                openGalleryModal(currentGalleryIndex + 1);
            });
        }

        if (galleryModal) {
            galleryModal.addEventListener('click', (e) => {
                if (e.target === galleryModal) {
                    closeGalleryModal();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (galleryModal && galleryModal.classList.contains('open')) {
                if (e.key === 'Escape') {
                    closeGalleryModal();
                } else if (e.key === 'ArrowLeft') {
                    openGalleryModal(currentGalleryIndex - 1);
                } else if (e.key === 'ArrowRight') {
                    openGalleryModal(currentGalleryIndex + 1);
                }
            }
        });
    }

    // Close side panel & video modal if ESC key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (sidePanel && sidePanel.classList.contains('open')) {
                closeSidePanel();
            }
            if (videoModal && videoModal.classList.contains('open')) {
                closeVideoModal();
            }
        }
    });

    // ==========================================================================
    // GLOBAL CART & INTER-PAGE BOOKING SYSTEM
    // ==========================================================================
    const SALON_SERVICES = [
        { id: 'skin-1', title: 'Signature Skin Polisher BodySPA (40min)', desc: '40 Min', duration: 40, price: 63, category: 'skincare', categoryName: 'SKIN CARE', gender: 'women' },
        { id: 'skin-2', title: 'Signature Skin Polisher BodySPA (60min)', desc: '60 Min', duration: 60, price: 89, category: 'skincare', categoryName: 'SKIN CARE', gender: 'women' },
        { id: 'skin-3', title: 'Signature Skin Polisher BodySPA (90min)', desc: '90 Min', duration: 90, price: 120, category: 'skincare', categoryName: 'SKIN CARE', gender: 'women' },
        { id: 'skin-4', title: 'Magic Diamond Hydrating Facial', desc: '50 Min', duration: 50, price: 74, category: 'skincare', categoryName: 'SKIN CARE', gender: 'women' },
        { id: 'skin-5', title: 'De-Tan Facial Radiance Therapy', desc: '45 Min', duration: 45, price: 55, category: 'skincare', categoryName: 'SKIN CARE', gender: 'all' },
        { id: 'skin-6', title: 'Vitamin-C Skin Spa Therapy', desc: '35 Min', duration: 35, price: 45, category: 'skincare', categoryName: 'SKIN CARE', gender: 'all' },

        { id: 'hair-1', title: 'Couture Haircut & Blow Dry Wash', desc: '45 Min', duration: 45, price: 49, category: 'hairessentials', categoryName: 'HAIR ESSENTIALS', gender: 'women' },
        { id: 'hair-2', title: 'Gentlemen Precision Haircut & Wash', desc: '30 Min', duration: 30, price: 35, category: 'hairessentials', categoryName: 'HAIR ESSENTIALS', gender: 'men' },
        { id: 'hair-3', title: 'Aroma Almond Oil Head Massage', desc: '15 Min', duration: 15, price: 25, category: 'hairessentials', categoryName: 'HAIR ESSENTIALS', gender: 'men' },
        { id: 'hair-4', title: 'Nourishing Scalp Detox Spa', desc: '40 Min', duration: 40, price: 55, category: 'hairessentials', categoryName: 'HAIR ESSENTIALS', gender: 'all' },
        { id: 'hair-5', title: 'Keratin Deep Smoothing Treatment', desc: '90 Min', duration: 90, price: 140, category: 'hairessentials', categoryName: 'HAIR ESSENTIALS', gender: 'women' },
        { id: 'hair-6', title: 'Global Hair Color & Gloss Shine', desc: '60 Min', duration: 60, price: 85, category: 'hairessentials', categoryName: 'HAIR ESSENTIALS', gender: 'all' },

        { id: 'makeup-1', title: 'HD Couture Bridal Makeup Artistry', desc: '120 Min', duration: 120, price: 250, category: 'makeup', categoryName: 'MAKEUP', gender: 'women' },
        { id: 'makeup-2', title: 'Soft Natural Daytime Glow Look', desc: '45 Min', duration: 45, price: 75, category: 'makeup', categoryName: 'MAKEUP', gender: 'women' },
        { id: 'makeup-3', title: 'Airbrush Glamour Evening Makeup', desc: '90 Min', duration: 90, price: 190, category: 'makeup', categoryName: 'MAKEUP', gender: 'women' },
        { id: 'makeup-4', title: 'Eye Drama & Lash Extension Art', desc: '40 Min', duration: 40, price: 55, category: 'makeup', categoryName: 'MAKEUP', gender: 'women' },

        { id: 'handsfeet-1', title: 'Gel Nail Art & Acrylic Extensions', desc: '75 Min', duration: 75, price: 85, category: 'handsfeet', categoryName: 'HANDS & FEET', gender: 'women' },
        { id: 'handsfeet-2', title: 'French Gel Polish & Nail Care', desc: '45 Min', duration: 45, price: 45, category: 'handsfeet', categoryName: 'HANDS & FEET', gender: 'women' },
        { id: 'handsfeet-3', title: 'Aroma Spa Pedicure Essential Soak', desc: '50 Min', duration: 50, price: 65, category: 'handsfeet', categoryName: 'HANDS & FEET', gender: 'all' },
        { id: 'handsfeet-4', title: 'Detox Foot Spa & Deep Massage', desc: '50 Min', duration: 50, price: 60, category: 'handsfeet', categoryName: 'HANDS & FEET', gender: 'all' }
    ];

    function getCart() {
        try {
            const data = localStorage.getItem('trigeet_studio_cart');
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    }

    function saveCart(cart) {
        try {
            localStorage.setItem('trigeet_studio_cart', JSON.stringify(cart));
        } catch (e) {}
    }

    function isItemInCart(serviceId) {
        const cart = getCart();
        return cart.some(item => item.id === serviceId);
    }

    function toggleCartService(serviceId) {
        let cart = getCart();
        const existingIndex = cart.findIndex(item => item.id === serviceId);
        if (existingIndex > -1) {
            cart.splice(existingIndex, 1);
        } else {
            const serviceObj = SALON_SERVICES.find(s => s.id === serviceId);
            if (serviceObj) {
                cart.push(serviceObj);
            }
        }
        saveCart(cart);
    }

    function removeCartService(serviceId) {
        let cart = getCart();
        cart = cart.filter(item => item.id !== serviceId);
        saveCart(cart);
    }

    // --------------------------------------------------------------------------
    // A. SERVICE.HTML CONTROLLER
    // --------------------------------------------------------------------------
    const servicePageList = document.getElementById('servicePageList');
    const serviceCartSummaryText = document.getElementById('serviceCartSummaryText');

    if (servicePageList) {
        let activeGender = 'all';
        let activeCategory = 'all';

        function renderServicePageList() {
            const cart = getCart();
            if (serviceCartSummaryText) {
                serviceCartSummaryText.textContent = `${cart.length} service${cart.length === 1 ? '' : 's'} in cart`;
            }

            const filteredServices = SALON_SERVICES.filter(service => {
                const matchGender = (activeGender === 'all') || (service.gender === activeGender) || (service.gender === 'all');
                const matchCategory = (activeCategory === 'all') || (service.category === activeCategory);
                return matchGender && matchCategory;
            });

            // Group by category
            const categories = [
                { key: 'skincare', name: 'SKIN CARE' },
                { key: 'hairessentials', name: 'HAIR ESSENTIALS' },
                { key: 'makeup', name: 'MAKEUP' },
                { key: 'handsfeet', name: 'HANDS & FEET' }
            ];

            let html = '';
            categories.forEach(cat => {
                const catServices = filteredServices.filter(s => s.category === cat.key);
                if (catServices.length > 0) {
                    html += `
                        <div class="service-category-block">
                            <h3 class="category-block-title">${cat.name}</h3>
                            ${catServices.map(s => {
                                const booked = isItemInCart(s.id);
                                const genderLabel = s.gender === 'women' ? '[Women]' : (s.gender === 'men' ? '[Men]' : '[All]');
                                return `
                                    <div class="service-item-row">
                                        <div class="service-item-left">
                                            <h4 class="service-item-name">${s.title} <span class="gender-tag">${genderLabel}</span></h4>
                                            <div class="service-item-meta">${s.desc} • ₹${s.price}</div>
                                        </div>
                                        <button class="btn-book-service ${booked ? 'booked' : ''}" data-id="${s.id}">
                                            ${booked ? 'BOOKED' : 'BOOK NOW'}
                                        </button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `;
                }
            });

            if (!html) {
                html = `<p class="empty-cart-msg">No services match the selected filters.</p>`;
            }

            servicePageList.innerHTML = html;

            // Bind click events on buttons
            servicePageList.querySelectorAll('.btn-book-service').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    toggleCartService(id);
                    renderServicePageList();
                });
            });
        }

        // Gender filter clicks
        document.querySelectorAll('#serviceGenderFilters .gender-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#serviceGenderFilters .gender-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeGender = btn.getAttribute('data-gender');
                renderServicePageList();
            });
        });

        // Category filter clicks
        document.querySelectorAll('#serviceCategoryFilters .category-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#serviceCategoryFilters .category-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeCategory = btn.getAttribute('data-category');
                renderServicePageList();
            });
        });

        renderServicePageList();
    }

    // --------------------------------------------------------------------------
    // B. APPOINTMENT.HTML CONTROLLER
    // --------------------------------------------------------------------------
    const appointmentAccordions = document.getElementById('appointmentAccordions');
    const cartCardItemsList = document.getElementById('cartCardItemsList');
    const cartBadgeCount = document.getElementById('cartBadgeCount');

    if (appointmentAccordions) {
        let apptGender = 'all';

        function renderCartCard() {
            const cart = getCart();
            if (cartBadgeCount) {
                cartBadgeCount.textContent = cart.length;
            }

            if (cartCardItemsList) {
                if (cart.length === 0) {
                    cartCardItemsList.innerHTML = `<p class="empty-cart-msg">Your cart is empty. Please add services.</p>`;
                } else {
                    cartCardItemsList.innerHTML = cart.map(item => `
                        <div class="cart-item-row">
                            <div class="cart-item-info">
                                <span class="cart-item-name">${item.title}</span>
                                <span class="cart-item-meta">${item.desc} • ₹${item.price}</span>
                            </div>
                            <button class="btn-remove-cart-item" data-id="${item.id}" aria-label="Remove item">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    `).join('');

                    cartCardItemsList.querySelectorAll('.btn-remove-cart-item').forEach(btn => {
                        btn.addEventListener('click', () => {
                            const id = btn.getAttribute('data-id');
                            removeCartService(id);
                            renderAppointmentPage();
                        });
                    });
                }
            }
        }

        function renderAppointmentPage() {
            renderCartCard();

            const categories = [
                { key: 'skincare', name: 'SKIN CARE' },
                { key: 'hairessentials', name: 'HAIR ESSENTIALS' },
                { key: 'makeup', name: 'MAKEUP' },
                { key: 'handsfeet', name: 'HANDS & FEET' }
            ];

            let html = '';
            categories.forEach((cat, index) => {
                const catServices = SALON_SERVICES.filter(s => {
                    const matchGender = (apptGender === 'all') || (s.gender === apptGender) || (s.gender === 'all');
                    return s.category === cat.key && matchGender;
                });

                if (catServices.length > 0) {
                    const isOpen = (index === 0); // open first accordion by default
                    html += `
                        <div class="accordion-card ${isOpen ? 'open' : ''}" data-category="${cat.key}">
                            <div class="accordion-header">
                                <h3 class="accordion-title">${cat.name}</h3>
                                <i class="fa-solid fa-chevron-down accordion-icon"></i>
                            </div>
                            <div class="accordion-body">
                                ${catServices.map(s => {
                                    const added = isItemInCart(s.id);
                                    const genderLabel = s.gender === 'women' ? '[Women]' : (s.gender === 'men' ? '[Men]' : '[All]');
                                    return `
                                        <div class="accordion-item-row">
                                            <div class="service-item-left">
                                                <h4 class="service-item-name">${s.title} <span class="gender-tag">${genderLabel}</span></h4>
                                                <div class="service-item-meta">${s.desc} • ₹${s.price}</div>
                                            </div>
                                            <button class="btn-add-item ${added ? 'added' : ''}" data-id="${s.id}">
                                                ${added ? 'ADDED' : '+ ADD'}
                                            </button>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `;
                }
            });

            appointmentAccordions.innerHTML = html;

            // Accordion toggle clicks
            appointmentAccordions.querySelectorAll('.accordion-header').forEach(header => {
                header.addEventListener('click', () => {
                    const card = header.parentElement;
                    card.classList.toggle('open');
                });
            });

            // Add button clicks
            appointmentAccordions.querySelectorAll('.btn-add-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = btn.getAttribute('data-id');
                    toggleCartService(id);
                    renderAppointmentPage();
                });
            });
        }

        // Gender filter bar
        document.querySelectorAll('#apptGenderBar .appt-gender-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('#apptGenderBar .appt-gender-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                apptGender = btn.getAttribute('data-gender');
                renderAppointmentPage();
            });
        });

        renderAppointmentPage();
    }

    // --------------------------------------------------------------------------
    // C. CHECKOUT.HTML CONTROLLER
    // --------------------------------------------------------------------------
    const checkoutItemsList = document.getElementById('checkoutItemsList');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutEstDuration = document.getElementById('checkoutEstDuration');
    const checkoutForm = document.getElementById('checkoutForm');
    const thankYouModal = document.getElementById('thankYouModal');
    const modalDetailsBox = document.getElementById('modalDetailsBox');

    if (checkoutItemsList) {
        function renderCheckoutPage() {
            const cart = getCart();

            if (cart.length === 0) {
                checkoutItemsList.innerHTML = `<p class="empty-cart-msg">No services selected. <a href="appointment.html">Click here to add services</a></p>`;
                if (checkoutSubtotal) checkoutSubtotal.textContent = '₹0.00';
                if (checkoutEstDuration) checkoutEstDuration.textContent = '0 Min';
                return;
            }

            let subtotal = 0;
            let totalDuration = 0;

            checkoutItemsList.innerHTML = cart.map(item => {
                subtotal += item.price;
                totalDuration += item.duration;
                return `
                    <div class="checkout-service-item">
                        <div>
                            <h4 class="checkout-item-title">${item.title}</h4>
                            <span class="checkout-item-duration">${item.desc}</span>
                        </div>
                        <span class="checkout-item-price">₹${item.price}.00</span>
                    </div>
                `;
            }).join('');

            if (checkoutSubtotal) checkoutSubtotal.textContent = `₹${subtotal}.00`;
            if (checkoutEstDuration) checkoutEstDuration.textContent = `${totalDuration} Min`;
        }

        renderCheckoutPage();

        // Form submission & modal dialog
        if (checkoutForm) {
            // Set default date to tomorrow
            const dateInput = document.getElementById('custDate');
            if (dateInput) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                dateInput.value = tomorrow.toISOString().split('T')[0];
            }

            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const cart = getCart();

                if (cart.length === 0) {
                    alert('Please select at least one service before confirming booking!');
                    window.location.href = 'appointment.html';
                    return;
                }

                const name = document.getElementById('custName')?.value || 'Valued Customer';
                const phone = document.getElementById('custPhone')?.value || '';
                const date = document.getElementById('custDate')?.value || '';
                const time = document.getElementById('custTime')?.value || '';
                const refId = `#TS-${Math.floor(10000 + Math.random() * 90000)}`;

                let subtotal = 0;
                cart.forEach(item => subtotal += item.price);

                if (modalDetailsBox) {
                    modalDetailsBox.innerHTML = `
                        <div><strong>Booking Ref:</strong> ${refId}</div>
                        <div><strong>Customer Name:</strong> ${name}</div>
                        <div><strong>Mobile:</strong> ${phone}</div>
                        <div><strong>Date & Time:</strong> ${date} at ${time}</div>
                        <div><strong>Total Services:</strong> ${cart.length}</div>
                        <div><strong>Total Amount:</strong> ₹${subtotal}.00</div>
                    `;
                }

                if (thankYouModal) {
                    thankYouModal.classList.add('open');
                }

                // Clear cart after booking
                localStorage.removeItem('trigeet_studio_cart');
            });
        }
    }

    // --------------------------------------------------------------------------
    // D. SCROLL ANIMATION SYSTEM (ANIMATE.CSS + INTERSECTION OBSERVER)
    // --------------------------------------------------------------------------
    const currentPath = window.location.pathname.toLowerCase();
    const isExcludedPage = currentPath.endsWith('404.html') ||
                           currentPath.endsWith('privacy.html') ||
                           currentPath.endsWith('terms.html') ||
                           currentPath.endsWith('thankyou.html');

    if (!isExcludedPage && ('IntersectionObserver' in window)) {
        const isIndexPage = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '' || currentPath.endsWith('\\index.html');

        // Select inner items inside page sections (excluding outer section containers)
        const selectorList = [
            // Section Headers & Titles
            '.service-header', '.features-header', '.gallery-header', '.pricing-header',
            '.feedback-header', '.about-section-heading', '.contact-box-title',
            '.page-hero-title', '.page-hero-desc',
            // Feature Cards & Content Units
            '.service-card', '.gallery-card', '.big-box', '.premier-card', '.review-card',
            '.pricing-card-box', '.form-banner-card', '.welcome-left', '.welcome-right',
            '.about-img-card', '.why-card', '.about-callout-banner',
            '.contact-info-card', '.contact-form-wrapper',
            '.service-category-block', '.accordion-card',
            '.checkout-card', '.checkout-summary-card',
            '.lk-services-content', '.hero-actions'
        ];

        const elementsToAnimate = document.querySelectorAll(selectorList.join(', '));

        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -40px 0px',
            threshold: 0.12
        };

        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.style.opacity = '1';
                    target.classList.add('animate__animated', 'animate__fadeInUp');
                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        elementsToAnimate.forEach(el => {
            scrollObserver.observe(el);
        });

        // Special bounceIn effect ONLY for Index Page Hero Title & Hero Description
        if (isIndexPage) {
            const heroTitle = document.querySelector('.hero-title');
            const heroDesc = document.querySelector('.hero-description');

            [heroTitle, heroDesc].forEach(el => {
                if (el) {
                    el.style.opacity = '0';
                    const heroObserver = new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.style.opacity = '1';
                                entry.target.classList.add('animate__animated', 'animate__flipInX');
                                observer.unobserve(entry.target);
                            }
                        });
                    }, observerOptions);
                    heroObserver.observe(el);
                }
            });
        }
    }
});
