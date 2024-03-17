//------------Two Sum------------------

// Given an array of integers nums and an integer target, return indices of the two numbers 
// such that they add up to target.

// You may assume that each input would have exactly one solution, and you 
// may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums,target)=>{
    let indices = [];
    let sum = 0;
    for(var i=0;i<nums.length;i++)
    {
        for(var j=0;j<nums.length;j++)
        {
            if(j!=i){
                sum = nums[i]+nums[j]
                if(sum===target)
                {
                    indices[0] = i;
                    indices[1] = j;
                    return indices;
                }
            }
        }
    }
}


console.log(twoSum([2,7,11,15],9));