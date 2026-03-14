const iArr = [10,11,[12,23,15], [19]];

function display(iArr){
    let iNewArr = [];
    for(let i = 0; i < iArr.length; i++){
        if(Array.isArray(iArr[i])){
            iNewArr = iNewArr.concat(display(iArr[i]));
        }else{
            iNewArr.push(iArr[i]);
        }
    }
    return iNewArr;
}

console.log(display(iArr));