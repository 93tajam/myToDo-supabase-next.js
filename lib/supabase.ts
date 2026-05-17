// Supabaseの接続設定
//libフォルダはReactとかSupabaseみたいなライブラリの接続設定とか、API通信の関数とか、そういうのをまとめる場所。

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

//constは変数を宣言するキーワード。typeは型を宣言するキーワード。exportは外部に公開するキーワード。
//process.envって書けば.envから環境変数を読み込む。

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
//exportって書いたからsupabaseは外部からimportできる。createClientはsupabaseのクライアントを作る関数。引数にURLとAnonKeyを渡す。これでsupabaseに接続できるようになる。
