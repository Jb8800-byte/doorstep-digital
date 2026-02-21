/* ============================================================
   La Costa — Interactions
   ============================================================ */

(function () {
    'use strict';

    // ---- DOM refs ----
    const navbar     = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu    = document.getElementById('navMenu');
    const form       = document.getElementById('reservationForm');
    const modal      = document.getElementById('confirmModal');
    const modalClose = document.getElementById('modalClose');

    // ---- Mobile menu ----
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            const open = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(open));
            document.body.style.overflow = open ? 'hidden' : '';
        });

        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', function (e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMenu();
            }
        });
    }

    function closeMenu() {
        if (!navMenu) return;
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    // ---- Navbar scroll state ----
    function onScroll() {
        if (!navbar) return;
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            var offset = navbar ? navbar.offsetHeight + 8 : 0;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });

    // ---- Scroll-reveal (IntersectionObserver) ----
    var revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealElements.length) {
        var staggerMap = new Map();

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;

                // Stagger siblings that enter at the same frame
                var parent = entry.target.parentElement;
                var siblings = parent ? parent.querySelectorAll('.reveal') : [];
                var idx = Array.prototype.indexOf.call(siblings, entry.target);

                var delay = 0;
                if (siblings.length > 1 && idx > 0) {
                    // Only stagger if the parent hasn't started its batch yet
                    if (!staggerMap.has(parent)) {
                        staggerMap.set(parent, Date.now());
                    }
                    var elapsed = Date.now() - staggerMap.get(parent);
                    if (elapsed < 400) {
                        delay = idx * 100;
                    }
                }

                setTimeout(function () {
                    entry.target.classList.add('visible');
                }, delay);

                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -60px 0px'
        });

        revealElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything
        revealElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // ---- Reservation form ----
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validity check
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Show confirmation modal
            if (modal) {
                modal.hidden = false;
                // Force reflow before adding class for transition
                void modal.offsetHeight;
                modal.classList.add('active');
            }

            form.reset();
        });
    }

    // ---- Modal close ----
    function hideModal() {
        if (!modal) return;
        modal.classList.remove('active');
        setTimeout(function () {
            modal.hidden = true;
        }, 350);
    }

    if (modalClose) {
        modalClose.addEventListener('click', hideModal);
    }

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) hideModal();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                hideModal();
            }
        });
    }

    // ---- Gallery lightbox placeholder ----
    document.querySelectorAll('.gallery-item').forEach(function (item) {
        item.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });
})();
