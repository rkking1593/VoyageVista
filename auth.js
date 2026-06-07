// ── LOGIN PAGE ──
const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const email = document.getElementById('login-email');
        const password = document.getElementById('login-password');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        let valid = true;

        // Reset errors
        emailError.textContent = '';
        passwordError.textContent = '';
        email.classList.remove('error');
        password.classList.remove('error');

        // Validate
        if (!email.value.trim()) {
            emailError.textContent = '⚠️ Email cannot be empty.';
            email.classList.add('error');
            valid = false;
        } else if (!email.value.includes('@')) {
            emailError.textContent = '⚠️ Please enter a valid email address.';
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
            loginBtn.textContent = 'Logging in...';
            loginBtn.disabled = true;
            setTimeout(() => {
                window.location.href = 'Home.html';
            }, 1500);
        }
    });
}

// ── SIGNUP PAGE ──
const signupBtn = document.getElementById('signup-btn');
if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        const name = document.getElementById('signup-name');
        const email = document.getElementById('signup-email');
        const mobile = document.getElementById('signup-mobile');
        const password = document.getElementById('signup-password');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('signup-email-error');
        const mobileError = document.getElementById('mobile-error');
        const passwordError = document.getElementById('signup-password-error');
        let valid = true;

        // Reset errors
        [nameError, emailError, mobileError, passwordError].forEach(e => e.textContent = '');
        [name, email, mobile, password].forEach(i => i.classList.remove('error'));

        // Validate name
        if (!name.value.trim()) {
            nameError.textContent = '⚠️ Full name cannot be empty.';
            name.classList.add('error');
            valid = false;
        }

        // Validate email
        if (!email.value.trim()) {
            emailError.textContent = '⚠️ Email cannot be empty.';
            email.classList.add('error');
            valid = false;
        } else if (!email.value.includes('@')) {
            emailError.textContent = '⚠️ Please enter a valid email address.';
            email.classList.add('error');
            valid = false;
        }

        // Validate mobile
        if (!mobile.value.trim()) {
            mobileError.textContent = '⚠️ Mobile number cannot be empty.';
            mobile.classList.add('error');
            valid = false;
        } else if (mobile.value.length < 10) {
            mobileError.textContent = '⚠️ Please enter a valid mobile number.';
            mobile.classList.add('error');
            valid = false;
        }

        // Validate password
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
            signupBtn.textContent = 'Creating Account...';
            signupBtn.disabled = true;
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        }
    });
}