export async function buttonsoopMenu() {
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
export function buttonSoopwidth() {
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

