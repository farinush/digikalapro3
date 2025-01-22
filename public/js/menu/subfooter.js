export const fetchSubfooter = async () => {
  let subfoot = "";
  try {
    let data = await fetch("http://localhost:3004/subfooter");
    let res = await data.json();
    subfoot += `
     <div class="box-1 w-[100%] h-[40px] flex flex-row flex-wrap justify-center lg:justify-between box-border px-[50px]">
           <div class="svg_box-1 w-[138px] h-[100%] hidden lg:!block">
             <img src="${res.svgdigikala}" alt=""/>
            </div>
            <div class="buttonbox1 w-[138px] h-[100%] mx-[50px] lg:mx-0">
              <a href="#" class="a_box-1 w-[137px] flex flex-row flex-wrap justify-center items-center h-[100%] lg:border-[1px] lg:border-solid lg:border-[lightgray] rounded-[10px] lg:text-[#a1a2ab] text-[#3fb6c4] font-bold  font-[iranyekanmedium] text-[12px] text-center leading-[40px] ">
               ${res.button1}
                <img src="${res.svgfleshbebala}" alt=""/>
              </a>
              </div>
              </div>
           <div class="box-2 w-[95%] lg:h-[27px] my-[10px] lg:flex  lg:flex-row flex-wrap text-center lg:text-start justify-center lg:justify-start items-center gap-x-[15px] px-[50px] box-border">
            <span class="span1 w-fit h-[100%] font-[yekan] text-[13px] text-[#a1a2ab] text-center leading-[27px]">${res.span1}</span>
            <hr class="h-[80%] text-center border-l-[1px] border-l-solid border-l-[lightgray] text-[#a1a2ab]">
            <span class="span1 w-fit h-[100%] font-[yekan] text-[13px] text-[#a1a2ab] text-center leading-[27px]">${res.span2}</span>
            <hr class="h-[80%] text-center border-l-[1px] border-l-solid border-l-[lightgray] text-[#a1a2ab]">
            <span class="span1 w-fit h-[100%] font-[yekan] text-[13px] text-[#a1a2ab] text-center leading-[27px]">${res.span3}</span></div>
            <div class="box-3 w-[100%] lg:w-[95%] h-[103px] my-[30px] flex flex-wrap flex-row justify-evenly items-center lg:px-[50px] box-border">
            <div class="div-box-3 w-[20%] h-[100%]">
              <a href="#" class="a-div-box-3 text-[#a1a2ab] font-[yekan] w-[100%] h-[100%] text-center lg:text-start flex flex-col flex-wrap justify-center items-center text-[12px]">
                <img src="${res.svgbox}" alt="" class="w-[56px] h-[56px] block"/>
                <span>${res.titlebox}</span>
              </a>
            </div>
            <div class="div-box-3 w-[20%] h-[100%]">
              <a class="a-div-box-3 text-[#a1a2ab] font-[yekan] w-[100%] h-[100%] text-center lg:text-start flex flex-col flex-wrap justify-center items-center text-[12px]" href="#">
               <img src="${res.svghand}" alt="" class="w-[56px] h-[56px] block"/>
                  <span>${res.titlehand}</span>
              </a>
            </div>
            <div class="div-box-3 w-[20%] h-[100%]">
              <a class="a-div-box-3 text-[#a1a2ab] font-[yekan] w-[100%] h-[100%] text-center lg:text-start flex flex-col flex-wrap justify-center items-center text-[12px]" href="#">
               <img src="${res.svgdaily}" alt="" class="w-[56px] h-[56px] block"/>
                  <span>${res.titledaily}</span>
              </a>
            </div>
            <div class="div-box-3 w-[20%] h-[100%]">
              <a class="a-div-box-3 text-[#a1a2ab] font-[yekan] w-[100%] h-[100%] text-center lg:text-start flex flex-col flex-wrap justify-center items-center text-[12px]" href="#">
               <img src="${res.svgreverse}" alt="" class="w-[56px] h-[56px] block"/>
                <span>${res.titlereverse}</span></a>
            </div>
            <div class="div-box-3 w-[20%] h-[100%]">
              <a class="a-div-box-3 text-[#a1a2ab] font-[yekan] w-[100%] h-[100%] text-center lg:text-start flex flex-col flex-wrap justify-center items-center text-[12px]" href="#">
               <img src="${res.svgoriginal}" alt="" class="w-[56px] h-[56px] block"/>
                  <span>${res.titleoriginal}</span>
              </a>
            </div></div>
            <div class="box-4 hidden  lg:!flex box-border w-[95%] py-[30px] px-[50px]  flex-row flex-wrap justify-center items-start">
         <div class="div1-box4 px-[50px] w-[25%]  flex-grow-1 h-[100%] flex flex-col flex-wrap justify-start items-start gap-y-[10px]">
              <a href="#" class="huge-div1-box4 text-[#2b2b2b] font-[iranyekanmedium] text-[14px] leading-[12px] text-right block w-[100%] h-[30px] font-700">${res.huge1}</a>
              <a href="#" class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]">${res.simple1}</a>
              <a href="#" class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]">${res.simple2}</a>
              <a href="#" class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]">${res.simple3}</a>
              <a href="#" class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]">${res.simple4}</a>
              <a href="#" class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]">${res.simple5}</a>
              <a href="#" class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]">${res.simple6}</a>
            </div>
            <div class="div1-box4 px-[50px] w-[25%] flex-grow-1 h-[100%] flex flex-col flex-wrap justify-start items-start gap-y-[10px]">
              <a class="huge-div1-box4 text-[#2b2b2b] font-[iranyekanmedium] text-[14px] leading-[12px] text-right block w-[100%] h-[30px] font-700" href="#">${res.huge2}</a>
              <a class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]" href="#">${res.simple7}</a>
              <a class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]" href="#">${res.simple8}</a>
              <a class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]" href="#">${res.simple9}</a>
              <a class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]" href="#">${res.simple10}</a>
              <a class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]" href="#">${res.simple11}</a>
            </div>
            <div class="div1-box4 px-[50px] w-[25%] flex-grow-1 h-[100%] flex flex-col flex-wrap justify-start items-start gap-y-[10px]">
              <a class="huge-div1-box4 text-[#2b2b2b] font-[iranyekanmedium] text-[14px] leading-[12px] text-right block w-[100%] h-[30px] font-700" href="#">${res.huge3}</a>
              <a class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]" href="#">${res.simple12}</a>
              <a class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]" href="#">${res.simple13}</a>
              <a class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]" href="#">${res.simple14}</a>
            </div>
            <div class="div1-box4 w-[25%] active-box4 gap-y-[20px] flex-grow-1 h-[100%] flex flex-col flex-wrap justify-start items-start ">
              <div class="span-div1-box4 font-[iranyekanmedium] text-[14px] text-[#2b2b2b]"><span>${res.spanhamrahi}</span></div>
              <div class="svg-div1-box4 flex flex-row flex-wrap justify-center items-center gap-y-[7px] text-center">
                <img src="${res.svginstagram}" alt=""/>
                <img src="${res.svgtwitter}" alt=""/>
                <img src="${res.svglinkdin}" alt=""/>
                <img src="${res.svgaparat}" alt=""/>
              </div>
              <div class="span-div1-box4 font-[iranyekanmedium] text-[14px] text-[#2b2b2b]"><span>${res.spantakhfif}</span>
              </div>
              <div class="email-div1-box4 font-[iranyekanmedium] text-[12px] flex flex-row flex-wrap justify-center items-center gap-y-[5px]">
                <input type="text" placeholder="${res.placeholdertakhfif}" id="submit" class="  w-[178px] h-[40px] bg-[#f0f0f0] rounded-[10px] outline-none font-[iranyekanmedium] border-none px-[20px] leading-[40px]" >
                <label for="submit" class="w-[55px] h-[40px] bg-[#e0e0e2] mx-[20px] text-[whitesmoke] rounded-[10px] block text-center leading-[40px]">${res.labeltakhfif}</label>
              </div>
            </div>
            </div>
            
             <div class="join join-vertical w-full block lg:!hidden font-[iranyekanmedium] text-[13px]">
               <div class="collapse collapse-arrow join-item border-base-300 border ">
               <input type="radio" name="my-accordion-4" checked="checked"  />
               <div class="collapse-title text-md font-bold">${res.huge1}</div>
               <div class="collapse-content text-[#a09999]">
                 <p>${res.simple1}</p>
                 <p>${res.simple2}</p>
                 <p>${res.simple3}</p>
                 <p>${res.simple4}</p>
                 <p>${res.simple5}</p>
                 <p>${res.simple6}</p>
               </div>
             </div>
             <div class="collapse collapse-arrow join-item border-base-300 border ">
               <input type="radio" name="my-accordion-4"  />
               <div class="collapse-title text-md font-bold">${res.huge2}</div>
               <div class="collapse-content text-[#a09999]">
                <p>${res.simple7}</p>
                <p>${res.simple8}</p>
                <p>${res.simple9}</p>
                <p>${res.simple10}</p>
                <p>${res.simple11}</p>
               </div>
              </div>
             <div class="collapse collapse-arrow join-item border-base-300 border">
             <input type="radio" name="my-accordion-4"  />
             <div class="collapse-title text-md font-bold">${res.huge3}</div>
             <div class="collapse-content text-[#a09999]">
               <p>${res.simple12}</p>
               <p>${res.simple13}</p>
               <p>${res.simple14}</p>
              </div>
             </div>
             <div class="collapse collapse-arrow join-item border-base-300 border">
             <input type="radio" name="my-accordion-4"  />
             <div class="collapse-title text-md font-bold">${res.huge4}</div>
             <div class="collapse-content text-[#a09999] flex flex-row flex-wrap gap-x-[7px] justify-center items-center">
              <img src="${res.imgdigi1}" alt="" />
              <hr class="w-[1px] h-[30%] bg-[#2b2b2b]"/>
              <img src="${res.imgdigi2}" alt="" />
              <hr class="w-[1px] h-[30%] bg-[#2b2b2b]"/>
              <img src="${res.imgdigi3}" alt="" />
              <hr class="w-[1px] h-[30%] bg-[#2b2b2b]"/>
              <img src="${res.imgdigi4}" alt="" />
              <hr class="w-[1px] h-[30%] bg-[#2b2b2b]"/>
              <img src="${res.imgdigi5}" alt="" />
              <hr class="w-[1px] h-[30%] bg-[#2b2b2b]"/>
              <img src="${res.imgdigi6}" alt="" />
              <hr class="w-[1px] h-[30%] bg-[#2b2b2b]"/>
              <img src="${res.imgdigi8}" alt="" />
              </div>
             </div>
            </div>
            
            <div class="box-5 w-[95%] h-[76px] box-border bg-[#0c0c0c] lg:bg-[#3c4b6d] rounded-[8px] flex flex-row flex-wrap justify-start mt-[20px]">
        <div class="image-span-box-5 w-[100%] justify-center lg:w-[50%] h-[100%] flex flex-row flex-wrap items-center gap-x-[10px] lg:justify-start lg:ps-[30px]">
            <img src="${res.axdigikala}" alt="" class="w-[44px] h-[44px]  object-cover text-center inline-block">
            <a class="a-image-span-box-5 font-[iranyekanmedium] text-[20px] font-500 text-[white]" href="#">${res.spanbox5}</a>
           </div>
          <div class="apps-box-5 w-[50%] h-[100%] hidden lg:!block">
            <a href="#" class="bma-apps-box-5 w-[100%] h-[100%] flex flex-row flex-wrap justify-end items-center pe-[30px] gap-x-[20px]">
             <img src="${res.imgbazar}" alt="" class="w-[142px] h-[44px] object-cover">
             <img src="${res.imgmyket}" alt="" class="w-[142px] h-[44px] object-cover">
            <img src="${res.imgsibapp}" alt="" class="w-[142px] h-[44px] object-cover">
            <img  class="image-more-apps-box-5 w-[42px] h-[44px] bg-[white] rounded-[5px]" src="${res.imgmore}" alt="">
            </a>
         </div>
         </div>
         <div class="box-6 w-[95%] mt-[30px] py-8 border-t-[1px] border-t-solid border-t-[lightgray] border-b-[1px] border-b-solid border-b-[lightgray] lg:flex items-center flex-wrap lg:flex-row pt-[20px] ">
            <div class="tozihat-box-6 w-[100%] lg:w-[1154px] py-8 lg:px-[40px]">
              <div class="subtozihat-box-6 w-[100%] lg:w-[1154px] flex  flex-col flex-wrap items-start gap-x-[10px]">
                <h5 class="font-[iranyekanmedium] text-[17px] text-[#6a6461]">${res.titlebox6}</h5>
                <p class="text-ellipsis font-[iranyekanmedium] text-[9px] lg:text-[11px] text-[#a1a2ab] leading-[25px]">${res.pbox6}</p>
                <p class="p-active-box-6 font-[iranyekanmedium] text-[9px] lg:text-[11px] text-[#a1a2ab] leading-[25px]">${res.pbox62}</p>
                <p class="pbox63 hidden font-[iranyekanmedium] text-[9px] lg:text-[11px] text-[#a1a2ab] leading-[25px]">${res.pbox63}</p>
              </div>
              <a class="a-active-box-6  text-[#25bbce] font-[iranyekanmedium] text-[12px] flex flex-row flex-wrap justify-start items-center gap-y-[5px] relative" href="#">${res.buttonmore}
                <img src="${res.svgfleshbechap}" alt="" class="absolute right-[80px] top-[-3px]"/></a>
            </div>
            <div class="standard-box-6 justify-center  gap-x-[10px] flex-row flex-wrap hidden lg:!flex">
              <a href="#" class="w-[109px] h-[109px] border-[1px] border-solid border-[lightgray] rounded-[5px]">
                <img src="${res.kala1}" alt="" class="w-[100px] h-[100px] object-contain"/>
              </a>
              <a href="#" class="w-[109px] h-[109px] border-[1px] border-solid border-[lightgray] rounded-[5px]">
                <img src="${res.kala2}" alt="" class="w-[100px] h-[100px] object-contain"/>
              </a>
              <a href="#" class="w-[109px] h-[109px] border-[1px] border-solid border-[lightgray] rounded-[5px]">
                <img src="${res.kala3}" alt="" class="w-[100px] h-[100px] object-contain"/>
              </a>
            </div></div>
            <div class="box-7 w-[95%] lg:h-[84px] mb-[5px] flex flex-row flex-wrap justify-center items-center">
            <p class="font-[iranyekanmedium] text-center text-[10px] lg:text-[12px] text-[#a1a2ab] lg:leading-[84px]">${res.pbox7}</p>
          </div>`;
    document.querySelector(".subfooter").innerHTML = subfoot;
  } catch (error) {
    console.log(error.message);
  }
};
export function buttonReverse() {
  const observer = new MutationObserver(function (mutationsList, observer) {
    const button1 = document.querySelector(".buttonbox1");
    if (button1) {
      console.log("دکمه پیدا شد!");
      button1.addEventListener("click", function (event) {
        console.log("دکمه کلیک شد!");
        event.preventDefault();
        document.documentElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        console.log("scrollIntoView اجرا شد");
      });

      observer.disconnect();
    }
  });
  console.log("MutationObserver فعال شد.");
  observer.observe(document.body, { childList: true, subtree: true });
}
export function buttonMore() {
  const observer = new MutationObserver(function (mutationsList, observer) {
    const buttonmore = document.querySelector(".a-active-box-6");
    const pbox = document.querySelector(".pbox63");
    if (buttonmore && pbox) {
      console.log("دکمه و pbox پیدا شدند");
      buttonmore.addEventListener("click", function (event) {
        event.preventDefault();
        pbox.style.display = "block";
        buttonmore.style.display = "none";
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        const closeButton = document.createElement("button");
        closeButton.textContent = "بستن";
        closeButton.classList.add("close-button");
        buttonContainer.appendChild(closeButton);
        pbox.appendChild(buttonContainer);

        closeButton.addEventListener("click", function () {
          pbox.style.display = "none";
          buttonmore.style.display = "block";
          buttonContainer.remove();
        });
      });
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
