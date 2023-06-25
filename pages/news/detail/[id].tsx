import Layout from "@/components/Layout"
import axios from 'axios'
import qs from 'qs'
import MarkDownIt from 'markdown-it'
import dayjs from "dayjs"
// markdown  # - ##  ###

export async function getStaticPaths(state: any) {
  let res = await axios({
    url: 'http://114.115.179.234:1337/api/mooc-news?' + qs.stringify({
      pagination: {
        page: 1,
        pageSize: 10
      },
      sort: ['createdAt:desc'],
      fields: ['id']
    })
  })
  let paths = res.data.data.map((v: any) => ({
    params: {
      id: String(v.id)
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(state: any) {


  let res = await axios({
    url: 'http://114.115.179.234:1337/api/mooc-news/' + state.params.id + '?' + qs.stringify({
      fields: ['id', 'title', 'content', 'createdAt'],
    })
  })
  
  let { title, content } = res.data.data.attributes
  let createdAt = dayjs(res.data.data.attributes.createAt).format('YYYY-MM-DD HH:mm:ss')
  let md = new MarkDownIt()

  if (content) {
    content = md.render(content).replaceAll(`src="/upload`, `src="http://114.115.179.234:1337/upload`)
  }
  return {
    props: {
      title,
      content,
      createdAt
    }
  }
}


export default function Cos(props: any) {

  return (
    <Layout title="课程详情">
      <div style={{ padding: '0 10px;' }}>
        <p className="course-title">
          {props.title}
        </p>
        <p className="news-time">{props.createdAt}</p>
        <div dangerouslySetInnerHTML={{ __html: props.content }} className="news-desc"></div>
      </div>
    </Layout>
  )
}