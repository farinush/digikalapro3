export const fetchBottomlink = async () => {
  let linkkala = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    linkkala = res.map((item) => {
      return `<div class="child__link__div__nav__menu w-[100%] h-[100%] items-center gap-y-[5px] flex">
                  <img src="${item.svg1}" alt="">
                  ${item.title1}
                </div>`;
    });
    document.querySelector(".link__div__nav__menu").innerHTML =
      linkkala.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchBottomlink1 = async () => {
  let linkshegeft = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    linkshegeft = res.map((item) => {
      return `<a class="a__div__2__nav__menu1" href="./shegeftangiz.html">
                  <img src="${item.svg2}" alt="">
                  ${item.title2}
                  </a>`;
    });
    document.querySelector(".div__2__nav__menu1").innerHTML =
      linkshegeft.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchBottomlink2 = async () => {
  let linksoopermarket = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    linksoopermarket = res.map((item) => {
      return `<a class="a__div__2__nav__menu2" href="#">
                  <img src="${item.svg3}" alt="">
                  ${item.title3}
                  </a>`;
    });
    document.querySelector(".div__2__nav__menu2").innerHTML =
      linksoopermarket.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchBottomlink3 = async () => {
  let linkhedie = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    linkhedie = res.map((item) => {
      return `<a class="a__div__2__nav__menu3" href="#">
                  <img src="${item.svg4}" alt="">
                  ${item.title4}
                  </a>`;
    });
    document.querySelector(".div__2__nav__menu3").innerHTML =
      linkhedie.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchBottomlink4 = async () => {
  let linkporforosh = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    linkporforosh = res.map((item) => {
      return `<a class="a__div__2__nav__menu4" href="#">
                  <img src="${item.svg5}" alt="">
                  ${item.title5}
                  </a>`;
    });
    document.querySelector(".div__2__nav__menu4").innerHTML =
      linkporforosh.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchBottomlink5 = async () => {
  let linktakhfif = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    linktakhfif = res.map((item) => {
      return `<a class="a__div__2__nav__menu5" href="#">
                  <img src="${item.svg6}" alt="">
                  ${item.title6}
                  </a>`;
    });
    document.querySelector(".div__2__nav__menu5").innerHTML =
      linktakhfif.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchBottomlink6 = async () => {
  let linksoal = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    linksoal = res.map((item) => {
      return `<a class="a__div__2__nav__menu6" href="#">
                  <img src="${item.svg7}" alt="">
                  ${item.title7}
                  </a>`;
    });
    document.querySelector(".div__2__nav__menu6").innerHTML =
      linksoal.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchBottomlink7 = async () => {
  let linkforosh = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    linkforosh = res.map((item) => {
      return `<a class="a__div__2__nav__menu7" href="#">
                  <img src="${item.svg8}" alt="">
                  ${item.title8}
                  </a>`;
    });
    document.querySelector(".div__2__nav__menu7").innerHTML =
      linkforosh.join("");
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchRightsub = async () => {
  let rightsub = [];
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();

    if (!res || !Array.isArray(res)) {
      console.error("Invalid data structure received");
      return;
    }
    rightsub = res.map((item, index) => {
      return `
        <div class="child__item__right__sub__submenu__div__nav__menu${
          index + 1
        } flex w-[100%] h-[50px] items-center justify-center cursor-pointer text-[13px] pe-[10px]">
          <img src="${
            item.svg
          }" alt="" class="img_item__right__sub__submenu__div__nav__menu block mx-[15px] w-[20px] h-[20px]"/>
          <a href="#" class="a_item__right__sub__submenu__div__nav__menu font-[iranyekanmedium] text-[#797a7d] block w-[100%] h-[100%] mt-[10px] text-[12px] font-bold leading-[40px]">${
            item.name
          }</a>
        </div>
      `;
    });
    rightsub.forEach((htmlContent, index) => {
      const container = document.querySelector(
        `.item__right__sub__submenu__div__nav__menu${index + 1}`
      );
      if (container) {
        container.innerHTML = htmlContent; // اضافه کردن HTML به کانتینر مورد نظر
      } else {
        console.log(
          `Container item__right__sub__submenu__div__nav__menu${
            index + 1
          } not found, cannot update content`
        );
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchSubmenuItem = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                      <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                           ${submenu.titlesub}
                            <img src="${submenu.svgfleshbechap}" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.namehuge1}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name1}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name2}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name3}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name4}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name5}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name6}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name7}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name8}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name9}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name10}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name11}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name12}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name13}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              < class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name14}</>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name15}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name16}</a>
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehhuge2}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name17}</a>
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge3}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv2name1}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv2name2}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv2name3}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name4}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name5}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv2name6}</a>
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >${submenu.namehuge4}</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name7}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name8}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name9}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name10}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name11}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name12}</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >${submenu.namehuge5}</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name13}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name14}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name15}</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge6}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name1}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name2}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name3}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name4}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name5}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name6}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name7}</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >${submenu.namehuge7}</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name8}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name9}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name10}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name11}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="">${submenu.subdiv3name12}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name13}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name14}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name15}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name16}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name17}</a>
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge8}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="${submenu.namehuge8}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv4name1}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name2}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv4name3}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv4name4}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name5}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name6}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name7}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name8}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name9}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name10}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name11}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name12}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name13}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name14}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv4name15}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name16}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name17}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name18}</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu1"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem2 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                   <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                            ${submenu.titlesub}
                            <img src="${submenu.svgfleshbechap}" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge1}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name1}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name2}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name3}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name4}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name5}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name6}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name7}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name8}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name9}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name10}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv1name11}</a>
                            </div>
                          </div>
                          <div
                            class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="">${submenu.namehuge2}</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv2name1}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv2name2}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name3}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv2name4}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name5}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name6}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name7}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name8}</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >${submenu.namehuge3}</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name9}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name10}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name11}</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge4}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv3name1}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name2}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name3}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name4}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv3name5}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name6}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name7}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name8}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name9}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name10}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name11}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >${submenu.subdiv3name12}</a>
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge5}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv4name1}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv4name2}</a>
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge6}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="">${submenu.namehuge7}</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name3}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name4}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name5}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name6}</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >${submenu.namehuge8}</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="">${submenu.namehuge9}</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >${submenu.namehuge10}</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="">${submenu.namehuge11}</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu2"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem3 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                      <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                            ${submenu.titlesub}
                            <img src="${submenu.svgfleshbechap}" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="" >${submenu.namehuge1}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge2}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" >
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv1name1}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name2}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name3}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name4}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name5}</a>
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge3}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name6}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name7}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name8}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name9}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name10}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name11}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name12}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name13}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name14}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv1name15}</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge4}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name1}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name2}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name3}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">${submenu.subdiv2name4}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv2name5}</a>
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge5}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv2name6}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv2name7}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name8}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name9}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name10}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name11}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name12}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv2name13}</a
                              >
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge6}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv2name14}</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv2name15}</a>
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge7}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">${submenu.subdiv3name1}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name2}</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name3}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name4}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name5}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name6}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name7}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name8}</a
                              >
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge8}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge9}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name9}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name10}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name11}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name12}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >${submenu.subdiv3name13}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv3name14}</a
                              >
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge10}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge11}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name1}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name2}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name3}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name4}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name5}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name6}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name7}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name8}</a
                              >
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge12}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name9}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name10}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name11}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name12}</a>
                            </div>
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">${submenu.namehuge13}</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="${submenu.svgfleshbechap}" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name13}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name14}</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >${submenu.subdiv4name15}</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu3"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem4 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                                          <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                            همه محصولات خانه و آشپزخانه
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="">آلات موسیقی</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی و دستبافت </a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">تابلو</a>
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="">لوازم تحریر</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="">مداد و مدادرنگی</a>
                            </div>
                          </div>

                        </div>
                      </div>  
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu4"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem5 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                      <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          همه محصولات لوازم برقی
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">کالاهای مس</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">سفال,سرامیک و چینی</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">کیف چرمی</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">ترمه,قلمکار و دستبافت</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">خاتم,منبت,حصیری و چوبی</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">تابلو و ساعت</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">میناکاری</a>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#" >فیروزه کوبی</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">سوزن دوزی</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">محصولات استخوانی</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">جعبه و دست سازه های هنری</a>
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="" >آلات موسیقی</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">لوازم جانبی آلات موسیقی</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">گیتار</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">کیبورد و ارگ</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">پیانو دیجیتال</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>  
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu5"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem6 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                                           <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          همه محصولات مد و پوشاک
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div> 
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu6"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem7 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                                          <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          همه محصولات طلا و نقره
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>  
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu7"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem8 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                 <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                             همه محصولات آرایشی بهداشتی
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش دستبافت</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>                       
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu8"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem9 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                     <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                        همه محصولات تجهیزات پزشکی و سلامت
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>                 
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu9"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem10 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                    <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                            همه محصولات ورزش و سفر
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a>
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>                
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu10"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem11 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                    <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                           همه محصولات خودرو و موتورسیکلت
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>              
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu11"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem12 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                      <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                            همه محصولات ابزارآلات و تجهیزات
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>           
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu12"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem13 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                     <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                            همه محصولات کارت هدیه و گیفت کارت
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>           
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu13"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem14 = async () => {
  try {
    let response = await fetch(
      "https://farinush.github.io/digikalapro3/db.json"
    );
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                       <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                            همه محصولات کالای خوراکی و اساسی
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="#">کالاهای مس</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>           
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu14"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem15 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                       <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                            همه محصولات اسباب بازی,کودک و نوزاد
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">سفال,سرامیک و چینی</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#">کیف چرمی</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>           
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu15"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};
export const fetchSubmenuItem16 = async () => {
  try {
    let response = await fetch("https://farinush.github.io/digikalapro3/db.json");
    if (!response.ok) {
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
    }
    let data = await response.json();
    console.log("داده‌های دریافتی: ", data);
    if (!data) {
      console.error("داده‌ها به درستی دریافت نشده‌اند.");
      return;
    }
    const submenu = data;
    let fullHTML = [];
    fullHTML.push(`  
                     <div class="div__submenu__item__right__sub__submenu__div__nav__menu">
                        <div class="title__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu">
                            همه محصولات یومی و محلی
                            <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                          </div>
                        </div>
                        <div class="classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu" href="">صنایع دستی</a>
                              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کالاهای مس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سفال,سرامیک و چینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف چرمی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ترمه,قلمکار و دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خاتم,منبت,حصیری و چوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو و ساعت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میناکاری</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فیروزه کوبی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >سوزن دوزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >محصولات استخوانی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >جعبه و دست سازه های هنری</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >آلات موسیقی</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم جانبی آلات موسیقی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >گیتار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیبورد و ارگ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >پیانو دیجیتال</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >درام, پرکاشن, دف</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تجهیزات استودیویی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ویولن</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ساز های ایرانی</a
                              >
                            </div>
                            <div
                              class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >فرش ماشینی, دستبافت,تابلو</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش ماشینی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >فرش دستبافت</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >تابلو</a
                              >
                            </div>
                          </div>
                          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu">
                              <a
                                class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >لوازم تحریر</a
                              >
                              <div
                                class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                              >
                              <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                              </div>
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >لوازم اداری و اقلام مصرفی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کیف, کوله پشتی و جامدادی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >چراغ مطالعه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ کادو, پاکت و کارت هدیه</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >نوشت افزار</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >دفتر و کاغذ</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >خودکار و روان نویس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >ابزار نقاشی و رنگ آمیزی</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >میز تحریر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >آلبوم عکس</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href="#"
                                >کاغذ چاپ و پرینتر</a
                              >
                            </div>
                            <div
                              class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                            >
                              <a
                                class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu"
                                href=""
                                >مداد و مدادرنگی</a
                              >
                            </div>
                          </div>

                        </div>
                      </div>            
                   `);
    fullHTML = fullHTML.join("");
    document.querySelector(
      ".all__submenu__item__right__sub__submenu__div__nav__menu .submenu__right__sub__submenu__div__nav__menu16"
    ).innerHTML = fullHTML;
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};

async function linkSubmenu() {
  document.addEventListener("DOMContentLoaded", function () {
    const linkMenu = document.querySelector(".link__div__nav__menu");
    const submenu = document.querySelector(".submenu__div__nav__menu");
    const subSubmenu = document.querySelector(".sub__submenu__div__nav__menu");
    linkMenu.addEventListener("mouseenter", function (event) {
      event.stopPropagation(); // جلوگیری از انتشار رویداد به سایر عناصر
      submenu.classList.remove("hidden"); // نمایش منو
      submenu.classList.add("block"); // به صورت block نمایش داده شود
    });
    linkMenu.addEventListener("mouseleave", function (event) {
      event.stopPropagation(); // جلوگیری از انتشار رویداد به سایر عناصر
      submenu.classList.add("hidden"); // مخفی کردن منو
      submenu.classList.remove("block"); // حذف کلاس block
    });
    submenu.addEventListener("mouseenter", function (event) {
      event.stopPropagation(); // جلوگیری از انتشار رویداد به سایر عناصر
      submenu.classList.remove("hidden"); // نمایش منو
      submenu.classList.add("block"); // به صورت block نمایش داده شود
    });
    submenu.addEventListener("mouseleave", function (event) {
      event.stopPropagation(); // جلوگیری از انتشار رویداد به سایر عناصر
      submenu.classList.add("hidden"); // مخفی کردن منو
      submenu.classList.remove("block"); // حذف کلاس block
    });
    document
      .querySelectorAll(".right__sub__submenu__div__nav__menu")
      .forEach((item) => {
        item.addEventListener("click", function (event) {
          event.stopPropagation(); // جلوگیری از بسته شدن منو
        });
      });
    document.addEventListener("click", function (event) {
      if (
        !submenu.contains(event.target) &&
        !linkMenu.contains(event.target) &&
        !subSubmenu.contains(event.target)
      ) {
        submenu.classList.add("hidden"); // مخفی کردن منو
        submenu.classList.remove("block"); // حذف کلاس block
      }
    });
    subSubmenu.addEventListener("mouseenter", function (event) {
      event.stopPropagation(); // جلوگیری از انتشار رویداد به سایر عناصر
      submenu.classList.remove("hidden"); // منو را باز نگه می‌دارد
      submenu.classList.add("block");
    });
    subSubmenu.addEventListener("mouseleave", function (event) {
      event.stopPropagation(); // جلوگیری از انتشار رویداد به سایر عناصر
      submenu.classList.add("hidden"); // مخفی کردن منو
      submenu.classList.remove("block"); // حذف کلاس block
    });
  });
}
linkSubmenu();

export async function handleMenuHover() {
  const items = document.querySelectorAll(
    ".item__right__sub__submenu__div__nav__menu1, .item__right__sub__submenu__div__nav__menu2, .item__right__sub__submenu__div__nav__menu3, .item__right__sub__submenu__div__nav__menu4, .item__right__sub__submenu__div__nav__menu5, .item__right__sub__submenu__div__nav__menu6, .item__right__sub__submenu__div__nav__menu7 ,.item__right__sub__submenu__div__nav__menu8, .item__right__sub__submenu__div__nav__menu9 ,.item__right__sub__submenu__div__nav__menu10, .item__right__sub__submenu__div__nav__menu11, .item__right__sub__submenu__div__nav__menu12, .item__right__sub__submenu__div__nav__menu13, .item__right__sub__submenu__div__nav__menu14 ,.item__right__sub__submenu__div__nav__menu15, .item__right__sub__submenu__div__nav__menu16"
  );

  const submenus = document.querySelectorAll(
    ".submenu__right__sub__submenu__div__nav__menu1, .submenu__right__sub__submenu__div__nav__menu2, .submenu__right__sub__submenu__div__nav__menu3, .submenu__right__sub__submenu__div__nav__menu4, .submenu__right__sub__submenu__div__nav__menu5, .submenu__right__sub__submenu__div__nav__menu6, .submenu__right__sub__submenu__div__nav__menu7, .submenu__right__sub__submenu__div__nav__menu8, .submenu__right__sub__submenu__div__nav__menu9, .submenu__right__sub__submenu__div__nav__menu10, .submenu__right__sub__submenu__div__nav__menu11 , .submenu__right__sub__submenu__div__nav__menu12, .submenu__right__sub__submenu__div__nav__menu13, .submenu__right__sub__submenu__div__nav__menu14, .submenu__right__sub__submenu__div__nav__menu15, .submenu__right__sub__submenu__div__nav__menu16"
  );

  items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      submenus.forEach((submenu) => {
        submenu.style.display = "none";
      });

      const relatedSubmenu = submenus[index];
      if (relatedSubmenu) {
        relatedSubmenu.style.display = "block";
      }
    });
  });
}

export async function fetchv() {
  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(
      ".item__right__sub__submenu__div__nav__menu1, .item__right__sub__submenu__div__nav__menu2, .item__right__sub__submenu__div__nav__menu3, .item__right__sub__submenu__div__nav__menu4, .item__right__sub__submenu__div__nav__menu5, .item__right__sub__submenu__div__nav__menu6, .item__right__sub__submenu__div__nav__menu7, .item__right__sub__submenu__div__nav__menu8, .item__right__sub__submenu__div__nav__menu9, .item__right__sub__submenu__div__nav__menu10, .item__right__sub__submenu__div__nav__menu11, .item__right__sub__submenu__div__nav__menu12, .item__right__sub__submenu__div__nav__menu13, .item__right__sub__submenu__div__nav__menu14, .item__right__sub__submenu__div__nav__menu15, .item__right__sub__submenu__div__nav__menu16"
    );
    function getWidthForSubmenu(itemIndex) {
      const width60 = [1, 2, 3, 5, 10, 11, 12, 13, 15, 16];
      const width45 = [4, 6, 7, 8, 9, 14];

      if (width60.includes(itemIndex)) {
        return "60%";
      } else if (width45.includes(itemIndex)) {
        return "50%";
      } else {
        return "0%";
      }
    }
    menuItems.forEach(function (menuItem, index) {
      menuItem.addEventListener("mouseenter", function () {
        let parentMenu = menuItem;
        for (let i = 0; i < 2; i++) {
          if (parentMenu.parentElement) {
            parentMenu = parentMenu.parentElement;
          } else {
            console.error("والد بالاتر یافت نشد.");
            return;
          }
        }
        const newWidth = getWidthForSubmenu(index + 1);
        parentMenu.style.width = newWidth;
        console.log(`ParentMenu for Item ${index + 1} width: ${newWidth}`);
      });
      menuItem.addEventListener("mouseleave", function () {
        let parentMenu = menuItem;
        for (let i = 0; i < 2; i++) {
          if (parentMenu.parentElement) {
            parentMenu = parentMenu.parentElement;
          } else {
            console.error("والد بالاتر یافت نشد.");
            return;
          }
        }
      });
    });
  });
}

async function setHeightAsync() {
  window.addEventListener("resize", setSubmenuHeight);
  document.addEventListener("DOMContentLoaded", setSubmenuHeight);
  function setSubmenuHeight() {
    const submenu = document.querySelector(".submenu__div__nav__menu"); // عنصر مادر
    const subSubmenu = document.querySelector(".sub__submenu__div__nav__menu"); // عنصر فرزند
    if (submenu && subSubmenu) {
      const computedStyles = window.getComputedStyle(submenu);
      const submenuHeight = parseInt(computedStyles.height, 10);
      if (submenuHeight > 0) {
        const halfHeight = submenuHeight / 2;
        subSubmenu.style.height = `${halfHeight}px`;
      }
    }
  }
}
setHeightAsync();

async function locationMenu() {
  const inputShow = document.querySelector(".inputforshow");
  const bottomCity = document.querySelector(".subbottomcity");
  const inputClose = document.querySelector(".inputforclose");
  inputShow.addEventListener("click", function () {
    bottomCity.classList.remove("hidden");
    bottomCity.classList.add("block"); // افزودن کلاس "block" برای نمایش
  });
  inputClose.addEventListener("click", function () {
    bottomCity.classList.add("hidden");
  });
}
locationMenu();
  
export const fetchShahr = async () => {
  let entekhabshahr = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    if (res && res.svg && res.title) {
      entekhabshahr = `
        <div class="child_labelforshow w-[100%] h-[100%] flex flex-row flex-nowrap justify-start items-center">
          <img src="${res.svg}" alt="">
          ${res.title}
        </div>
      `;
      document.querySelector(".labelforshow").innerHTML = entekhabshahr;
    } else {
      console.error("Data is not in the expected format", res);
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchSubbottomcity = async () => {
  let subbottomcity = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    if (res && res.titlename) {
      const cityNames = Object.keys(res).filter(key => key.startsWith('name')).map(key => res[key]);
      subbottomcity = `
        <div class="text-sub-subbottomcity flex h-[10%] w-[inherit] flex-col flex-wrap gap-x-[5px] font-[yekan] mt-[25px] ps-[20px] text-[13px] text-[#2b2b2b] font-600">
          ${res.titlename}
        </div>
        <hr class="w-[80%] h-[1px] block mx-auto border-[1px] border-solid border-[#3d3a3a]/[0.5]"/>
        <div class="live-city w-[inherit] h-[85%] overflow-x-hidden overflow-y-auto">
          <div class="live-location-sub-subbottomci font-[yekan] text-[13px] p-[25px] text-[#25bbce] font-600 flex flex-row flex-wrap justify-start items-center gap-y-[5px]">
            <img src="${res.svg1}" alt="">
            ${res.titlename2}
          </div>
          <div class="form-sub-subbottomcity w-[inherit]">
            ${cityNames.map((city, index) => {
              return `
                <a class="a-form-sub-subbottomcity" href="#">
                  <div class="div-a-form-sub-subbottomcity">
                    ${city}
                    <img src="${res.svgfleshbechap}" alt="">
                  </div>
                </a>
                <hr class="hr-a-form-sub-subbottomcity" />
              `;
            }).join('')}
          </div>
        </div>
        <label for="down" class="block w-[35px] h-[35px] text-[#2b2b2b] text-center leading-[35px] font-bold cursor-pointer absolute left-0 top-0">&times;</label>
      `;
      
      document.querySelector(".sub-subbottomcity").innerHTML = subbottomcity;
    } else {
      console.error("Invalid data structure:", res);
    }
  } catch (error) {
    console.log(error.message);
  }
};
