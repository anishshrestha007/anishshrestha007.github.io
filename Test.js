// let time = "09:09AM";
// let timeArr = time.split("");
// function normalizeTime(time) {
//   return timeArr.slice(6);
// }
// function TwentyFourhourformat(time) {
//   const timeEndsWith = time.endsWith("AM") ? "AM" : "PM";
//   if (timeEndsWith === "AM") {
//     normalizeTime(time);
//   } else {
//     let newTime = timeArr.slice(3) + 12;
//   }
// }

// console.log(TwentyFourhourformat(time));
// let len = nums.length;
// var removeElement = function (nums, val) {
//   for (i = 0; i < len; i++) {
//     let j = 1;
//     if (nums[i] === val) {
//       len = replaceArray(i, nums, len, val);
//     }
//   }
//   return len;
// };

// var replaceArray = function (i, nums, len, val) {
//   for (j = i + 1; j <= len; j++) {
//     nums[j - 1] = nums[j];
//   }
//   len--;
//   if (nums[i] == val) {
//     replaceArray(i, nums, len, val);
//   }

//   return len;
// };
// let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// let val = 2;

// removeElement(nums, val);

// var moveZeroes = function (nums) {
//   let len = nums.length;
//   writerPointer = len - 1;

//   for (i = 0; i < len; i++) {
//     if (nums[i] === 0 && i < writerPointer) {
//       nums[i] = nums[writerPointer];
//       nums[writerPointer] = 0;
//       writerPointer--;
//     }
//   }
//   return nums;
// };

// moveZeroes([0, 1, 0, 3, 12]);

// var canBeIncreasing = function (nums) {
//   var removeCount = 0;
//   var firstPointer = 0;
//   var secPointer = 1;
//   while (secPointer < nums.length) {
//     if (nums[firstPointer] >= nums[secPointer]) {
//       removeCount++;
//       if (
//         secPointer === nums.length - 1 ||
//         nums[secPointer + 1] > nums[firstPointer]
//       )
//         nums.splice(secPointer, 1);
//       else nums.splice(firstPointer, 1);
//       if (firstPointer > 0) {
//         firstPointer--;
//         secPointer--;
//       }
//     } else {
//       firstPointer++;
//       secPointer++;
//     }
//     if (removeCount > 1) return false;
//   }
//   return true;
// };
