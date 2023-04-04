var ble=true;
const handleclicksearch = () => {
    const event = document.getElementsByClassName('event');
    console.log("hi")
   if(ble){

       event[0].innerHTML = `<div class="search"> 
           <div class="fas fa-search search-icon"  id = "search-btn" > </div >
           <span class="search-line"></span>
           <input type="text" class="search-text" placeholder="Enter Laptop">
       </div>`;
       ble=false
   }else{
    event[0].innerHTML ='';
    ble=true
   }
   


   

}