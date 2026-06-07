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

// ── AUTH MODAL ──
const loginModal = document.getElementById('login-modal');
const loginLink = document.querySelector('.login a');

// Open modal on Login click
if (loginLink) {
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('active');
        navBar.classList.remove('open');
    });
}

// Close modal on overlay click
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
});

// Switch between login and signup
document.getElementById('go-signup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('go-login').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Login validation
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    let valid = true;

    emailError.textContent = '';
    passwordError.textContent = '';
    email.classList.remove('error');
    password.classList.remove('error');

    if (!email.value.trim()) {
        emailError.textContent = '⚠️ Email cannot be empty.';
        email.classList.add('error');
        valid = false;
    } else if (!email.value.includes('@')) {
        emailError.textContent = '⚠️ Please enter a valid email.';
        email.classList.add('error');
        valid = false;
    }

    if (!password.value.trim()) {
        passwordError.textContent = '⚠️ Password cannot be empty.';
        password.classList.add('error');
        valid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = '⚠️ Password must be at least 6 characters.';
        password.classList.add('error');
        valid = false;
    }

    if (valid) {
        showToast('✅ Logged in successfully!');
        setTimeout(() => loginModal.classList.remove('active'), 1500);
    }
});

// Signup validation
document.getElementById('signup-btn').addEventListener('click', () => {
    const name = document.getElementById('signup-name');
    const email = document.getElementById('signup-email');
    const mobile = document.getElementById('signup-mobile');
    const password = document.getElementById('signup-password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('signup-email-error');
    const mobileError = document.getElementById('mobile-error');
    const passwordError = document.getElementById('signup-password-error');
    let valid = true;

    [nameError, emailError, mobileError, passwordError].forEach(e => e.textContent = '');
    [name, email, mobile, password].forEach(i => i.classList.remove('error'));

    if (!name.value.trim()) {
        nameError.textContent = '⚠️ Full name cannot be empty.';
        name.classList.add('error');
        valid = false;
    }
    if (!email.value.trim()) {
        emailError.textContent = '⚠️ Email cannot be empty.';
        email.classList.add('error');
        valid = false;
    } else if (!email.value.includes('@')) {
        emailError.textContent = '⚠️ Please enter a valid email.';
        email.classList.add('error');
        valid = false;
    }
    if (!mobile.value.trim()) {
        mobileError.textContent = '⚠️ Mobile number cannot be empty.';
        mobile.classList.add('error');
        valid = false;
    } else if (mobile.value.length < 10) {
        mobileError.textContent = '⚠️ Please enter a valid 10-digit number.';
        mobile.classList.add('error');
        valid = false;
    }
    if (!password.value.trim()) {
        passwordError.textContent = '⚠️ Password cannot be empty.';
        password.classList.add('error');
        valid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = '⚠️ Password must be at least 6 characters.';
        password.classList.add('error');
        valid = false;
    }

    if (valid) {
        showToast('🎉 Account created! Please login.');
        setTimeout(() => {
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        }, 1500);
    }
});