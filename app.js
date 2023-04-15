const buttons = document.querySelectorAll('.buttons');

window.addEventListener('resize', () => {
  if (window.matchMedia("(min-width: 41em)").matches) {
    buttons.forEach(button => {
      // button.removeAttribute('hidden');
    });
  } else {
    buttons.forEach(button => {
      // button.setAttribute('hidden', '');
    });
  }
});

if (window.matchMedia("(min-width: 41em)").matches) {
    buttons.forEach(button => {
      // button.removeAttribute('hidden');
    });
  } else {
    buttons.forEach(button => {
      // button.setAttribute('hidden', '');
    });
  }
