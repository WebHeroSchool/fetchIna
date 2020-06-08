let body = document.body;
let url = window.location.toString();

let getName = (url) => {
	let urlMas = url.split('=');
	let name = urlMas[1];
	if(name == undefined) {
		name = 'WhitcherX';
 	}
 	return name;
}

let name = getName(url);

const url = 'https://api.github.com/users/6thSence';
fetch(url)
 .then(res => res.json())
 .then(showUser => {
   let userAvatar  = showUser.avatar_url;
   let userName  = showUser.login;
   let userDescription  = showUser.bio;
   let userLink  = showUser.html_url;

   let addName = () => {
    let userTitleElement = document.createElement('h1');
    userTitleElement.innerHTML = userName
    body.appendChild(userTitleElement);
   }

   let addDescription = () => {
    let userDescriptionElement = document.createElement('p');
    userDescriptionElement.innerHTML = userDescription
    body.appendChild(userDescriptionElement);
   }

   let addFoto = () => {
    let userAvatarElement = document.createElement('img');
    userAvatarElement.innerHTML = userAvatar
    body.appendChild(userAvatarElement);
   }

   let addLink = () => {
    let userLinkElement = document.createElement('a');
    userLinkElement.innerHTML = userLink
    body.appendChild(userLinkElement);
   }

   addName();
   addDescription();
   addFoto();
   addLink();

 })
 .catch(err => alert(err + "Информация о пользователе не доступна"));
