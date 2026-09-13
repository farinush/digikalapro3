export const fetchSlider = async () => {
  try {
    const data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    const res = await data.json();
    let sliderswiper = res.slider
      .map((item) => {
        return `
              <div class="swiper-slide block object-contain mx-auto">
              <img src="${item.img}" alt="" class="block w-full h-[200px] lg:h-[440px] object-cover"/>
              </div> 
        `;
      })
      .join("");

    document.querySelector(".slider .mySlider").innerHTML = `
        <div class="swiper-wrapper">
          ${sliderswiper}
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>`;
    const swiper = new Swiper(".mySlider", {
      slidesPerView: 1,
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
        nextEl: ".mySlider .swiper-button-next",
        prevEl: ".mySlider .swiper-button-prev",
      },
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
};
