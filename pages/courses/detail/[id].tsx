import Layout from "@/components/Layout"
import axios from 'axios'
import qs from 'qs'
import MarkDownIt from 'markdown-it'
// markdown  # - ##  ###

export async function getStaticPaths(state: any) {
    let res = await axios({
        url: 'http://114.115.179.234:1337/api/mooc-courses?' + qs.stringify({
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
        url: 'http://114.115.179.234:1337/api/mooc-courses/' + state.params.id + '?' + qs.stringify({
            fields: ['id', 'title', 'content'],
            populate: {
                pic: {
                    fields: ['url']
                }
            }
        })
    })
    let { title, content, pic } = res.data.data.attributes

    let md = new MarkDownIt()

    if (content) {
        content = md.render(content).replaceAll(`src="/upload`, `src="http://114.115.179.234:1337/upload`)
    }
    return {
        props: {
            title: title,
            content: content,
            pic: pic
        }        
    }
}


export default function Cos(props: any) {
    
    return (
        <Layout title="课程详情">
            <div style={{padding: '0 10px;'}}>
                <p className="course-title">
                    {props.title}
                </p>
                <img style={{ width: '100%' }} src={'http://114.115.179.234:1337' + props.pic.data.attributes.url}></img>
                <div dangerouslySetInnerHTML={{ __html: props.content }} className="course-desc"></div>
            </div>
        </Layout>
    )
}