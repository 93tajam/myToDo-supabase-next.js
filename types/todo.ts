// ToDoのデータ構造の型定義するためだけのファイル。
// typesフォルダは型定義専用

export type Todo = {
/*
TypeScriptには「型」という概念があって、typeの後に型名で定義する。

type Todo = {
  id: string
  title: string
  is_done: boolean
}
これは「Todo という名前の型を作った」だけで、データは何も入っていません。

使うときはこうです：


const todo: Todo = {
  id: "a3f2c1...",
  title: "買い物する",
  is_done: false,
}
型の中に変数が入ってるイメージ。Todo型の変数todoを作って、そこにデータを入れている。
*/
  id: string;
  created_at: string;
  title: string;
  is_done: boolean;
  //booleanはtrueかflaseか。stringは文字列。
  //supabase(db)で作ったカラム四種類がtyoescriptで書く時何の型かを教えてあげている。
  //カラムっていうのはDBのテーブルで言うところの列。

  /*
| id | title      | is_done | created_at |
|----|------------|---------|------------|
| 1  | 買い物する  | false   | 2026-05-17 |
| 2  | 勉強する    | true    | 2026-05-17 |

なのでidはstringでもintでもいい。
supabaseの方からidの型intにしたら、id:numberにすればいい。
id;intなんてものはない。typescriptでintはnumberで表す。

    */
};
