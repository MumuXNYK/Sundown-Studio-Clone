

var fixed = document.getElementById('fixed')
var elems = document.querySelectorAll('.elem')

elems.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        fixed.style.display = 'block'
        var img = e.getAttribute('data-display');
        console.log(img);
        fixed.style.backgroundImage = `url(${img})`
    })
    e.addEventListener('mouseleave',function(){
        fixed.style.display = 'none';
    })
})


let heads = document.querySelectorAll('.heads h1')
let imgCont = document.querySelector('.img-cont')
let para = document.querySelector('.one p')

heads.forEach(head => {
    head.addEventListener("click", ()=>{
        removeActive();
        head.classList.add('active')
        let image = head.getAttribute('data-bg')
        imgCont.style.backgroundImage = `url(${image})`
        let p = head.getAttribute('data-p')
        para.textContent = `${p}`
    })
})

function removeActive (){
    heads.forEach(head=>{
        head.classList.remove('active')
    })
}

// swiper js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10
  });


var menu = document.querySelector('nav h3')
var full = document.querySelector('#fullscr')
var navimg = document.querySelector('nav img')
var flag = 0

menu.addEventListener('click',()=>{
    if (flag == 0) {
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
        
    } else {
        full.style.top = "-120%"
        navimg.style.opacity = 1
        flag = 0
    }
})


var loader = document.querySelector('.loader')
 setTimeout(() => {
    loader.style.top =  '-100%'
 }, 3800);