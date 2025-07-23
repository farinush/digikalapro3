const topMenu = async () => {
  let topmenu = "";
  try {
    let data=await fetch("https://farinush.github.io/digikalapro3/db.json")
    let res = await data.json();
    topmenu+=``
      ;
    
    console.log("topmenu")
    document.querySelector(".top_menu .a_top_menu").innerHTML = topmenu;
  } catch (error) {
    console.log("Error fetching top-menu:", error.message);
  }
};
export default topMenu;
