function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(() => {
  $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=organizations')
    .done((data) => {
    const orgs = data.filter((data) => {
      return data.action_ids.indexOf(parseInt(getUrlVars()[0])) !== -1;
    })
    React.render(React.createElement(Organizations, {orgs: orgs}),
      document.getElementById('organizaciones'));
  }).fail((e) => console.log("error " + e))

  React.render(React.createElement(Projects, {projects: [1,2,3,4]}),
    document.getElementById('proyectos'));

  React.render(React.createElement(Bar),
    document.getElementById('bar'));
})
