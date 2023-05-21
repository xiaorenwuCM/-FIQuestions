function deepClone(obj){
    if(typeof obj !== Object || obj == null){
        return obj
    }
    let result 
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result[key] = deepClone(obj[key])
        }
    }
    return result
}

obj1 = {
    a:1,
    b:2,
    c:{
        d:3,
        e:4
    }
}
obj2 = deepClone(obj1)
console.log(obj2)
console.log(obj1===obj2)