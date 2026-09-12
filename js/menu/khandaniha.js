export const fetchKhandaniha = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    let khandaniha = res.khandaniha.map((item) => {
      return `        
            <div class="sub-image-child-khandaniha w-[92%] lg:w-[325px] lg:h-[280px]  rounded-[15px] border-[1px] border-solid border-[lightgray]" key=${item.id}>
              <a href="#" class="a-sub-image-child-khandaniha w-[100%] h-[100%] flex flex-col flex-wrap items-center gap-w-[15px]">
                <div class="img-a-sub-image-child-khandaniha w-[100%] lg:h-[201px]">
                  <img src="${item.img}" alt="" class="w-[100%] h-auto object-cover rounded-tl-[15px] rounded-tr-[15px]"/>
                </div>
                <p class="text-[12px] text-[#2b2b2b] leading-[20px] font-[yekan] mt-[20px]">${item.p}</p>
              </a>
            </div>`;
    });
    document.querySelector(".image-child-khandaniha").innerHTML = khandaniha.join('');
  } catch (error) {
    console.log(error.message);
  }
};
