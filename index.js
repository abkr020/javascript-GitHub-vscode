const nums = [1, 2, 3, 4];



const multiplyThree = nums.map((num, i, arr) => {
    if (num > 2) {
        return num * 3;
    }
    return -1;
});
console.log(multiplyThree);



const m = nums.filter((num) => {
    return num > 2;
});
console.log(m);

