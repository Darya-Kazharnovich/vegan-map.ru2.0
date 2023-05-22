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

// window.addEventListener("load", function() {
//     const form = document.getElementById('email-form');
//     form.addEventListener("submit", function(e) {
//       e.preventDefault();
//       const data = new FormData(form);
//       const action = form.action;
//       console.log(action)
//       fetch(action, {
//         method: 'POST',
//         body: data,
//       })
//       .then(() => {
//         alert("Success!");
//       })
//     });
//   });

const scriptURL = 'https://script.google.com/macros/s/AKfycbyLgJ2Xh5_a_JnvX-T-uks5E33rxEFjAV75PuhQDa0wcv9Gy2Q4yqZ8RjPad8QQJ-fCww/exec'
const form = document.forms['email-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})