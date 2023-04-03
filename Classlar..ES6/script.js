class Car{
    constructor(options){
        this.name=options.name
        this.isAirBag=options.isAirBag
        this.extraBalon=options.extraBalon
        }
        speed(){
            console.log("200 km/h")
        }
}

//classlarni eng avzal tomoni shundan iboratki ularni bir marta elon qilib qo'yib
//xoxlagancha ishlata olishimiiz mumkin

const BMW= new Car({
    name:'BMW',
    isAirBag:true,
    extraBalon:4
})

//Agar avtobus uchun ham shu xossalar va qo'shimcha yana birorta xossani qo'shish uchun 
//yana shu kodni takrorlamasdan Car classidan voris olamiz va kodni osonlashtiramiz

class Bus extends Car{
    constructor(options){
        super(options)//Bu voris olgan classimizning metodlarini o'zlashtirish uchun zarur bo'ladi 
        this.color=options.color
    }
    speed(){
        //agar biz voris olgan classdagi speedga murojaat qilmoqchi bo'lsak uni super merodini charish orqali amalga oshiramiz
        super.speed()
        console.log('100km/h')
    }
    get extraBalonInfo(){
        return this.extraBalon*4
    }
}
const MAN=new Bus({
    name:'MAN',
    isAirBag:false,
    extraBalon:3,
    color:'black'
})

///getters


//setters