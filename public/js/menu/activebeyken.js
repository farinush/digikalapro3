export const fetchActivebeyken = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    console.log(res);
    let activebeyken = res.activebeyken.map((item) => {
      return `
            <img src="${item.img}" alt="" class="w-[660px] h-[100%] rounded-[15px]" data-id=${item.id}/>
          `;
    });
    document.querySelector(".subchild__active-beyken").innerHTML = activebeyken;
  } catch (error) {
    console.log(error.message);
  }
};
