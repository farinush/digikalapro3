export const fetchUniqeestil = async () => {
    let uniqeestil = "";
    try {
      let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
      let res = await data.json();
      uniqeestil += `
          <div class="child__uniqe-estil w-[90%] lg:w-[71%]   mx-auto ">
            <a class="subchild__uniqe-estil w-[100%] h-[100%] flex flex-row flex-wrap justify-around items-center gap-y-[12px]" href="#">
              <img src="${res.img1}" alt="" class="w-[660px] h-[100%] rounded-[15px]"/>
              <img src="${res.img2}" alt="" class="w-[660px] h-[100%] rounded-[15px]"/>
            </a>
          </div>`;
          document.querySelector(".uniqe-estil").innerHTML=uniqeestil;
    } catch (error) {
      console.log(error.message);
    }
  };
  