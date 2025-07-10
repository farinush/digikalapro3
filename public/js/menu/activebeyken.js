export const fetchActivebeyken = async () => {
  let activebeyken = "";
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    activebeyken += `
        <div class="child__active-beyken lg:w-[71%] w-[90%]   mx-auto ">
          <a class="subchild__active-beyken w-[100%] h-[100%] flex flex-row flex-wrap justify-around items-center gap-y-[12px]" href="#">
            <img src="${res.img1}" alt="" class="w-[660px] h-[100%] rounded-[15px]"/>
            <img src="${res.img2}" alt="" class="w-[660px] h-[100%] rounded-[15px]"/>
          </a>
        </div>`;
        document.querySelector(".active-beyken").innerHTML=activebeyken;
  } catch (error) {
    console.log(error.message);
  }
};
