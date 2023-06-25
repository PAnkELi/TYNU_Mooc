export default function Footer() {
  return (
    <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
      <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <a className="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" href="/" aria-label="Bootstrap">
              <img src="/logo.png" alt="" style={{width: '50px', borderRadius: '30px'}}/>
              <span className="fs-5" style={{margin: '0 10px'}}>太原师范学院Mooc</span>
            </a>
            <ul className="list-unstyled small">
              <li className="mb-2"> <span className="iconfont icon-xiaoxi icon-youbian"></span> 邮编：030619</li>
              <li className="mb-2"> <span className="iconfont icon-dianhua"></span> 电话：0351-2886200</li>
              <li className="mb-2"> <span className="iconfont icon-dingwei"></span> 地址：山西省晋中市榆次区大学街319号</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>学校信息</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="https://www.tynu.edu.cn/xygk/xyjj.htm">学校简介</a></li>
              <li className="mb-2"><a href="https://www.tynu.edu.cn/yxsz.htm">院系设置</a></li>
              <li className="mb-2"><a href="https://www.tynu.edu.cn/gljg.htm">管理机构</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>友情链接</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="http://www.moe.gov.cn/">教育部</a></li>
              <li className="mb-2"><a href="http://jyt.shanxi.gov.cn/">山西省教育厅</a></li>
              <li className="mb-2"><a href="http://jyj.taiyuan.gov.cn/">太原市教育局</a></li>
            </ul>
          </div>
          <hr />
          <p style={{margin: '0 20px'}}>Copyright:2010-2022 太原师范学院 </p>
        </div>
      </div>
    </footer>
  )
}