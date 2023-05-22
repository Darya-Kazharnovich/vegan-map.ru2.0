const scriptURL = 'https://script.google.com/macros/s/AKfycbyLgJ2Xh5_a_JnvX-T-uks5E33rxEFjAV75PuhQDa0wcv9Gy2Q4yqZ8RjPad8QQJ-fCww/exec'

export function addEmail (e) {
  e.preventDefault()
    fetch(scriptURL, { 
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(e.target)})
    .then(alert('Спасибо, мы записали вашу почту'))
    .catch(error => console.error('Error!', error.message))
}