const stageLink = document.querySelectorAll('.stage__link')
const stageProgress = document.querySelector('.stage__progress')


function changeStageProgress (event) {
  if (event.target.classList.contains('stage__link_website')) {
      stageProgress.innerHTML = `
      <li>Создали админку и добавили первые места на карту</li>
      <li>Продумали структуру сообщений бота</li>
      <li>Разработали и запустили бот в Телеграме</li>
      <li>Продолжаем дорабатывать и улучшать</li>`
  } else if (event.target.classList.contains('stage__link_iOS')) {
      stageProgress.innerHTML = `
      <li>iOS 1</li>
      <li>iOS 2</li>
      <li>iOS 3</li>
      <li>iOS 3</li>`
  } else if (event.target.classList.contains('stage__link_Android')) {
      stageProgress.innerHTML = `
      <li>Android 1</li>
      <li>Android 2</li>
      <li>Android 3</li>
      <li>Android 3</li>`
  } else if (event.target.classList.contains('stage__link_Telegram')) {
      stageProgress.innerHTML = `
      <li>Telegram 1</li>
      <li>Telegram 2</li>
      <li>Telegram 3</li>
      <li>Telegram 3</li>`
  }
}

export function addStageLinkActive (event) {
  if (event.target.classList.contains('stage__link')) {
      stageLink.forEach(element => {
          element.classList.remove('stage__link_active')
          event.target.classList.add('stage__link_active')
      })
      changeStageProgress(event)
  }
}

