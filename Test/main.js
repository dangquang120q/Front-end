// var courses = [
//     'Javascript',
//     'Ruby',
//     'PHP'
// ];
// // Array.prototype.map2 = function(callback){
// //     var output = [];
// //     var length = this.length;
// //     for(var i = 0;i < length;i++){
// //         var result = callback(this[i]);
// //         output.push(result);
// //     }
// //     return output;
// // }
// Array.prototype.forEach2 = function(callback){
//     for(var i in this){
//         var result = callback(i,this[i]);
        
//     }
// }

// // var htmls = courses.forEach(course)
// // function course(string,index,arr){
// //     console.log(index,string)
// // }

// // console.log(htmls)
// var text = "Hello World 12"
// document.write(`<h1>${text}</h1>`)
// console.log(document)
// var inputtext = document.getElementById('inputtext');
// inputtext.oninput = function(e){
//     console.log(e.target.value)
// }
// inputtext.onkeydown = function(e){
//     if(e.key == 'enter')
//         console.log(e.target.value)
// }
// var users = [
//     {
//         id : 1,
//         name : "Quang"
//     },
//     {
//         id : 2,
//         name : "ABC"
//     }
// ];
// var comments = [
//     {
//         id : 1,
//         user_id : 1,
//         content :  "abcxyz"
//     },
//     {
//         id : 2,
//         user_id : 2,
//         content : "rep comment"
//     }
// ];
// var a = 4;
// var promise = new Promise(function(resolve,reject){
//     if(a == 4) resolve(comments);
//     else reject(a - 1);
// })
// promise
//     .then(function(a){
//         console.log(users[a[0].user_id].name)
//         console.log(comments[0].content)
//     })
//     .catch(function(data){
//         console.log(data)
//     })
