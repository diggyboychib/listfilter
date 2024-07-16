document.getElementById("input").addEventListener('input',function(){
  let filtervalue=this.value.toUpperCase();  
 document.querySelectorAll(".item").forEach((e,i)=>{
    if(e.textContent.toUpperCase().indexOf(filtervalue)>-1){
        e.style.display=""
    }
    else{
        e.style.display="none"
    }
  })
  
})