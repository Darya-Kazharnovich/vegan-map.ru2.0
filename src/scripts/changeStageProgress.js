const stageLink = document.querySelectorAll('.stage__link')
const stageProgressText = document.querySelector('.stage__progress_text')


function changeStageProgress (event) {
  if (event.target.classList.contains('stage__link_Telegram')) {
    stageProgressText.innerHTML = `
      <li>Создали админку и добавили первые места на карту</li>
      <li>Продумали структуру сообщений бота</li>
      <li>Разработали и запустили бот в Телеграме</li>
      <li>Продолжаем дорабатывать и улучшать</li>`
  } else if (event.target.classList.contains('stage__link_iOS')) {
    stageProgressText.innerHTML = `
      <li>Спланировали структуру</li>
      <li>Сделали дизайн</li>
      <li>Разрабатываем приложение с минимальным функционалом</li>
      <li>Тестируем сырую сборку и фиксим проблемы</li>
      <li>Запуск первой версии приложения</li>`
  } else if (event.target.classList.contains('stage__link_Android')) {
    stageProgressText.innerHTML = `
      <li>Спланировали структуру</li>
      <li>Сделали дизайн</li>
      <li>Разрабатываем приложение с минимальным функционалом</li>
      <li>Запуск первой версии приложения</li>`
  } else if (event.target.classList.contains('stage__link_website')) {
    stageProgressText.innerHTML = `
      <li>Продумали MVP</li>
      <li>Делаем дизайн</li>
      <li>Разрабатываем минимальный функционал – карту</li>
      <li>website 3</li>`
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

