const body = document.body;
const url = window.location.toString();
const now = new Date ();
const loader = document.getElementById('cube-loader');
const stopLoader = () => {
  loader.classList.add('hidden');
};

const getName = (url) => {
	let urlMas = url.split('username=');
	let name = urlMas[1];
	if(name == undefined) {
		name = 'Inna1996';
 	}
 	return name;
}

const name = getName(url);
const getDate = new Promise((resolve, reject) => {
	setTimeout(() => now ? resolve(now) : reject('Не определенно'), 2000);
});
const getInfo  = fetch('https://api.github.com/users/' + name);

Promise.all([getInfo, getDate])
 .then(([request, date]) => {
	 requestInfo = request;
	 requestDate = date;
 })
 .then(res => requestInfo.json())
 .then(showUserInfo => {
   let userAvatar  = showUserInfo.avatar_url;
   let userName  = showUserInfo.login;
   let userDescription = showUserInfo.bio;
   let userLink  = showUserInfo.html_url;
 if((userName != undefined))  {
   const addName = () => {
    let userTitleElement = document.createElement('a');
    userTitleElement.classList.add = ('active');
    userTitleElement.style.color = ('black');
    let title = document.createTextNode('Profile');
    userTitleElement.href = userLink;
    userTitleElement.innerHTML = userName
    body.appendChild(userTitleElement);
  };

   const addDescription = () => {
    let userDescriptionElement = document.createElement('p');
    userDescriptionElement.innerHTML = userDescription
    body.appendChild(userDescriptionElement);
  };

   const addFoto = () => {
    let userAvatarElement = document.createElement('img');
    userAvatarElement.src = userAvatar;
    let newString = document.createElement('br');
    body.appendChild(userAvatarElement);
    body.appendChild(newString);
  };

   const addLink = () => {
    let userLinkElement = document.createElement('a');
    let text = document.createTextNode('Profile');
    userLinkElement.href = userLink;
    userLinkElement.innerHTML = ('Profile');
    body.appendChild(userLinkElement);
  };

  const addDate = () => {
		let date =  document.createElement('p');
		date.innerHTML = now;
		body.appendChild(date);
	}
	 loader.style.display = 'none';
   addName();
   addDescription();
   addFoto();
   addLink();
	 addDate();
	 stopLoader();
 } else {
	 alert('Пользователь не найден');

 }
 })
 .catch(err => alert(err + "Информация о пользователе не доступна"));
