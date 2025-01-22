export const fetchFormpage=async()=>{
    let formpage=""
   try{
    let data=await fetch("http://localhost:3004/formpage")
    let res=await  data.json()
    formpage=res.map((item)=>{
        return  `
        <div class="svg mx-auto block">
        <img src="${item.svg1}" alt="">
      </div>
        <div class="text w-[400px] h-[50px] font-[iranyekanmedium] flex flex-row flex-wrap items-center justify-start gap-y-[5px] mt-[20px]">
            <span class="vorod h-[50px] justify-center flex leading-[50px] text-[16px]" >${item.body1}</span>
            <span class="devider w-[2px] mx-[5px] h-[40%] bg-[#2b2b2b]"></span>
            <span class="sabtenam h-[50px] flex justify-center text-[16px] leading-[50px]" >${item.body2}</span>
        </div>
        <label for="fullname" class="font-[iranyekanmedium] text-[13px] mt-[18px] capitalize text-[#7c888b]">${item.body3}
            <br>
            ${item.body4}
        </label>
        <input class="w-[95%] h-[35px] block my-[20px] rounded-[5px] border-[1px] border-solid border-[#25bbce]" type="${item.type1}" name="fullname" id="fullname">
        <input class="w-[100%] h-[46px] text-[13px] font-[iranyekanmedium] capitalize bg-[#f04055] text-center rounded-[5px] text-[white]" type="${item.type2}" value="${item.value}">
        <div class="text2 font-[iranyekanmedium] text-[10px] mt-[15px] text-[#7c888b] pe-[5px]">${item.body5}<span class="text-[#25bbce]">${item.body6}</span> و<span class="text-[#25bbce]"> ${item.body7}</span> است.</div>`
    })
    document.querySelector("form").innerHTML=formpage.join("")
   }catch(error){
    console.log(error.message)
   }
}