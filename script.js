window.addEventListener('load', () => {
  const buttons = document.querySelectorAll('button');
  let maxWidth = 0;

  buttons.forEach(btn => {
    const width = btn.scrollWidth;
    if (width > maxWidth) maxWidth = width;
  });

  buttons.forEach(btn => btn.style.width = maxWidth + 'px');
});


const buttonSectionMap = {
  profileButton: 'profileView',
  educationButton: 'educationView',
  workExpButton: 'workExpView',
  projectsButton: 'projectsView',
  contactButton: 'contactView'
};

Object.entries(buttonSectionMap).forEach(([buttonId, sectionId]) => {
  const button = document.getElementById(buttonId);
  button?.addEventListener('click', () => scrollToSection(sectionId));
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerHeight / 2 - section.offsetHeight / 2;
    window.scrollTo({ top: sectionTop - offset, behavior: 'smooth' });
  }
}

