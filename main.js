const searchIcon = document.querySelector('.search-icon');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', function(){
  searchContainer.classList.toggle('active');
});