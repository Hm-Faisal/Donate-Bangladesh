
// Home Button Redirect
const home = document.getElementById('home_button')
home.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href = "./index.html"
})
console.log( home);