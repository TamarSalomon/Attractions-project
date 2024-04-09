const dom={
    details: document.querySelector('#details')
}






const getDetails=(attraction)=>{

    const h1=document.querySelector(".card-title");
    h1.innerHTML=attraction.name;

    const img=document.querySelector(".img-responsive");
    img.src=`../../assets/pictures/${attraction.imge}`;

    const p=document.querySelector("#about");
    p.innerHTML=attraction.description;

    const cost=document.querySelector("#cost");
    cost.innerHTML=" מחיר: "+attraction.cost+" שח" ;

    const area=document.querySelector("#area");
    area.innerHTML="  "+attraction.area;
 
}

const drawDetailes=(attractionsArr)=>{
    attractionsArr.forEach(element => {
        if(element.name==sessionStorage.getItem('keepName')){
            sessionStorage.setItem("name",JSON.stringify(element.name));
            sessionStorage.setItem("cost",JSON.stringify(element.cost));
            sessionStorage.setItem("img",JSON.stringify(element.imge));
            dom.details.appendChild(getDetails(element));            
    }
    
});

}

server("../../data/attarctions.json",drawDetailes);

const products_list = document.querySelector(".btn-primary");
let productsArr = JSON.parse(sessionStorage.getItem('productsArr'));
products_list.onclick = (event) => {
    if (productsArr === null) {
        productsArr = [];
        sessionStorage.setItem("productsArr", JSON.stringify(productsArr));
    }
       Name=sessionStorage.getItem("name");
       cost=sessionStorage.getItem("cost");
       img=sessionStorage.getItem("img");
       
       let p=[1,Name.slice(1,Name.length-1),cost.slice(1,cost.length-1),
        img.slice(1,img.length-1)];
            // alert(p);
          
        if(sessionStorage.getItem("productsArr").includes(p[1])==false){
        productsArr.push(p);
        sessionStorage.setItem('productsArr', JSON.stringify(productsArr));
              // alert(sessionStorage.getItem("productsArr").includes(p[1]));
           // שינוי

        }    
        else{
            
            // var arrayString = sessionStorage.getItem("productsArr");
            // var array = JSON.parse(arrayString);
            
            // for (let i = 0; i < array.length; i++) {
            //     if(array[i][1].includes(p[1])==true) {
            //         array[i][0]++;
            //         sessionStorage.setItem("productsArr",array);
            //         // alert(array[i][0]+"   "+array[i][1]);
            //     }
            // }
    // שינוי
}

}
// שינוי
$(document).ready(function() {
    $('#openModalBtn').click(function() {
      $('#myModal').modal('show');
      
      setTimeout(function() {
        $('#myModal').modal('hide');
      }, 3000); // 3000 milliseconds = 3 seconds
    });
  });
// שינוי
