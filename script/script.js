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
});
