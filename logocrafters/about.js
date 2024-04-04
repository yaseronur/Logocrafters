const toggleButton = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('open');
  menuItems.classList.toggle('open');
});