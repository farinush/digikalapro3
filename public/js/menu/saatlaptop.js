export const fetchSaatlaptop = async () => {
    let saatlaptop = "";
    try {
      let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      let res = await data.json();
      saatlaptop += `       
           <div class="sub_mobile-hedphone w-[70%] my-[10px] mx-auto lg:border-[1px] lg:border-solid lg:border-[lightgray] rounded-[10px] flex flex-row flex-wrap box-border justify-center items-center">
            <div class="child_sub_mobile-hedphone w-[325px]  box-border flex flex-col flex-wrap">
              <div class="text_child_sub_mobile-hedphone w-[292px] h-[50px] flex font-[iranyekanmedium] flex-col flex-wrap text-[15px] leading-[20px] m-auto mb-[10px] box-border">
               ${res.title1}
                <span class="text-[12px] opacity-[0.7]">${res.subtitle}</span>
              </div>
              <div class="image_child_sub_mobile-hedphone w-[292px] h-[298px] m-auto box-border">
                <a class="a_1_2_image_child_sub_mobile-hedphone w-[292px] h-[298px] flex flex-col flex-wrap" href="#">
                  <div class="row_1_image_child_sub_mobile-hedphone w-[292px] h-[135px] flex justify-between flex-row flex-wrap">
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img1}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                    <hr class="columchild w-[1px] h-[100%] lg:border-none lg:border-l-[1px] lg:border-l-solid lg:border-l-[lightgray] opacity-[0.5]"/>
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img2}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                  </div>
                  <hr class="rowchild w-[80%] h-[1px] lg:border-none lg:border-b-[1px] lg:border-b-solid lg:border-b-[lightgray] opacity-[0.5] mb-[7px] m-auto block"/>
                  <div class="row_1_image_child_sub_mobile-hedphone w-[292px] h-[135px] flex justify-between flex-row flex-wrap">
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img3}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                    <hr class="columchild w-[1px] h-[100%] lg:border-none lg:border-l-[1px] lg:border-l-solid lg:border-l-[lightgray] opacity-[0.5]"/>
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img4}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                  </div>
                </a>
              </div>
              <div class="a_child_sub_mobile-hedphone inline-block w-[100px] h-[26px] font-[iranyekanmedium] text-[13px] text-center m-auto relative">
                <a href="#" class="text-[#5faab5]">${res.text}<img src="${res.svgfleshbechap}" alt="" class="absolute top-[-3px] left-[3px]"/>
                </a>
              </div>
            </div>
            <hr class="hr_sub_mobile-hedphone w-[1px] h-[440px] lg:bg-[lightgray] opacity-[0.3]" />
            <div class="child_sub_mobile-hedphone w-[325px] h-[435px] box-border flex flex-col flex-wrap">
              <div class="text_child_sub_mobile-hedphone w-[292px] h-[50px] flex font-[iranyekanmedium] flex-col flex-wrap text-[15px] leading-[20px] m-auto mb-[10px] box-border">
                ${res.title2}
                <span class="text-[12px] opacity-[0.7]">${res.subtitle}</span>
              </div>
              <div class="image_child_sub_mobile-hedphone w-[292px] h-[298px] m-auto box-border">
                <a href="#" class="a_1_2_image_child_sub_mobile-hedphone w-[292px] h-[298px] flex flex-col flex-wrap">
                  <div class="row_1_image_child_sub_mobile-hedphone w-[292px] h-[135px] flex justify-between flex-row flex-wrap">
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img5}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                    <hr class="columchild w-[1px] h-[100%] lg:border-none lg:border-l-[1px] lg:border-l-solid lg:border-l-[lightgray] opacity-[0.5]"/>
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img6}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                  </div>
                  <hr class="rowchild w-[80%] h-[1px] lg:border-none lg:border-b-[1px] lg:border-b-solid lg:border-b-[lightgray] opacity-[0.5] mb-[7px] m-auto block"/>
                  <div class="row_1_image_child_sub_mobile-hedphone w-[292px] h-[135px] flex justify-between flex-row flex-wrap">
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img7}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                    <hr class="columchild w-[1px] h-[100%] lg:border-none lg:border-l-[1px] lg:border-l-solid lg:border-l-[lightgray] opacity-[0.5]"/>
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img8}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                  </div>
                </a>
              </div>
              <div class="a_child_sub_mobile-hedphone inline-block w-[100px] h-[26px] font-[iranyekanmedium] text-[13px] text-center m-auto relative">
                <a href="#" class="text-[#5faab5]">${res.text}<img src="${res.svgfleshbechap}" alt="" class="absolute top-[-3px] left-[3px]"/>
                </a>
              </div>
            </div>
            <hr class="hr_sub_mobile-hedphone w-[1px] h-[440px] lg:bg-[lightgray] opacity-[0.3]"/>
            <div class="child_sub_mobile-hedphone w-[325px] h-[435px] box-border flex flex-col flex-wrap">
              <div class="text_child_sub_mobile-hedphone w-[292px] h-[50px] flex font-[iranyekanmedium] flex-col flex-wrap text-[15px] leading-[20px] m-auto mb-[10px] box-border">
                ${res.title3}
                <span class="text-[12px] opacity-[0.7]">${res.subtitle}</span>
              </div>
              <div class="image_child_sub_mobile-hedphone w-[292px] h-[298px] m-auto box-border">
                <a href="#" class="a_1_2_image_child_sub_mobile-hedphone w-[292px] h-[298px] flex flex-col flex-wrap">
                  <div class="row_1_image_child_sub_mobile-hedphone w-[292px] h-[135px] flex justify-between flex-row flex-wrap">
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img9}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                    <hr class="columchild w-[1px] h-[100%] lg:border-none lg:border-l-[1px] lg:border-l-solid lg:border-l-[lightgray] opacity-[0.5]"/>
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img10}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                  </div>
                  <hr class="rowchild w-[80%] h-[1px] lg:border-none lg:border-b-[1px] lg:border-b-solid lg:border-b-[lightgray] opacity-[0.5] mb-[7px] m-auto block"/>
                  <div class="row_1_image_child_sub_mobile-hedphone w-[292px] h-[135px] flex justify-between flex-row flex-wrap">
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img11}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                    <hr class="columchild w-[1px] h-[100%] lg:border-none lg:border-l-[1px] lg:border-l-solid lg:border-l-[lightgray] opacity-[0.5]"/>
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img12}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                  </div>
                </a>
              </div>
              <div class="a_child_sub_mobile-hedphone inline-block w-[100px] h-[26px] font-[iranyekanmedium] text-[13px] text-center m-auto relative">
                <a href="#" class="text-[#5faab5]">${res.text}<img src="${res.svgfleshbechap}" alt="" class="absolute top-[-3px] left-[3px]"/>
                </a>
              </div>
            </div>
            <hr class="hr_sub_mobile-hedphone w-[1px] h-[440px] lg:bg-[lightgray] opacity-[0.3]"/>
            <div class="child_sub_mobile-hedphone w-[325px] h-[435px] box-border flex flex-col flex-wrap">
              <div class="text_child_sub_mobile-hedphone w-[292px] h-[50px] flex font-[iranyekanmedium] flex-col flex-wrap text-[15px] leading-[20px] m-auto mb-[10px] box-border">
                ${res.title4}
                <span class="text-[12px] opacity-[0.7]">${res.subtitle}</span>
              </div>
              <div class="image_child_sub_mobile-hedphone w-[292px] h-[298px] m-auto box-border">
                <a href="#" class="a_1_2_image_child_sub_mobile-hedphone w-[292px] h-[298px] flex flex-col flex-wrap">
                  <div class="row_1_image_child_sub_mobile-hedphone w-[292px] h-[135px] flex justify-between flex-row flex-wrap">
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img13}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                    <hr class="columchild w-[1px] h-[100%] lg:border-none lg:border-l-[1px] lg:border-l-solid lg:border-l-[lightgray] opacity-[0.5]"/>
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img14}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                  </div>
                  <hr class="rowchild w-[80%] h-[1px] lg:border-none lg:border-b-[1px] lg:border-b-solid lg:border-b-[lightgray] opacity-[0.5] mb-[7px] m-auto block"/>
                  <div class="row_1_image_child_sub_mobile-hedphone w-[292px] h-[135px] flex justify-between flex-row flex-wrap">
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img15}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                    <hr class="columchild w-[1px] h-[100%] lg:border-none lg:border-l-[1px] lg:border-l-solid lg:border-l-[lightgray] opacity-[0.5]"/>
                    <div class="childrow_1_1_image_child_sub_mobile-hedphone w-[135px] h-[135px]">
                      <img src="${res.img16}" alt="" class="w-[129px] h-[129px] object-cover"/>
                    </div>
                  </div>
                </a>
              </div>
              <div class="a_child_sub_mobile-hedphone inline-block w-[100px] h-[26px] font-[iranyekanmedium] text-[13px] text-center m-auto relative">
               <a href="#" class="text-[#5faab5]">${res.text}<img src="${res.svgfleshbechap}" alt="" class="absolute top-[-3px] left-[3px]"/>
                </a>
              </div>
            </div>
          </div>`;
      document.querySelector(".saat-laptop").innerHTML = saatlaptop;
    } catch (error) {
      console.log(error.message);
    }
  };
  