const hamburger = document.querySelector('.header .nav-bar .nav-list .humburger');
const   mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container')

 
hamburger.addEventlistener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    
}); 
document.activeElement('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.computedStyle.backgroudcolor = '#293323c';
    } else{
        header.style.backgroudcolor = 'transparent';
    }
})       