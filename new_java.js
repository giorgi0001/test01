// const charATindex = mystring.charAt(7)
// const unicodeAtindex = myString.charCodeAt(7)

//
//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) 
// და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function MyNumbers(m ,n) {
if(m>n){
    return m;
}else if (n>m){
    return n;
}
else {
    return 0;
}
}
console.log(MyNumbers(5,2))
console.log(MyNumbers(3,5))
console.log(MyNumbers(5,5))


//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function myscore(m , n ){
    return m+n
}
console.log(myscore(5,6))





//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს
//  ( ფუნქციას არ აქვს პარამეტრი)
function myName (){
    console.log("giorgi mchedlidze")
}
myName()




//4. დაწერეთ ფუნქცია ორი პარამეტრით 
// : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ 
// ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავს
function myFullName(firstname, lastname) {
    return firstname + " " + lastname;
}

console.log(myFullName("gio", "mchedlo"));
 
//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და
// ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი 
// ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
// დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით 
// რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას.
//  Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)

//function number(n){
  //  let x = 1
    //for(i=1; i<=n;i++){
      //  x*=i
//}
//return x;
//}
//console.log(number(3))


//დაბეჭდეთ სტუდენტის სრული სახელი (სახელი+გვარი- გამოიყენეთ student ობიექტის მეთოდი)

//let person = {
  //  firstname: "giorgi",
    //lastname : "mched",
    //age : 32,
    //fullname : function(){
     //     return this.firstname+" "+this.lastname
    //}
//}
//console.log(person.myMethod())


//Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties
//  firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) 
// და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, 
// ცალკე ფუნქციად არ უნდა დაწეროთ ) 
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

//Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს
//  ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს

function totalScore (scores){
    let sum = 0
    for (i=0;i<scores.length;i++){
         sum+=scores[i]
    }
    return sum
}
let scores = [4,7,5,3,2]
let mytotalsocre = totalScore(scores)
console.log(mytotalsocre)




// დაბეჭდეთ სტუდენტის სახელი და ასაკი
let Student = {
firstname : "xorxe",
age : 32 
}
console.log("saxeli:",Student.firstname)
console.log("asaki:",Student.age)