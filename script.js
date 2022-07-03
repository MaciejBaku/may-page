const icon =  document.querySelector('.fa-bars');
const nav =  document.querySelector('.nav-list');

icon.onclick = () =>{
  icon.classList.toggle('fa-times');
  nav.classList.toggle('active');
}

window.onscroll = () =>{
  icon.classList.remove('fa-times');
  nav.classList.remove('active');
}