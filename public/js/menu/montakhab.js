export const fetchMontakhab=async()=>{
    let montakhab=""
    try{
        let data=await fetch("http://localhost:3004/montakhab")
        let res=await data.json()
        montakhab+=`       
         <div class="sub_montakhab w-[100%] lg:w-[71%] lg:border-[1px] lg:border-solid lg:border-[lightgray] rounded-[15px] flex flex-col flex-wrap justify-center items-center my-[40px] mx-auto">
          <div class="text_sub_montakhab w-[100%] h-[10%]">
            <a href="#" class="a_text_sub_montakhab w-[100%] h-[100%] flex flex-row flex-wrap justify-center items-center font-[iranyekanmedium] text-[18px] text-[#2b2b2b] gap-y-[8px]">
             <img src="${res.svgharaj}" alt="">
              ${res.subtitle}
            </a>
          </div>
          <div class="image_sub_montakhab w-[100%] h-[90%] flex flex-row flex-wrap items-center justify-center">
            <div class="column_image_sub_montakhab w-[218px] h-[100%] ">
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] border-b-[1px] lg:border-l-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img1}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text1}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                      ${res.h5text1}<img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row1}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] border-b-[1px] lg:border-l-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img2}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text2}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text2}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row2}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img3}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text3}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text3}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row3}</h6>
                </a>
              </div>
            </div>
            <div class="column_image_sub_montakhab w-[218px] h-[100%]">
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img4}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text4}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text4}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row4}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px]  lg:border-l-[1px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img5}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text5}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text5}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row5}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px]  lg:border-l-[1px] ">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img6}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text6}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text6}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row6}</h6>
                </a>
              </div>
            </div>
            <div class="column_image_sub_montakhab w-[218px] h-[100%]">
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img7}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text7}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text7}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row7}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img8}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text8}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text8}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row8}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px] ">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img9}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text9}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text9}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row9}</h6>
                </a>
              </div>
            </div>
            <div class="column_image_sub_montakhab w-[218px] h-[100%]">
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img10}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text10}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text10}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row10}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img11}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text11}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text11}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row11}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img12}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text12}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text12}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row12}</h6>
                </a>
              </div>
            </div>
            <div class="column_image_sub_montakhab w-[218px] h-[100%]">
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img13}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text13}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text13}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row13}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img14}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text14}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text14}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row14}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] lg:border-l-[1px] ">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img15}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text15}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text15}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row15}</h6>
                </a>
              </div>
            </div>
            <div class="column_image_sub_montakhab w-[218px] h-[100%]">
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img16}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text16}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text16}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row16}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px] border-b-[1px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img17}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text17}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text17}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row17}</h6>
                </a>
              </div>
              <div class="row_column_image_sub_montakhab w-[100%] h-[242px]">
                <a class="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                  <img src="${res.img18}" alt="" class="w-[150px] h-[150px] object-cover block m-auto"/>
                  <div class="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                    <h6 class="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">${res.h6text18}</h6>
                    <h5 class="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">
                    ${res.h5text18}
                      <img src="${res.svgtoman}" alt="" class="w-[16px] h-[16px]"/>
                    </h5>
                  </div>
                  <h6 class="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">${res.h6row18}</h6>
                </a>
              </div>
            </div>
          </div>
        </div>`
document.querySelector(".montakhab").innerHTML=montakhab;
    }catch(error){
        console.log(error.message)
    }
}
