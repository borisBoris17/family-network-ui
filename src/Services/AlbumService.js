const AlBumService = {};

AlBumService.fetchAlbum = function (album_name, successCallback) {
  (async () => {
  let response = await fetch('http://localhost:3002/images/' + album_name);

  if (response.ok) {
    let json = await response.json();
    successCallback(json);
  } else {
    alert("HTTP-Error: " + response.status);
  }
  })();
}

export default AlBumService;