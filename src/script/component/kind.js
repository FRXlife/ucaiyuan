import React from 'react'
import fetchData from '../util/util.fetch.js'
import {Link} from 'react-router'


class Kind extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data:[]
        // dataSource: multiData,
        // value: [1]
    }
  }


  render() {
    return (
      <div className="m-kind">
        <header>分类</header>
        <div id = "kindContent">
            <ul id = "kindNav">
                <li><Link to="/kind/kind1"  activeClassName="active">热门推荐</Link></li>
                <li><Link to="/kind/kind2"  activeClassName="active">营养果蔬</Link></li>
                <li><Link to="/kind/kind3"  activeClassName="active">品质肉类</Link></li>
                <li><Link to="/kind/kind4"  activeClassName="active">安心禽蛋</Link></li>
                <li><Link to="/kind/kind5"  activeClassName="active">海鲜水产</Link></li>
                <li><Link to="/kind/kind6"  activeClassName="active">礼品卡券</Link></li>
                <li><Link to="/kind/kind7"  activeClassName="active">粮油副食</Link></li>
                <li><Link to="/kind/kind8"  activeClassName="active">酒水饮料</Link></li>
            </ul>
            <div id = "kindRight">
                {this.props.children}
            </div>
        </div>
      </div>
    )
  }


  componentDidMount(){

    let url = "http://localhost:3000/list.php"
    fetchData(url,function(res){
        let arr = res.content[0].categorys.map(val=>{
            return (
                <li>{val.name}</li>
            )
        })
        this.setState({
            data:arr
        })
    }.bind(this))

  }
}

export default Kind
