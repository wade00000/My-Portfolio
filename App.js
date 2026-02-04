const section = 
const observer = new IntersectionObserver((entries=>{
 // is in view
    if(entries[0].isIntersecting){

 }
}),{})