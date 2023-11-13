ScrollReveal({
distance:'50px',
duration:2000,

})
ScrollReveal().reveal('.home .home-content .head',{origin:'top'});
ScrollReveal().reveal('.home .home-content .second',{origin:'top'} ,{ delay: 500 } );
ScrollReveal().reveal('.home .home-content .third', {origin:'top'},{ delay: 1000 } );
ScrollReveal().reveal('.home .heading , .contact .heading , .portfolio .heading ,.skills .heading',{origin:'top'}, { delay: 1500 });
ScrollReveal().reveal('.home .home-img img , .about ,.contact form , .portfolio .container ,.skills .skills-box',{origin:'bottom'}, { delay: 1500 });

ScrollReveal().reveal('.home .home-content .second h1',{origin:'left'}, { delay: 1500 });
ScrollReveal().reveal('.home .home-content .third p',{origin:'right'}, { delay: 1500 });

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll= () => {
    section.forEach(sec =>{
        let top= window.scrollY;
        let offset=sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >=offset && top< offset+height){
            navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100)
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed =new Typed('.multiple-text', {
    strings:['Student' , 'Frontend Devloper','Adops manager'],
    typeSpeed:100,backSpeed:100,
    backDelay:1000,loop:true
});



