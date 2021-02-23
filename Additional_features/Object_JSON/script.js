let person={
    name:'Max',
    age:20,
    car:{
        model:'ford'
    },
    job:'Frontend',
    friends:['Valera','Anna']
}

let str=JSON.stringify(person)//приводит объект к строке
console.log(str)
console.log(JSON.parse(str))//делает из строки объект
