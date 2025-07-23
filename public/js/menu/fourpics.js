export const fetchFourpics = async () => {
    try {
      let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      let res = await data.json();
      let fourpic =res.fourpics.map((item)=>{
        return  `
          <div class="div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px]">
            <a class="a__div__subfourpics w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] block" href="#">
              <img src="${item.img}" alt="" class="w-[218px] h-[164px] lg:w-[305px] lg:h-[260px] rounded-[20px]" id="firstImage"/>
            </a>
          </div>`;
      })
      document.querySelector(".subfourpics").innerHTML = fourpic;
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
  