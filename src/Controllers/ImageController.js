// import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

const ImageController = {};

ImageController.fetchImagesForAlbum = function (album_id, successCallback) {
  (async () => {
  let response = await fetch('http://localhost:3002/images/' + album_id);

  if (response.ok) {
    let json = await response.json();
    successCallback(json);
  } else {
    alert("HTTP-Error: " + response.status);
  }
  })();
  // return {
  //   albumName: 'album',
  //   pictures: [
  //     {
  //       pictureId: 0,
  //       picutreName: 'moby.JPG',
  //       pictureTitle: 'Moby',
  //     },
  //     {
  //       pictureId: 1,
  //       picutreName: 'shockedMaple.JPG',
  //       pictureTitle: 'Shocked Maple',
  //     },
  //     {
  //       pictureId: 2,
  //       picutreName: 'molly.JPG',
  //       pictureTitle: 'Molly',
  //     },
  //     {
  //       pictureId: 3,
  //       picutreName: 'kane.JPG',
  //       pictureTitle: 'Kane',
  //     },
  //     {
  //       pictureId: 4,
  //       picutreName: 'squintingMaple.JPG',
  //       pictureTitle: 'Squinting Maple',
  //     },
  //   ]
  // }
}

export default ImageController;