// export function getValue(value:string):string{
//     return value;
// }
console.log('module');

// let c : (a,b) => {}; //参数“b”隐式具有“any”类型。ts(7006)

//"this" 隐式具有类型 "any"，因为它没有类型注释。ts(2683)
// function sayThis() {
//     console.log(this); 
// }

let btn = document.querySelector("#btn");
//可以使用 ES11 中的 ?.(可选链操作符) 避免 btn 为空导致的报错
btn?.addEventListener("click",() => {
    alert("巴御前天下第一");
})
