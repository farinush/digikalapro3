export const fetchSlider = async () => {
    let sliderswiper = "";
    try {
      const data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      const res = await data.json();
      sliderswiper+= 
       `
              <div class="swiper-slide !hidden lg:!block object-contain mx-auto"><img src="${res.img1}" alt="" class="hidden lg:block w-[100%] h-[180px] lg:h-[440px]"/></div>
              <div class="swiper-slide !hidden lg:!block  object-contain mx-auto "><img src="${res.img2}" alt="" class="hidden lg:block w-[100%] h-[180px] lg:h-[440px]"/></div>
              <div class="swiper-slide !hidden lg:!block  object-contain mx-auto "><img src="${res.img3}" alt="" class="hidden lg:block w-[100%] h-[180px] lg:h-[440px]"/></div>
              <div class="swiper-slide !hidden lg:!block  object-contain mx-auto "><img src="${res.img4}" alt="" class="hidden lg:block w-[100%] h-[180px] lg:h-[440px]"/></div>
              <div class="swiper-slide !hidden lg:!block  object-contain mx-auto "><img src="${res.img5}" alt="" class="hidden lg:block w-[100%] h-[180px] lg:h-[440px]"/></div>
              <div class="swiper-slide !hidden lg:!block  object-contain mx-auto "><img src="${res.img6}" alt="" class="hidden lg:block w-[100%] h-[180px] lg:h-[440px]"/></div>
              <div class="swiper-slide block lg:!hidden  w-[100%]  object-contain mx-auto "><img src="${res.img1small}" alt="" class="block lg:hidden w-[100%] h-[100%]"/></div>
              <div class="swiper-slide block lg:!hidden  w-[100%]  object-contain mx-auto "><img src="${res.img2small}" alt="" class="block lg:hidden w-[100%] h-[100%]"/></div>
              <div class="swiper-slide block lg:!hidden  w-[100%]  object-contain mx-auto "><img src="${res.img3small}" alt="" class="block lg:hidden w-[100%] h-[100%]"/></div>
              <div class="swiper-slide block lg:!hidden  w-[100%]  object-contain mx-auto "><img src="${res.img4small}" alt="" class="block lg:hidden w-[100%] h-[100%]"/></div>
              <div class="swiper-slide block lg:!hidden  w-[100%]  object-contain mx-auto "><img src="${res.img5small}" alt="" class="block lg:hidden w-[100%] h-[100%]"/></div>
              <div class="swiper-slide block lg:!hidden  w-[100%]  object-contain mx-auto "><img src="${res.img6small}" alt="" class="block lg:hidden w-[100%] h-[100%]"/></div>
           
        `;
      document.querySelector(".slider .mySlider").innerHTML = `
        <div class="swiper-wrapper">
          ${sliderswiper}
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>`;
      const swiper = new Swiper('.mySlider', {
        
          spaceBetween: 0,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
  
     
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  window.addEventListener('DOMContentLoaded', fetchSlider);