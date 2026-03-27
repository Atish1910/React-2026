const iStr = "   hello   world     ";
function display(iStr){
    let iNewStr = "";
    for(let i = 0; i < iStr.length; i++){
        if(iStr[i] != " "){
            iNewStr = iNewStr + iStr[i];
        }
    }
    console.log(iNewStr);
}
display(iStr);