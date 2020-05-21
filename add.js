var add = function(){
	var sum = 0;
	var i=0;
	var l = arguments.length;
	while(i < l){
		sum = sum + arguments[i++];
	}
	return sum;
}

var ret = add( 1, 2);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
