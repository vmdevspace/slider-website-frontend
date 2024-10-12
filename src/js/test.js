const form = document.querySelector('.footer-subscribe-form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    console.log(form["name"].value);
    console.log(form["email"].value);
});