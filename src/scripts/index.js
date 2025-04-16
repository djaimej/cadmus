window.onload = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        toggleTheme('dark');
    }
}

document.querySelector('.navbar-menu')?.addEventListener('click', () => {
    document.querySelector('.navbar-nav')?.classList.toggle('open');
});

document.querySelector('.color-btn')?.addEventListener('click', (ev) => {
    const current = ev.target.classList[1];
    toggleTheme(current);
});

function toggleTheme(current) {
    const elements = document.querySelectorAll(`.${current}`); 
    if (elements.length) {
        const newT = current === 'dark' ? 'light' : 'dark';
        elements.forEach(e => e.classList.add(newT));
        elements.forEach(e => e.classList.toggle(current));
        localStorage.setItem('theme', newT);
    }
}