// write your code here
document.addEventListener("DOMContentLoaded", function () {
    const image = [
        {
            "id": 1,
            "title": "Woofing those bugs away",
            "likes": 0,
            "image": "./assets/coder-dog.png",
        }
    ];

    const comments = [
        {
            "id": 1,
            "imageId": 1,
            "content": "What a cute dog!"
        },
        {
            "id": 2,
            "imageId": 1,
            "content": "He's got a nose for bugs!"
        },
        {
            "id": 3,
            "imageId": 1,
            "content": "Woof!"
        }
    ];
    const imageItems = image [0]
    document.getElementById('card-title').innerHTML = imageItems.title;
    document.getElementById('card-image').src = imageItems.image;
    document.getElementById('card-image').alt = imageItems.title; 

    // likes
    const likesElement = document.getElementById('like-count');
    likesElement.innerHTML = `${imageItems.likes} likes`;

    const likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', function () {
        imageItems.likes += 1;  
        likesElement.innerHTML = `${imageItems.likes} likes`;  
    });

        const commentsList = document.getElementById('comments-list');
        commentsList.innerHTML = `` ;
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.innerHTML= comment.content;
            commentsList.appendChild(li);
        });

    

    // new comment
const commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', function (event) {
    event.preventDefault();  
    const commentInput = document.getElementById('comment').value;
    console.log(commentInput);
});
        
    
});


