var a=document.querySelector(".slider__toggle"),t=document.querySelector(".slider"),s=!1;a.addEventListener("click",()=>{s?(t.classList.toggle("slider--after"),t.classList.toggle("slider--before")):(s=!0,t.classList.add("slider--after"))});var i=document.querySelector(".navigation"),n=document.querySelector(".main-header__button"),r=document.querySelector(".main-header__item--open"),l=document.querySelector(".main-header__item--close");n.addEventListener("click",e=>{e.preventDefault(),i.classList.add("navigation__open")});n.addEventListener("click",e=>{e.preventDefault(),r.classList.add("navigation__close")});n.addEventListener("click",e=>{e.preventDefault(),l.classList.add("navigation__open")});