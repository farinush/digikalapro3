const topMenu = async () => {
  let topmenu = "";
  try {
    let data=await fetch("http://localhost:3004/topMenu")
    let res = await data.json();
    topmenu+=`<img src="${res.link}" alt="${res.top_menu}" class="w-[100%] !h-[30px] lg:!h-[60px]" />`
      ;
    
    console.log("topmenu")
    document.querySelector(".top_menu .a_top_menu").innerHTML = topmenu;
  } catch (error) {
    console.log("Error fetching top-menu:", error.message);
  }
};
export default topMenu;
