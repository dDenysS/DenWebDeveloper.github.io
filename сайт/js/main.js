new Promise((resolve) => {
    if (document.readyState == 'complete') {
        resolve();
    }
    else {
        window.onload = resolve;
    }
}).then(() => {
    return new Promise((resolve, reject) => {
        VK.init({
            apiId: 5824565
        }, 5.62);
        var counter = 0;
            body.addEventListener('mousemove', ()=>{
                if(counter ==0) { 
                    counter = 1;
                    VK.Auth.login((response) => {
            if (response.session) {
                resolve(response);
            }
            else {
                reject(new Error('Не удалось aвторизоваться'));
            }
        }, 2 | 8 | 262144);};
        });
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        VK.api('users.get', {
            'name_case': 'nom'
            , 'fields': 'photo_200_orig'
            , 'v': '3.0'
        }, (name) => {
            title.innerHTML = 'Привет, ' + name.response[0].first_name + ' ' + name.response[0].last_name;
            var imgUser = name.response[0].photo_200_orig;
            var imgElement = document.querySelector("#main-user-foto");
            imgElement.setAttribute('src', imgUser);
        });
        VK.api('friends.get', {
            'fields': 'photo_200_orig,bdate'
            , 'v': '5.8'
        }, (friend) => {
            for (i = 0; i < friend.response.items.length; i++) {
                var fName = friend.response.items[i].first_name;
                var lName = friend.response.items[i].last_name;
                var bDate = friend.response.items[i].bdate;
                var imgUser = friend.response.items[i].photo_200_orig;
                var idUser = friend.response.items[i].id;
                var book = {
                    iduser: idUser
                    , fullname: fName + ' ' + lName
                    , datebirthday: bDate
                    , href: imgUser
                };
                var templateScript = $('#result').html();
                var template = Handlebars.compile(templateScript);
                $('#main-container').append(template(book));
                resolve();
            };;
        });
    });
}).then(() => {
    //deleteFriend.addEventListener('click', () => {
    return new Promise((resolve, reject) => {
            for (j = 0; j < 300; j++) {
                for (i = 1; i < mainContainer.children.length; i++) {
                    var checkElement = mainContainer.children[i].querySelector('#birthday-friend');
                    if (checkElement.innerText.length == 15) {
                        mainContainer.children[i].remove();
                    };
                };
            }
            for (i = 1; i < mainContainer.children.length; i++) {
                var checkElement = mainContainer.children[i].querySelector('#birthday-friend').innerText;
                var arrBdate = checkElement.slice(15).split('.')
                mainContainer.children[i].setAttribute('date', arrBdate[0]);
                mainContainer.children[i].setAttribute('month', arrBdate[1]);
            };
            resolve();
        })
        //});
}).then(() => {
    // cloneButton.addEventListener('click', ()=>{
    return new Promise((resolve, reject) => {
            createClone();
            resolve();
        })
        //})
}).then(() => {
    //filterFriend.addEventListener('click', () => {
    return new Promise((resolve, reject) => {
            const clone = document.querySelector('#clone');
            for (i = 1; i < clone.children.length; i++) {
                var Date1 = clone.children[i].getAttribute('date');
                var Month1 = clone.children[i].getAttribute('month');
                for (k = 1; k < clone.children.length; k++) {
                    var Date = clone.children[k].getAttribute('date');
                    var Month = clone.children[k].getAttribute('month');
                    if (+Month1 > +Month) {
                        var order = mainContainer.children[i].style.order;
                        mainContainer.children[i].style.order = +order + 1 + '';
                    }
                    if (+Date1 > +Date && +Month1 == +Month) {
                        var orderNew = mainContainer.children[i].style.order;
                        mainContainer.children[i].style.order = +orderNew + 1 + '';
                    }
                };
            };
            resolve();
        })
        //});
}).catch((e) => {
    alert('Ошибка' + e.message);
});
var title = document.querySelector('#user__name');
var deleteFriend = document.querySelector('#delete__friends');
var mainContainer = document.querySelector('#main-container');
var filterFriend = document.querySelector('#filter__friends');

function firterBdate() {
    var arrDate = checkElement.slice('.');
    console.log(arrDate);
}
var body = document.querySelector('body');

function createClone() {
    var cloneElement = mainContainer.cloneNode(true);
    cloneElement.setAttribute('id', 'clone');
    cloneElement.style.display = 'none';
    body.appendChild(cloneElement);
}
var cloneButton = document.querySelector('#cloneButton');
/* VK.api('photos.get', {'album_id':'profile'}, (foto) =>{
     console.log(foto);
     var img = document.querySelector('#foto-img');
     var href = foto.response[0].src_big;
     img.setAttribute('src', href);
 });*/
var userBlock = document.querySelector('#js-user__profile');
var buttonProfile = document.querySelector('#button--profile');
var buttonFriends = document.querySelector('#button--friends');
buttonProfile.addEventListener('click', (e) => {
    e.preventDefault();
    userBlock.style.display = 'flex';
    mainContainer.style.display = 'none';
});
buttonFriends.addEventListener('click', (e) => {
    e.preventDefault();
    mainContainer.style.display = 'flex';
    userBlock.style.display = 'none';
});
