export const fetchHotsecond = async () => {
  try {
    const data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    const resData = await data.json();

    const hotsecondHTML = resData.hotsecond.map((group) => {
      const sectionItems = group.section.map((item) => {
        return `
          <div class="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]"
               data-img="${item.img}" 
               data-name="${item.text}" 
               data-price="${item.number}">
            <img src="${item.img}" alt="" class="imgkala w-[86px] h-[86px] block object-cover"/>
            <h5 class="numberkala font-[yekan] text-[20px] font-700 text-[#25bbce]">${item.number}</h5>
            <h6 class="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">${item.text}</h6>
          </div>
          <hr class="w-[80%] h-[1px] border-b-[1px] border-b-solid border-b-[lightgray] opacity-[0.5]"/>
        `;
      }).join("");

      return `
        <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
          <div class="swiper-slide-parent w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-center gap-x-[5px] pb-[10px]">
            ${sectionItems}
          </div>
        </div>
      `;
    }).join("");
    document.querySelector(".myhotkala").innerHTML = `
               <div class="swiper-wrapper">
               ${hotsecondHTML}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>`;
    const swiper = new Swiper(".myhotkala", {
      slidesPerView: 4,
      spaceBetween: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    updateCartPage();

    const items = document.querySelectorAll(".swiper-slide-child");

    items.forEach((item) => {
      item.addEventListener("click", function () {
        const itemData = {
          img: item.getAttribute("data-img"),
          name: item.getAttribute("data-name"),
          price: item.getAttribute("data-price"),
        };
        if (itemData.img && itemData.name && itemData.price) {
          let cart = JSON.parse(localStorage.getItem("cart")) || [];
          const itemExists = cart.some(
            (existingItem) =>
              existingItem.img === itemData.img &&
              existingItem.name === itemData.name &&
              existingItem.price === itemData.price
          );
          console.log("داده آیتم:", itemData);

          if (!itemExists) {
            cart.push(itemData);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log("سبد خرید به روز شد:", cart);
            const basketpage = document.querySelector(".basketpage");
            const subbasketpage = document.querySelector(".subbasketpage");

            if (basketpage && subbasketpage) {
              basketpage.classList.remove("hidden");
              basketpage.classList.add("block");
              subbasketpage.classList.remove("hidden");
              subbasketpage.classList.add("block");

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
          } else {
            console.log("این آیتم قبلاً در سبد خرید وجود دارد.");
          }
        } else {
          console.log("داده‌های آیتم معتبر نیستند.");
        }
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
function updateCartPage() {
  console.log("در حال بروزرسانی صفحه سبد خرید"); // برای بررسی
  const subbasketpage = document.querySelector(".subbasketpage");

  if (subbasketpage) {
    subbasketpage.innerHTML = ""; // پاک کردن محتوای قبلی
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.img && item.name && item.price);
    localStorage.setItem("cart", JSON.stringify(cart));

    if (cart.length > 0) {
      // به جای انجام به روز رسانی مستقیم، از setTimeout استفاده می‌کنیم تا مرورگر زمان بده
      setTimeout(() => {
        cart.forEach((item) => {
          const itemElement = document.createElement("div");
          itemElement.classList.add("cart-item");
          itemElement.innerHTML = `
                    <div class="w-[98%] mt-[2px] mx-auto flex flex-row justify-around items-center border-[1px] border-solid border-[lightgray] rounded-[15px]">
                        <img src="${item.img}" alt="product image" class="w-[30%] h-[114px]" />
                        <p class="w-[40%] font-[iranyekanmedium] text-[#2b2b2b] text-ellipsis text-wrap text-[12px]">${item.name}</p>
                        <a class="deletebutton block w-[20%] h-[20px]" href="#">
                            <img src="./public/svg/trashplus.svg" alt=""/>
                        </a>
                    </div>
                `;

          const deleteButton = itemElement.querySelector(".deletebutton");
          deleteButton.addEventListener("click", (e) => {
            e.preventDefault();
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart = cart.filter((cartItem) => cartItem.name !== item.name);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartPage(); // بروزرسانی پس از حذف آیتم
          });

          subbasketpage.appendChild(itemElement);
          console.log("آیتم اضافه شد:", item); // برای بررسی
        });
      }, 50);
    } else {
      subbasketpage.innerHTML = "<p>سبد خرید شما خالی است.</p>";
      console.log("سبد خرید خالی است");
    }
  } else {
    console.log("subbasketpage پیدا نشد");
  }
}
