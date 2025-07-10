export const fetchDigichild=async()=>{
    let digichild=""
    try{
        let data=await fetch("https://farinush.github.io/digikalapro3/db.json")
        let res=await data.json()
        digichild+=`
        <div class="subdigichild-brands w-[95%] mx-auto h-[165px] grid justify-between items-center">
          <a href="#" class="block m-auto justify-center"><img src="${res.img1}" alt="" class="block w-[100%] h-[100%]"></a>
         <a href="#" class="block m-auto justify-center"><img src="${res.img2}" alt="" class="block w-[100%] h-[100%]"></a>
        <a href="#" class="block m-auto justify-center"><img src="${res.img3}" alt="" class="block w-[100%] h-[100%]"></a>
       <a href="#" class="block m-auto justify-center"><img src="${res.img4}" alt="" class="block w-[100%] h-[100%]"></a>
      <a href="#" class="block m-auto justify-center"><img src="${res.img5}" alt="" class="block w-[100%] h-[100%]"></a>
      <a href="#" class="block m-auto justify-center"><img src="${res.img6}" alt="" class="block w-[100%] h-[100%]"></a>
       <a href="#" class="block m-auto justify-center"><img src="${res.img7}" alt="" class="block w-[100%] h-[100%]"></a>
         <a href="#" class="block m-auto justify-center"><img src="${res.img8}" alt="" class="block w-[100%] h-[100%]"></a>
        <a href="#" class="block m-auto justify-center"><img src="${res.img9}" alt="" class="block w-[100%] h-[100%]"></a>
       <a href="#" class="block m-auto justify-center"><img src="${res.img10}" alt="" class="block w-[100%] h-[100%]"></a>
       <a href="#" class="block m-auto justify-center"><img src="${res.img11}" alt="" class="block w-[100%] h-[100%]"></a>
         <a href="#" class="block m-auto justify-center"><img src="${res.img12}" alt="" class="block w-[100%] h-[100%]"></a>
         <a href="#" class="block m-auto justify-center"><img src="${res.img13}" alt="" class="block w-[100%] h-[100%]"></a>
        <a href="#" class="block m-auto justify-center"><img src="${res.img14}" alt="" class="block w-[100%] h-[100%]"></a>
      <a href="#" class="block m-auto justify-center"><img src="${res.img15}" alt="" class="block w-[100%] h-[100%]"></a>
        </div>`
        document.querySelector(".digichild-brands").innerHTML=digichild;

    }catch(error){
        console.log(error.message)
    }
}