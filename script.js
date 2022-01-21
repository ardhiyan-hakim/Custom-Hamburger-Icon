// Button 1
const selectMenu = document.querySelector('.container .menu');

selectMenu.addEventListener("click", function(){
  selectMenu.classList.toggle('active');
})

// Button 2
const selectMenu2 = document.querySelector('.container .menu:nth-child(2)');

selectMenu2.addEventListener("click", function(){
  selectMenu2.classList.toggle('active-2');
})

// Button 3
const selectMenu3 = document.querySelector('.container:nth-child(2) .menu');

selectMenu3.addEventListener("click", function(){
  selectMenu3.classList.toggle('active-3');
})

// Button 4
const selectMenu4 = document.querySelector('.container:nth-child(2) .menu:nth-child(2)');

selectMenu4.addEventListener("click", function(){
  selectMenu4.classList.toggle('active-4');
})

