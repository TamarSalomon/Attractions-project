const server=(url,calllbackFun=()=>{})=>{
$.ajax({
    url,
    success :(result)=>{
        calllbackFun(result);
    },
    error:(err)=>{
     alert("לא נמצאו תוצאות");
    }
});
}
