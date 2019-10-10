console.log('worked');

const burger1 = {
    id: 'photo1',
    name: 'Hot-dog',
    photoUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230 ',
};
const burger2 = {
    id: 'photo2',
    name: 'Cheeseburger',
    photoUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230 ',
};

const burger1El = document.getElementById('photo-1'); 
burger1El.src = burger1.photoUrl;
const burger1NameEl = document.getElementById('burger1-name');
burger1NameEl.textContent = burger1.name;

const burger2El = document.getElementById('photo-2'); 
burger2El.src = burger2.photoUrl;
const burger2NameEl = document.getElementById('burger2-name');
burger2NameEl.textContent = burger2.name;
