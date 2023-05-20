/**
 *  const obj1 = {a:10,b:{x:100,y:200}}
    const obj2 = {a:10,b:{x:100,y:200}}
    isEqual(obj1,obj2) === true
 */
// 判断obj是否为数组或者对象
function isObject(obj){
    if(typeof(obj)=== 'object' || typeof(obj)!=='object'){
        return true
    }
}

function isEqual(obj1,obj2){
    // 1. 判断值类型是否相等
    if(!isObject(obj1)||!isObject(obj2)){
        return obj1 === obj2
    }

    // 2. 判断是否同一个对象
    if(obj1 === obj2){
        return true
    }

    // 3. 比较数组的个数
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if(obj1Keys.length !== obj2Keys.length){
        return false
    }

    // 4.for循环递归遍历是否相等
    for(let key in obj1){
        const res = isEqual(obj1[key],obj2[key])
        if(!res){
            return false
        }
    }
    // 都相等
    return true
}


const obj1 = {a:10,b:{x:100,y:200}}
const obj2 = {a:10,b:{x:100,y:200}}
console.log(isEqual(obj1,obj2))
