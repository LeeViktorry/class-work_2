// #1/1

// function Names(){
//     var count = +prompt('Count')
//     var arr = []
//     arr.length = count
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = prompt('Name')
//     }
//     console.log(arr);
    
//     var v = prompt('Name')
//     let b = []
//     let j = 0
//     for(var l = 0; l < arr.length; l++){
//         if(arr[l] === v){
//             b[j] = arr[l]
//             j++
//         }
//     }

//     let changedArray = b.join('').split('').reverse().join('')
//     console.log(changedArray);
// }
// Names()

 
// #1/2

// const Name = count =>{
//     let arr = []
//     for(var i = 0; i < count; i++){arr.push(prompt('Name'))}console.log(arr);
//     let v = prompt('name')
//     let b = []
//     for(var l = 0; l < arr.length; l++)
//     {v===arr[l] ? console.log(arr[l]) : alert('Hello world')}
// }
// Name(+prompt('Count'))




// #2/1

// var counts = +prompt('narr[j].length > ? = narr[j] = 0')

// function calc(count){
//     var arr = [1, 2, 3, 4, 5, 'hio', 'boi', 'jio', 'sdfghjkl', 'fikavvika', 'dianch']
//     var narr = []
//     for(var i = 0; i < arr.length; i++){
//         arr.push(prompt(i+1))
//         if(typeof arr[i] === 'string'){
//             narr.push(arr[i])
//             for(var j =0; j < narr.length; j++){
//                 if (narr[j].length > count){
//                     narr[j] = 0
//                 }
//             }
//         }
//     }
//     console.log(arr);
//     console.log(narr);
// }
// calc(counts)

// #2/2

// var counts = +prompt('narr[j].length > ? = narr[j] = 0')

// const calc = count => {
//     var arr = [1, 2, 3, 4, 5, 'hio', 'boi', 'jio', 'sdfghjkl', 'fikavvika', 'dianch']
//     var narr = []
//     for(var i = 0; i < arr.length; i++){
//         arr.push(prompt(i+1))
//         if(typeof arr[i] === 'string'){
//             narr.push(arr[i])
//             for(var j =0; j < narr.length; j++){
//                 if (narr[j].length > count){
//                     narr[j] = 0
//                 }
//             }
//         }
//     }
//     console.log(arr);
//     console.log(narr);
// }


// #3/1

// function Calc(){
//     var count = +prompt('Count')
//     var arr = []
//     arr.length = count
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = -Math.abs(Math.floor(Math.random() * 21))
//     }
//     console.log(arr);
// }
// Calc()


// #3/2

// var counts = +prompt('Count')

// const call = count => {
//     var arr = []
//     arr.length = count
//     for(var i = 0; i < arr.length; i++){
//         arr.push(-Math.abs(Math.floor(Math.random() * 21)))
//     }
//     console.log(arr);
// }
// call(counts)