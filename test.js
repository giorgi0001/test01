// // // //let person = {
// // // //  FirstName: "dodo",
// // // //  LastName: "barbaqadze",
// // // //  Age:77,
// // // //  isAdult: true,
// // // //  address: {
// // // //  city: "Tbilisi",
// // // //  street: "tsereteli",
// // // //  Number: "12"
// // // // },
// // // //  prof:["Teseter","developer", "BA"]
// // // // }
// // // // console.log(person.address)
// // // // console.log(person.prof[0])


// // // // let a=7
// // // // let b= "8"
// // // // console.log(a===b)




// // // // funqcia romelic daitvlis sami ricxvis jams

// // // function calculatesum(number4, number5, number6) {  //unda dagvibechdos shemtxvevashi esea <---
// // //     number6 = 0
// // //     console.log(number4 + number5 + number6)
// // // }
// // // calculatesum(3, 5,)




// // // //function Calculatesum (number1,number2,number3){
// // // //  console.log("meraba")
// // // //   return number1+number2+number3     //unda dagvibrunos shemtxvevashi esea <---
// // // //}


// // // //function positiveNumberCheck(number){
// // // //   if (number>0){
// // // //      console.log('positive')
// // // // }
// // // // else {
// // // //     console.log('is not positive')
// // // // }
// // // //}
// // // //positiveNumberCheck(-1)
// // // //console.log(Calculatesum(3,5,6))
// // // //

// // // function calculatesum (number1,number2=4,number3=0){
// // //     const sum = number1+number2+number3
// // // positiveNumberCheck(sum);
// // // return sum
// // // }

// // // function positiveNumberCheck(number){
// // //     if (number>0 ){
// // //         console.log('positive')
// // //     }
// // //     else {
// // //         console.log('is not positive')
// // //     }
// // // }
// // // console.log (calculatesum(3)) 


// // // const add = (b=4,a=3) => {
// // //     return b+a;
// // // }
// // // console.log(add())



// // // const Add=(a=5,c=4) => console.log(c+a)
// // // Add()


// // // const square=x=> x*x

// // // console.log(square(3))





// // // const numbers = [1, 2, 3, 4, 5];

// // // numbers.forEach(function(num) {
// // //     console.log(num * 2); // თითოეული ელემენტის გამრავლება 2-ით
// // // })
// // // numbers.forEach(num => console.log(num * 2)); //იგივე

// // // numbers.forEach(function(num, index) {
// // //     console.log('element:', num, ':', 'index ',':', index,);
// // // });



// // // const person = {
// // //     firstname : "gior",
// // //     lastname : "losti",
// // //     age : 332,
// // //     myMethod (){
// // //         console.log("testmyMethod")
// // //     }
// // // }

// // // person.myMethod()



// // // const Add1=(a=5,c=4) => console.log(c+a)
// // // Add1()


// // // const Person= {
// // //     firstname : "gior",
// // //     lastname : "losti",
// // //     age : 332,
// // //     fullname : function(){
// // //         this.firstname="giorginio"
// // //         return this.firstname+" "+this.lastname
// // //     }
// // // }
// // // console.log(Person.fullname())




// // let student ={
// //     firstname : "gior",
// //     lastname : "losti",
// //     age : 18,
// //     isAdult: function(){
// //         if(this.age>=18)console.log("srulwlovani")//else თან და if თან return იც შეიძლება 
// //             else {console.log("arasrulwlovani")//ერთს undefined აგდებს რაც ბოლო კონსოლის თემაა 
// //             // მაგრამ არ გაქრება ის თუ return ar gamoviyenet, 
// //             // yoveltvis erti pasuxi dabrundeba (srulwlovani) return is gareshe
        
// //         }
        
// //     }
  
// // }
// // console.log(student.isAdult())

// let student= {
//     firstname : "goga",
//     lastname : "mchedlo",
//     scoreRate : [33,66,77],
//     totalScore: function (){
//         sum=0
//        for( i=0; i<this.scoreRate.length; i++){
//         sum+=this.scoreRate[i]

//        }
//        return sum
//       }
//     }
// console.log(student.totalScore())



// function bonus (salary){
//     salary=1500;
//     let bonus;
//     if(salary<1000 ){
//     bonus=salary*0.15
//     }else if(salary>=1000 && salary<5000){
//     bonus= salary*0.1
//     }else{
//     bonus=salary*0.03
//     }
//     return bonus
// }
// console.log(bonus())    //ან სხვანაირადაც შეიძლებოდა---->



function bonus (salary){
    if(salary<1000) return salary*0.1
    else if (salary>=1000 && salary < 5000) return salary*0.15
    else return 0
    }
    console.log(bonus(1000))
    console.log(bonus(2000))
    console.log(bonus(10000))// aqac bonusi gamovitanet


    let student = {
        firstname: "giorgi",
        lastname : "mched",
        age : 31,
        score : [4,7,5,3,2],
        fullname: function (){
            return this.firstname+" "+this.lastname
        }
    }
    console.log(student.fullname())
    


    let Student = {
        firstname : "xorxe",
        age : 32 
        }
        console.log("saxeli:",student.firstname)
        console.log("asaki:",age)