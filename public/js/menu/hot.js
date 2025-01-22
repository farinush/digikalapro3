export const fetchHot = async () => {
    let hotkala = "";
    try {
      let data = await fetch("http://localhost:3004/hotkala");
      let res = await data.json();
      hotkala += `
           <img src="${res.svgfire}" alt="" class="w-[24px] h-[24px]"/>
            <div>${res.titlefire}</div>`;
  
      document.querySelector(
        ".hotkala-center-top"
      ).innerHTML = hotkala;
    } catch (error) {
      console.log(error.message);
    }
  };

  let resData = {}; 
  export const fetchHotsecond = async () => {
    let hotsecond = "";
    try {
      let data = await fetch("http://localhost:3004/hotkala");
      resData = await data.json();
      hotsecond += `
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                      data-img="${resData.img1}" 
                      data-name="${resData.text1}" 
                      data-price="${resData.number1}">
                        <img src="${resData.img1}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number1}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text1}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                      data-img="${resData.img2}" 
                      data-name="${resData.text2}" 
                      data-price="${resData.number2}">
                        <img src="${resData.img2}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number2}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text2}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img3}" 
                       data-name="${resData.text3}" 
                       data-price="${resData.number3}">
                        <img src="${resData.img3}" alt="" class="w-[86px] h-[86px] block object-cover"/>
                        <h5 class="font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number3}</h5>
                        <h6 class="namekala font-[iranyekanmedium] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text3}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img4}" 
                       data-name="${resData.text4}" 
                       data-price="${resData.number4}">
                        <img src="${resData.img4}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number4}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text4}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img5}" 
                       data-name="${resData.text5}" 
                       data-price="${resData.number5}">
                        <img src="${resData.img5}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number5}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text5}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img6}" 
                       data-name="${resData.text6}" 
                       data-price="${resData.number6}">
                        <img src="${resData.img6}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number6}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text6}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img7}" 
                       data-name="${resData.text7}" 
                       data-price="${resData.number7}">
                        <img src="${resData.img7}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number7}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text7}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img8}" 
                       data-name="${resData.text8}" 
                       data-price="${resData.number8}">
                        <img src="${resData.img8}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number8}</h5>
                        <h6 class="namekala font-[iranyekanmedium] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text8}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img9}" 
                       data-name="${resData.text9}" 
                       data-price="${resData.number9}">
                        <img src="${resData.img9}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number9}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text9}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img10}" 
                       data-name="${resData.text10}" 
                       data-price="${resData.number10}">
                        <img src="${resData.img10}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number10}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text10}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img11}" 
                       data-name="${resData.text11}" 
                       data-price="${resData.number11}">
                        <img src="${resData.img11}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number11}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text11}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img12}" 
                       data-name="${resData.text12}" 
                       data-price="${resData.number12}">
                        <img src="${resData.img12}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number12}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text12}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img13}" 
                       data-name="${resData.text13}" 
                       data-price="${resData.number13}">
                        <img src="${resData.img13}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number13}</h5>
                        <h6 class="namekala font-[iranyekanmedium] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text13}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img14}" 
                       data-name="${resData.text14}" 
                       data-price="${resData.number14}">
                        <img src="${resData.img14}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number14}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text14}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img15}" 
                       data-name="${resData.text15}" 
                       data-price="${resData.number15}">
                        <img src="${resData.img15}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number15}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text15}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                    <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img16}" 
                       data-name="${resData.text16}" 
                       data-price="${resData.number16}">
                        <img src="${resData.img16}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number16}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text16}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img17}" 
                       data-name="${resData.text17}" 
                       data-price="${resData.number17}">
                        <img src="${resData.img17}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number17}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text17}</h6>
                      </div>
                      <hr class="w-[80%] h-[1px]  border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
                      <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
                       data-img="${resData.img18}" 
                       data-name="${resData.text18}" 
                       data-price="${resData.number18}">
                        <img src="${resData.img18}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
                        <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${resData.number18}</h5>
                        <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${resData.text18}</h6>
                      </div>
                    </div>
                  </div>
                `;
      document.querySelector(".myhotkala").innerHTML = `
               <div class="swiper-wrapper">
               ${hotsecond}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>`;
      const swiper = new Swiper(".myhotkala", {
        slidesPerView: 4,
        spaceBetween: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      
const items = document.querySelectorAll(".swiper-slide-child");

items.forEach(item => {
  item.addEventListener("click", function() {
    const itemData = {
      img: item.getAttribute('data-img'),
      name: item.getAttribute('data-name'),
      price: item.getAttribute('data-price')
    };
    if (itemData.img && itemData.name && itemData.price) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const itemExists = cart.some(existingItem => existingItem.img === itemData.img && existingItem.name === itemData.name && existingItem.price === itemData.price);
      console.log('داده آیتم:', itemData);

      if (!itemExists) {
        cart.push(itemData);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        console.log('سبد خرید به روز شد:', cart);
      } else {
        console.log('این آیتم قبلاً در سبد خرید وجود دارد.');
      }
      
    } else {
      console.log("داده‌های آیتم معتبر نیستند.");
    }
  });
});
    } catch (error) {
      console.log(error.message);
    }
  };


  