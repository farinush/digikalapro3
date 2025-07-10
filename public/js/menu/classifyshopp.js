export const fetchClassifyshopp = async () => {
  let classify = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    classify += `
        <div class="sub__classifyshopping lg:w-[70%] lg:h-[452px] lg:flex lg:flex-col flex-wrap justify-center items-center my-[3px] mx-auto">
          <div class="text__sub__classifyshopping w-[100%] h-[10%] text-center">
            <span class="font-[iranyekanmedium] text-[20px] leading-[70px]">${res.subtitle}</span>
          </div>
          <div class="image__sub__classifyshopping w-[100%] h-[90%] flex flex-row flex-wrap justify-center items-center gap-x-[5px]">
            <div class="subimage__sub__classifyshopping w-[139px] h-[100%] p-[5px]">
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img1}" alt="" class="w-[100px] h-[100px]" />
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text1}</span>
                </div>
              </a>
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img2}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text2}</span>
                </div>
              </a>
            </div>
            <div class="subimage__sub__classifyshopping w-[139px] h-[100%] p-[5px]">
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img3}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text3}</span>
                </div>
              </a>
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img4}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text4}</span>
                </div>
              </a>
            </div>
            <div class="subimage__sub__classifyshopping w-[139px] h-[100%] p-[5px]">
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img5}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text5}</span>
                </div>
              </a>
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img6}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text6}</span>
                </div>
              </a>
            </div>
            <div class="subimage__sub__classifyshopping w-[139px] h-[100%] p-[5px]">
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img7}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text7}</span>
                </div>
              </a>
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img8}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text8}</span>
                </div>
              </a>
            </div>
            <div class="subimage__sub__classifyshopping w-[139px] h-[100%] p-[5px]">
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img9}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text9}</span>
                </div>
              </a>
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img10}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text10}</span>
                </div>
              </a>
            </div>
            <div class="subimage__sub__classifyshopping w-[139px] h-[100%] p-[5px]">
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img11}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text11}</span>
                </div>
              </a>
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img12}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text12}</span>
                </div>
              </a>
            </div>
            <div class="subimage__sub__classifyshopping w-[139px] h-[100%] p-[5px]">
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img13}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text13}</span>
                </div>
              </a>
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img14}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text14}</span>
                </div>
              </a>
            </div>
            <div class="subimage__sub__classifyshopping w-[139px] h-[100%] p-[5px]">
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img15}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text15}</span>
                </div>
              </a>
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#">
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${res.img16}" alt="" class="w-[100px] h-[100px]"/>
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${res.text16}</span>
                </div>
              </a>
            </div>
          </div>
        </div>`;
    document.querySelector(".classifyshopping").innerHTML=classify;
  } catch (error) {
    console.log(error.message);
  }
};
