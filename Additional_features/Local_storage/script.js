document.querySelector('button').addEventListener('click',function(event){
   let value=document.querySelector('input').value

   let obj={
       text:value
   }
   localStorage.setItem('headerText',JSON.stringify(obj))
//localStorage.setItem('headerText',value)//Сохроняет то что мы ввели в локальную "библиотеку".Первый параметр это название сохранения
//А второй это то,что мы хоти сохранить
})

document.addEventListener('DOMContentLoaded',function(){
    let obj={}  

    try {
        obj= JSON.parse(localStorage.getItem('headerText')) //достаёт данные, которые уже сохр. в локальной библиотеке с данным названием
    } catch (error) {}

    /* в условии мо проверяем есть ли данные в объекте */
    if(obj && obj.text && obj.text.trim()){
        document.querySelector('h1').textContent = obj.text

    }
})