export const fetchDigichild = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    let digichild = res.digichild.map((item) => {
      return `
          <a href="#" class="block m-auto justify-center"><img src="${item.img}" alt="" class="block w-[100%] h-[100%]"></a>
        `;
    });
    document.querySelector(".subdigichild-brands").innerHTML = digichild.join('');
  } catch (error) {
    console.log(error.message);
  }
};
