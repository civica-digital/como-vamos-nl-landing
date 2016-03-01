$(document).ready () ->
  stages = stages: [
    {
      title: "¿Qué tema te interesa?",
      active: true
    }, {
      title: "¿Cuánto tiempo tienes disponible?",
      active: false
    }, {
      title: "¿Cómo te gustaría ayudar?",
      active: false}
  ]

  cards =
    placeholder:
      truthy: "assets/images/icons/yes.png",
      falsy: "assets/images/icons/no.png"
    urlApi: "https://script.googleusercontent.com/macros/echo?user_content_key=RCRWOIBBJTjD5UE47uKqYb--1up1_4mxpufgHMAYBJtG5TNyTCocBqrfMsPLRu_LNPkKWtdHS4nzhZMZ8K9iXqs0X9P7sXsfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAaRB6nzfYOlDmed3y6Zx65-KsjJbliRPtB1ni_Z95RlJHlCDDv0wxYVMYRvQa5jT7SHyqXo6kB8pByZv3OxEldGEt-S5yJDLA&lib=MOnJDlbW9Gxbs9-o5lucRR6py00rMv0c2"


  button =
    label: "Comienza a participar " + String.fromCharCode(8594)
    action: () -> "#"

  React.render React.createElement(window.Survey,
      stages: stages
      cards: cards,
      button: button
    ),
  document.getElementById 'survey'
