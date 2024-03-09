////////////////////////////////////////////////
// hometask //
// barcha agelarni yegindisi ya'ni sum ni topish //

// let obj = {
//     name : 'Shaxbozaka',
//     age : 28,
//     child:{
//         name : 'Abbos',
//         age : 25,
//         child: {
//             name: 'Jahongir',
//             age: 25,

//         }
//     }
// }
// console.log(obj.age + obj.child.age + obj.child.child.age);


///////////////////////////////////////////////////////////
// practice //

// let obj1 = { title: 'student' };   non-primative heapda saqlanadi va u unique holatda boladi
// let obj2 = { title: 'student' };   shunga va key(reference) orqali compare qiladi shunga false chiqadi
                                    

// //////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// let str1 = 'Wba';            primative faqatgina valuni tekshiradi shunga
// let str2 = 'Wba';            bu holatda true qiymat korsatadi


// console.log(str1 == str2);
// console.log(str1 === str2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr1 = [1, 2, 3];               bu holatda ham value emas balki key(reference) orqali
// let arr2 = [1, 2, 3];               compare qiladi shunga false degan natijani beradi

// console.log(arr1 == arr2);
// console.log(arr1 === arr2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// reference by value and copy by reference //

// let a = {};            bu holatda reference orqali compare boladi shunga bir xil boladi
// let b = a;             shuning uchun true boladi (copy by reference)

// console.log(a == b);
// console.log(a === b);

///////////////////////////////////////////////////////////////////////

// qiymat qoshish va a hamda bga tasir qilishi //
//  let a =  {name: 'Abbos'};
//  let b = a;                      copy by reference
//  a.status = 'Student';

//  console.log(a);
//  console.log(b);


// qiymatni update qilish //

// let a = 'wba';
// let b = a;

// a = 'Brain'
// b = 'Academy'

// console.log(a);
// console.log(b);


//////////////////////////////////////////////////////////////////////
// Clone //
// 1- method of cloning
// (OBject.assign) //
//  let a = {
//     name:'Abbos'
//  }
//  let clone = Object.assign ({},a);

//  console.log(a);
//  console.log(clone);
// 2= method of cloning
//  let a = {
//     name: 'Jahongir'
    
// }
// let clone = structuredClone(a);
// console.log(a);
// console.log(clone);