'use strict'

// const number=12;
// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'));
// localStorage.setItem("number",number.toString())
// console.log(localStorage.getItem('number'))
// localStorage.clear()

const persone = {
    name:'Oybek',
    age:19
}
//LocalStoraga ga biz obj ni yubormoqchi bo'lsak uni avval JSON ga o'girishimiz kerak bo'ladi 

localStorage.setItem('persone',JSON.stringify(persone))
const localDate=localStorage.getItem('persone')
// const json=JSON.stringify(persone)
// const obj=JSON.parse(json)
// console.log('obj to json',json)
// console.log('json to obj',obj)

//Biz local storagedahi bizor malumotni o'zgartirmoqchi bo'lsak avval uni biz json ko'rinishdan 
//obj ga o'tamiz va uni qiymatii o'zgartirib qaytib localStorage ga yuborishimiz mumkin
const personInfo=JSON.parse(localDate)
personInfo.name="Zehniddin"
console.log(personInfo)
localStorage.setItem('updatePersson',JSON.stringify(personInfo))