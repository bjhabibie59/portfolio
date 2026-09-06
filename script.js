// Load HTML Partials and Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Restore theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'hacker') {
        document.body.classList.add('hacker-mode');
        const btn = document.getElementById('themeToggleBtn');
        if (btn) btn.innerText = 'MODE: HACKER';
    }

    initCustomCursor();
    await loadSections();
    initScrollReveal();
});

// Custom Retro Terminal Cursor Logic
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Event delegation for interactive elements (works on dynamically loaded content)
    document.addEventListener('mouseover', (e) => {
        if (e.target.matches('a, button, input, textarea, .profile-frame')) {
            cursor.style.transform = 'scale(1.5)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.matches('a, button, input, textarea, .profile-frame')) {
            cursor.style.transform = 'scale(1)';
        }
    });
}

function toggleTheme() {
    document.body.classList.toggle('hacker-mode');
    const isHacker = document.body.classList.contains('hacker-mode');
    localStorage.setItem('theme', isHacker ? 'hacker' : 'vellum');
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.innerText = isHacker ? 'MODE: HACKER' : 'MODE: VELLUM';
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

// Toggle Live JSON API Response Viewer
function toggleApiResponse(id) {
    const box = document.getElementById(id);
    if (box) {
        box.classList.toggle('active');
    }
}

async function loadSections() {
    try {
        const aboutRes = await fetch('about.html');
        if (aboutRes.ok) {
            document.getElementById('about-placeholder').innerHTML = await aboutRes.text();
        }

        const contactRes = await fetch('contact.html');
        if (contactRes.ok) {
            document.getElementById('contact-placeholder').innerHTML = await contactRes.text();
        }
    } catch (err) {
        console.error('Error loading sections:', err);
    }
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// Modal Functions
function openModal(title, desc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('customModal').classList.add('active');
}

function closeModal() {
    document.getElementById('customModal').classList.remove('active');
}

function closeModalOnOutside(event) {
    if(event.target === document.getElementById('customModal')) {
        closeModal();
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    openModal('PESAN TERKIRIM', 'Praankkk!!!, Ini cuma sekadar alert pesan bohongan hehe :D.');
    event.target.reset();
}

// Terminal Interactive Logic
const commandsInfo = {
    'help': 'Perintah tersedia:\n - help: Menampilkan bantuan\n - about: Info singkat tentang saya\n - projects: Daftar proyek web/backend\n - skills: Keahlian utama\n - contact: Info kontak & email\n - ukm / join: Status pendaftaran UKM\n - jack: Info maskot Jack\n - utm: Info Universitas Trunojoyo Madura\n - triplec: Info UKM Triple-C\n - whoami: Identitas sesi saat ini\n - ping: Check status server tiruan\n - clear: Membersihkan layar terminal',
    'about': 'Baharuddin Jusuf Habibie - Junior Backend Developer.',
    'projects': '1. Magnets API (Magang SMK - Presensi RFID & Geofencing)\n2. Task Management API (SOLID Principles & Repository Pattern)',
    'skills': 'Laravel, MySQL, API Development, Problem Solving, SOLID Principles, Git',
    'contact': 'Email: habibieagain@gmail.com | Lokasi: Bangkalan, Jawa Timur',
    'ukm': '[SUCCESS] Status: Pendaftar Divisi Website Development siap bergabung!\nKeahlian: Laravel & Web Architecture.\nPesan untuk Mentor: "Mohon diterima kak, siap berproses dan berkarya bersama #SalamCreative #SemangatCreative!"',
    'join': '[SUCCESS] Status: Pendaftar Divisi Website Development siap bergabung!\nKeahlian: Laravel & Web Architecture.\nPesan untuk Mentor: "Mohon diterima kak, siap berproses dan berkarya bersama #SalamCreative #SemangatCreative!"',
    'jack': 'Jack adalah maskot resmi UKM Creative Computer Club (Triple-C) UTM. Wadah belajar teknologi & kreatif digital sejak 1999! #SalamCreative #SemangatCreative',
    'utm': 'Universitas Trunojoyo Madura (UTM) - Kampus negeri di Bangkalan, Madura.',
    'triplec': 'UKM Creative Computer Club (Triple-C) UTM (Est. 1999):\nUnit kegiatan mahasiswa di bidang teknologi & kreatif digital.\nMencakup: Web Dev, Desain Grafis, Fotografi, Videografi, UI/UX, hingga Writing Skill.\n#SalamCreative #SemangatCreative',
    'whoami': 'guest@habibie-portfolio-user',
    'ping': 'PONG! Latency: 12ms. Database connection: OK.'
};

let currentJackIndex = 1;
function rotateJackMascot() {
    currentJackIndex = currentJackIndex >= 3 ? 1 : currentJackIndex + 1;
    const imgEl = document.getElementById('jackMascotImg');
    const quotes = {
        1: "Halo! Saya Jack 1 dari UKM Creative Computer Club (Triple-C) UTM (Est. 1999). Di Triple-C kita belajar Web Dev, Desain, Fotografi, Videografi, UI/UX, hingga Writing lho!",
        2: "Saya Jack 2! Kandidat Baharuddin Jusuf Habibie ini mendaftar di Divisi Website Development (spesialisasi Laravel & SOLID), siap berkolaborasi dengan divisi kreatif lainnya di Triple-C!",
        3: "Saya Jack 3! Semangat belajar dan berorganisasi bersama keluarga besar Triple-C. #SalamCreative #SemangatCreative! Loloskan Habibie di KC Website yaa, Hehe :D"
    };
    if (imgEl) {
        if (currentJackIndex === 1) {
            imgEl.src = "assets/tripleC/Salinan Jack 1 (1).png";
        } else if (currentJackIndex === 2) {
            imgEl.src = "assets/tripleC/Salinan Jack 2 (1).png";
        } else {
            imgEl.src = "assets/tripleC/Salinan Jack 3.png";
        }
    }
    openModal(`MASKOT JACK ${currentJackIndex} (TRIPLE-C)`, quotes[currentJackIndex]);
}

function handleTerminalInput(event) {
    // Only execute on Enter key
    if (event.key !== 'Enter' && event.keyCode !== 13) return;

    const terminalInput = document.getElementById('terminalInput');
    const terminalOutput = document.getElementById('terminalOutput');
    if (!terminalInput || !terminalOutput) return;

    const cmd = terminalInput.value.trim().toLowerCase();
    if (cmd === '') return;

    // Echo command
    const promptLine = document.createElement('div');
    promptLine.innerHTML = `<span style="color: #ffbd2e;">guest@habibie:~#</span> ${escapeHtml(terminalInput.value)}`;
    terminalOutput.appendChild(promptLine);

    if (cmd === 'clear') {
        terminalOutput.innerHTML = '<div>[System Boot] Selamat datang di Terminal Milik Habibie (Divisi Website Development - UKM Triple-C UTM).</div><div>Ketik <span style="color: #ffbd2e;">help</span> untuk melihat daftar perintah. #SalamCreative #SemangatCreative</div><br>';
    } else if (commandsInfo[cmd]) {
        const respLine = document.createElement('div');
        respLine.style.color = '#ffffff';
        respLine.style.whiteSpace = 'pre-line';
        respLine.style.margin = '0.3rem 0 0.8rem 0';
        respLine.textContent = commandsInfo[cmd];
        terminalOutput.appendChild(respLine);
    } else {
        const errLine = document.createElement('div');
        errLine.style.color = '#ff5f56';
        errLine.style.margin = '0.3rem 0 0.8rem 0';
        errLine.textContent = `Perintah tidak dikenal: "${cmd}". Ketik 'help' untuk daftar perintah.`;
        terminalOutput.appendChild(errLine);
    }

    terminalInput.value = '';
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
