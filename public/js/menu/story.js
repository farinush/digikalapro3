export const fetchStory = async () => {
  try {
    // درخواست به API برای دریافت داده‌ها
    let data = await fetch("http://localhost:3004/story");
    let res = await data.json();

    // چاپ داده‌ها برای بررسی
    console.log('داده‌های دریافت شده:', res);

    // استفاده از داده‌های مستقیم (بدون نیاز به story)
    if (!res) {
      console.error('داده‌های استوری پیدا نشد!');
      return;
    }

    // شروع به خالی کردن محتوای قبلی داخل اسلایدر
    let storyswiper = "";

    // حلقه برای تولید اسلایدها (برای ۱۷ تصویر)
    for (let i = 1; i <= 17; i++) {
      const imgKey = `img${i}`;
      const nameKey = `name${i}`;

      // چک کردن اینکه آیا تصویر و نام موجود است یا نه
      const imgSrc = res[imgKey] ? res[imgKey] : 'path_to_default_image.jpg';  // مسیر پیش‌فرض برای تصویر
      const name = res[nameKey] ? res[nameKey] : 'نام در دسترس نیست';  // متن پیش‌فرض برای نام

      // اگر تصویر و نام موجود باشد، اسلاید را اضافه می‌کنیم
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

    // قرار دادن محتوای HTML در اسلایدر
    document.querySelector(".mySwiper").innerHTML = `
      <div class="swiper-wrapper">
        ${storyswiper}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      
    `;

    // پس از اضافه کردن داده‌ها، راه‌اندازی دوباره Swiper
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
