// TRY: 練習問題１
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。
const me = {
  name: "yugo",
  age: 20,
  hobbies: ["筋トレ", "スポーツ観戦"],
}

console.log(me)
// const me = { name: 'あなたのなまえ' }

// ブラウザのコンソールを開いてオブジェクトが正しく作れているか確認してみましょう👀

// console.log(me)

// TRY: 練習問題２
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
const hikakin = {
  name: "ヒカキン",
  age: 24,
  sayHello: function () {
    console.log("ブンブンハロー Youtube")
  },
}
console.log(hikakin.sayHello)
