let specialdishes= [
    {
        image: "./photos/burger.jpg",
        name: "Burger",
        description: "Tasty Chicken Burger",
        price: "100 AFs",
        cartimage: "./photos/cart.svg"
    },
    {
        image: "./photos/pizza1.jpg",
        name: "Pizza",
        description: "Tasty Pizza",
        price: "200 AFs",
        cartimage: "./photos/cart.svg"
    },
    {
        image: "./photos/pizza2.jpg",
        name: "Cheese Pizza",
        description: "Tasty Cheese Pizza",
        price: "300 AFs",
        cartimage: "./photos/cart.svg"
    },
    {
        image: "./photos/biryani.jpg",
        name: "Biryani",
        description: "Tasty Chicken Biryani",
        price: "110 AFs",
        cartimage: "./photos/cart.svg"
    },
    {
        image: "./photos/cake.jpg",
        name: "Cake",
        description: "Tasty Chocolate Cake",
        price: "150 AFs",
        cartimage: "./photos/cart.svg"
    }
];

let dishescontainer = document.querySelector('.Specialdishescards')
specialdishes.forEach((cards) =>{

    let carddiv = document.createElement('div');
    carddiv.classList.add('dishcard');

    let foodimage = document.createElement('img');
    foodimage.src = cards.image;
    foodimage.alt = cards.name;
    foodimage.classList.add('dishcardimg')

    let tittle = document.createElement('h3');
    tittle.textContent = cards.name;

    let desc = document.createElement('p');
    desc.textContent = cards.description;

    let cost = document.createElement('p');
    cost.textContent = cards.price;
    cost.classList.add('pricestyle');

    let cartbutton = document.createElement('button');
    cartbutton.type = 'button';
    cartbutton.classList.add('cartbutton')
    
    let cart = document.createElement('img');
    cart.src = cards.cartimage;
    cart.classList.add('cartbuttonimg');

    let cartandprice = document.createElement('div');
    cartandprice.classList.add('cartandpricestyle');

    cartbutton.append(cart);
    cartandprice.append(cost, cartbutton);

    carddiv.append(foodimage, tittle, desc, cartandprice);
    dishescontainer.append(carddiv);

});
