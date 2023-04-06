// class Car{
//1 //Yani static type bu faqat o'zning classi orqaligina yetib borib bo'ladi boshga class nomidna yoki o'zini chaqirib qo'yib topib bo'lmaydi

//     static type = "Car"
    
//     constructor(options){
//         this.name=options.name
//         this.isAirBag=options.isAirBag
//         this.extraBalon=options.extraBalon
//         }
//         speed(){
//             console.log("200 km/h")
//         }
// }

// 2//classlarni eng avzal tomoni shundan iboratki ularni bir marta elon qilib qo'yib
//3 //xoxlagancha ishlata olishimiiz mumkin

// const BMW= new Car({
//     name:'BMW',
//     isAirBag:true,
//     extraBalon:4
// })

//4 //Agar avtobus uchun ham shu xossalar va qo'shimcha yana birorta xossani qo'shish uchun 
//5 //yana shu kodni takrorlamasdan Car classidan voris olamiz va kodni osonlashtiramiz

// class Bus extends Car{

//     static type="Bus"

//     constructor(options){
//         super(options)//Bu voris olgan classimizning metodlarini o'zlashtirish uchun zarur bo'ladi 
//         this.color=options.color
//     }
//     speed(){
// 6        //agar biz voris olgan classdagi speedga murojaat qilmoqchi bo'lsak uni super merodini charish orqali amalga oshiramiz
//         super.speed()
//         console.log('100km/h')
//     }
// 7    //getter bu biror qiymat qabul qilmaydi lekin objectga biror bir narsani qo'shib qo'yadi  
//     get extraBalonInfo(){
//         return this.extraBalon*4
//     }
//  8 //setter esa berilgan qiymatni butunlay o'zgartirib  beradi 
//     set extraBalonInfo(newValue){
//         this.extraBalon=newValue
//     }
// }
// const MAN=new Bus({
//     name:'MAN',
//     isAirBag:false,
//     extraBalon:3,
//     color:'black'
// })

///======================AMALYOT===================

class Component {
    constructor(selector)
    {
        this.$el=document.querySelector(selector)
    }

    showElement(){
        this.$el.style.display='block'
    }

    hideElement(){
        this.$el.style.display='none'
    }
}

class square extends Component{
    constructor(option)
    {
        super(option.selector)
        this.$el.style.width=this.$el.style.height=option.size+'px'
        this.$el.style.borderRadius=option.size/2+'%'
        this.$el.style.background=option.color
    }
}


const square1= new square({
    selector:"#square1",
    size:100,
    color:'red'
})

const square2= new square({
    selector:"#square2",
    size:100,
    color:'blue'
})
