export const fetchActivebeyken = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    console.log(res);
    let activebeyken = res.activebeyken.map((item) => {
      return `
        <div class="child__active-beyken lg:w-[71%] w-[90%]   mx-auto" >
          <a class="subchild__active-beyken w-[100%] h-[100%] flex flex-row flex-wrap justify-around items-center gap-y-[12px]" href="#" key=${item.id}>
            <img src="${item.img}" alt="" class="w-[660px] h-[100%] rounded-[15px]"/>
          </a>
        </div>`;
    });
    document.querySelector(".active-beyken").innerHTML = activebeyken;
  } catch (error) {
    console.log(error.message);
  }
};
