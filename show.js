const open = document.getElementById('about');
const modal_container = document.getElementById('modal_container_about');
const close = document.getElementById('close');

open.addEventListener('click', () =>{
  modal_container.classList.add('show');
});

close.addEventListener('click', () =>{
  modal_container.classList.remove('show');
});
