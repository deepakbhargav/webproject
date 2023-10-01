function deepak(){
    let date=new Date();
    let dates=date.getUTCDate()
    
    let weekely=[];
        weekely[0]="sunday";
        weekely[1]="mon";
        weekely[2]="tue";
        weekely[3]="wed";
        weekely[4]="thus";
        weekely[5]="fri";
        weekely[6]="satur";
        
     let mon=[
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "june",
        "july",
        "august",
        "sep",
        "oct",
        "nov",
        "dec"
     ];
    let day=date.getDay();
    let month=date.getMonth();
    let times=`${weekely[day]}/${mon[month]} ${dates}`
   let time=date.toLocaleTimeString();
   document.getElementById("day").innerHTML=`${weekely[day]}`
   document.getElementById("today_data").innerHTML=`${mon[month]} ${dates}`
   }
  deepak()
 const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
let searchbtn=document.getElementById("submitBtn");
const hide=document.getElementById("hide");
// const data_hide=document.querySelector(".data_hide")
const getInfo=async(event)=>{
event.preventDefault();
let cityvalue=cityName.value;

if(cityvalue===""){
city_name.innerText="please enter the city name";
hide.classList.add("data_hide")


}
else{
  try{
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityvalue}&appid=e279813f06dc1a17ac318ac59b1ca5c8`;
    const response= await fetch(apiUrl);
    const data=await response.json();
    const arr=[data]
    console.log(arr);

    city_name.innerHTML=`${arr[0].name},${arr[0].sys.country}`;
    temp.innerText=`${arr[0].main.temp}`;
    let status=arr[0].weather[0].main;
    console.log(status)
    
    if(status=="Clear"){
      temp_status.innerHTML="<i class='bi bi-brightness-high-fill' style='color:#eccc68;'></i>";
    }
    else if(status=="Clouds"){
      temp_status.innerHTML="<i class='bi bi-cloudy-fill' style='color:#eccc68;'></i>";
    }
    else if(status=="Rain"){
      temp_status.innerHTML="<i class='bi bi-cloud-rain-fill'></i>";
    }
    else{
      temp_status.innerHTML="<i class='bi bi-cloudy-fill' style='color:#eccc68;'></i>";
    }
    hide.classList.remove("data_hide")
    
  }
  catch(error){
    city_name.innerText="please enter the city name properly";
    console.log(`error find ${error}`)
    hide.classList.add("data_hide")
  }
 


}

}

searchbtn.addEventListener("click",getInfo);
