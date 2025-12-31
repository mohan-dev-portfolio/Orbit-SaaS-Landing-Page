document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        const isOpen = nav.classList.contains('nav-open');

        // Toggle Icon
        mobileBtn.innerHTML = isOpen
            ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
            : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';

        // Inject actions into mobile menu if they don't exist
        if (isOpen && !document.querySelector('.mobile-actions-container')) {
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'mobile-actions-container';
            actionsDiv.innerHTML = `
                <a href="#" class="nav-link" style="text-align:center;">Sign In</a>
                <a href="#" class="btn btn-primary" style="width:100%;">Get Started</a>
            `;
            navLinks.appendChild(actionsDiv);
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-open');
            mobileBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others (except the reveal class logic)
            // Note: We need to be careful not to conflict with the 'active' class used for reveals.
            // The FAQ JS uses 'active' for open state, and 'reveal' logic uses 'active' for visibility.
            // I'll change the FAQ JS to use 'open' instead of 'active' to avoid conflict.
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('open');
            });

            // Toggle current
            if (!isActive && !item.classList.contains('open')) {
                item.classList.add('open');
            }
        });
    });

    // NOTE: Updated CSS for FAQ to match the new 'open' class
    // Just for the JS block below, I will handle the style injection for the FAQ fix.
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .faq-item.open .faq-answer { max-height: 200px; }
        .faq-item.open .faq-icon { transform: rotate(45deg); }
    `;
    document.head.appendChild(styleSheet);


    // Reveal on Scroll Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the element is fully in view
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
