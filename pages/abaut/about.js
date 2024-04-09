const like=document.getElementById("like");
const div_num=document.getElementById("count_like");
const num_like=document.createElement('label');
num_like.id="jump";
let num=localStorage.getItem("num_like");   
num_like.innerHTML= localStorage.getItem("num_like") ;
div_num.appendChild(num_like);

like.onclick = (event) =>  {
    num++;
    localStorage.setItem("num_like",num);
    num_like.innerHTML= localStorage.getItem("num_like") ;
    div_num.appendChild(num_like);
        
        
           
}

