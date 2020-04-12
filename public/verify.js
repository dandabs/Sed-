Sentry.init({ dsn: 'https://8aa2654fc3e54040918cd44ee0fba683@o376518.ingest.sentry.io/5197417' });

const button = document.getElementById('verifybtn');
button.addEventListener('click', function(e) {

  const urlParams = new URLSearchParams(window.location.search);

  var data = new URLSearchParams();
data.append('id', urlParams.get('id'));

  fetch('/verify', {method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded'}, body: data.toString()})
    .then(function(response) {
      if(response.ok) {

        window.location.replace("https://helsinkicruises.web.app/verified.html");

        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});
