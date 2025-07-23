export const fetchMobilehead = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    
        let mobileheadphone = res.mobileheadphone.map((item) => {
      // از هر section، عکس‌های partها رو جدا می‌کنیم
      let imagesHTML = item.section.map((section) =>section.part.map((part) => `
              <div class="childrow_1_1_image_child_sub_mobile-headphone w-[48%] h-[135px] ">
                <img src="${part.img}" alt="" class="w-[129px] h-[129px] object-cover"/>
              </div>
            `
            )
            .join("")
        )
        .join("");

      return `
        <div class="child_sub_mobile-headphone w-[325px] box-border flex flex-col flex-wrap">
          <div class="text_child_sub_mobile-headphone w-[292px] h-[50px] flex font-[iranyekanmedium] flex-col flex-wrap text-[15px] leading-[20px] m-auto mb-[10px] box-border">
            ${item.title}
            <span class="text-[12px] opacity-[0.7]">براساس سلیقه شما</span>
          </div>
          <div class="image_child_sub_mobile-headphone w-[292px] flex flex-wrap content-between gap-[10px] justify-between m-auto box-border">
            ${imagesHTML}
          </div>
          <div class="a_child_sub_mobile-headphone inline-block w-[100px] h-[26px] font-[iranyekanmedium] text-[13px] text-center m-auto relative mt-[10px]">
            <a href="#" class="text-[#5faab5]">مشاهده
              <img src="./public/svg/mobile-headphone/svgfleshbechap.svg" alt="" class="absolute top-[-3px] left-[3px]"/>
            </a>
          </div>
        </div>
        <hr class="hr_sub_mobile-headphone w-[1px] h-[440px] lg:bg-[lightgray] opacity-[0.3]" />
      `;
    });

    document.querySelector(".sub_mobile-headphone").innerHTML = mobileheadphone;
  } catch (error) {
    console.log(error.message);
  }
};
