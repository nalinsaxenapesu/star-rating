const list_stars=document.querySelectorAll('a');
document.querySelector(".stars").addEventListener("click",function(e){
    console.log("parent clicked");
    console.log(e.target);
    document.querySelector('h5').innerHTML=e.target.id;});

// for(let i=0;i<list_stars.length;i++)
// {
//   list_stars[i].addEventListener("click", function(event){
//
//     document.querySelector('h5').innerHTML=i+1;
//     console.log(event)
//       console.log("start at ",i,"index was clicked")});
// }
