const dom = {
    attraction: document.getElementById("attaractions"),
}

//הקצאת מערך לפי החיפוש
const arr=[];
  
//הקצאת מערך לכל האטרקציות
const attractionsArr = [];

//הקצאת מערך לאטרקציות מסוג מסויים
const attractinsa=[];

//אם נכנסו דרך הנבחרת שלנו נשנה את בול ל1
const ourAttarctions = document.getElementById('ourAttarctions');
ourAttarctions.addEventListener('click', handleClick2);
function handleClick2() {
    sessionStorage.setItem("bool", 1);
}

//אם נכנסו דרך החיפוש נשנע את בול ל2
const Asearch=document.querySelector('.a-search');
Asearch.addEventListener('click',handleClick3);

function handleClick3(){
  sessionStorage.setItem("bool",2);

}
//אם נכנסו דרך החיפושים למטה האיזור נשנה ל3 ובמחיר נשנה ל4


//שליחת מערך אטרקציות מלא בסוג מסויים של אטרקציות לפעולה שתצייר אותו
const drawAttarction1 = (attractionsArr) => {
     let k=0;
    attractionsArr.forEach(element => {
        if (element.sort == sessionStorage.getItem('circleId')) {
            attractinsa[k++]=element;
        }
    });
    drowAllImages(attractinsa);
}  

//שליחת מערך האטרציות לפעולה שתצייר אותו
const drawAttarction2 = (attractionsArr) => {
    drowAllImages(attractionsArr);
}

const text=sessionStorage.getItem("search_value");
const drawAttarction3 = (attractionsArr) => {
    let k=0;
   attractionsArr.forEach(element => {
       if ((element.name.includes(text))||(element.area.includes(text))) {
           arr[k++]=element;
       }
   });
   if (arr.length==0) {
     const label=document.createElement('label');
     label.innerHTML="לא נמצאו תוצאות עבור"+" "+sessionStorage.getItem("search_value");
     label.style.marginTop="150px";
     label.style.fontSize="25px";
     dom.attraction.style.textAlign="center";
     dom.attraction.appendChild(label);

   }
   drowAllImages(arr);
}
// const drawAttarction4 = (attractionsArr) => {
//     const eid=sessionStorage.getItem("eId");
//     if (eid.includes("sorth")) {
//         attractionsArr.forEach(element => {
//             if ((element.area.includes("דרום"))) {
//                 arr[k++]=element;
//             }
//         });
//     }
//     else
//     if (eid.includes("north")) {
//         attractionsArr.forEach(element => {
//             if ((element.area.includes("צפון"))) {
//                 arr[k++]=element;
//             }
//         });
//     }
//     else
//     attractionsArr.forEach(element => {
//         if ((element.area.includes("מרכז"))) {
//             arr[k++]=element;
//         }
//     });

    
//    drowAllImages(arr);
// }


//פונקציה שבודקת האם נכנסו לעמוד האטרקציות מהעיגולים או מהעמוד הנבחרת שלנו
function circleOrOusAttarctions() {
    const boolean = sessionStorage.getItem("bool");
    if (boolean == 0)
        server("../../data/attarctions.json", drawAttarction1);
    else
    if(boolean==1)
        server("../../data/attarctions.json", drawAttarction2);
        else
        if(boolean==2)
            server("../../data/attarctions.json", drawAttarction3);
            else
            if(boolean==3)
                server("../../data/attarctions.json", drawAttarction4);
                else
                server("../../data/attarctions.json", drawAttarction5);

}
//הפעלת הפונקציה שבודקת מאיפה נכנסו לעמוד
circleOrOusAttarctions();

//פונקציה שמציירת את מערך האטרקציות
let count = 0

const drowAllImages = (attractionsArr1) => {
    for (i = 0; i < attractionsArr1.length; i += 4) {
        const allImages = document.getElementById('all-images');
        const itemDiv = document.createElement('div');
        itemDiv.classList.add(['carousel-item', 'active']);
        allImages.appendChild(itemDiv);
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container');
        itemDiv.appendChild(containerDiv);
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        containerDiv.appendChild(rowDiv);
        for (j = count; j < count + 4 && j < attractionsArr1.length; j++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-lg-4');
            rowDiv.appendChild(colDiv);

            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            colDiv.appendChild(cardDiv);

            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.src = `../../assets/pictures/${attractionsArr1[j].imge}`;
            img.alt = "Waterfall"
            cardDiv.appendChild(img);

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body');
            cardDiv.appendChild(cardBodyDiv);

            const cardTitle = document.createElement('a');
            cardTitle.href="../details/details.html";
            cardTitle.classList.add('card-title');
            cardTitle.innerHTML = attractionsArr1[j].name
            cardBodyDiv.appendChild(cardTitle);

            cardTitle.onclick = function keepName() {
                sessionStorage.setItem("keepName", cardTitle.innerHTML);
            }
        }
        count = j;
    }
}
