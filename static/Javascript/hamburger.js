burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')
search=document.querySelector('.search')
searcharea=document.querySelector('.vissible')




burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');   
})

search.addEventListener('click',()=>{
    searcharea.classList.toggle('vissible')

})

let Home=document.getElementById('home'); 
let events=document.getElementById('events'); 
let joinus=document.getElementById('joinus'); 
let aboutus=document.getElementById('aboutus'); 
let contactus=document.getElementById('contactus');  

function activateHome(){
    Home.classList.add('active')
}
