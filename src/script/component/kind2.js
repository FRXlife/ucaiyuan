import React from 'react';
import fetchData from '../util/util.fetch.js'

class Kind2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data:[]
    }
  }

  render() {
    return (
        <div className = "kindShop">
            {this.state.data}
        </div>
    )
  }


  componentDidMount(){

    let url = "http://localhost:3000/list.php"
    fetchData(url,function(res){
        let arr = res.content[0].categorys[0].subCategories.map(val=>{
			return (

				<div className = "shop">
					<img src = {val.img} />
					{val.name}
				</div>
			)
		})
        this.setState({
            data:arr
        })
    }.bind(this))

  }
}


export default Kind2;
