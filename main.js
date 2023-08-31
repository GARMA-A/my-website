

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => 
{
    navbar.classList.toggle('active');
}

let sections = document.
querySelector('section');

let navlinks = document.
querySelector('header nav a');

window.onscroll=() =>
{
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);
}

navbar.onclick = () => 
{
    navbar.classList.remove('active');
}

if(top>=offset && top <offset + height)
{
    sec.classList.add('show-animate');
}
else
{
    sec.classList.remove('show-animate');
}





