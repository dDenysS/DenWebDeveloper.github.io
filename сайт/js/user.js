 VK.api('photos.get', {
     'album_id': 'profile'
 }, (foto) => {
     var img = document.querySelector('.img__main-user>img');
     var href = foto.response[0].src_big;
     img.setAttribute('src', href);
 });