export const fetchSubfooter = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();

    // ساختن HTML برای بخش تکرارشونده (آرایه subfooterbox4)
    let subfootbox4 = res.subfooterbox4
      .map((item) => {
        // ساختن لینک‌های داخلی هر آیتم
        let links = item.subfooterbox4
          .map((link) => {
            return `<a href="#" class="simple-div1-box4 text-[#a1a2ab] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]">${link.body}</a>`;
          })
          .join("");

        return `
        <div class="div1-box4 px-[50px] w-[25%] flex-grow-1 h-[100%] flex flex-col flex-wrap justify-start items-start gap-y-[10px]" key="${item.id}">
          <a href="#" class="huge-div1-box4 text-[#2b2b2b] font-[iranyekanmedium] text-[14px] leading-[12px] text-right block w-[100%] h-[30px] font-700">${item.title}</a>
          ${links}
        </div>
      `;
      })
      .join(""); // تبدیل آرایه به رشته HTML

    // ساختن HTML برای بخش ثابت و غیرتکراری
    let staticBox = `
      <div class="div1-box4 w-[25%] active-box4 gap-y-[20px] flex-grow-1 h-[100%] flex flex-col flex-wrap justify-start items-start">
        <div class="span-div1-box4 font-[iranyekanmedium] text-[14px] text-[#2b2b2b]">
          <span>باماهمراه باشید</span>
        </div>
        <div class="svg-div1-box4 flex flex-row flex-wrap justify-center items-center gap-y-[7px] text-center">
          <img src="./public/svg/subfooter/instagram.svg" alt=""/>
          <img src="./public/svg/subfooter/twitter.svg" alt=""/>
          <img src="./public/svg/subfooter/linkedin.svg" alt=""/>
          <img src="./public/svg/subfooter/aparat.svg" alt=""/>
        </div>
        <div class="span-div1-box4 font-[iranyekanmedium] text-[14px] text-[#2b2b2b]">
          <span>باثبت ایمیل, از جدیدترین تخفیف ها باخبر شوید</span>
        </div>
        <div class="email-div1-box4 font-[iranyekanmedium] text-[12px] flex flex-row flex-wrap justify-center items-center gap-y-[5px]">
          <input type="text" placeholder="ایمیل شما" id="submit" class="w-[178px] h-[40px] bg-[#f0f0f0] rounded-[10px] outline-none font-[iranyekanmedium] border-none px-[20px] leading-[40px]">
          <label for="submit" class="w-[55px] h-[40px] bg-[#e0e0e2] mx-[20px] text-[whitesmoke] rounded-[10px] block text-center leading-[40px]">ثبت</label>
        </div>
      </div>
    `;

    // ترکیب همه HTMLها
    const finalHTML = subfootbox4 + staticBox;

    // قرار دادن در DOM
    document.querySelector(".subfooter .box-4").innerHTML = finalHTML;
  } catch (error) {
    console.log("خطا در fetch:", error.message);
  }
};

export const fetchSubfooter2 = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();

    // بخش اول: داده‌های تکرارشونده (subfooterbox4)
    let subfootbox4_2 = res.subfooterbox4
      .map((item) => {
        let links = item.subfooterbox4
          .map((link) => {
            return `<p>${link.body}</p>`;
          })
          .join("");

        return `
        <div class="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div class="collapse-title text-md font-bold">${item.title}</div>
          <div class="collapse-content text-[#a09999]">
            ${links}
          </div>
        </div>
      `;
      })
      .join("");

    // بخش دوم: شرکای تجاری (subfooterbox4_2)
    let partners = res.subfooterbox4_2
      .map((item) => {
        return `
        <img src="${item.body}" alt="partner" />
        <hr class="w-[1px] h-[30%] bg-[#2b2b2b]" />
      `;
      })
      .join("");

    let staticBox = `
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div class="collapse-title text-md font-bold">شرکای تجاری</div>
        <div class="collapse-content text-[#a09999] flex flex-row flex-wrap gap-x-[7px] justify-center items-center">
          ${partners}
        </div>
      </div>
    `;

    // ادغام خروجی‌ها
    const finalHTML = subfootbox4_2 + staticBox;

    // درج در DOM
    document.querySelector(".subfooter .join").innerHTML = finalHTML;
  } catch (error) {
    console.log("خطا در fetch:", error.message);
  }
};

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
