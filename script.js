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

//


const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2','liveAlertPlaceholder3', 'liveAlertPlaceholder4')

const alert2 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)

}

const alertTrigger2 = document.getElementById('liveAlertBtn2', 'liveAlertBtn3', 'liveAlertBtn4')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    alert2('Excluido com sucesso!', 'danger')
  })
}
