//第一种
// function unique(arr){
//     const res = []
//     arr.forEach(item=>{
//         if(res.indexOf(item)<0){
//             res.push(item)
//         }
//     }) 
//     return res
// }

//第二种,使用set方式
function unique(arr){
    let res = Array.from(new Set(arr))
    return res
}

const res = unique([30,10,10,20,15,1])
console.log(res)