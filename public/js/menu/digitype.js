export const fetchDigitype = async () => {
    let digitype = "";
    try {
      let data = await fetch("http://localhost:3004/digitype");
      let res = await data.json();
  
      // دسترسی به داده‌ها بدون استفاده از map
      digitype += `   
        <div class="subdigitype w-[70%] lg:h-[118px] m-auto pt-[15px] box-border flex flex-row flex-wrap lg:flex-nowrap justify-between items-center gap-y-[7px]" >
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${res.img1}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name1}</span>
              </a>
            </div>
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${res.img2}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none" />
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name2}</span>
              </a>
            </div>
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${res.img3}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name3}</span>
              </a>
            </div>
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${res.img4}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name4}</span>
              </a>
            </div>
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${res.img5}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name5}</span>
              </a>
            </div>
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${res.img6}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name6}</span>
              </a>
            </div>
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${res.img7}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name7}</span>
              </a>
            </div>
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${res.img8}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name8}</span>
              </a>
            </div>
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${res.img9}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name9}</span>
              </a>
            </div>
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="divchild__subdigitype w-[53px] h-[53px] bg-[#dddddd80] rounded-[50%] relative " >
                  <img src="${res.imgsvg10}" alt="" class="svgdivchild"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${res.name10}</span>
              </a>
            </div>
        </div>`;
  
      // اضافه کردن محتوای HTML به صفحه
      document.querySelector(".digitype").innerHTML = digitype;
  
    } catch (error) {
      console.log(error.message);
    }
  };
  