var text1 = document.getElementById("text-1");
var text2 = document.getElementById("text-2");

//כיתובים מתחלפים

function ReplaceSubtitles() {
  if (text1.style.display === "none") {
    text1.style.display = "flex";
    text2.style.display = "none";
  } 
  else {
    text1.style.display = "none";
    text2.style.display = "flex";
  }
}


ReplaceSubtitles(); // הפעלת הפונקציה פעם ראשונה

setInterval(ReplaceSubtitles, 4000); // הפעלת הפונקציה כל 5 שניות

const club=document.getElementById("club");

// הקפצת הודעת הצטרפות למועדון
setTimeout(ClubAdPopUp,5000); 

function ClubAdPopUp(){
club.style.display="block";
const container=document.createElement('div');
const close=document.createElement('i');
close.classList.add('fas' ,'fa-times-circle', 'close-icon');

container.className="wrapper";
club.appendChild(container);
close.onclick = () => {
  club.removeChild(container);
  club.style.display="none";
}
const circle=document.createElement('div');
circle.className="circle";
container.appendChild(circle);
circle.appendChild(close);

const h1=document.createElement('div');
h1.className="club_h1";
h1.innerHTML="מועדון הclubFun";
circle.appendChild(h1);

const h2=document.createElement('div');
h2.className="club_h2";
h2.innerHTML="אף פעם לא היה כל כך שווה"
circle.appendChild(h2);

const p=document.createElement('p');
p.className="club_p";
p.innerHTML="הנחות משתלמות על כל האטרקציות"
circle.appendChild(p);

const label=document.createElement('label');
label.className="ok_label";
label.innerHTML="לבדיקה האם אתה חבר מועדון "
circle.appendChild(label);

const inputpasswordDiv=document.createElement('div');
inputpasswordDiv.className="div_input";
circle.appendChild(inputpasswordDiv);


const input_password=document.createElement('input');
input_password.className="input_password"
input_password.type="text";
input_password.placeholder="הכנס סיסמא";
inputpasswordDiv.appendChild(input_password);

const enter=document.createElement('div');
enter.className="enter";
enter.style.height="5px"
inputpasswordDiv.appendChild(enter);


const button=document.createElement('button');
button.className="ok-btn";
button.innerHTML="אישור";
circle.appendChild(button);

const ThisUser = (password) => {
  //המרה לאובייקט javaSqript
  let users = JSON.parse(localStorage.getItem('users'));
  if (users === null) {
      users = [];
      localStorage.setItem('users', JSON.stringify(users));
      return null;
  }
  else {
      for (let i = 0; i < users.length; i++) {
          if (users[i].password === password)
              return i;
      }
      return null;
  }
}
let c=0;
button.onclick = (event) => {
  if(input_password.value=="")
  {
    const enter=document.querySelector('.enter');
    enter.innerHTML="אנא הכנס סיסמא";
    setTimeout(function() {
      enter.innerHTML=" ";
    }, 2000);
     
  }
else{
event.preventDefault();
const i=ThisUser(input_password.value);
if (i === null){

sessionStorage.setItem("password",input_password.value);
window.location.href = '../login/login.html';
}
else{
alert("הינך כבר חבר מועדון ");
sessionStorage.setItem("club",true);
}

}
}};

const circles=document.querySelectorAll('.circles');

  circles.forEach(circle => {
    circle.addEventListener('click', handleClick1);
  });

function handleClick1(event) {
  const clickedcircleId = event.target.id;
  sessionStorage.setItem("bool",0);
  sessionStorage.setItem("circleId",clickedcircleId);
}
const ourAttarctions=document.getElementById('ourAttarctions');
ourAttarctions.addEventListener('click', handleClick2);

function handleClick2(){
  sessionStorage.setItem("bool",1);
}

const a=document.querySelectorAll('.ab');

a.forEach(a => {
  a.addEventListener('click', handleClick4);
});
function handleClick4(event){
  const eId = event.target.id;
  sessionStorage.setItem("bool",3);
  sessionStorage.setItem("eId",eId);
}

const Asearch=document.querySelector('.a-search');
Asearch.addEventListener('click',handleClick3);

function handleClick3(){
  sessionStorage.setItem("bool",2);

}
