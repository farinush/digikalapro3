export const fetchPoshtibanilabel=async()=>{
    let poshtibanilabel=""
    try{
        let data=await fetch("http://localhost:3004/poshtibani")
        let res=await data.json()
        poshtibanilabel+=`<img src="${res.imglabel}" alt="" class="w-[30px] inline-block h-[30px] text-[whitesmoke]">`
        document.querySelector(".labelposhtibani").innerHTML=poshtibanilabel;

    }catch(error){
        console.log(error.message)
    }
}
export const fetchSubposhtibani=async()=>{
    let subposhtibani1=""
    try{
        let data=await fetch("http://localhost:3004/poshtibani")
        let res=await data.json()
        subposhtibani1+=`
         <div class="redbox-sub-subposhtibani w-[100%] h-[10%] bg-[#ef4055] font-[iranyekanmedium] text-[whitesmoke] leading-[55px] ps-[15px] rounded-tl-[15px] rounded-tr-[15px]">${res.subtitle1}</div>
      <div class="hi-sub-subposhtibani font-[iranyekanmedium] text-[16px] py-[10px] px-[20px]">
        ${res.hello}${res.hand}
      </div>
      <div class="text-sub-subposhtibani font-[iranyekanmedium] text-[13px] px-[20px] leading-[25px]">
      ${res.title1}
      </div>
    <div class="lastbox-sub-subposhtibani w-[100%] h-[290px] flex flex-col flex-wrap">
     <div class="collapse collapse-arrow bg-base-200 text-[13px]">
       <input type="radio" name="my-accordion-2" checked="checked"/>
       <div class="collapse-title text-[14px] font-medium">${res.title2}</div>
       <div class="collapse-content">
        <p>${res.ptitle1}</p>
      </div>
     </div>
     <div class="collapse collapse-arrow bg-base-200 text-[13px]">
      <input type="radio" name="my-accordion-2"/>
      <div class="collapse-title text-[14px] font-medium">${res.title3}</div>
        <div class="collapse-content">
         <p>${res.ptitle2}</p>
       </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200 text-[13px]">
      <input type="radio" name="my-accordion-2"/>
       <div class="collapse-title text-[14px] font-medium">${res.title4}</div>
         <div class="collapse-content">
          <p>${res.ptitle3}</p>
         </div>
       </div>
     </div>
      <div class="answer-sub-subposhtibani flex flex-col flex-wrap items-center justify-center font-[iranyekanmedium] text-[13px] mx-auto gap-x-[5px]">
        ${res.title5}
        <div class="bluebox w-[206px] h-[48px] bg-[#25bbce] rounded-[25px] mt-[10px] text-[whitesmoke] text-center font-600 leading-[48px] flex justify-center items-center flex-row flex-wrap relative">
          ${res.title6}
          <img src="${res.svgfleshbechap}" alt="" class="buttonflesh4  w-[24px] h-[24px] block absolute bottom-[10px] left-[11px]"/>
        </div>
      </div>
      <label for="shut" class="block w-[35px] h-[35px] text-center leading-[35px] font-bold cursor-pointer absolute left-[5px] top-[15px]">
        <img src="${res.svgfleshbechap}" alt="" class=" w-[24px] h-[24px]">
      </label>`
      document.querySelector(".sub-subposhtibani").innerHTML=subposhtibani1;

    }catch(error){
        console.log(error.message)
    }
}
async function poshtibaniView() {
  function setupEventListeners() {
      const inputView = document.querySelector(".inputviewposhtibani");
      const bottomPoshtibani = document.querySelector(".subposhtibani");
      const inputShut = document.querySelector(".inputshutposhtibani");
      if (inputView && bottomPoshtibani && inputShut) {
          inputView.addEventListener("click", function () {
              bottomPoshtibani.classList.remove("hidden");
              bottomPoshtibani.classList.add("block");
          });
          inputShut.addEventListener("click", function () {
              bottomPoshtibani.classList.add("hidden");
          });
      }
  }
  const checkInterval = setInterval(function() {
      setupEventListeners(); // ثبت رویدادها
      if (document.querySelector(".inputviewposhtibani") && document.querySelector(".subposhtibani") && document.querySelector(".inputshutposhtibani")) {
          clearInterval(checkInterval);
      }
  }, 100); 
}
poshtibaniView()
