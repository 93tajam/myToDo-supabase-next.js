// トップページ（ToDo一覧画面）
//やることは

import { Todo } from "@/types/todo"
import { supabase } from "@/lib/supabase"

export default async function Page() {
    //exportなので外からimport可能。asyncawaitで強制的にsupabaseからデータを取ってくる。
    //supabaseはlib/supabase.tsで作ったクライアント。

  const { data: todos } = await supabase.from("todos").select("*")
  //constは変数を宣言してる。つまり、todosという変数を宣言して、supabaseから取ってきたデータを入れている。
   　// from("todos")はtodosテーブルからデータを取ってくる。
    // select("*")は全てのカラムを取ってくる。ワイルドカード。
    // supabaseから返ってくるデータは{data: 取ってきたデータ}の形になっているので、
    // {data: todos}と書いて、取ってきたデータをtodosという変数に入れている。


    /*

    capiさんとやったとこ。SQL復習。
    
    supabase.from("todos")     // どのテーブルか(テーブルとはtodosという表全体)
    .select("*")             // どのカラムを取得するか（カラムとはid, title, is_done, created_atの列）
    .eq("is_done", false)    // イコールで条件絞り込み（WHERE is_done = false）
    .order("created_at")     // 並び順
    .limit(10)               // 件数制限

    
    */

  return (
    <main>
      <h1>ToDo App</h1>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      {/* DBから取得したデータが全て入ったtodos変数を文字列に変換して表示している。 */}
    </main>
  )

  //reactのルールで、コンポーネント(関数)は画面に表示するものを必ずreturnで返す。
}