$(document).ready(() => {
  var stages = [
    {
      title: "¿Qué tema te interesa?",
      urlApi: "https://script.google.com/macros/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=ejes",
      label: "Avanzar " + String.fromCharCode(8594)
    }, {
      title: "¿Cuánto tiempo tienes disponible?",
      urlApi: [
        {
          title: "1 hora al día",
          description: "Puedo participar todos los días pero solo una hora"
        },
        {
          title: "2 hora al día",
          description: "Puedo participar todos los días pero solo dos horas"
        },
        {
          title: "Un día a la semana",
          description: "Puedo participar un día a la semana, las horas que sean necesarias"
        }
      ],
      label: "Avanzar " + String.fromCharCode(8594)
    }, {
      title: "¿Cómo te gustaría ayudar?",
      urlApi: [
        {
          title: "Desde mi casa en mi computadora",
          description: "Puedo participar desde mi computadora"
        },
        {
          title: "Asistiendo a algún evento o espacio público",
          description: "Puedo asistir a eventos o espacios públicos"
        },
        {
          title: "Donando en especie o dinero",
          description: "Puedo donar dinero o en especie"
        },
        {
          title: "Apoyando con mi expertise profesional",
          description: "Puedo apoyar con mi expertise profesional"
        },
        {
          title: "Organizando eventos",
          description: "Puedo ayudar organizando eventos"
        }
      ],
      label: "Comienza a participar " + String.fromCharCode(8594),
    }
  ];

  React.render(React.createElement(window.Survey, {stages: stages}),
    document.getElementById('survey'));
})
