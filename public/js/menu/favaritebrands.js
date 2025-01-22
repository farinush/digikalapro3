export const fetchFavaritebrand = async () => {
  let favaritebrand = "";
  try {
    let data = await fetch("http://localhost:3004/favaritebrands");
    let res = await data.json();
    favaritebrand += `
        <div class="svg__favaritebrands w-[30px] h-[30px] lg:absolute top-[20px]"><img src="${res.svgstar}" alt=""></div>
            <span class="font-[iranyekanmedium] text-[22px] w-[200px] h-[34px] block lg:absolute">${res.titlestar}</span>`;

    document.querySelector(
      ".child__favaritebrands .child1__favaritebrands"
    ).innerHTML = favaritebrand;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchFavariteswiper = async () => {
  let favariteswiper = "";
  try {
    let data = await fetch("http://localhost:3004/favaritebrands");
    let res = await data.json();
    favariteswiper += `
        
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img1}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img2}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img3}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img class="img__huge w-[100px] h-[65px] absolute block" src="${res.img4}" alt=""/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img5}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img6}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img7}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img8}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img9}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img10}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img11}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img12}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img class="img__huge w-[100px] h-[65px] absolute block" src="${res.img13}" alt=""/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img14}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img class="img__huge w-[100px] h-[65px] absolute block" src="${res.img15}" alt=""/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img16}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img17}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img18}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img19}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img20}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img21}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${res.img22}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>
              </div>`;
    document.querySelector(".myfavaritebrands").innerHTML = `
             <div class="swiper-wrapper">
             ${favariteswiper}
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>`;
    const swiper = new Swiper(".myfavaritebrands", {
      slidesPerView: 9.5,
      spaceBetween: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
