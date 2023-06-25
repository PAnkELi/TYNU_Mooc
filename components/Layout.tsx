import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"

export default function Layout(props: any) {
  return (
    <>
      <Head>
        <title>{'太原师范学院慕课系统-' + props.title}</title>
        <link rel="stylesheet" href="/bootstrap.min.css" />
        <link rel="stylesheet" href="https://at.alicdn.com/t/c/font_4108355_vgljakc63rl.css" />
        <script type="text/javascript" src="/bootstrap.min.js"></script>
      </Head>
      <Header></Header>
      <main>
        {props.children}
      </main>
      <Footer></Footer>
    </>
  )
}