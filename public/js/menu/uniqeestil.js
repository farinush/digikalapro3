export const fetchUniqeestil = async () => {
  try {
    let data = await fetch("https://farinush.github.io/digikalapro3/db.json");
    let res = await data.json();
    let uniqeestil = res.uniqeestil.map((item) => {
      return `
              <img src="${item.img}" alt="" class="w-[660px] h-[100%] rounded-[15px]"/>
           `;
    });
    document.querySelector(".subchild__uniqe-estil").innerHTML = uniqeestil;
  } catch (error) {
    console.log(error.message);
  }
};
