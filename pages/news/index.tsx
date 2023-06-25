import Layout from "@/components/Layout"
import axios from 'axios'
import qs from 'qs'
import dayjs from "dayjs"
export async function getStaticProps() {

  const res = await axios({
    url: 'http://114.115.179.234:1337/api/mooc-news?' + qs.stringify({
      pagination: {
        page: 1,
        pageSize: 3
      },
      sort: ['createdAt:desc'],
      fields: ['title', 'createdAt'],// 字段
    })
  })
  const list = res.data.data.map((v: any) => ({
    id: v.id,
    title: v.attributes.title,
    createdAt: dayjs(v.attributes.createdAt).format('YYYY-MM-DD HH:mm:ss'),
  }))

  const { page, pageCount } = res.data.meta.pagination

  return {
    props: {
      list,
      page,
      pageCount
    }
  }
}

export default function News({ list, page, pageCount }: any) {
  let pages = []
  console.log(list)

  if (page == 1) {
    pages.push(<li className="page-item disabled"><a className="page-link" href="javascript:;">上一页</a></li>)
  } else {
    pages.push(<li className="page-item"><a className="page-link" href={`/news/list/${page - 1}`}>上一页</a></li>)
  }

  for (let i = 1; i <= pageCount; i++) {
    pages.push(<li className={page == i ? 'page-item active' : 'page-item'}><a className="page-link" href={`/news/list/${i}`}>{i}</a></li>)
  }

  if (page == pageCount) {
    pages.push(<li className="page-item disabled"><a className="page-link" href='javascript:;'>下一页</a></li>)
  } else {
    pages.push(<li className="page-item"><a className="page-link" href={`/news/list/${page + 1}`}>下一页</a></li>)
  }
  return (
    <Layout title="新闻列表">

      <div style={{padding: '30px 20px;'}}>
        {list.map((v: any) => (
          // @ts-ignore
          <a href={`/news/detail/` + v.id}>
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">今日要闻</strong>
                <h3 className="mb-0" style={{ color: 'rgb(33, 37, 41)' }}>{v.title}</h3>
                <span className="stretched-link" style={{ textAlign: 'right', marginTop: '20px' }}>阅读详情 <span className="iconfont icon-jinru" style={{fontSize: '16px'}}></span> </span>
                <div className="mb-1 text-muted">{v.createdAt}</div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <nav aria-label="Page navigation example" style={{ margin: '20px 55px' }}>
        <ul className="pagination">
          {pages}
        </ul>
      </nav>
    </Layout>
  )
}