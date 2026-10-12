let chooseus = [
    {
        image: "./photos/griedeints.png",
        tittle: "Freesh Ingredients",
        description: "100% Natural & freesh"
    },
    {
        image: "./photos/chief.png",
        tittle: "Experienced Chiefs",
        description: "Skilled & best"
    },
    {
        image: "./photos/time.svg",
        tittle: "Fast Services",
        description: "Your time matters"
    },
    {
        image: "./photos/qualityfood.svg",
        tittle: "Quality Foods",
        description: "Taste the difference"
    },
]

let chooseUscardContainer = document.querySelector('.chooseuscontainer');

chooseus.forEach((cards) =>{
    let chooseuscard = document.createElement('div');
    chooseuscard.classList.add('whychoosecard');

    let icon = document.createElement('img');
    icon.src = cards.image;
    icon.classList.add('whychooseusimg');

    let name = document.createElement('h3');
    name.textContent = cards.tittle;
    name.classList.add('whhychoooseush3');

    let info = document.createElement('p');
    info.textContent = cards.description;

    chooseuscard.append(icon, name, info);
    chooseUscardContainer.append(chooseuscard);
})