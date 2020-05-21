let str = "border-bottom-color";

function changeToCamel(val) {
  return str.split('-').reduce((prev, cur) => {
    console.log("prev:"+prev);
    return prev + cur.charAt(0).toUpperCase() + cur.substring(1);
  },'');//<-- init empty string
  
}

console.log(changeToCamel(str));
//"prev:"
//"prev:Border"
//"prev:BorderBottom"
//"BorderBottomColor"

function changeToCamel(val) {
    return str.split('-').reduce((prev, cur) => {
      console.log("prev:"+prev);
      return prev + cur.charAt(0).toUpperCase() + cur.substring(1);
    }); //<-- no init
    
  }

//"prev:border"
//"prev:borderBottom"
//"borderBottomColor"

