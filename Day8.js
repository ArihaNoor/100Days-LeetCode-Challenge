function func(nums){
    let count = []
    for(var i=0;i<nums.length;i++){
        if(count.includes(nums[i])){
            let index = count.indexOf(nums[i]);
            count.splice(index,1);
        }else{
            count.push(nums[i]);
        }
    }
    return count;
}

let nums = [2,2,1];
console.log(func(nums));