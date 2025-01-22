const topMenu = async () => {
  let topmenu = "";
  try {
    let res = await axios.get("http://localhost:3004/topMenu");
    topmenu = res.data.map((item) => {
      return `<img src="${item.link}" alt="${item.top_menu}" class="w-[100%] !h-[30px] lg:!h-[60px]" />`;
    });
    console.log("topmenu")
    document.querySelector(".top_menu .a_top_menu").innerHTML = topmenu.join("");
  } catch (error) {
    console.log("Error fetching top-menu:", error.message);
  }
};
export default topMenu;
