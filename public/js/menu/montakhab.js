export const fetchMontakhab = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    const montakhab = res.montakhab.map((group) => {
        const sectionItems = group.section.map((item) => {
            return `       
            
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] border-b-[1px] lg:border-l-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${item.img}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${item.h6text}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                      ${item.h5text}<img src="./public/svg/montakhab/toman.svg" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${item.h6row}</h6>
                </a>
              </div>
          `;
          })
          .join("");

        return `<div class="column_image_sub_montakhab w-[218px] h-[100%] ">${sectionItems}</div>`;
      })
      .join("");

    document.querySelector(".image_sub_montakhab").innerHTML = montakhab;
  } catch (error) {
    console.log(error.message);
  }
};
