//2461. Maximum Sum of Distinct Subarrays With Length K
//Ushbu masalada bizga sonlardan iborat array va k soni berilgan. Array ichidagi k ta elementdan
// iborat subarray hosil qilamiz. Ushbu subarraylardan elementlari yig'indisi eng katta bo'lganini
// chiqarish kerak. Subarraylar turli xil elementlardan iborat bo'lishi kerak.

//length of subarr is k
//numbers should not be repeated

const arr: number[] = [1, 5, 4, 2, 9, 9, 9];
const k = 3;

function sumOfSubArr(arr: number[], k: number) {
    let calculatedList: number[] = [];
    let cachedSet: Set<number> = new Set();
    for (let main = 0; main < arr.length; main++) {
        for (let sub = 0; sub < k; sub++) {
            if (cachedSet.has(arr[main + sub]) || (main + sub) >= arr.length) {
                cachedSet.clear();
                break;
            }
            cachedSet.add(arr[main + sub]);
        }
        calculatedList.push(Array.from(cachedSet).reduce((ele, ac) => ele + ac, 0));
        cachedSet.clear();
    }
    return whichIsHigher(calculatedList);
}

function whichIsHigher(arr: number[]) {
    return Math.max(...arr);
}

console.log(sumOfSubArr(arr, k));

