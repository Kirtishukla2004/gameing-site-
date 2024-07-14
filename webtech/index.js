// // function add(a, b) {
// //   return a + b;
// // }
// // console.log(add(2, 4));
// // //anonyms function
// // let a = function (a, b) {
// //   return a + b;
// // };
// // console.log(a(3, 5));
// // //first class function
// // b = function a(a, b) {`
// //   return a + b;
// // };
// // console.log(b(5, 5));
// //immediate invocation function



// (
    
//         function(a,b){
//             console.log(a+b);
//         }
    
// )(10,10);
// (
    
//     (a,b)=>{
//         console.log(a+b);
//     }

// )(10,10);


function cal(a,b, operation ){
    return operation(a,b)
}
function mul(a,b){
    return a*b;
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
console.log(cal(4,5,add));
console.log(cal(4,5,mul));
console.log(cal(4,5,sub));