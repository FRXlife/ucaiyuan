import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps} from '../redux/store'
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: "首页",
      topHeader:""
    }
  }
  render() {
    return (

      <div className="m-index">
        
        <section>
        {this.state.topHeader}
          {this.props.children}  
        </section>
        <footer>
          <ul>
            <li>
              <Link to="/home"  activeClassName="active">
                <i></i>
                <b>首页</b>
              </Link>
            </li>
            <li>
              <Link to="/kind" activeClassName="active">
                <i></i>
                <b>分类</b>
              </Link>
            </li>
            <li>
              <Link to="/cart" activeClassName="active">
                <i>
                  <span>0</span>
                </i>
                <b>购物车</b>
              </Link>
            </li>
            <li>
              <Link to="/my" activeClassName="active">
                <i></i>
                <b>我的</b>
              </Link>
            </li>

          </ul>
        </footer>
      </div>
    )
  }
  switchRoutes(){
    switch (this.props.routes[1].title) {
      case "0":
        this.setState({
          topHeader: <header className="search_header"><div className="search"><i></i>车厘子</div></header>
        });
        break;
      case "1":
        this.setState({
          topHeader:  <header className="kind_header">分类</header>
        });
        break;
      case "2":
        this.setState({
          topHeader: <header className="cart_header">购物车 </header>
        });
        break;
       case "3":
        this.setState({
          topHeader: null
        });
        break;  
      default:
        this.setState({
          topHeader: <header className="search_header"><div className="search"><i></i>车厘子</div></header>
        });
        break;
    }
  }
  componentWillReceiveProps() {
    this.switchRoutes();
  }
  componentDidMount(){
    let title = this.props.routes[1].title;
    console.log(title);
    console.log('mount');
    this.props.onChange({
      type: 'SETTITLE',
      title: title
    })
    this.switchRoutes();
  }
  componentDidUpdate() {
    console.log('update');
    let title = this.props.routes[1].title;
    this.props.onChange({
      type: 'SETTITLE',
      title: title
    })
  }
  
  
}  

//组件的改造，捏合
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
