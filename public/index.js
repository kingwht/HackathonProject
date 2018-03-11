let $btn = document.getElementById("Food");
let toggled = false;

$btn.addEventListener("click", () => {
  console.log("inside click");
    let $img = document.getElementsByClassName("Food-pop-up")[0];
if (toggled) {
    $img.className = "Food-pop-up";
} else {
    $img.className += " fade-in";
}
toggled = !toggled;
});

// (function() {
//     var $origins = document.getElementsByClassName('Origins-pop-up img');
//     $origins.className('fade-in');
// })();
// $('.pop-up span').click(function() {
//     $('.pop-up-container').hide(0);
//     $('.pop-up').hide(0);
//     $('.pop-up-button').show(0);
// });
