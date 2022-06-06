const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Enviado com sucesso!', 'success')
  })
}

const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')

const alert2 = (message, type) => {
  const wrapper2 = document.createElement('div')
  wrapper2.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder2.append(wrapper2)
}

const alertTrigger2 = document.getElementsByClassName('liveAlertBtn2')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    alert('Excluido com sucesso!', 'danger')
  })
}