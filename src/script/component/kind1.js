import React from 'react';
import fetchData from '../util/util.fetch.js'

class Kind1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data:[]
    }
  }

  render() {
    return (

		<h3>
			活动促销
			<a href = "#"> 全部活动商品> </a>
		</h3>

    )
  }


  componentDidMount(){



  }
}


export default Kind1;
