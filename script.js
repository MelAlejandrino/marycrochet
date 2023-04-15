const container = document.querySelector('.container');
const pages = document.querySelectorAll('.page');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const pageD = Array.from(container.children);
const tulip = document.querySelector('.container-break');
let currentPage = 0;

tulip.addEventListener('click', () => {
  console.log("working");
  const upper = document.getElementById('header');
  upper.scrollIntoView(
    { behavior: 'smooth' }
  );
});
container.addEventListener('scroll', () => {
  const pageIndex = Math.round(container.scrollLeft / window.innerWidth);
  if (pageIndex !== currentPage) {
    currentPage = pageIndex;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
});

const childWidth = pages[0].offsetWidth;

prevBtn.addEventListener('click', () => {
  console.log('test')
  if (currentPage > 0) {
    currentPage--;
    container.scrollTo({
      top: 0,
      left: container.clientWidth * currentPage,
      behavior: 'smooth'
    });
  }
});


nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    container.scrollTo({
      top: 0,
      left: container.clientWidth * currentPage,
      behavior: 'smooth'
    });
  }
});

container.addEventListener('scroll', () => {
  const pageIndex = Math.round(container.scrollLeft / childWidth);
  if (pageIndex !== currentPage) {
    currentPage = pageIndex;
  }
});



