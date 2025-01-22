export const fetchButtonsoop = async () => {
  let buttonlabel = "";
  try {
    let data = await fetch("http://localhost:3004/buttonsoopermarket");
    let res = await data.json();
    buttonlabel += `
        <div class="labeldivsoopermarket flex justify-center items-center">
        <p class="supermarket">${res.titlelabel}</p> 
          <img src="${res.svglabel}" alt="" class="basket w-[35px] inline-block h-[35px] text-[whitesmoke]"/>
        </div>`;
    document.querySelector(".labelshowbutton").innerHTML = buttonlabel;
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchSubbottonsoop = async () => {
  let subbotton = "";
  try {
    let data = await fetch("http://localhost:3004/buttonsoopermarket");
    let res = await data.json();
    subbotton += `
        <div class="text-sub-subsoopermarket-button flex flex-col flex-wrap gap-x-[5px] font-[yekan] p-[20px]">
          <h5 class="text-[14px] text-[#4d4f5f]">${res.h5text}</h5>
          <h6 class="text-[11px] text-[#b4b6b8]">${res.h6text}</h6>
        </div>
        <div class="image-sub-subsoopermarket-button flex flex-row flex-wrap gap-x-[8px] justify-center">
          <div class="boximage1 w-[204px] h-[250px] bg-[#dbf3e6] rounded-[5px] p-[10px] relative">
            <div class="text-takhfif font-[yekan] text-[13px] flex flex-row flex-wrap justify-start font-600 mb-[10px]">
             ${res.titlegreen}
            <img src="${res.svgfleshbechap}" alt=""/>
            </div>
            <div class="ersal w-[103px] h-[20px] bg-[#029a48] text-center leading-[20px] rounded-tl-[10px] rounded-br-[13px] rounded-bl-[10px] text-[11px] flex flex-row flex-wrap justify-evenly">
              <img src="${res.carpng}" alt="" class="w-[18px] h-[18px]">
             <span class="text-[whitesmoke] font-[yekan]">${res.title2green}</span>
            </div>
            <div class="image-ersal w-[130px] h-[130px] absolute left-[8px] bottom-[10px]">
              <img src="${res.basketslow}" alt=""  class="w-[100%] h-[100%]"/>
            </div>
          </div>
          <div class="boximage2 w-[204px] h-[250px] bg-[#feebdd] rounded-[5px] p-[10px] relative">
            <div class="text-takhfif font-[yekan] text-[13px] flex flex-row flex-wrap justify-start font-600 mb-[10px]">
             ${res.titleorange}
              <img src="${res.svgfleshbechap}" alt=""/>
            </div>
            <div class="ersal w-[103px] h-[20px] bg-[#029a48] text-center leading-[20px] rounded-tl-[10px] rounded-br-[13px] rounded-bl-[10px] text-[11px] flex flex-row flex-wrap justify-evenly">
              <img src="${res.saatpng}" alt="" class="w-[18px] h-[18px]">
              <span class="text-[whitesmoke] font-[yekan]">${res.title2orange}</span>
            </div>
            <div class="image-ersal w-[130px] h-[130px] absolute left-[8px] bottom-[10px]">
              <img src="${res.basketspeed}" alt="" class="w-[100%] h-[100%]"/>
            </div>
          </div>
        </div>
        <label for="close" class="block w-[35px] h-[35px] text-[#2b2b2b] text-center leading-[35px] font-bold  cursor-pointer absolute left-0 top-0">&times;</label>`;
    document.querySelector(".sub-subsoopermarket-button").innerHTML = subbotton;
  } catch (error) {
    console.log(error.message);
  }
};
async function buttonsoopMenu() {
    function setupEventListeners() {
        const inputShow = document.querySelector(".inputshowsoop");
        const bottomSoop = document.querySelector(".subsoopermarket-button");
        const inputClose = document.querySelector(".inputclosesoop");
        if (inputShow && bottomSoop && inputClose) {
            inputShow.addEventListener("click", function () {
                bottomSoop.classList.remove("hidden");
                bottomSoop.classList.add("block");
            });
            inputClose.addEventListener("click", function () {
                bottomSoop.classList.add("hidden");
            });
        }
    }
    const checkInterval = setInterval(function() {
        setupEventListeners(); // ثبت رویدادها
        if (document.querySelector(".inputshowsoop") && document.querySelector(".subsoopermarket-button") && document.querySelector(".inputclosesoop")) {
            clearInterval(checkInterval);
        }
    }, 100); 
}
function buttonSoopwidth() {
    const bottomLabel = document.querySelector(".labelshowbutton");

    if (!bottomLabel) return;
    bottomLabel.style.position = "fixed";  
    bottomLabel.style.bottom = "20px";     
    bottomLabel.style.left = "100%";         
    bottomLabel.style.transform = "translateX(50%)"; 
    window.addEventListener("scroll", function() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY; // موقعیت اسکرول صفحه
        const documentHeight = document.documentElement.scrollHeight;
        const thirdOfPage = documentHeight / 3;
        if (scrollY >= thirdOfPage) {
            console.log("Scrolled to 2/3 of the page.");
            bottomLabel.style.width = "285px";
            if (!bottomLabel.innerHTML.includes("تنوع بالا و پرتخفیف")) {
                const basketElement = bottomLabel.querySelector(".basket"); 
                const superMarketElement = bottomLabel.querySelector(".supermarket"); 
                if (basketElement && superMarketElement) {
                    const middleText = "<span class='discount-text'>تنوع بالا و پرتخفیف</span>";
                    const hrElement = "<hr class='discount-divider w-[1px] h-[50%] mx-[10px] bg-[whitesmoke] opacity-[0.5]'>"
                    bottomLabel.innerHTML = `${superMarketElement.outerHTML}  ${hrElement} ${middleText} ${basketElement.outerHTML}`;
                }
            }
        } else {
            console.log("Button is above 2/3 of the page.");
            bottomLabel.style.width = "145px";
            bottomLabel.innerHTML = bottomLabel.innerHTML.replace("تنوع بالا و پرتخفیف", "").replace("<hr class='discount-divider w-[1px] h-[50%] mx-[12px] bg-[whitesmoke] opacity-[0.5]'>", "");
        }
    });
}
buttonsoopMenu();   
buttonSoopwidth(); 
