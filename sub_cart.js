"use strict";
// stricco mode
/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Christian Gregorio
   Date: 4.3.19  

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.addEventListener("load", setupCart);

function setupCart() {
      var addButtons = document.getElementsByClassName("addButton");
      // when the input button is clicked, run the addItem function.
      for (var i = 0; i <= addButtons.length; i++) {
            addEventListener("click", addItem);
      }
}

function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      // targets the id of the food item variable
      var foodID = foodItem.target.id;

      var foodDescription

      var cartBox

      var duplicateOrder
}