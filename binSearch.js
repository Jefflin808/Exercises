//二分法
// Math.floor 0.1 -> 0.7 -> 0
// Math.ceil  0.1->0.7->1
// Math.round  0.1-> 0; 0.7->1
function binSearch(arr, data){
    let low = 0; 
    let high = arr.length-1; 
    let mid = 0;

    while(low <= high){
        mid = Math.floor((high + low)/2); 
        if(arr[mid] === data){
            return mid;
        }
        else if ( arr[mid] > data){
            high = mid -1;
        }
        else{
            low = mid +1;
        }
    }
    return -1;
}
