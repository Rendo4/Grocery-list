$(document).ready(function() {
  $("p").click(function(event) {
    event.preventDefault
    const iceCream = ["vanilla", "chocolate", "mint-chocolate", "rocky road", "cookie dough"]
    iceCream.forEach(function(flavor) {
      $("#list").append(`<li> ${flavor} `);
    });
  });
});