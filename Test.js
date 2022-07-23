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

// function rot13(str) {
//   return str
//     .split("")
//     .map((item) => {
//       let charCode = item.charCodeAt();
//       let calculatedValue = charCode - 64 + 13;
//       if (charCode < 65 || charCode > 90) {
//         return item;
//       } else if (charCode - 64 + 13 > 26) {
//         return String.fromCharCode(charCode + 13 - 26);
//       } else {
//         return String.fromCharCode(charCode + 13);
//       }
//     })
//     .join("");
// }

// console.log(rot13("SERR-PBQR PNZC"));

// function showCustomers(customers, targetList) {
//   customers.map((customer, i) => {
//     targetList.innerHTML =
//       targetList.innerHTML +
//       `<li id= ${i}>
//     <p class="name">${customer.name}</p>
//     </li>`;
//   });
//   targetList.addEventListener("click", function (event) {
//     currentElement = event.target;
//     const currentCustomer = customers[currentElement.parentElement.id];
//     pTag = currentElement.parentElement.getElementsByTagName("p");
//     countPTag = pTag.length;
//     if (countPTag > 1) {
//       currentElement.parentElement.getElementsByClassName("email")[0].remove();
//     } else {
//       currentElement.get.innerHTML =
//         currentElement.parentElement.innerHTML +
//         `<p class="email">${currentCustomer.email}</p>`;
//     }
//   });
// }

// document.body.innerHTML = `
// <div>
//  <ul id="customers">
//  </ul>
// </div>
// `;
// let customers = [
//   { name: "John", email: "john@example.com" },
//   { name: "Mary", email: "mary@example.com" },
// ];
// showCustomers(customers, document.getElementById("customers"));

// let customerParagraph = document.querySelectorAll("li > p")[0];
// if (customerParagraph) {
//   customerParagraph.click();
// }
// console.log(document.body.innerHTML);

// function setup() {
//   // Write your code here
//   const items = ["Taco", "Pizza", "Eggs"];

//   document
//     .getElementsByTagName("ol")[0]
//     .addEventListener("click", function (event) {
//       const currElement = event.target;
//       const currentItemPosition = items.indexOf(
//         currElement.parentElement.childNodes[1].textContent
//       );
//       switch (currElement.innerHTML) {
//         case "Up!":
//           if (currentItemPosition !== 0) {
//             const temp = items[currentItemPosition];
//             items[currentItemPosition] = items[currentItemPosition - 1];
//             items[currentItemPosition - 1] = temp;
//           }

//           break;
//         case "Down!":
//           if (currentItemPosition !== items.length - 1) {
//             const temp = items[currentItemPosition];
//             items[currentItemPosition] = items[currentItemPosition + 1];
//             items[currentItemPosition + 1] = temp;
//           }

//           break;
//       }

//       const liElement = document
//         .getElementsByTagName("ol")[0]
//         .getElementsByTagName("li");
//       liElement[0].childNodes[1].nodeValue = items[0];
//       liElement[1].childNodes[1].nodeValue = items[1];
//       liElement[2].childNodes[1].nodeValue = items[2];
//     });
// }

// // Example case
// document.body.innerHTML = `<ol>
//   <li><button>Up!</button>Taco<button>Down!</button></li>
//   <li><button>Up!</button>Pizza<button>Down!</button></li>
//   <li><button>Up!</button>Eggs<button>Down!</button></li>
// </ol>`;

// setup();
// document.getElementsByTagName("button")[2].click();

// console.log(document.body.innerHTML);

// function createCheckDigit(membershipId) {
//   // Write the code that goes here.
//   debugger;
//   while (membershipId.length !== 1) {
//     membershipId = membershipId.split("");
//     membershipId = membershipId
//       .reduce((partialSum, a) => partialSum + parseInt(a), 0)
//       .toString();
//   }
//   return membershipId;
// }

// console.log(createCheckDigit("55555"));

// function endangeredSpecies(continent, species) {
//   // Your code goes here
//   const continentElement = document.querySelector(
//     `[data-continent="${continent}"]`
//   );
//   const speciesElement = continentElement.querySelector(
//     `[data-species="${species}"]`
//   );
//   return speciesElement.innerHTML;
// }

// // Example case
// document.body.innerHTML = `<div>
//   <ul data-continent="North America">
//     <li data-species="California condor">Critically Endangered</li>
//     <li data-species="American bison">Near Threatened</li>
//   </ul>
//   <ul data-continent="Europe">
//     <li data-species="Cave bear">Extinct</li>
//   </ul>
// </div>`;

// console.log(endangeredSpecies("North America", "American bison"));

function appendChildren(decorateDiv) {
  var allDivs = document.getElementsByTagName("div");
  let newAllDivs = [...allDivs];
  newAllDivs = newAllDivs.slice();

  for (let i = 0; i < newAllDivs.length; i++) {
    debugger;
    var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Example case.
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

appendChildren(function (div) {});
console.log(document.body.innerHTML);
