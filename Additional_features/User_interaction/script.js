document.querySelector('#alert').addEventListener('click', function(){
    alert('Вы успешно кликнули по кнопке!')
})

document.querySelector('#confirm').addEventListener('click', function(){
    let decision=confirm('Вы уверены в том, что хотите нажать на кнопку?')
    if(decision){
        alert('Вы успешно кликнули по кнопке!')  
    }
})

document.querySelector('#prompt').addEventListener('click', function(){
  let age=  prompt('Введите свой возвраст')

  if(age>=18){
      alert('Вы можете войти!')
  }else{
      alert('Вы ещё слишком молоды!')
  }
})

console.warn('Выводит предупреждение в консоли')
console.info('Выводит иформацию в консоль')
console.error('Способ показа ошибок')
