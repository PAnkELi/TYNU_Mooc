import Layout from "@/components/Layout"
export default function Home() {
  return (
    <Layout title="首页">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img decoding="async" src="/carousel1.webp" className="d-block" style={{width: '100%'}} />
          </div>
          <div className="carousel-item">
            <img decoding="async" src="/carousel2.webp" className="d-block" style={{ width: '100%' }} />
          </div>
          <div className="carousel-item">
            <img decoding="async" src="carousel3.webp" className="d-block" style={{ width: '100%' }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <section className="pt-4 pb-5 aos-init">
          <div className="col">
            <a type="button" className="btn btn-block btn-primary mb-1" href="/courses" style={{marginLeft: '40px'}}>课程列表</a>
            <a type="button" className="btn btn-block btn-primary mb-1" href="/news" style={{marginLeft: '100px'}}>通知公告</a>
          </div>
      </section>
    </Layout>
  )
}