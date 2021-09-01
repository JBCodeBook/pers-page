console.log("in console1");


const open = document.getElementById('about');
      console.log(open);
const modal_container = document.getElementById('modal_container');
      console.log(modal_container);
const close = document.getElementById('close');
console.log(close);

open.addEventListener('click', () =>{
  console.log("test");
  modal_container.classList.add('show');
  console.log("test");
});

close.addEventListener('click', () =>{
  modal_container.classList.remove('show');
});