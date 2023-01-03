const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
const giveAway = document.querySelector(".giveaway");
const item =document.querySelectorAll(".all span");
const dynamic =document.querySelector(".dynamic");
//console.log(weekdays[1]);
let futureDate = new Date(2023,0,3,15,55);
//console.log(futureDate);
const year =futureDate.getFullYear();
const date=futureDate.getDate();
const hours=futureDate.getHours();
const min=futureDate.getMinutes();

let month=futureDate.getMonth();
month=months[month];
let weekday=futureDate.getDay();
weekday=weekdays[weekday];
giveAway.innerHTML=`Giveaway Ends On ${weekday}, ${date}  ${month}  ${year}  ${hours}:${min}`;
const t=futureDate.getTime();
const oneDay =24*60*60*1000;
const oneHour=60*60*1000;
const oneMin=60*1000;
const oneSec=1000;


function getRemaindertime()
{
  const todayTime=new Date().getTime(); 
  const remainingTime = t-todayTime;
   let days=Math.floor(remainingTime/oneDay);
   let hours =Math.floor((remainingTime%oneDay)/oneHour);
   let min = Math.floor(((remainingTime%oneDay)%oneHour)/oneMin);
   let  sec =Math.floor((((remainingTime%oneDay)%oneHour)%oneMin)/oneSec);
   const value =[days,hours,min,sec];
   item.forEach(function(items,index){
      items.innerHTML=modify(value[index]);
   })

   function modify(items)
   {
    if(items<10)
     return (items=`0${items}`);
     else
     return items;
   }
   if (remainingTime<0)
 { clearInterval(interval);
   dynamic.innerHTML="`<h4>sorry, this giveaway has expired!</h4>`";
   }
}

const interval=setInterval(getRemaindertime,1000);

getRemaindertime();






