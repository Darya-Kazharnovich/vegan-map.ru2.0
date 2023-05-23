import './style.css'
import './styles/header.css'
import './styles/header768.css'
import './styles/main.css'
import './styles/main768.css'
import './styles/footer.css'
import {addStageLinkActive} from './scripts/changeStageProgress'
import {openTheAnswer} from './scripts/answer'
import {scrollFunction, topFunction} from './scripts/scroll'
import { addEmail } from './scripts/addEmail'

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
