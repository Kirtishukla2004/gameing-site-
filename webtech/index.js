console.log(Math)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.abs(304))// gibves the absolute value even positive or negative 
console.log(Math.round(30))//round of the nearest number )
console.log(Math.floor(41.99))//round of the nearest lowest number 
console.log(Math.ceil(41.99))//round of the nearest highest  value 
console.log(Math.sqrt(36))//gives the square root value of a number 
console.log(Math.cbrt(8))//gives cube root a number 
console.log(Math.pow(3,6))//find the power answer of a number 
console.log(Math.min(2,3,45,6,77))
console.log(Math.max(2,3,45,6,77))
console.log(Math.random())//gives any random number from 0 to 1
console.log(Math.round(Math.random()))
console.log(Math.trunc(Math.random()*1000))

var d=new Date();
console.log(d)
console.log(d.getMinutes())
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getHours())
console.log(d.getFullYear())
console.log(d.getUTCFullYear())
var a=new Date("fri Mar 20 2020 14:45:20");
a.setDate(21)
a.setFullYear(2004)
console.log(a)
console.log(Math.trunc(((d/60000)/60))/12)