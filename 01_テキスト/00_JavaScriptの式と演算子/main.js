// TRY: 練習問題１
let x = 57052 + 57054
let y = "114" + "106"

console.log(x)
console.log(y)
// TRY: 練習問題２
let z = 5
z += 2
z *= 5
z = 100 % z
z /= 6
console.log(z)
// TRY: 練習問題３
let happiness = 0 // 0 から 100 までの数値を代入してください
let sleepiness = 0 // 0 から 100 までの数値を代入してください

const isHappy = happiness > 90
const isSleepy = sleepiness > 90

const isNotHappyAndSleepy = !isHappy && isSleepy

// 以下のコメントアウトを外して確認してみましょう
console.log(
  "isNotHappyAndSleepy" + "は" + true + "ですか？",
  isNotHappyAndSleepy,
)
console.log("isHappy", isHappy)
console.log("isSleepy", isSleepy)
