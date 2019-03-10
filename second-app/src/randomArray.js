export const generateRandomArray = elements => {
  const arr = new Array(elements).fill(0).map(() => {
    return (Math.random() * 9000) | (0 + 1000);
  });
  const sum = chooseSum(arr);
  const answ = {};
  answ.array = arr;
  answ.sum = sum;
  return answ;
};

const chooseSum = arr => {
  const limit = arr.length + 1;
  let choosenOne = (Math.random() * (limit - 1)) | 0;
  if (choosenOne % 2 !== 0) {
    choosenOne = choosenOne - 1;
  }
  const answer =arr[choosenOne] + arr[choosenOne + 1]
  return answer;
};
