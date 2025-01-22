export const fetchCenterlogo=async()=>{
    let centerlogo=""
    try{
        let data=await fetch("http://localhost:3004/centermenu2")
        let res=await data.json()
        centerlogo+=`<a href="#"><img src="${res.svglogo}" alt="" /></a>`
        document.querySelector(".logo_center_menu").innerHTML=centerlogo;

    }catch(error){
        console.log(error.message)
    }
}
export const fetchLocresponsive=async()=>{
    let locresponsive=""
    try{
        let data=await fetch("http://localhost:3004/centermenu2")
        let res=await data.json()
        locresponsive+=`
        <img src="${res.homesvg}" alt="">
              ${res.titleloc}
              <img src="${res.svgfleshbechap}" alt="">`
              document.querySelector(".locresponsive").innerHTML=locresponsive;

    }catch(error){
        console.log(error.message)
    }
}