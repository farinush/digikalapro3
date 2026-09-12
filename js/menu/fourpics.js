export const fetchFourpics = async () => {
    try {
      let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      let res = await data.json();
      let fourpic =res.fourpics.map((item)=>{
        return  `
          <div class="div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px]">
            <a class="a__div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] block" href="#">
              <img src="${item.img}" alt="" class="w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] rounded-[20px]"/>
            </a>
          </div>`;
      })
      document.querySelector(".subfourpics").innerHTML = fourpic.join('');

    const allImages = document.querySelectorAll(".subfourpics img");

    if (allImages.length > 0 && res.fourpicsimage5) {
      const targetImage = allImages[0]; // تغییر روی عکس اول
      const images = [res.fourpics[0].img, res.fourpicsimage5]; // اسلایدر بین عکس اول و image5
      let currentIndex = 0;

      const changeImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        targetImage.src = images[currentIndex];
      };

      if (window.changeInterval) clearInterval(window.changeInterval);
      window.changeInterval = setInterval(changeImage, 1000);
    }
  
    } catch (error) {
      console.log(error.message);
    }
  };
  