// 01
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let re=/(\d|(\w+)|([^0+]))+/ig
// let ree=/((\w+:*))+/ig
// let reee=/(\d|\D)+/ig
// console.log(ip.match(re))
// console.log(ip.match(ree))
// console.log(ip.match(reee))

// 02

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// let reg=/os[\d]*o/ig
// let regg=/\b(os)\d*(o)/ig
// console.log(specialNames.match(reg))
// console.log(specialNames.match(regg))

// 03
// let phone = "+(995)-123 (4567)"; 
// let regg=/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig

// console.log(phone.match(regg))

// 04
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// 1=> https?: mean s in https may be exisist or no => https: or http:
// 2=> \/\/ mean //
// 3=> (?:[-\w]+\.)? mean www. may be exisist or no
// 4=> ([-\w]+) mean the name like google
// 5=> \.\w+ mean TLD like .com .net
// 6=> (?:\.\w+)? mean : . any word may be exist or no
// 7=> \/?.* mean / and any char may be exist or no 

// 05
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let re = /(\d+\D+\d+\D+\d+)/ig
// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

// 06
// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// let re = /(https?)?(:\/\/)?(\w+.\w+)?(\w+.\w+)((\D\w+)+)?/ig
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));





// 01

//   class Car{
//     constructor(name, model, price){
//         this.n = name;
//         this.m = model;
//         this.p = price;
//     }
//     run(){
//         return "Car Is Running Now"
//     }
//     stop(){
//         return "Car Is Stoped"
//     }
// }
// let car1=new Car("MG",2022,420000)
// console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`)
// console.log(car1.stop())

// 02

// class Phone {
//     constructor(name, serial, price) {
//       this.name = name;
//       this.serial = serial;
//       this.price = price;
//     }
//   }
// class Tablet extends Phone{
//     constructor(name, serial, price,size){
//         super(name, serial, price)
//         this.size=size||"unknown"
//     }
//     fullDetails(){
//         return `${this.name} Serial Is ${this.serial} And Size is ${this.size}`
//     }
// }


  
//   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
//   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
//   let TabletThree = new Tablet("LG", 250450650, 650);
  
//   console.log(`${TabletOne.fullDetails()}`);  
//   console.log(`${TabletTwo.fullDetails()}`);
//   console.log(`${TabletThree.fullDetails()}`);

// 03
// Edit The Class
// class User {
//     #c
//     constructor(username, card) {
//       this.u = username;
//       this.#c = card;
//     }
//     credit(){
//     return this.#c.toString().match(/\d{4}/g).join("-")
//     }
//     get showData(){
//         return ` Hello ${this.u} Your Credit Card Number Is ${this.credit()}`
//     }
//   }
  
//   // Do Not Edit Anything Below
  
//   let userOne = new User("Osama", "1234-5678-1234-5678");
//   let userTwo = new User("Ahmed", "1234567812345678");
//   let userThree = new User("Ghareeb", 1234567812345678);
  
//   console.log(userOne.showData);
//   // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
//   console.log(userTwo.showData);
//   // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
//   console.log(userThree.showData);
//   // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
//   console.log(userOne.c); // Prevent Accessing To Card Property Here
//   // Undefined

// 04


// Object.prototype.addLove=function(myStr){
//     return `I LOVE ${this} WEB SCHOOL`
// }
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School


// 05
// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
//   };
  
//   Object.defineProperty(myObj,"score",{
//     writable:false,
//     enumerable:true,
//     configurable:true
//   })
//   Object.defineProperty(myObj,"id",{
//     writable:true,
//     enumerable:false,
//     configurable:true
//   })
// delete myObj.country  
//   myObj.score = 500;

//   for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
//   }

//   console.log(myObj);

