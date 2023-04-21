const answerFAQ1 = document.querySelector('.FAQ__answer_1')
const answerFAQ2 = document.querySelector('.FAQ__answer_2')
const answerFAQ3 = document.querySelector('.FAQ__answer_3')

export function openTheAnswer (event) {
  if (event.target.classList.contains('plus') && event.target.innerHTML==='+') {
      event.target.classList.add('minus')
      if (event.target.classList.contains('plus_1')) {
          event.target.classList.toggle('minus_1')
          answerFAQ1.classList.add('FAQ__answer_open')
          document.querySelector('.plus_1').innerHTML = `–`
      } else if (event.target.classList.contains('plus_2')) {
          event.target.classList.toggle('minus_2')
          answerFAQ2.classList.add('FAQ__answer_open')
          document.querySelector('.plus_2').innerHTML = `–`
      } else if (event.target.classList.contains('plus_3')) {
          event.target.classList.toggle('minus_3')
          answerFAQ3.classList.add('FAQ__answer_open')
          document.querySelector('.plus_3').innerHTML = `–`
      }
      event.stopPropagation()
  }
}

export function closeTheAnswer (event) {
  if (event.target.classList.contains('minus') && event.target.innerHTML==='–') {
      event.target.classList.remove('minus')
      if (event.target.classList.contains('minus_1')) {
      event.target.classList.remove('minus_1')
      answerFAQ1.classList.remove('FAQ__answer_open')
      document.querySelector('.plus_1').innerHTML = `+`
      } else if (event.target.classList.contains('minus_2')) {
          event.target.classList.remove('minus_2')
          answerFAQ2.classList.remove('FAQ__answer_open')
          document.querySelector('.plus_2').innerHTML = `+`
      } else if (event.target.classList.contains('minus_3')) {
          event.target.classList.remove('minus_3')
          answerFAQ3.classList.remove('FAQ__answer_open')
          document.querySelector('.plus_3').innerHTML = `+`
      }
      event.stopPropagation()
  }
}
