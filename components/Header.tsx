export default function Header() {
  return (
    <nav className="navbar" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">太原师范学院Mooc</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">首页</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses">课程列表</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">通知公告</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">关于我们</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}