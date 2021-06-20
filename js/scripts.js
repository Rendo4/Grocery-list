$(document).ready(function() {
  let shoppingList = [];
  $("#info").submit(function(event) {
    const item = $("#item").val();
    shoppingList.push(item);
    shoppingList.sort();
    
    event.preventDefault();
  });

  $("p").click(function(event) {
    let upperList = shoppingList.map(function(item) {
      return item.toUpperCase();
    });
    upperList.forEach(function(item) {
    $("#list").append(`<li> ${item} </li>`);
    event.preventDefault();
    });
    shoppingList = [];
  });
});
