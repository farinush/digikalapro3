export const fetchSubmenuItem = async () => {
  try {
    const response = await fetch(
      "https://farinush.github.io/digikalapro3/db.json"
    );
    const data = await response.json();

    const mobile = data.mobile;
    const columnsCount = 4;

    // آرایه‌ای از ۴ ستون خالی
    const columns = Array.from({ length: columnsCount }, () => []);

    // چرخشی پر کردن ستون‌ها به شکل مورد نظر
    mobile.forEach((item, index) => {
      if (index === 0 || index === 1 || index === 2) {
        columns[0].push(item);
      } else if (index === 3 || index === 4) {
        columns[1].push(item);
      } else if (index === 5 || index === 6) {
        columns[2].push(item);
      } else if (index === 7) {
        columns[3].push(item);
      }
    });

    // ساخت HTML برای هر ستون
    const columnsHtml = columns.map((group) => {
      const columnHtml = group
        .map((category) => {
          const itemsHtml = Array.isArray(category.items)
            ? category.items
                .map((item) => {
                  const body = typeof item === "string" ? item : item.body;
                  return `
                <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px]">
                  <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu block font-[iranyekanmdeium] text-[12px] h-[40px] text-right text-[#66666b] font-[100] hover:text-[#d82f4e]" href="#">${body}</a>
                </div>`;
                })
                .join("")
            : "";

          return `
          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu bg-white flex-col dir-rtl flex-wrap flex justify-start pt-[15px]">
            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px] flex flex-row flex-nowrap flex-start items-center gap-y-[5px]">
              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu font-[iranyekanmedium] text-[13px] pb-[20px]" href="#">${category.titlehuge}</a>
              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu relative pb-[20px]">
                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
              </div>
            </div>
            ${itemsHtml}
          </div>`;
        })
        .join("");

      return `<div class="w-[25%] flex flex-col gap-y-[10px]">${columnHtml}</div>`;
    });

    // قرار دادن در DOM
    document.querySelector(
      ".classify__div__submenu__item__right__sub__submenu__div__nav__menu .classify2"
    ).innerHTML = columnsHtml.join("");
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};

export const fetchSubmenuItem2 = async () => {
  try {
    const response = await fetch(
      "https://farinush.github.io/digikalapro3/db.json"
    );
    const data = await response.json();

    const ketab = Array.isArray(data.ketab) ? data.ketab : [];
    const columnsCount = 4;
    const columns = Array.from({ length: columnsCount }, () => []);

    // تقسیم‌بندی آیتم‌ها در ستون‌ها
    ketab.forEach((item, index) => {
      if (!item) return;

      if (index === 0) {
        columns[0].push(item);
      } else if (index === 1 || index === 2) {
        columns[1].push(item);
      } else if (index === 3 || index === 4) {
        columns[2].push(item);
      } else if (index >= 5 && index <= 10) {
        columns[3].push(item);
      }
    });

    const columnsHtml = columns.map((group) => {
      const columnHtml = group
        .map((category) => {
          const titlehuge = category?.titlehuge ?? "بدون عنوان";

          // حذف مقادیر null از items
          const filteredItems = Array.isArray(category?.items)
            ? category.items.filter(Boolean)
            : [];

          const itemsHtml = filteredItems
            .map((item) => {
              const body =
                typeof item === "string" ? item : item?.body ?? "بدون نام";

              return `
            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px]">
              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu block font-[iranyekanmdeium] text-[12px] h-[40px] text-right text-[#66666b] font-[100] hover:text-[#d82f4e]" href="#">${body}</a>
            </div>`;
            })
            .join("");

          return `
          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu bg-white flex-col dir-rtl flex-wrap flex justify-start pt-[15px]">
            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px] flex flex-row flex-nowrap flex-start items-center gap-y-[5px]">
              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu font-[iranyekanmedium] text-[13px] pb-[20px]" href="#">${titlehuge}</a>
              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu relative pb-[20px]">
                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
              </div>
            </div>
            ${itemsHtml}
          </div>`;
        })
        .join("");

      return `<div class="w-[25%] flex flex-col gap-y-[10px]">${columnHtml}</div>`;
    });

    document.querySelector(
      ".classify__div__submenu__item__right__sub__submenu__div__nav__menu .classify"
    ).innerHTML = columnsHtml.join("");
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};

export const fetchSubmenuItem3 = async () => {
  try {
    const response = await fetch(
      "https://farinush.github.io/digikalapro3/db.json"
    );
    const data = await response.json();

    const digital = Array.isArray(data.digital) ? data.digital : [];
    const columnsCount = 4;
    const columns = Array.from({ length: columnsCount }, () => []);

    // تقسیم‌بندی آیتم‌ها در ستون‌ها
    digital.forEach((item, index) => {
      if (!item) return;

      if (index === 0 || index === 1 || index === 2) {
        columns[0].push(item);
      } else if (index === 3 || index === 4 || index === 5) {
        columns[1].push(item);
      } else if (index === 6 || index === 7 || index === 8 || index === 9) {
        columns[2].push(item);
      } else if (index === 10 || index === 11 || index === 12) {
        columns[3].push(item);
      }
    });

    const columnsHtml = columns.map((group) => {
      const columnHtml = group
        .map((category) => {
          const titlehuge = category?.titlehuge ?? "بدون عنوان";

          // حذف مقادیر null از items
          const filteredItems = Array.isArray(category?.items)
            ? category.items.filter(Boolean)
            : [];

          const itemsHtml = filteredItems
            .map((item) => {
              const body =
                typeof item === "string" ? item : item?.body ?? "بدون نام";

              return `
            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px]">
              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu block font-[iranyekanmdeium] text-[12px] h-[40px] text-right text-[#66666b] font-[100] hover:text-[#d82f4e]" href="#">${body}</a>
            </div>`;
            })
            .join("");

          return `
          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu bg-white flex-col dir-rtl flex-wrap flex justify-start pt-[15px]">
            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px] flex flex-row flex-nowrap flex-start items-center gap-y-[5px]">
              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu font-[iranyekanmedium] text-[13px] pb-[20px]" href="#">${titlehuge}</a>
              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu relative pb-[20px]">
                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
              </div>
            </div>
            ${itemsHtml}
          </div>`;
        })
        .join("");

      return `<div class="w-[25%] flex flex-col gap-y-[10px]">${columnHtml}</div>`;
    });

    document.querySelector(
      ".classify__div__submenu__item__right__sub__submenu__div__nav__menu .classify3"
    ).innerHTML = columnsHtml.join("");
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};

export const fetchSubmenuItem4 = async () => {
  try {
    const response = await fetch(
      "https://farinush.github.io/digikalapro3/db.json"
    );
    const data = await response.json();

    const home = Array.isArray(data.home) ? data.home : [];
    const columnsCount = 3;
    const columns = Array.from({ length: columnsCount }, () => []);

    // تقسیم‌بندی آیتم‌ها در ستون‌ها
    home.forEach((item, index) => {
      if (!item) return;

      if (index === 0 || index === 1 || index === 2) {
        columns[0].push(item);
      } else if (index === 3 || index === 4 || index === 5) {
        columns[1].push(item);
      } else if (index === 6 || index === 7) {
        columns[2].push(item);
      }
    });

    const columnsHtml = columns.map((group) => {
      const columnHtml = group
        .map((category) => {
          const titlehuge = category?.titlehuge ?? "بدون عنوان";

          // حذف مقادیر null از items
          const filteredItems = Array.isArray(category?.items)
            ? category.items.filter(Boolean)
            : [];

          const itemsHtml = filteredItems
            .map((item) => {
              const body =
                typeof item === "string" ? item : item?.body ?? "بدون نام";

              return `
            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px]">
              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu block font-[iranyekanmdeium] text-[12px] h-[40px] text-right text-[#66666b] font-[100] hover:text-[#d82f4e]" href="#">${body}</a>
            </div>`;
            })
            .join("");

          return `
          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu bg-white flex-col dir-rtl flex-wrap flex justify-start pt-[15px]">
            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px] flex flex-row flex-nowrap flex-start items-center gap-y-[5px]">
              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu font-[iranyekanmedium] text-[13px] pb-[20px]" href="#">${titlehuge}</a>
              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu relative pb-[20px]">
                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
              </div>
            </div>
            ${itemsHtml}
          </div>`;
        })
        .join("");

      return `<div class="w-[25%] flex flex-col gap-y-[10px]">${columnHtml}</div>`;
    });

    document.querySelector(
      ".classify__div__submenu__item__right__sub__submenu__div__nav__menu .classify4"
    ).innerHTML = columnsHtml.join("");
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};

export const fetchSubmenuItem5 = async () => {
  try {
    const response = await fetch(
      "https://farinush.github.io/digikalapro3/db.json"
    );
    const data = await response.json();

    const barghi = Array.isArray(data.barghi) ? data.barghi : [];
    const columnsCount = 4;
    const columns = Array.from({ length: columnsCount }, () => []);

    // تقسیم‌بندی آیتم‌ها در ستون‌ها
    barghi.forEach((item, index) => {
      if (!item) return;

      if (index === 0 || index === 1 || index === 2 || index === 3) {
        columns[0].push(item);
      } else if (index === 4 || index === 5 || index === 6) {
        columns[1].push(item);
      } else if (index === 7 || index === 8 || index === 9) {
        columns[2].push(item);
      } else if (index === 10 || index === 11 || index === 12 || index === 13) {
        columns[3].push(item);
      }
    });

    const columnsHtml = columns.map((group) => {
      const columnHtml = group
        .map((category) => {
          const titlehuge = category?.titlehuge ?? "بدون عنوان";

          // حذف مقادیر null از items
          const filteredItems = Array.isArray(category?.items)
            ? category.items.filter(Boolean)
            : [];

          const itemsHtml = filteredItems
            .map((item) => {
              const body =
                typeof item === "string" ? item : item?.body ?? "بدون نام";

              return `
            <div class="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px]">
              <a class="a__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu block font-[iranyekanmdeium] text-[12px] h-[40px] text-right text-[#66666b] font-[100] hover:text-[#d82f4e]" href="#">${body}</a>
            </div>`;
            })
            .join("");

          return `
          <div class="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu bg-white flex-col dir-rtl flex-wrap flex justify-start pt-[15px]">
            <div class="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px] flex flex-row flex-nowrap flex-start items-center gap-y-[5px]">
              <a class="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu font-[iranyekanmedium] text-[13px] pb-[20px]" href="#">${titlehuge}</a>
              <div class="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu relative pb-[20px]">
                <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
              </div>
            </div>
            ${itemsHtml}
          </div>`;
        })
        .join("");

      return `<div class="w-[25%] flex flex-col gap-y-[10px]">${columnHtml}</div>`;
    });

    document.querySelector(
      ".classify__div__submenu__item__right__sub__submenu__div__nav__menu .classify5"
    ).innerHTML = columnsHtml.join("");
  } catch (error) {
    console.log("خطا در دریافت داده‌ها: ", error.message);
  }
};

export const fetchSubmenuItem6 = async () => {
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

export const fetchSubbottomcity = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    let cityalldata = res.cityalldata.map((item) => {
      return `
                 <a class="a-form-sub-subbottomcity" href="#" key=${item.id}>
                  <div class="div-a-form-sub-subbottomcity">
                    ${item.name}
                    <img src="./public/svg/bottommenu/fleshbechap.svg" alt="">
                  </div>
                </a>
                <hr class="hr-a-form-sub-subbottomcity" />`;
    });

    document.querySelector(".form-sub-subbottomcity").innerHTML = cityalldata;
  } catch (error) {
    console.log(error.message);
  }
};
