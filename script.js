//1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
 //მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
 // მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
 // გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
 // წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
 // დაბეჭდეთ მასივისი ახალი ელემენტები.

 let numArray = [5,25,89,120,36];
numArray.push('javascript', 'python');
numArray.unshift('html','css');
console.log(numArray.length);
numArray.shift();
numArray.pop();
console.log( numArray);


//2.შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
//გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

const fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
console.log("ელემენტების რაოდენობა", fruits.length);
fruits.push['ვაშლი','ანანასი'];
fruits.unshift['საზამთრო'];
console.log(fruits.length);
fruits.splice('მანგო');
fruits.shift();
fruits.pop();
+console.log("რამდენი ელემენტი დარჩა:", fruits.length);


//3.მოცემულია მასივი let array =[1, 2, 3, 4, 5]. Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arrayNew =[1, 2, 3, 4, 5];
arrayNew.splice(3, 0, 'a', 'b', 'c');
console.log(arrayNew);

//4.დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა ორი რიცხვი(ნებისმიერი ჩაწერეთ) და რომელიც შეასრულებს შემდეგ ლოგიკას:თუ პირველი რიცხვი მეტია მეორეზე დაიბეჭდოს - num1 is the largest; თუ მეორე რიცხვი მეტია პირველზე 
// დაიბეჭდოს num2 is the largest; ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - error; 

function compareNumbers(num1, num2) {
  if (num1 > num2) {
  console.log(num1 + " is the largest");
} else if (num2 > num1) {
console.log(num2 + " is the largest");
} else {
console.log("error");
}
}
compareNumbers(27,9);
compareNumbers(7,22);
compareNumbers(5,5);


//5.მოცემულია მასივი:
//let array = [12, 25, 3, 6, 8, 14, 7, 23];map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

const array = [12, 25, 3, 6, 8, 14, 7, 23];

const newArray = array.map(function(number) {
return number / 3;
});
console.log(newArray);

//6.მოცემულია მასივი:
//Let array=[2,15,10,24] წაშალეთ ამ მასივიდან რიცხვი 10;
const arrays = [2, 15, 10, 24];
const index = arrays.indexOf(10);
arrays.splice(index, 1);
console.log(arrays);


