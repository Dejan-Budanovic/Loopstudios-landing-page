//***** PRODUCTS LIST *****//
const productsArr = [
  {
    title: "Deep <br> earth",
    imgSmall: "./images/mobile/image-deep-earth.jpg",
    imgBig: "./images/desktop/image-deep-earth.jpg",
  },
  {
    title: "Night <br> arcade",
    imgSmall: "./images/mobile/image-night-arcade.jpg",
    imgBig: "./images/desktop/image-night-arcade.jpg",
  },
  {
    title: "Soccer <br> team vr",
    imgSmall: "./images/mobile/image-soccer-team.jpg",
    imgBig: "./images/desktop/image-soccer-team.jpg",
  },
  {
    title: "The <br> grid",
    imgSmall: "./images/mobile/image-grid.jpg",
    imgBig: "./images/desktop/image-grid.jpg",
  },
  {
    title: "From up <br> above vr",
    imgSmall: "./images/mobile/image-from-above.jpg",
    imgBig: "./images/desktop/image-from-above.jpg",
  },
  {
    title: "Pocket <br> borealis",
    imgSmall: "./images/mobile/image-pocket-borealis.jpg",
    imgBig: "./images/desktop/image-pocket-borealis.jpg",
  },
  {
    title: "The <br> curiosity",
    imgSmall: "./images/mobile/image-curiosity.jpg",
    imgBig: "./images/desktop/image-curiosity.jpg",
  },
  {
    title: "Make it <br> fisheye",
    imgSmall: "./images/mobile/image-fisheye.jpg",
    imgBig: "./images/desktop/image-fisheye.jpg",
  },
];
//***** PRODUCTS LIST END *****//

const products = document.getElementById("product-list");
let productsList = [];
const mobileMenuBtn = document.querySelector(".mobile-menu__btn");
const mobileMenu = document.querySelector(".main-navigation");
const imgLarge = "${productsArr[i].imgBig}";
const introImg = document.querySelector("#intro-section__img");
const backToTopBtn = document.querySelector(".back-to-top-btn");

//***** PRODUCTS DISPLAY *****//
function productDisplay() {
  productsArr.length = 0;
  for (let i = 0; i < productsArr.length; i++) {
    let product = `<div class="product">
     <img src='${productsArr[i].imgSmall}' alt="${productsArr[i].title}" />
     <div class="product-gradient-overlay">
       <div class="product-text-wrapper">
         <h3>${productsArr[i].title}</h3>
       </div>
     </div>
   </div>`;
    productsList.push(product);
    products.innerHTML = productsList.join("");
  }
  console.log(`${imgsize}`);
}
//***** PRODUCTS DISPLAY END *****//

//***** MOBILE NAV BTN CHANGE *****//
mobileMenuBtn.addEventListener("click", function () {
  mobileMenuBtn.classList.toggle("mobile-menu__btn--close");
  mobileMenu.classList.toggle("show-menu");
});
//***** MOBILE NAV BTN CHANGE END *****//

//***** RESIZE LISTENER CHANGE IMG SRC *****//
window.addEventListener("resize", resizeListener);

function resizeListener() {
  if (window.innerWidth >= 700) {
    introImg.src = "./images/desktop/image-interactive.jpg";
    productsList.length = 0;
    for (let i = 0; i < productsArr.length; i++) {
      let product = `<div class="product">
     <img src='${productsArr[i].imgBig}' alt="${productsArr[i].title}" />
     <div class="product-gradient-overlay">
       <div class="product-text-wrapper">
         <h3>${productsArr[i].title}</h3>
       </div>
     </div>
   </div>`;
      productsList.push(product);
      products.innerHTML = productsList.join("");
    }
  } else {
    introImg.src = "./images/mobile/image-interactive.jpg";
    productsList.length = 0;
    for (let i = 0; i < productsArr.length; i++) {
      let product = `<div class="product">
     <img src='${productsArr[i].imgSmall}' alt="${productsArr[i].title}" />
     <div class="product-gradient-overlay">
       <div class="product-text-wrapper">
         <h3>${productsArr[i].title}</h3>
       </div>
     </div>
   </div>`;
      productsList.push(product);
      products.innerHTML = productsList.join("");
    }
  }
}
resizeListener();
//***** RESIZE LISTENER CHANGE IMG SRC END *****//

//***** BACK TO TOP *****//
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//***** BACK TO TOP END *****//
