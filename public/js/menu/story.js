export const fetchStory = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    console.log('داده‌های دریافت شده:', res);
    if (!res) {
      console.error('داده‌های استوری پیدا نشد!');
      return;
    }
    let storyswiper = "";
    for (let i = 1; i <= 17; i++) {
      const imgKey = `img${i}`;
      const nameKey = `name${i}`;
      const imgSrc = res[imgKey] ? res[imgKey] : 'path_to_default_image.jpg';  
      const name = res[nameKey] ? res[nameKey] : 'نام در دسترس نیست';  
      if (res[imgKey] && res[nameKey]) {
        storyswiper += `
          <div class="swiper-slide w-[100%] h-[100%] text-center text-[18px] bg-[#fff] flex justify-center items-center">
            <div class="swiper__slider__story w-[100%] h-[100%] flex flex-col flex-wrap gap-x-[25px]">
              <div class="swiper__slider__story__image w-[90px] h-[90px] mx-auto pt-[20px]">
                <img src="${imgSrc}" alt="" class="rounded-[50%] w-[100%] h-[100%] block object-cover outline outline-3 outline-[purple]" />
              </div>
              <div class="swiper__slider__story__data font-[iranyekanmedium] text-[#878ca5] text-[11px] w-[80%] leading-[20px] mx-auto">
                ${name}
              </div>
            </div>
          </div>
        `;
      }
    }
    document.querySelector(".mySwiper").innerHTML = `
      <div class="swiper-wrapper">
        ${storyswiper}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      
    `;
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 11.5,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};

// اجرای تابع بعد از بارگذاری صفحه
window.addEventListener('DOMContentLoaded', fetchStory);
