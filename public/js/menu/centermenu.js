export function formShow() {
  const formCenter = document.querySelector(".form_center_menu");
  const overlay = document.querySelector(".overlay");
  const newItem = document.querySelector(".newItem");

  formCenter.addEventListener("click", function () {
    if (
      overlay.classList.contains("hidden") &&
      newItem.classList.contains("hidden")
    ) {
      overlay.classList.remove("hidden");
      newItem.classList.remove("hidden");
    } else {
      overlay.classList.add("hidden");
      newItem.classList.add("hidden");
    }
  });

  newItem.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}
export const fetchSlidercentermenu = async () => {
  try {
    const data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    const res = await data.json();
    let centermenuslider1 = res.centermenuslider1.map((item) => {
      return `<div class="swiper-slide flex py-3 text-center w-fit rounded-[15px] border-[1px] border-solid border-black font-[iranyekanmedium]" key=${item.id}>${item.body}</div>`;
    });
    document.querySelector(".items-slider1 .myslider").innerHTML = `
        <div class="swiper-wrapper">
          ${centermenuslider1.join('')}
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>`;
    const sliders = document.querySelectorAll(".myslider");
    sliders.forEach((swiperElement) => {
      new Swiper(swiperElement, {
        loop: true,
        slidesPerView: 3.5, // نمایش 3.5 اسلاید به‌طور هم‌زمان
        spaceBetween: 15,
        navigation: {
          nextEl: swiperElement.querySelector(".swiper-button-next"),
          prevEl: swiperElement.querySelector(".swiper-button-prev"),
        },
      });
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export const fetchSlidercentermenu2 = async () => {
  try {
    const data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    const res = await data.json();
    let centermenuslider2 = res.centermenuslider2.map((item) => {
      return `<div class="swiper-slide flex py-3 text-center w-fit rounded-[15px] border-[1px] border-solid border-grey font-[iranyekanmedium]" key=${item.id}>${item.body}</div>`;
    });
    document.querySelector(".items-slider2 .myslider").innerHTML = `
        <div class="swiper-wrapper">
          ${centermenuslider2.join('')}
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>`;
    const sliders = document.querySelectorAll(".myslider");
    sliders.forEach((swiperElement) => {
      new Swiper(swiperElement, {
        loop: true,
        slidesPerView: 3.5, // نمایش 3.5 اسلاید به‌طور هم‌زمان
        spaceBetween: 15,
        navigation: {
          nextEl: swiperElement.querySelector(".swiper-button-next"),
          prevEl: swiperElement.querySelector(".swiper-button-prev"),
        },
      });
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
};




export const fetchLogin = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    if (!res || !Array.isArray(res)) {
      console.error("Invalid data structure received");
      return;
    }
    const logincenter = res.map((item) => {
      return `<a href="./form.html" class="a_login_center_menu w-[160px] h-[40px] flex font-[iranyekanmedium] gap-x-[2px] justify-center items-center text-[12px] leading-[40px] text-center text-[#2b2b2b] border-[lightgrey] border-[1px] border-solid rounded-[12px] mx-auto">
              <img src="${item.svg1}" alt="login Icon" />
              ${item.body2}<span class="w-[2px] mx-[1px] rounded-[2px] h-[50%] bg-[#2b2b2b]">.</span>${item.body1}
              </a>
              <span class="devider w-[3px] h-[60%] mx-[3px] rounded-[2px]  bg-[#2b2b2b] ">.</span>
              `;
    });
    document.querySelector(".login_center_menu").innerHTML =
      logincenter.join("");
  } catch (error) {
    console.log(error.message);
  }
};
window.addEventListener("storage", function (event) {
  if (event.key === "cart") {
    console.log("سبد خرید تغییر کرد");
    updateCartPage();
  }
});

async function basketPage() {
  function setupEventListeners() {
    const basketicon = document.querySelector(".basketicon");
    const basketpage = document.querySelector(".basketpage");
    const subbasketpage = document.querySelector(".subbasketpage");

    if (basketicon && basketpage && subbasketpage) {
      basketicon.addEventListener("mouseenter", function () {
        basketpage.classList.remove("hidden");
        basketpage.classList.add("block");
        subbasketpage.classList.remove("hidden");
        subbasketpage.classList.add("block");
      });

      basketpage.addEventListener("click", function () {
        basketpage.classList.add("hidden");
        basketpage.classList.remove("block");
        subbasketpage.classList.add("hidden");
        subbasketpage.classList.remove("block");
      });

      subbasketpage.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  }

  const checkInterval = setInterval(function () {
    setupEventListeners();
    if (
      document.querySelector(".basketicon") &&
      document.querySelector(".basketpage")
    ) {
      clearInterval(checkInterval);
    }
  }, 100);
}
basketPage();
