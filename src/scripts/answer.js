const answerFAQ1 = document.querySelector('.FAQ__answer_1')
const answerFAQ2 = document.querySelector('.FAQ__answer_2')
const answerFAQ3 = document.querySelector('.FAQ__answer_3')
const answerFAQ4 = document.querySelector('.FAQ__answer_4')

export function openTheAnswer (event) {
    if (event.target.parentNode.classList.contains('FAQ_1') && !event.target.classList.contains('FAQ__answer_open')) {
        answerFAQ1.classList.toggle('FAQ__answer_open')
        answerFAQ1.classList.contains('FAQ__answer_open')? document.querySelector('.plus_1').innerHTML = `-` : document.querySelector('.plus_1').innerHTML = `+`
    } else if (event.target.parentNode.classList.contains('FAQ_2') && !event.target.classList.contains('FAQ__answer_open')) {
        answerFAQ2.classList.toggle('FAQ__answer_open')
        answerFAQ2.classList.contains('FAQ__answer_open')? document.querySelector('.plus_2').innerHTML = `-` : document.querySelector('.plus_2').innerHTML = `+`
    } else if (event.target.parentNode.classList.contains('FAQ_3') && !event.target.classList.contains('FAQ__answer_open')) {
        answerFAQ3.classList.toggle('FAQ__answer_open')
        answerFAQ3.classList.contains('FAQ__answer_open')? document.querySelector('.plus_3').innerHTML = `-` : document.querySelector('.plus_3').innerHTML = `+`
    } else if (event.target.parentNode.classList.contains('FAQ_4') && !event.target.classList.contains('FAQ__answer_open')) {
        answerFAQ4.classList.toggle('FAQ__answer_open')
        answerFAQ4.classList.contains('FAQ__answer_open')? document.querySelector('.plus_4').innerHTML = `-` : document.querySelector('.plus_4').innerHTML = `+`
    }
}
