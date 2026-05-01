// UETTO-HUB Main JavaScript

// Page navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNav();
});

function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Check authentication for protected pages
function checkAuth() {
    const protectedPages = ['annuaire.html', 'ressources.html', 'dashboard.html', 'admin.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        if (!localStorage.getItem('uetto_authenticated')) {
            window.location.href = 'login.html';
        }
    }
}

checkAuth();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Session timeout (optional - logout after 1 hour)
const SESSION_TIMEOUT = 3600000; // 1 hour

function initSessionTimeout() {
    if (localStorage.getItem('uetto_authenticated')) {
        const loginTime = parseInt(localStorage.getItem('uetto_login_time') || 0);
        const now = new Date().getTime();
        
        if (now - loginTime > SESSION_TIMEOUT) {
            localStorage.removeItem('uetto_authenticated');
            localStorage.removeItem('uetto_admin');
            alert('Votre session a expiré. Veuillez vous reconnecter.');
            window.location.href = 'login.html';
        }
    }
}

setInterval(initSessionTimeout, 60000); // Check every minute

// Console welcome message
console.log('%c UETTO-HUB v1.0', 'font-size: 20px; font-weight: bold; color: #2563EB;');
console.log('%c Bienvenue! 🎉', 'font-size: 16px; color: #F97316;');
console.log('Plateforme de la communauté tchadienne étudiante à Tokat');