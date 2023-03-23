//Event on Scroll

function scrollEvents() {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.descrip-btn-item');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            const linkHref = link.getAttribute('href')?.replace('#', '');
            if (linkHref === entry.target.id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });
}

scrollEvents();
