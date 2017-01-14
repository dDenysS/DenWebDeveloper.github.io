/*new Promise( (resolve) => {
  if(document.readyState == 'complete') {
    resolve();
  } else {
    window.onload = resolve;
  }
}).then( () => {
  return new Promise( (resolve, reject) => {
    VK.init({
    apiId: 5822070
  });
    
    Vk.Auth.login( (response) => {
      if(response.session) {
        resolve(response);
      } else {
        reject(new Error('Не удалось фвторизоваться'));
      }
    }, 2 | 8 | 262144);
  });
}).catch( (e) => {
  alert('Ошибка' + e.message);
});*/
  VK.init(function() {
    VK.api("users.get", "{user_ids : '1'}", function(data) {
      id = data['response']['0']['id'];
      first_name = data['response']['0']['first_name'];
      last_name = data['response']['0']['last_name'];
      alert(id);
    });	
  }, function() {
    alert('Ошибка при инициализации VK.API');
  }, '5.8');
