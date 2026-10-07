// Linear Search — short notes
// Target → jis value ko search karna hai
// Index → value kis position par hai
// Linear Search → array ko beginning se ek-ek karke check karna
// Target mil gaya → index return
// Target nahi mila → -1
// Best case → target first position par → O(1)
// Worst case → target last mein ya absent → O(n)



// let nums = [5, 8, 2, 9];
// let target = 2;
// let index = -1;

// for(let i=0; i<nums.length;i++){
//   if(nums[i] === target){
//     index = i;
//   }
// }
// console.log(index);



// let nums = [10, 20, 30];
// let target = 50;
// let index = -1
// for(let i=0; i<nums.length;i++){
//   if(nums[i] === target){
//    index = i;
//    break;
//   }
// }
// console.log(index);


//count 2 kitna bar hai array me
// let nums = [2, 5, 2, 8, 2, 9];
// let target = 2;
// let count = 0;

// for(let i =0; i<nums.length;i++){
//   if(nums[i] === target){
//     count++;
//   }
// }
// console.log(count);



//ye ceck karta hai ki first bar 8 kaha hai
// let nums = [5, 8, 3, 8, 2];
// let target = 8;
// let index = -1;
// for(let i=0; i<nums.length; i++){
//   if(nums[i] === target){
//     index = i
//     break;

//   }
// }
// console.log(index);



//check karta hai same number arr me hai ya nahi hai to true nahi to false.
// let nums = [10, 20, 30, 40];
// let target = 30;
// let found = false;
// for(let i=0; i<nums.length; i++){
//   if(nums[i] === target){
//     found = true;
//     break;
//   }
// }
// console.log(found);
