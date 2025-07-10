export const fetchSooperamazing = async () => {
  let sooperamazing = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    sooperamazing += `
          <a class="a__sub__supermarketamazing flex flex-row flex-wrap justify-center py-[20px] items-center w-[100%]" href="#">
            <div class="child1__a__sub__supermarketamazing w-[100%] lg:w-[45%] flex flex-row flex-nowrap lg:ps-[50px] lg:pe-[30px] gap-y-[5px]">
              <div class="sub1chid1__a__sub__supermarketamazing w-[12%] lg:w-[20%] h-[62px] m-auto box-border relative">
                <img src="${res.img1}" alt="" class="w-[66px] h-[62px] object-contain absolute lg:right-[30px]"/>
              </div>
              <div class="sub2chid1__a__sub__supermarketamazing w-[47%] lg:w-[50%] h-[62px] m-auto box-border relative">
                <img src="${res.img2}" alt="" class="w-[250px] h-[28px] absolute top-[18px] lg:right-[2px]"/>
              </div>
              <div class="sub3chid1__a__sub__supermarketamazing w-[25%] lg:w-[30%] h-[62px] m-auto box-border relative">
                <div class="takhfiffbox w-[112px] h-[27px] bg-[#029948] rounded-[12px] absolute lg:right-[5px] top-[18px] text-[15px] text-[whitesmoke] text-center font-[iranyekanmedium] leading-[30px]">تا <span class="font-[yekan]">${res.text1}</span> تخفیف</div>
              </div>
            </div>
            <div class="child2__a__sub__supermarketamazing w-[90%] lg:w-[55%] flex flex-row flex-nowrap  items-center gap-x-[5px]">
              <div class="subchild2__a__sub__supermarketamazing w-[68px] h-[68px] lg:w-[78px] lg:h-[78px] flex flex-col flex-wrap relative">
                <div class="image__subchild2__a__sub__supermarketamazing w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] rounded-[50%] absolute left-0 top-0">
                  <img src="${res.img3}" alt="" class="w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] object-contain rounded-[50%]"/>
                </div>
                <div class="discount__subchild2__a__sub__supermarketamazing w-[34px] h-[20px] rounded-[15px] bg-[#ca3333] text-[whitesmoke] text-[11px] font-[yekan] font-[600] text-center leading-[20px] absolute right-0 bottom-0">
                  ${res.text3}
                </div>
              </div>
              <div class="subchild2__a__sub__supermarketamazing w-[68px] h-[68px] lg:w-[78px] lg:h-[78px] flex flex-col flex-wrap relative">
                <div class="image__subchild2__a__sub__supermarketamazing w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] rounded-[50%] absolute left-0 top-0">
                  <img src="${res.img4}" alt="" class="w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] object-contain rounded-[50%]"/>
                </div>
                <div class="discount__subchild2__a__sub__supermarketamazing w-[34px] h-[20px] rounded-[15px] bg-[#ca3333] text-[whitesmoke] text-[11px] font-[yekan] font-[600] text-center leading-[20px] absolute right-0 bottom-0">
                ${res.text4}
                </div>
              </div>
              <div class="subchild2__a__sub__supermarketamazing w-[68px] h-[68px] lg:w-[78px] lg:h-[78px] flex flex-col flex-wrap relative">
                <div class="image__subchild2__a__sub__supermarketamazing w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] rounded-[50%] absolute left-0 top-0">
                  <img src="${res.img5}" alt="" class="w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] object-contain rounded-[50%]"/>
                </div>
                <div class="discount__subchild2__a__sub__supermarketamazing w-[34px] h-[20px] rounded-[15px] bg-[#ca3333] text-[whitesmoke] text-[11px] font-[yekan] font-[600] text-center leading-[20px] absolute right-0 bottom-0">
                ${res.text5}
                </div>
              </div>
              <div class="subchild2__a__sub__supermarketamazing w-[68px] h-[68px] lg:w-[78px] lg:h-[78px] flex flex-col flex-wrap relative">
                <div class="image__subchild2__a__sub__supermarketamazing w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] rounded-[50%] absolute left-0 top-0">
                  <img src="${res.img6}" alt="" class="w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] object-contain rounded-[50%]"/>
                </div>
                <div class="discount__subchild2__a__sub__supermarketamazing w-[34px] h-[20px] rounded-[15px] bg-[#ca3333] text-[whitesmoke] text-[11px] font-[yekan] font-[600] text-center leading-[20px] absolute right-0 bottom-0">
                ${res.text6}
                </div>
              </div>
              <div class="subchild2__a__sub__supermarketamazing w-[68px] h-[68px] lg:w-[78px] lg:h-[78px] flex flex-col flex-wrap relative">
                <div class="image__subchild2__a__sub__supermarketamazing w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] rounded-[50%] absolute left-0 top-0">
                  <img src="${res.img7}" alt="" class="w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] object-contain rounded-[50%]"/>
                </div>
                <div class="discount__subchild2__a__sub__supermarketamazing w-[34px] h-[20px] rounded-[15px] bg-[#ca3333] text-[whitesmoke] text-[11px] font-[yekan] font-[600] text-center leading-[20px] absolute right-0 bottom-0">
                ${res.text7}
                </div>
              </div>
              <div class="subchild2__a__sub__supermarketamazing w-[68px] h-[68px] lg:w-[78px] lg:h-[78px] flex flex-col flex-wrap relative">
                <div class="image__subchild2__a__sub__supermarketamazing w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] rounded-[50%] absolute left-0 top-0">
                  <img src="${res.img8}" alt="" class="w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] object-contain rounded-[50%]"/>
                </div>
                <div class="discount__subchild2__a__sub__supermarketamazing w-[34px] h-[20px] rounded-[15px] bg-[#ca3333] text-[whitesmoke] text-[11px] font-[yekan] font-[600] text-center leading-[20px] absolute right-0 bottom-0">
                ${res.text8}
                </div>
              </div>
              <div class="continue__child2__a__sub__supermarketamazing w-[165px] h-[40px] leading-[40px] lg:w-[145px] lg:h-[55px] lg:ms-[5px] bg-[whitesmoke] text-[#029a49] rounded-[30px] text-center lg:leading-[50px] relative">
                <div class="child__continue__child2__a__sub__supermarketamazing w-[80px] h-[20px] font-[iranyekanmedium] text-[12px] font-[500] absolute right-[20px] top-[2px]">
                  بیش از <span class="font-[yekan] text-[12px]">${res.textlast}</span> کالا
                </div>
                <img src="${res.svgflesh}" alt="" class="absolute bottom-[20px] left-[16px]"/>
              </div>
            </div>
          </a>`;
    document.querySelector(
      ".supermarketamazing .sub__supermarketamazing"
    ).innerHTML = sooperamazing;
  } catch (error) {
    console.log(error.message);
  }
};
