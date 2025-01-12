// 1652. Defuse the Bomb
// Masala shartiga ko'ra elementlari sonlardan iborat bo'lgan Array va kalit son (k) berilgan.
// Agar kalit son noldan katta bo'lsa, array elementi o'zidan keyingi k ta elementlarning yig'indisiga
// teng bo'ladi. Agar elementdan keyin k ta element bo'lmasa yana 0-indeksdan boshlab hisoblanadi.
// Masalan arr = [2, 3, 5, 3, 7] va k = 3 shunda javob: [ 3+5+3, 5+3+7, 3+7+2, 7+2+3, 2+3+5 ]
// Agar kalit son nolga teng bo'lsa, javob array elementlari hammasi noldan iborat bo'ladi.
// Agar kalit son noldan kichik bo'lsa birinchi shartning teskarisi bo'ladi. Yani:
// arr = [2, 3, 5, 3, 7] va k = -3 bo'lsa javob: [5+3+7, 3+7+2, 7+2+3, 2+3+5, 3+5+3]
// Masala shartlarini tushunib oldik. Endi shartlar bo'yicha mantiq yozishni boshlaymiz:


const arr: number[] = [2, 3, 5, 3, 7]; const k = 3;
function defuseTheBomb(arr: number[], k: number): number[] {
    let result = []
    if (k === 0) result = arr.map(num => 0)
    else {
        for (let a = 0; a < arr.length; a++) {
            let triplePlus = 0
            if (k > 0) {
                for (let tr = 1; tr <= k; tr++) {
                    const index = a + tr
                    if (arr.length <= index) triplePlus += arr[index - arr.length]
                    else triplePlus += arr[index]
                }
            } else {
                for (let tr = 1; tr <= k * -1; tr++) {
                    let index = (arr.length - 1 + k) + (a + tr)
                    if (arr.length <= index) triplePlus += arr[index - arr.length]
                    else triplePlus += arr[index]
                }
            }
            result.push(triplePlus)
            triplePlus = 0
        }
    }
    return result
}

console.log(defuseTheBomb(arr, k))