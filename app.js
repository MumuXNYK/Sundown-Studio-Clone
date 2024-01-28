// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var fixed = document.getElementById('fixed')
var elems = document.querySelectorAll('.elem')

elems.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        fixed.style.display = 'block'
        var img = e.getAttribute('data-display');
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

