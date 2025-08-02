export const fetchAmazing = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    let amazingArray = res.amazing;

    // 🔹 اسلاید اول خاص
    let firstSlide = `
      <div class="swiper-slide amazingactive bg-[#db314e] text-center text-[18px] flex justify-center items-center">
        <div class="swiper-slide-item flex flex-col flex-wrap gap-x-[8px] items-center justify-center">
          <img class="image_item1" src="./public/svg/amazing/comment.svg" alt=""/>
          <img class="image_item2" src="./public/images/amazing/box.png" alt=""/>
          <a class="item_link flex justify-center items-center" href="#">مشاهده همه
            <img src="./public/svg/amazing/svgfleshbechap.svg" alt="">
          </a>
        </div>
      </div>
    `;

    // 🔹 ایجاد HTML آیتم‌ها
    let itemsHtml = amazingArray.map((item, index) => {
      let className = index === 0 ? "BRtrbr" : "";
      return `
        <div class="swiper-slide ${className} text-center text-[18px] bg-[#fff] flex justify-center items-center">
          <a href="#" class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]">
            <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[2px] items-center p-[10px] relative">
              <img src="${item.image}" alt="" class="w-[150px] h-[150px]" />
              <p class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${item.title}</p>
              <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                <h5 class="price w-[80%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                  ${item.price}
                  <img src="./public/svg/amazing/toman.svg" alt=""/>
                </h5>
                <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${item.percentage}</h6>
              </div>
              <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${item.pureprice}</h5>
            </div>
          </a>
        </div>
      `;
    }).join("");

    // 🔹 اسلاید آخر خاص
    let lastSlide = `
      <div class="swiper-slide BRtlbl text-center text-[18px] bg-[#fff] flex justify-center items-center">
        <a class="a_slid13 w-[inherit] h-[inherit] block" href="#">
          <div class="svg_slide13 w-[inherit] h-[50%] relative">
            <div class="child_svg_slide13">
              <img src="./public/svg/amazing/senoghte.svg" alt="" class="senoghte">
            </div>
          </div>
          <p class="p_slide13 w-[inherit] h-[50%] font-[iranyekanmedium] text-[14px] text-[#2b2b2b] opacity-[0.8]">مشاهده همه</p>
        </a>
      </div>
    `;

    // 🔹 ادغام همه در قالب swiper-wrapper
    document.querySelector(".myamazing").innerHTML = `
      <div class="swiper-wrapper">
        ${firstSlide}
        ${itemsHtml}
        ${lastSlide}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    `;

    // 🔹 فعالسازی Swiper
    const swiper = new Swiper(".myamazing", {
      slidesPerView: 7.5,
      spaceBetween: 4,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  } catch (error) {
    console.log("خطا:", error.message);
  }
};
