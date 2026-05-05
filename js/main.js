(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const projectImages = document.querySelectorAll(".project-image");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector("#gallery-lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const lightboxClose = document.querySelector(".lightbox-close");
    const scrollTopButton = document.querySelector("#scroll-top");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (!mainNav || !menuToggle) {
                return;
            }
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter || "all";

            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            projectCards.forEach((card) => {
                const category = card.dataset.project;
                const isVisible = filter === "all" || category === filter;
                card.style.display = isVisible ? "grid" : "none";
            });
        });
    });

    if (lightbox && lightboxImage && lightboxClose) {
        const openLightbox = (src, alt) => {
            lightboxImage.setAttribute("src", src);
            lightboxImage.setAttribute("alt", alt || "Hinh anh");
            lightbox.classList.add("open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        };

        const closeLightbox = () => {
            lightbox.classList.remove("open");
            lightbox.setAttribute("aria-hidden", "true");
            // Delay reset to let close transition finish smoothly.
            setTimeout(() => {
                if (!lightbox.classList.contains("open")) {
                    lightboxImage.setAttribute("src", "");
                    lightboxImage.setAttribute("alt", "");
                }
            }, 260);
            document.body.style.overflow = "";
        };

        galleryItems.forEach((item) => {
            item.addEventListener("click", () => {
                const fullSrc = item.dataset.full;
                const imageAlt = item.dataset.alt || "Ảnh cá nhân";

                if (!fullSrc) {
                    return;
                }

                openLightbox(fullSrc, imageAlt);
            });
        });

        projectImages.forEach((image) => {
            image.addEventListener("click", () => {
                const fullSrc = image.dataset.full || image.getAttribute("src");
                const imageAlt = image.dataset.alt || image.getAttribute("alt") || "Project image";
                openLightbox(fullSrc, imageAlt);
            });
        });

        lightboxClose.addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && lightbox.classList.contains("open")) {
                closeLightbox();
            }
        });
    }

    if (scrollTopButton) {
        const toggleScrollTop = () => {
            const shouldShow = window.scrollY > 380;
            scrollTopButton.classList.toggle("show", shouldShow);
        };

        window.addEventListener("scroll", toggleScrollTop);
        toggleScrollTop();

        scrollTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
})();
