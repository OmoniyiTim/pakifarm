const menuBtn= document.querySelector(".menu-btn");
// console.log(menuBtn);
let menuOpen= false;
menuBtn.addEventListener('click',() =>{
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
        
    } else{
        menuBtn.classList.remove('open')
        menuOpen=false;
    }
}); 


$(window).load(function() {
    $('.preloader').fadeOut('slow');
 });