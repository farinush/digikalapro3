export const fetchFourpics = async () => {
    let fourpic = "";
    let currentIndex = 0;
    let changeInterval;
  
    try {
      let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      let res = await data.json();
      fourpic += `
        <div class="subfourpics lg:w-[80%] w-[95%] my-[5px] mx-auto flex-row flex flex-wrap justify-center items-center gap-x-[15px] gap-y-[5px] ">
          <div class="div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px]">
            <a class="a__div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] block" href="#">
              <img src="${res.img1}" alt="" class="w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] rounded-[20px]" id="firstImage"/>
            </a>
          </div>
          <div class="div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px]">
            <a class="a__div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] block" href="#">
              <img src="${res.img3}" alt="" class="w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] rounded-[20px]"/>
            </a>
          </div>
          <div class="div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px]">
            <a class="a__div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] block" href="#">
              <img src="${res.img4}" alt="" class="w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] rounded-[20px]"/>
            </a>
          </div>
          <div class="div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px]">
            <a class="a__div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] block" href="#">
              <img src="${res.img5}" alt="" class="w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] rounded-[20px]"/>
            </a>
          </div>
        </div>`;
      document.querySelector(".fourpics").innerHTML = fourpic;
      const secondImage = new Image(); 
      secondImage.src = res.img2; 
      secondImage.style.display = 'none';
      const changeFirstImage = () => {
        const images = [res.img1, res.img2];
        const firstImage = document.getElementById('firstImage');
        currentIndex = (currentIndex + 1) % images.length; 
        firstImage.src = images[currentIndex];
      };
      if (changeInterval) {
        clearInterval(changeInterval); 
      }
  
      changeInterval = setInterval(changeFirstImage, 1000);
  
    } catch (error) {
      console.log(error.message);
    }
  };
  