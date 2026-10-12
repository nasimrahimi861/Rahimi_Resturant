let aboutus = [
    {
        photo: "./photos/resaurant.jpg",
        tittle1: "About Rahimi Restaurant",
        info: "Where Great Food Meets Great Moments",
        moreinfoo: "At Rahimi Retaurant< we believe every meal should be a memorable experience. From freesh ingredients to delicious favors, we bring passion and quality to every dish. Join us and enjoy great food in a warm and welcomeing atmosphere"
    }
]

let about = document.querySelector('.aboutus');

aboutus.forEach((cards)=>{
    let container = document.createElement('div');

    let image = document.createElement('img');
    image.src = cards.photo;

    let tittle = document.createElement('h1');
    tittle.textContent = cards.tittle1;

    let information = document.createElement('h3');
    information.textContent = cards.info;

    let moredetails = document.createElement('p');
    moredetails.textContent = cards.moreinfoo;

    container.append(tittle, information, moredetails, image);
    about.append(container)

})