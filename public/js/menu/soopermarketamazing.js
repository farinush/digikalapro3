export const fetchSooperamazing = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();

    // ساخت HTML هر آیتم
    let sooperamazingItems = res.sooperamazing.map((item) => {
      return `
        <div class="subchild2__a__sub__supermarketamazing w-[68px] h-[68px] lg:w-[78px] lg:h-[78px] flex flex-col flex-wrap relative" key=${item.id}>
          <div class="image__subchild2__a__sub__supermarketamazing w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] rounded-[50%] absolute left-0 top-0">
            <img src="${item.img}" alt="" class="w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] object-contain rounded-[50%]"/>
          </div>
          <div class="discount__subchild2__a__sub__supermarketamazing w-[34px] h-[20px] rounded-[15px] bg-[#ca3333] text-[whitesmoke] text-[11px] font-[yekan] font-[600] text-center leading-[20px] absolute right-0 bottom-0">
            ${item.text}
          </div>
        </div>
      `;
    }).join(""); // تبدیل به یک رشته HTML

    // HTML بخش ادامه (فقط یک‌بار باید اضافه بشه)
    let continueButton = `
      <div class="continue__child2__a__sub__supermarketamazing w-[165px] h-[40px] leading-[40px] lg:w-[145px] lg:h-[55px] lg:ms-[5px] bg-[whitesmoke] text-[#029a49] rounded-[30px] text-center lg:leading-[50px] relative">
        <div class="child__continue__child2__a__sub__supermarketamazing w-[80px] h-[20px] font-[iranyekanmedium] text-[12px] font-[500] absolute right-[20px] top-[2px]">
          بیش از <span class="font-[yekan] text-[12px]">100</span> کالا
        </div>
        <img src="./public/svg/sooperamazing/svgflesh.svg" alt="" class="absolute bottom-[20px] left-[16px]"/>
      </div>
    `;

    // قرار دادن کل HTML در DOM
    document.querySelector(".child2__a__sub__supermarketamazing").innerHTML = sooperamazingItems + continueButton;

  } catch (error) {
    console.log(error.message);
  }
};
