
const projectLinks = document.querySelectorAll('.project a');

projectLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const projectName = link.parentNode.querySelector('h3').textContent;
    alert(`Você clicou no projeto: ${projectName}`);
  });
});
