import './style.css'
import './styles/header.css'
import './styles/main.css'
import './styles/footer.css'
import {addStageLinkActive} from './scripts/changeStageProgress'
import {openTheAnswer, closeTheAnswer} from './scripts/answer'
import {scrollFunction, topFunction} from './scripts/scroll'

const stageList = document.querySelector('.stage__list')
const FAQs = document.querySelector('.FAQs')
const toUpButton = document.querySelector('.to_top')


stageList.addEventListener('click', addStageLinkActive)
FAQs.addEventListener('click', openTheAnswer)
window.addEventListener('click', closeTheAnswer)
window.addEventListener('scroll', scrollFunction)
toUpButton.addEventListener('click', topFunction)


// function getInputValue (event) {
//     if (event.target.classList.contains('arrow')) {
//         console.log(event.target.parentNode)
//         // console.log(document.querySelector('.main__input_email').value)
//     }
// } 
// window.addEventListener('click', getInputValue)