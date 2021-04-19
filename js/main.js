window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    
})

function toggleForm(){
    var container = document.querySelector('.container');
    container.classList.toggle('active');
}
function toggle(){
    var header = document.querySelector("header");
    header.classList.toggle("active");
}