/// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('.navigation-bar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('open');
});

document.querySelectorAll('.navigation-bar a').forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('open');
    });
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ── FORM VALIDATION ──
const contactBtn = document.querySelector('.contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        const name = document.querySelector('.contact-form input[type="text"]').value.trim();
        const email = document.querySelector('.contact-form input[type="email"]').value.trim();
        if (!name || !email) {
            showToast('❌ Please fill in all fields!');
            return;
        }
        if (!email.includes('@')) {
            showToast('❌ Please enter a valid email!');
            return;
        }
        showToast('✅ Thanks! We will be in touch soon.');
    });
}

// ── TOAST ──
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.dest-card, .why-card, .package-card, .test-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ── BUTTON ACTIONS ──
const bookTripBtn = document.querySelector('.button-one');
if (bookTripBtn) {
    bookTripBtn.addEventListener('click', () => {
        document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
    });
}

const whyUsBtn = document.querySelector('.button-two');
if (whyUsBtn) {
    whyUsBtn.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
}

document.querySelectorAll('.dest-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.closest('.dest-card, .package-card')
            ?.querySelector('h3')?.textContent.trim();
        showToast(`✈️ Booking for ${name} — Coming Soon!`);
    });
});

// ── BACK TO TOP ──
const backToTop = document.createElement('button');
backToTop.id = 'back-to-top';
backToTop.innerHTML = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});