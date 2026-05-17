// 全ページ共通の枠組み（ここに書いたものが全ページに適用される）

/*

appフォルダのlayout.tsx、page.tsxは二つで一つ。
layout.tsxはurlの枠組み。
つまりページが変わっても消えない部分。

page1.tsxはurlの中身
URLごとに変わる部分。

*/
import type { Metadata } from "next"
import "./globals.css"
//ようはlayout.tsxだから全部のページに反映されるcss

export const metadata: Metadata = {
  title: 'My_ToDo_App',
}

export default function RootLayout({
    //export functionなんで外部からimportできる関数。
    children,
    //childrenはReactの特別な変数で、この関数の引数。
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body>
                {children}
                {/*{children}はReactの特別な変数で、ここにpage.tsxの内容が入る。
                後ここはhtmlの中なので//でコメントアウトできない。
                */}
            </body>
        </html>
    )
}

