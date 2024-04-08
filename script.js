let body = document.querySelector("body");

// Array of image links
let photos = ["https://www.paintingmania.com/arts/francisco-de-goya/large/saturn-devouring-his-son-227_38960.jpg?version=19.11.19",
    "https://www.paintingmania.com/arts/francisco-de-goya/large/saturn-devouring-his-son-227_38960.jpg?version=19.11.19",
    "https://www.paintingmania.com/arts/francisco-de-goya/large/saturn-devouring-his-son-227_38960.jpg?version=19.11.19",
    "https://www.paintingmania.com/arts/francisco-de-goya/large/saturn-devouring-his-son-227_38960.jpg?version=19.11.19",
    "https://www.paintingmania.com/arts/francisco-de-goya/large/saturn-devouring-his-son-227_38960.jpg?version=19.11.19",
    "https://www.paintingmania.com/arts/francisco-de-goya/large/saturn-devouring-his-son-227_38960.jpg?version=19.11.19",
];


// 1. Push an image link of one of your favorite shows to the photos array.
//  - To find the link, right-click an image and choose 'Copy Image Address'




// HTML selectors
let show1 = document.querySelector(".show-1");
let show2 = document.querySelector(".show-2");
let show3 = document.querySelector(".show-3");
let show4 = document.querySelector(".show-4");
let show5 = document.querySelector(".show-5");
let show6 = document.querySelector(".show-6");

let divs = [];


show1.src = photos[0];
// 2. Update the src for each show# variable - use the line above as a reference.
for(let i = 0; i < photos.length; i++) {
    divs.push(document.querySelector(".show-" + (i+1)));
}
for(let i = 0 ; i < divs.length; i++) {
   console.log(photos[i]);
   divs[i].src = photos[i];
}
