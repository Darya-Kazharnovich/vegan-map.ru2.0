import './style.css'
import './styles/header.css'
import './styles/header-768.css'
import './styles/header-375.css'
import './styles/main.css'
import './styles/main-768.css'
import './styles/main-375.css'
import './styles/footer.css'
import './styles/footer-768.css'
import './styles/footer-375.css'
import {addStageLinkActive} from './scripts/changeStageProgress'
import {openTheAnswer} from './scripts/answer'
import {scrollFunction, topFunction} from './scripts/scroll'
import { addEmail } from './scripts/addEmail'
import { openBurgerMenu } from './scripts/burger-menu'
import { closeBurgerMenu } from './scripts/burger-menu'

const stageList = document.querySelector('.stage__list')
const FAQs = document.querySelector('.FAQs')
const toUpButton = document.querySelector('.to_top')
const forms = document.getElementsByClassName('email-form')



stageList.addEventListener('click', addStageLinkActive)
FAQs.addEventListener('click', openTheAnswer)
window.addEventListener('scroll', scrollFunction)
toUpButton.addEventListener('click', topFunction)


Array.from(forms).forEach(element => {
  element.addEventListener('submit', addEmail)
});

window.addEventListener('click', openBurgerMenu)
window.addEventListener('click', closeBurgerMenu)

// window.addEventListener('click' , (e) => {
//   console.log(e.target)
// })