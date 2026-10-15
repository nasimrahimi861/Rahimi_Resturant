let comments = [
    {
        photo: "./photos/user.svg",
        name: "Khan Anwari",
        comment: "Really Happy from services of Rahimi Restaurant. Keep shinning",
        ratting: "★★★★★ "
    },
    {
        photo: "./photos/user.svg",
        name: " Sultan Tareen",
        comment: "Best quality! Our first and best choice.",
       ratting: "★★★★★ "
    },
    {
        photo: "./photos/user.svg",
        name: "Assadullah ",
        comment: "Delicious foods + best services. Thanks rahimi restaurant",
        ratting: "★★★★★ "
    },
]

let comment_container = document.querySelector('.customer_comments_container');

comments.forEach((cards) =>{
    
    let card_container = document.createElement('div');
    card_container.classList.add('user_comment_crds');

    let user_photo_name = document.createElement('div');
    user_photo_name.classList.add('customerimgandname');
    
    let image = document.createElement('img');
    image.src = cards.photo;
    image.classList.add('customerimg');

    let user_name = document.createElement('h2');
    user_name.textContent = cards.name;

    let user_idea = document.createElement('p');
    user_idea.textContent = cards.comment;

    let user_ratting = document.createElement('p');
    user_ratting.textContent = cards.ratting
    user_ratting.classList.add('ratting');

    user_photo_name.append(image, user_name);
    card_container.append(user_photo_name, user_idea, user_ratting);
    comment_container.append(card_container);


})