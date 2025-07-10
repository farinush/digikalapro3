export const fetchKhandaniha=async()=>{
    let khandaniha=""
    try{
        let data=await fetch("https://farinush.github.io/digikalapro3/db.json")
        let res=await data.json()
        khandaniha+=`        
        <div class="child-khandaniha w-[95%] lg:w-[71%] h-[100%] flex flex-col flex-wrap box-border my-[10px] mx-auto mb-[20px]">
          <div class="text-child-khandaniha w-[100%] h-[20%] flex flex-row flex-wrap justify-between px-[20px] box-border">
            <h5 class="font-[iranyekanmedium] text-[14px] text-[#2b2b2b] leading-[60px] pe-[20px]">${res.title1}</h5>
            <h6 class="font-[iranyekanmedium] text-[12px] text-[#39b7c6] leading-[60px] flex px-[20px] items-center gap-y-[5px] relative ">${res.title2}
              <img src="${res.svgfleshbechap}" alt="" class="absolute top-[22px] left-[-1px]"/>
            </h6>
          </div>
          <div class="image-child-khandaniha w-[100%] h-[80%] flex flex-row flex-wrap gap-x-[12px] box-border">
            <div class="sub-image-child-khandaniha w-[92%] lg:w-[325px] lg:h-[280px]  rounded-[15px] border-[1px] border-solid border-[lightgray]">
              <a href="#" class="a-sub-image-child-khandaniha w-[100%] h-[100%] flex flex-col flex-wrap items-center gap-w-[15px]">
                <div class="img-a-sub-image-child-khandaniha w-[100%] lg:h-[201px]">
                  <img src="${res.img1}" alt="" class="w-[100%] h-auto object-cover rounded-tl-[15px] rounded-tr-[15px]"/>
                </div>
                <p class="text-[12px] text-[#2b2b2b] leading-[20px] font-[yekan] mt-[20px]">${res.p1}</p>
              </a>
            </div>
            <div class="sub-image-child-khandaniha w-[92%] lg:w-[325px] lg:h-[280px] mt-[10px] lg:mt-0 rounded-[15px] border-[1px] border-solid border-[lightgray]">
              <a href="#" class="a-sub-image-child-khandaniha w-[100%] h-[100%] flex flex-col flex-wrap items-center gap-w-[15px]">
                <div class="img-a-sub-image-child-khandaniha w-[100%] lg:h-[201px]">
                  <img src="${res.img2}" alt=""class="w-[100%] h-auto object-cover rounded-tl-[15px] rounded-tr-[15px]"/>
                </div>
                <p class="text-[12px] text-[#2b2b2b] leading-[20px] font-[yekan] mt-[20px]">${res.p2}</p>
              </a>
            </div>
            <div class="sub-image-child-khandaniha w-[92%] lg:w-[325px] lg:h-[280px] mt-[10px] lg:mt-0 rounded-[15px] border-[1px] border-solid border-[lightgray]">
              <a href="#" class="a-sub-image-child-khandaniha w-[100%] h-[100%] flex flex-col flex-wrap items-center gap-w-[15px]">
                <div class="img-a-sub-image-child-khandaniha w-[100%] lg:h-[201px]">
                  <img src="${res.img3}" alt="" class="w-[100%] h-auto object-cover rounded-tl-[15px] rounded-tr-[15px]"/>
                </div>
                <p class="text-[12px] text-[#2b2b2b] leading-[20px] font-[yekan] mt-[20px]">${res.p3}</p>
              </a>
            </div>
            <div class="sub-image-child-khandaniha w-[92%] lg:w-[325px] lg:h-[280px] mt-[10px] lg:mt-0 rounded-[15px] border-[1px] border-solid border-[lightgray]">
              <a href="#" class="a-sub-image-child-khandaniha w-[100%] h-[100%] flex flex-col flex-wrap items-center gap-w-[15px]">
                <div class="img-a-sub-image-child-khandaniha w-[100%] lg:h-[201px]">
                  <img src="${res.img4}" alt="" class="w-[100%] h-auto object-cover rounded-tl-[15px] rounded-tr-[15px]"/>
                </div>
                <p class="text-[12px] text-[#2b2b2b] leading-[20px] font-[yekan] mt-[20px]">${res.p4}</p>
              </a>
            </div>
          </div>
        </div>`
        document.querySelector(".khandaniha").innerHTML=khandaniha;

    }catch(error){
        console.log(error.message)
    }
}