var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
    console.log("show");
}

function hideMenu(){
    navLinks.style.right = "-200px";
    console.log("hide");
}


  // /**
  //  * Animation on scroll
  //  */
  // function aos_init() {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true,
  //     mirror: false
  //   });
  // }

  // window.addEventListener('load', () => {
  //   aos_init();
  // });

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

