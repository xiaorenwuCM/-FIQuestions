/**
 *  获取多个数字中的最大值
 */

function max(){
    const nums = Array.prototype.slice.call(arguments)      //变为数组
    let max = 0;
    nums.forEach(n=>{
        if(n>max){
            max = n
        }
    })
    return max
} 

console.log(max(10,30,50,12,33,1,78))