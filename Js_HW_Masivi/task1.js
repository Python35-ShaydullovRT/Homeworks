let arr = [2, 5, 6, 7, 8, 9]

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  const sum = calculateSum(arr);
  
  console.log(sum);