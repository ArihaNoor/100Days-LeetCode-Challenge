// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

Array.prototype.last = function() {
    var arr = this;
    let last = 0;
    for(var i=0;i<arr.length;i++){
        if(i==arr.length-1){
            last = arr[arr.length-1];
        }
    }
    if(arr.length==0){
        return -1;
    }else{
        return last;
    }
};