// let p= document.querySelectorAll('p')

// for(i=0;i<p.length;i++){
//     p[i].addEventListener('click', function(event){
//         event.target.style.color='blue'
//     })
// }
document.getElementById('wrapper').addEventListener('click', function(event){
    tagName = event.target.tagName.toLowerCase()
    if(tagName==='p'){
        event.target.style.color ='blue'
    }
    if(event.target.classList.contains('color')){
        event.target.style.color ='red'
    }
})