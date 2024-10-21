// accordions

document.addEventListener('DOMContentLoaded',() => {
  const accordions = document.querySelectorAll('.accordions__item');
  
  accordions.forEach(el => {
      el.addEventListener('click', (e) =>{
          const self = e.currentTarget;
          const control = self.querySelector('.accordions__control');
          const content = self.querySelector('.accordions__content');
  
          self.classList.toggle('open');
  
          if(self.classList.contains('open')){
              control.setAttribute('aria-expanded', true);
              content.setAttribute('aria-hidden', false);
              content.style.maxHeight = content.scrollHeight + 'px';

          }else{
              control.setAttribute('aria-expanded', false);
              content.setAttribute('aria-hidden', true);
              content.style.maxHeight = null;
          }
      });
      });
  })






//   testimonials



$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})

