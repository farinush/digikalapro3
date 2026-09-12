export const fetchClassifyshopp = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    const classify = res.classify.map((group) => {
    const sectionItems = group.section.map((item) => {
            return `
              <a class="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] flex flex-col flex-wrap items-center justify-center" href="#" key=${item.id}>
                <div class="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                  <img src="${item.img}" alt="" class="w-[100px] h-[100px]" />
                </div>
                <div class="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                  <span>${item.text}</span>
                </div>
              </a>
            `;
          })
          .join("");
        return `<div class="subimage__sub__classifyshopping w-[139px] h-[100%] p-[5px]">${sectionItems}</div>`;
      })
      .join("");
    document.querySelector(".image__sub__classifyshopping").innerHTML =
      classify;
  } catch (error) {
    console.log(error.message);
  }
};
