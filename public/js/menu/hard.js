 export const fetchHardsecond = async () => {
    try {
      let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      let resData = await data.json();
      const hardsecondHTML = resData.hardsecond.map((group) => {
      const sectionItems = group.section.map((item) => {
        return `
          <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
               data-img="${item.img}" 
               data-name="${item.text}" 
               data-price="${item.number}">
            <img src="${item.img}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
            <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${item.number}</h5>
            <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${item.text}</h6>
          </div>
          <hr class="w-[80%] h-[1px] border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
        `;
      }).join("");

      return `
        <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
          <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
            ${sectionItems}
          </div>
        </div>
      `;
    }).join("");
      document.querySelector(".myhard").innerHTML = `
               <div class="swiper-wrapper">
               ${hardsecondHTML}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>`;
      const swiper = new Swiper(".myhard", {
        slidesPerView: 4,
        spaceBetween: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  