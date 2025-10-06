const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // stops observing after showing once
    }
  });
}, {
  threshold: 0.2 // trigger when 20% of the element is visible
});

faders.forEach(fader => {
  observer.observe(fader);
});
