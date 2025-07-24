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
