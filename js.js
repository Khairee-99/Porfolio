const biodatanav = document.querySelector('.nav-biodata');
const biosect = document.getElementById('biodata-section');

const expnav = document.querySelector('.nav-experience');
const expsect = document.getElementById('experience-section');

const aboutnav = document.querySelector('.nav-aboutme');
const aboutsect = document.getElementById('intro-section');

aboutnav.addEventListener('click', function() {
    aboutsect.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

biodatanav.addEventListener('click', function() {
    biosect.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

expnav.addEventListener('click', function() {
    expsect.scrollIntoView({ behavior: 'smooth', block: 'center' });
});