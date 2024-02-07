let body = document.querySelector("body");

// Array of image links
let photos = ["https://preview.redd.it/if-the-show-is-successful-what-would-be-good-seasonal-pacing-v0-pwepl905kdlb1.jpg?width=640&crop=smart&auto=webp&s=1ccf2f03a4a9cee216bfdf27fdfac95d28392fd9",
    "https://i1.wp.com/www.oxfordstudent.com/wp-content/uploads/2016/11/black-mirror-season-3-poster.png?fit=1080%2C1080&ssl=1",
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Grey%27s_Anatomy_Logo.svg/480px-Grey%27s_Anatomy_Logo.svg.png",
    "https://assets.fxnetworks.com/cms-next/production/67a0aace-e484-4032-885b-c6f6a405c7eb.jpg"
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


show1.src = photos[0];
// 2. Update the src for each show# variable - use the line above as a reference.
