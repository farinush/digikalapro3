export const fetchHardfirst = async () => {
    let hardfirst = "";
    try {
      let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      let res = await data.json();
      hardfirst += `
           <img src="${res.svgfire}" alt="" class="w-[24px] h-[24px]"/>
            <div>${res.titlefire}</div>`;
  
      document.querySelector(
        ".hard-center-top"
      ).innerHTML = hardfirst;
    } catch (error) {
      console.log(error.message);
    }
  };


  export const fetchHardsecond = async () => {
    let hardsecond = "";
    try {
      let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      let res = await data.json();
      hardsecond += `
                  <div class="swiper-slide  text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img1}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number1}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text1}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img2}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number2}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text2}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img3}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number3}</h5>
                        <h6 class="font-[iranyekanmedium] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text3}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide  text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img4}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number4}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text4}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img5}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number5}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text5}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img6}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number6}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text6}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img7}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number7}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text7}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img8}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number8}</h5>
                        <h6 class="font-[iranyekanmedium] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text8}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img9}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number9}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text9}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img10}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number10}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text10}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img11}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number11}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text11}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img12}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number12}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text12}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img13}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number13}</h5>
                        <h6 class="font-[iranyekanmedium] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text13}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img14}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number14}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text14}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img15}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number15}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text15}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img16}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number16}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text16}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img17}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number17}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text17}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child my-[5px] w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]">
                        <img src="${res.img18}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${res.number18}</h5>
                        <h6 class="font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${res.text18}</h6>
                      </div>
                    </div>
                  </div>
                `;
      document.querySelector(".myhard").innerHTML = `
               <div class="swiper-wrapper">
               ${hardsecond}
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
  
  