export const fetchAmazing = async () => {
    let amazing="";
    try {
      let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      let res = await data.json();
     
        amazing += `
         
                <div class="swiper-slide amazingactive bg-[#db314e] text-center text-[18px] flex justify-center items-center">
                  <div class="swiper-slide-item flex flex-col flex-wrap gap-x-[8px] items-center justify-center">
                    <img class="image_item1" src="${res.imgitem1}" alt=""/>
                    <img class="image_item2" src="${res.imgitem2}" alt=""/>
                    <a class="item_link flex justify-center items-center" href="#">${res.pitemlink}
                    <img src="${res.svgfleshbechap}" alt="" >
                    </a>
                  </div>
                </div>
                <div class="swiper-slide BRtrbr text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a href="#" class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[2px] items-center p-[10px] relative">
                      <img src="${res.image1}" alt="" class="w-[150px] h-[150px]" />
                      <p class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title1}</p>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[80%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                          ${res.price1}
                         <img src="${res.svgtoman}" alt=""/>
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage1}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice1}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a href="#" class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image2}" alt="" class="w-[150px] h-[150px]"/>
                      <p class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title2}</p>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                           ${res.price2}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage2}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice2}</h5>
                    </div>
                  </a> 
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a href="#" class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image3}" alt="" class="w-[150px] h-[150px]"/>
                      <p class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title3}</p>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                           ${res.price3}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage3}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice3}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]" href="#">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image4}" alt="" class="w-[150px] h-[150px]"/>
                      <p class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title4}</p>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                           ${res.price4}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage4}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice4}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]" href="#">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image5}" alt="" class="w-[150px] h-[150px]"/>
                      <P class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title5}</P>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                           ${res.price5}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage5}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice5}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]" href="#">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image6}" alt="" class="w-[150px] h-[150px]"/>
                      <P class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title6}</P>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                          ${res.price6}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage6}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice6}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]" href="#">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image7}" alt="" class="w-[150px] h-[150px]"/>
                      <p class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title7}</p>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                          ${res.price7}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage7}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice7}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]" href="#">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image8}" alt="" class="w-[150px] h-[150px]"/>
                      <p class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title8}</p>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                           ${res.price8}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage8}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice8}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]" href="#">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image9}" alt="" class="w-[150px] h-[150px]"/>
                      <P class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title9}</P>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                           ${res.price9}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage9}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice9}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]" href="#">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image10}" alt="" class="w-[150px] h-[150px]"/>
                      <P class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title10}</P>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                           ${res.price10}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage10}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice10}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]" href="#">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image11}" alt="" class="w-[150px] h-[150px]"/>
                      <P class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title11}</P>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                          ${res.price11}
                         <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage11}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice11}</h5>
                    </div>
                  </a>             
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]" href="#">
                    <div class="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[4px] items-center p-[10px] relative">
                      <img src="${res.image12}" alt="" class="w-[150px] h-[150px]"/>
                      <P class="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">${res.title12}</P>
                      <div class="w-[144px] h-[24px] flex flex-row-reverse justify-around">
                        <h5 class="price w-[70%] h-[24px] font-[yekan] text-[13px] flex justify-end">
                          ${res.price12}
                          <img src="${res.svgtoman}" alt="" />
                        </h5>
                        <h6 class="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">${res.percentage12}</h6>
                      </div>
                      <h5 class="pureprice font-[yekan] text-[11px] opacity-[0.4] line-through absolute left-[20px] bottom-[-5px]">${res.pureprice12}</h5>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide BRtlbl text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <a class="a_slid13 w-[inherit] h-[inherit] block" href="#">
                    <div class="svg_slide13 w-[inherit] h-[50%] relative ">
                      <div class="child_svg_slide13">
                        <img src="${res.svgsenoghte}" alt="" class="senoghte">
                      </div>
                    </div>
                    <p class="p_slide13 w-[inherit] h-[50%] font-[iranyekanmedium] text-[14px] text-[#2b2b2b] opacity-[0.8]">${res.subtitle13}</p>
                  </a>
                </div>
              `;
      
  
      // اضافه کردن تمام محتوای HTML در یک مرحله
      document.querySelector(".myamazing").innerHTML = `
      <div class="swiper-wrapper">
        ${amazing}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      
    `;
  
      // راه‌اندازی Swiper
      const swiper = new Swiper(".myamazing", {
        slidesPerView: 7.5,
        spaceBetween: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  