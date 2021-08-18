/*<!-- Menu Show -->*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
      })
    }
}
showMenu('nav-toggle','nav-menu')

/*<!-- Active AND REMOVE MENU -->*/
const navLink = document.querySelectorAll('.nav-locate')

function linkAction(){




  //Active link
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  //Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*<!-- SCROLL REVEAL ANIMATION -->*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 800,
  reset: true
})

/*<!-- SCROLL HOME -->*/
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 300})
sr.reveal('.home__social-icon',{interval: 250})
sr.reveal('.nav__logo',{delay: 100})

/*<!-- SCROLL ABOUT -->*/
sr.reveal('.about__img',{delay: 125})
sr.reveal('.about__subtitle',{delay: 150})
sr.reveal('.about__text',{delay: 175})

/*<!-- SCROLL SKILLS -->*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 150})
sr.reveal('.skills__data',{interval: 300})
sr.reveal('.skills__img',{delay: 200})

/*<!-- SCROLL Work -->*/
sr.reveal('.work__img',{interval: 200})

/*<!-- SCROLL CONTACT -->*/
sr.reveal('.contact__input',{interval: 100})
