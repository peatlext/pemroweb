let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Jam Tangan',
        image: 'jam1.jpg',
        price: 150000
    },
    {
        id: 2,
        name: 'Keyboard Gaming',
        image: 'keyboard.jpg',
        price: 250000
    },
    {
        id: 3,
        name: 'Hoodie',
        image: 'Hoodie.jpg',
        price: 125000
    },
    {
        id: 4,
        name: 'Laptop Gaming',
        image: 'laptop1.jpg',
        price: 21999999
    },
    {
        id: 5,
        name: 'MacBook',
        image: 'laptop2.jpg',
        price: 12999999
    },
    {
        id: 6,
        name: 'Mouse',
        image: 'mouse.jpg',
        price: 170000
    },
    {
        id: 7,
        name: 'Baju',
        image: 'baju1.jpg',
        price: 75000
    },
    {
        id: 8,
        name: 'Kopi',
        image: '16.jpg',
        price: 10000
    },
    {
        id: 9,
        name: 'Sepatu',
        image: 'sepatu2.jpg',
        price: 150000
    },
    {
        id: 10,
        name: 'Tas ',
        image: 'tas1.jpg',
        price: 80000
    },
    {
        id: 11,
        name: 'Salad',
        image: '5.png',
        price: 25000
    },
    {
        id: 12,
        name: 'Pizza',
        image: '6.png',
        price: 65000
    },
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
