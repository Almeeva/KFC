console.log('worked');
const burger1 = {
    id: 1,
    name: 'Хот-дог куриный',
    description: 'Хот-дог с куриной колбаской с травами, сладким горчичным соусом, кетчупом, маринованными огурчиками, луком и халапеньо.',
    price: 79,
    weight: 124,
    kilocalories: 226,
    proteines: 9.6,
    fat: 10.1,
    carbohydrates: 24.3,
    photoUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230 ',
};
const burger2 = {
    id: 2,
    name: 'Чизбургер Де Люкс',
    description: 'Пряный горчичный соус, кетчуп, сочное филе в оригинальной панировке, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора.',
    price: 124,
    weight: 226,
    kilocalories: 193,
    proteines: 12.6,
    fat: 6.6,
    carbohydrates: 20.7,
    photoUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230 ',
};
const burger1NameEl = document.getElementById('burger1-name');
burger1NameEl.textContent = burger1.name;
const burger1El = document.getElementById('photo-1'); 
burger1El.src = burger1.photoUrl;
const burger1DescriptionEl = document.getElementById('burger1-description');
burger1DescriptionEl.textContent = burger1.description;
const burger1PriceEl = document.getElementById('burger1-price');
burger1PriceEl.textContent = "цена " + burger1.price + "руб.";
const burger1WeightEl = document.getElementById('burger1-weight');
burger1WeightEl.textContent = "вес " + burger1.weight + "гр.";
const burger1KilocaloriesEl = document.getElementById('burger1-kilocalories');
burger1KilocaloriesEl.textContent = burger1.kilocalories + " Ккал";
const burger1ProteinesEl = document.getElementById('burger1-proteines');
burger1ProteinesEl.textContent = "Белки: " + burger1.proteines;
const burger1FatEl = document.getElementById('burger1-fat');
burger1FatEl.textContent = "Жиры:" + burger1.fat;
const burger1CarbohydratesEl = document.getElementById('burger1-carbohydrates');
burger1CarbohydratesEl.textContent = "Углеводы:" + burger1.carbohydrates;
const burger2NameEl = document.getElementById('burger2-name');
burger2NameEl.textContent = burger2.name;
const burger2El = document.getElementById('photo-2'); 
burger2El.src = burger2.photoUrl;
const burger2DescriptionEl = document.getElementById('burger2-description');
burger2DescriptionEl.textContent = burger2.description;
const burger2PriceEl = document.getElementById('burger2-price');
burger2PriceEl.textContent = "цена " + burger2.price + "руб.";
const burger2WeightEl = document.getElementById('burger2-weight');
burger2WeightEl.textContent = "вес " + burger2.weight + "гр.";
const burger2KilocaloriesEl = document.getElementById('burger2-kilocalories');
burger2KilocaloriesEl.textContent = burger2.kilocalories + " Ккал";
const burger2ProteinesEl = document.getElementById('burger2-proteines');
burger2ProteinesEl.textContent = "Белки: " + burger2.proteines;
const burger2FatEl = document.getElementById('burger2-fat');
burger2FatEl.textContent = "Жиры:" + burger2.fat;
const burger2CarbohydratesEl = document.getElementById('burger2-carbohydrates');
burger2CarbohydratesEl.textContent = "Углеводы:" + burger2.carbohydrates;
