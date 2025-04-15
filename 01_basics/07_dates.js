let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);//miliseconds value
console.log(myCreatedDate.getTime());//for comparesion 
console.log(Date.now());//to convert in seconds interivew**
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));//to convert in seconds interivew**

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay() );
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
    
})