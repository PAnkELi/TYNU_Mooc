import Layout from "@/components/Layout"
import axios from 'axios'
import qs from 'qs'
import dayjs from "dayjs"
import Link from 'next'

export async function getStaticPaths(state: any) {
  const res = await axios({
    url: 'http://114.115.179.234:1337/api/mooc-courses?' + qs.stringify({
      pagination: {
        page: 1,
        pageSize: 1
      },
      fields: ['id']
    })
  })
  let paths: any = []
  let count = res.data.meta.pagination.pageCount
  console.log(count)
  for (let i = 1; i <= count; i++) {
    paths.push({
      params: { page: String(i) }
    })
  }

  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }: any) {

  const res = await axios({
    url: 'http://114.115.179.234:1337/api/mooc-courses?' + qs.stringify({
      pagination: {
        page: params.page,
        pageSize: 2
      },
      sort: ['createdAt:desc'],
      fields: ['title', 'createdAt'],// 字段
      populate: {  // 关联字段
        pic: {
          fields: ['url']
        }
      }
    })
  })
  // console.log(JSON.stringify(res.data.data))
  const list = res.data.data.map((v: any) => ({
    id: v.id,
    title: v.attributes.title,
    createdAt: dayjs(v.attributes.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    pic: 'http://114.115.179.234:1337' + v.attributes.pic.data.attributes.url
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

export default function Courses({ list, page, pageCount }: any) {
  let pages = []

  if (page == 1) {
    pages.push(<li className="page-item disabled"><a className="page-link" href="javascript:;">上一页</a></li>)
  } else {
    pages.push(<li className="page-item"><a className="page-link" href={`/courses/list/${page - 1}`}>上一页</a></li>)
  }



  for (let i = 1; i <= pageCount; i++) {
    pages.push(<li className={page == i ? 'page-item active' : 'page-item'}><a className="page-link" href={`/courses/list/${i}`}>{i}</a></li>)
  }

  if (page == pageCount) {
    pages.push(<li className="page-item disabled"><a className="page-link" href='javascript:;'>下一页</a></li>)
  } else {
    pages.push(<li className="page-item"><a className="page-link" href={`/courses/list/${page + 1}`}>下一页</a></li>)
  }


  return (
    <Layout title="课程列表">

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {list.map((v: any) => (
              // @ts-ignore
              <a href={`/courses/detail/` + v.id}>
                <div className="col">
                  <div className="card shadow-sm">
                    <img src={v.pic}></img>
                    <div className="card-body">
                      <p className="card-text">{v.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{v.createdAt}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <nav style={{ margin: '20px 55px' }} aria-label="Page navigation example">
            <ul className="pagination">
              {pages}
            </ul>
          </nav>

        </div>
      </div>

    </Layout>
  )
}