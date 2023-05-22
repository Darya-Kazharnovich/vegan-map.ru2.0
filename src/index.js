import './style.css'
import './styles/header.css'
import './styles/main.css'
import './styles/footer.css'
import {addStageLinkActive} from './scripts/changeStageProgress'
import {openTheAnswer} from './scripts/answer'
import {scrollFunction, topFunction} from './scripts/scroll'

const stageList = document.querySelector('.stage__list')
const FAQs = document.querySelector('.FAQs')
const toUpButton = document.querySelector('.to_top')


stageList.addEventListener('click', addStageLinkActive)
FAQs.addEventListener('click', openTheAnswer)
window.addEventListener('scroll', scrollFunction)
toUpButton.addEventListener('click', topFunction)


const scriptURL = 'https://script.google.com/macros/s/AKfycbyLgJ2Xh5_a_JnvX-T-uks5E33rxEFjAV75PuhQDa0wcv9Gy2Q4yqZ8RjPad8QQJ-fCww/exec'
const form = document.getElementById('email-form')

form.addEventListener('submit', async e => {
  e.preventDefault()
    await fetch(scriptURL, { 
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


// email: d@mail.ru
// body: `email : ${await document.getElementById('email').value}`})
