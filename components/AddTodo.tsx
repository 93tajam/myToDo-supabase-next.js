// ToDo追加フォーム（入力欄＋追加ボタン）

/*
use serverはサーバー上で動く
use clientはブラウザ上で動く

このファイルはフォームの表示と入力の受け取りだけ。DBには触らない。
DB操作はapp/actions.tsに書いて、サーバー側でやる。
なので"use client"を書いてもキーは露出しない。
*/

"use client"

import { useState } from "react"
// useStateはReactのフック。フックとはreactが用意してる特別な関数。状態を管理してる。
// ブラウザ上でしか使えないので"use client"が必要。

export default function AddTodo() {
  // コンポーネントはUIをreturnで返す関数。

  const [title, setTitle] = useState("")
  // useStateで「入力欄」の中身を管理する。入力欄の中身をリアルタイムで記憶しておく変数を作っています。
  // title → 現在の入力値
  // setTitle → titleを更新する関数
  // useState("") → 初期値は空文字
  //これは配列

  return (
    <form>
      <input
        type="text"
        value={title}
        // 入力欄に表示する文字を title と同期させています。title が変わると入力欄の表示も変わります。
        onChange={(e) => setTitle(e.target.value)}
        // キーを打つたびに発火します。e.target.value が「今入力欄に入っている文字」で、それで title を更新します。
        placeholder="ToDoを入力"
      />
      <button type="submit">追加</button>
    </form>
  )
}
