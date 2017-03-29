import React from 'react'

import { Link } from 'react-router'

import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: "首页"
    }
  }
  render() {
    return (

      <div className="m-index">
        <header>
          {this.props.value}
        </header>
        <section>
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
  
  }

export default Index
