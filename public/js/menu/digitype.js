export const fetchDigitype = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    let digitype = res.digitype.map((item) => {
      return `   
            <div class="child__subdigitype w-[140px] h-[79px]">
              <a class="a__child__subdigitype w-[140px] h-[79px] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div class="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src="${item.img}" alt="" class="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span class="span__a__child__subdigitype font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">${item.name}</span>
              </a>
            </div>
       `;
    });
    document.querySelector(".subdigitype").innerHTML = digitype;
  } catch (error) {
    console.log(error.message);
  }
};
