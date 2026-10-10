let chooseus = [
    {
        image: "",
        tittle: "Freesh Ingredients",
        description: "100% Natural & freesh"
    },
    {
        image: "",
        tittle: "Experienced Chiefs",
        description: "Skilled & best"
    },
    {
        image: "",
        tittle: "Fast Services",
        description: "Your time matters"
    },
    {
        image: "",
        tittle: "Quality Foods",
        description: "Taste the difference"
    },
]

let chooseUscardContainer = document.querySelector('.chooseuscontainer');

chooseus.forEach((cards) =>{
    let chooseuscard = document.createElement('div');

    let icon = document.createElement('img');
    icon.src = cards.image;

    let name = document.createElement('h3');
    name.textContent = cards.tittle;

    let info = document.createElement('p');
    info.textContent = cards.description;

    chooseuscard.append(icon, name, info);
    chooseUscardContainer.append(chooseuscard);
})