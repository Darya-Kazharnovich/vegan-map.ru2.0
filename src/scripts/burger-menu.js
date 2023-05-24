export function openBurgerMenu (event) {
   if (event.target.classList.contains('burger') || event.target.classList.contains('burger__line')) {
    document.querySelector('.burger').classList.toggle('active')
    document.querySelector('.navigation__menu').classList.toggle('active')
    document.querySelector('.overlay').classList.toggle('active')
    document.getElementsByTagName('html')[0].classList.toggle('hidden')
    }
}

export function closeBurgerMenu (event) {
    if ( (event.target.classList.contains('navigation__menu__link') 
    || event.target.classList.contains('overlay')
    || event.target === document.getElementsByTagName('nav')[0]) 
    && document.querySelector('.burger').classList.contains('active')) {

        document.querySelector('.burger').classList.remove('active')
        document.querySelector('.navigation__menu').classList.remove('active')
        document.querySelector('.overlay').classList.remove('active')
        document.getElementsByTagName('html')[0].classList.remove('hidden')
    }
}