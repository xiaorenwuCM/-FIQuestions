//3s 把宽度从100px 变为640px,即增加540px
//60帧/s,3s180帧，每帧变化3px

// const $div1 = $('#div1')
// let curWidth = 100
// const maxWidth = 640

// function animate(){
//     curWidth = curWidth +3
//     $div1.css('width',curWidth)
//     if(curWidth < maxWidth){
//         setTimeout(animate,16.7)        //自己控制时间
//     }
// }
// animate()

//RAF
const $div1 = $('#div1')
let curWidth = 100
const maxWidth = 640
function animate(){
    curWidth = curWidth +3
    $div1.css('width',curWidth)
    if(curWidth < maxWidth){
        window.requestAnimationFrame(animate)
    }
}
animate()