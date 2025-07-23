export const fetchFavaritebrands = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    let favaritebrands =res.favaritebrands.map((item)=>{
      return `
                <div class="swiper-slide hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center">
                  <div class="swiper-slide__story__favaritebrands w-[142px] h-[118px] m-auto">
                    <a class="a_swiper-slide__story__favaritebrands w-[141px] h-[117px] block p-[1px] m-auto relative" href="#">
                      <img src="${item.img}" alt="" class="w-[110px] h-[110px]"/>
                    </a>
                  </div>
                </div>`;
    }) 
    document.querySelector(".myfavaritebrands").innerHTML = `
             <div class="swiper-wrapper">
             ${favaritebrands}
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
