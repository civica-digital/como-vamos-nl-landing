const urlComponent = (id) => `/profile?component=${id}`;

const error404 = (msg) => {
  const query = $.param({ msg: msg });
  window.location.replace('/404?' + query);
};
