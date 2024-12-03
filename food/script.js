const timer=document.querySelector('.timer__count')

function counter(i=0) {
let speed=20

    if (i>49 && i<60) {
        speed=36
    } else if (i>60 && i<70){
      speed=  52
    } else if (i>70 && i<80){
        speed= 68 
    } else if (i>80 && i<90){
        speed=  84
    } else if (i>90 && i<100){
        speed=  100
      }
    if (i<=100) {
        timer.innerHTML=i;
        i++;
        setTimeout(() => {
           counter(i) 
        }, speed);
    }
}
counter()
const product = {
    plainBur: {
        amount: 0,
        price: 10000,        
        name: 'Гамбургер простой',
        kcall:400,
        get totalprice() {
            return this.price * this.amount
        },
        get totalkcall(){
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        amount: 0,
        price: 31900,
        name: 'FRESH COMBO',
        kcall:600,
        get totalprice() {
            return this.price * this.amount
        },
        get totalkcall(){
            return this.kcall * this.amount
        }
},
freshBurger: {
        amount: 0,
        price: 20500,
        name: 'Гамбургер FRESH',
        kcall:450,
        get totalprice() {
            return this.price * this.amount
        },
        get totalkcall(){
            return this.kcall * this.amount
        }
       
    },
    

}
const extraProduct={
    doubleMayonnaise:{
        name:' Двойной майонез',
        price:5000,
        kcall:50
    },
    lettuce:{
        name: 'Салатный лист',
        price:3000,
        kcall:30
    },
    cheese:{
        price:4000,
        kcall:40,
        name:'Сыр'
    }
}
const btn =document.querySelectorAll('.main__btn')
btn.forEach((val) => {
   val.addEventListener('click', function () {
    plOrMin (this)
   })
});

function plOrMin(elem) {
    const parent = elem.closest('.main__product')
    let parentId=parent.getAttribute('id')
    let symbol = elem.getAttribute('data-symbol')  
               if (symbol == '+' && product[parentId].amount<10 ) {
        product[parentId].amount++
    } else if (symbol == '-' && product[parentId].amount>0
    ){
        product[parentId].amount-- 
    }
    printInfo(parent,product[parentId])
}
function printInfo(section,burger) {
   const count=section.querySelector('.main__count ') 
   const price=section.querySelector('.main__price span ')
   const kcall=section.querySelector('.main__kcall span ') 
   count.innerHTML = burger.amount;
   price.innerHTML = burger.totalprice;
   kcall.innerHTML = burger.totalkcall; 
}

const label = document.querySelectorAll('.main__input')
label.forEach((val) => {
    val.addEventListener('click',function () {
        extraProd(this)
    })
});
function extraProd(elem) {
    const parent = elem.closest('.main__product')
    let parentId= parent.getAttribute('id')
    let extra=elem.getAttribute('data-extra')
    if (elem.checked ) {
        product[parentId].price += extraProduct[extra].price
        product[parentId].kcall += extraProduct[extra].kcall
    } else {
        product[parentId].price -= extraProduct[extra].price
        product[parentId].kcall -= extraProduct[extra].kcall
    }
    product[parentId][extra]=elem.checked
    printInfo(parent,product[parentId])
}
 const addcart=document.querySelector('.addCart__btn')
 const receipt=document.querySelector('.receipt')
 const receiptWindow=document.querySelector('.receipt__window')
 const receiptlist=document.querySelector('.receipt__list')
 const rebtn=document.querySelector('.receipt__btn')

addcart.addEventListener('click',function () {
    let totalName = ''
    let totalSummproducts=0
    let totalKcallproducts=0

    for (let key in product) {
        const burger = product[key];
        if (burger.amount > 0) {
            totalSummproducts += totalprice
            totalKcallproducts += totalkcall
            for(let burgerkey in burger){
                if (burger[burgerkey]=== true) {
                    burger.name +=`/n ${extraProduct[burgerkey].name}`
                }
            }
            totalName += `/n${burger.name}`
        }
    }
    receiptlist.innerHTML=`Вы купили:/n${totalName}/n  Калорийность:${totalKcallproducts}/n
    Стоимость покупки${totalSummproducts}`
    receipt.style.display = 'flex'
    receipt.style.opacity=1
    rewindow.style.top=0
 })


