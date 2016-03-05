$(document).ready () ->
  $.getJSON('https://script.google.com/macros/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=organizations')
    .done (data) ->
      React.render(React.createElement(window.organizations, organizations: data),
        document.getElementById('organizaciones'))

  $.getJSON('https://script.google.com/macros/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=components')
    .done (data) ->
      React.render(React.createElement(window.projects, projects: data),
        document.getElementById('proyectos'))
