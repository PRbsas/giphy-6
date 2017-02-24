const giphys = document.getElementById('giphy');

function getGiphy() {
  const request = new XMLHttpRequest();
  request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=programming&api_key=dc6zaTOxFJmzC&limit=6', true);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      let a = JSON.parse(request.responseText);
        for(let i = 0; i < 6; i++) {
          giphys.innerHTML += `<img src="${a.data[i].images.fixed_height.url}"</img>`;
        }
    }
  };
  request.onerror = () => {
    console.log('error');
  };
  request.send();
};

document.addEventListener('DOMContentLoaded', getGiphy, false);
