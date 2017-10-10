
var modal = document.querySelector('.modal_window');
var close = document.querySelector(".close");
var open = document.querySelector('.open');

open.addEventListener("click", function(){
modal.classList.remove('hidden');
});

close.addEventListener("click", function(){
modal.classList.add('hidden');
});
