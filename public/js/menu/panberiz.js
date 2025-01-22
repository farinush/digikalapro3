export const fetchPanberiz = async () => {
  let panberiz = "";
  try {
    let data = await fetch("http://localhost:3004/panberiz");
    let res = await data.json();
    panberiz += ` 
        <div class="sub-panberiz mx-auto w-[95%] lg:w-[71%] h-[167px] rounded-[20px]">
          <img src="${res.img1}" alt="" class="w-[100%] h-[100%] block object-cover rounded-[20px]">
        </div>`;
        document.querySelector(".panberiz").innerHTML=panberiz;
  } catch (error) {
    console.log(error.message);
  }
};
