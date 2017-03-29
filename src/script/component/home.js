import React from 'react'
import Carousel from '../../component_dev/carousel/src/index.js'
import Scroller from '../../component_dev/scroller/src'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      bannerlist:  [<div/>],
      ka:[],
      nav:[],
      shop:[],
      attrs:[],
      typeList1:[],
      pin1:[],
      typeList2:[],
      pin2:[],
      typeList3:[],
      pin3:[],
      typeList4:[],
      pin4:[],
      typeList5:[],
      pin5:[],
      tv:[],
      movie:[]
    }
  }
  componentWillMount () {
    let url = "http://localhost:3000/home.php";
    let that = this;
     fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
         // console.log(data);
          console.log(data.content[0]);
          let arr = [];
          let kaquan = [];
          for(let i=0;i<3;i++){
             arr.push(<li className="item"><img className="img" src={data.content[0].items[1].data[i].image} /></li>)
          }
          console.log(data.content[0].items[2].data[0].image.image);
          kaquan.push(<img src={data.content[0].items[2].data[0].image.image} / >);
          let newNav =data.content[0].items[3].data.map(val=>{
            return (
            <li>
              <a>
                <img src={val.image}/>
                <span>{val.iconName}</span>
              </a>
            </li>
            )
          });
          console.log(data.content[0].items[4].attributes); 
          
          let attr = [];
          attr.push( <h2><img className="pic" src={data.content[0].items[4].attributes.iconUrl}/><b>{data.content[0].items[4].attributes.title}</b></h2>);
           
          
          let newShop =data.content[0].items[4].data.map(val=>{
            return (
                       <li data-id={val.itemId}>
                      <a>
                        <img src={val.image} />
                      </a>  
                      <h3>{val.title}</h3>
                      <div className="price_wrap">
                        <span>
                          <label className="money">￥</label>
                          {val.price}
                        </span>
                      </div>
                      <span className="limit_count">
                          <em className="limit_num">{val.limitNum}</em>
                      </span>
                      <a className="btnshop"></a>
                     </li>         
            )
          });
          let kindfood1= [];
          kindfood1.push(
            <div className="food">
              <h2>
                <img src={data.content[0].items[5].attributes.iconUrl} />
                <b>{data.content[0].items[5].attributes.title}</b>
              </h2>
              <a className="foodpic">
                <img src={data.content[0].items[5].attributes.image} />
                <span><img src="http://s1.ucaiyuan.com/h5/1.6.4/images/my/sanjiao.png"/></span>
              </a>
            </div>  
          ) 
          let pina=[];
          data.content[0].items[5].data.map(val=>{
            pina.push(
             
                <li>
                <a><img src={val.image}/></a>
                <h3>{val.title}</h3>
                <div className="price_wrap">
                  <span>
                    <label className="money">￥</label>
                    {val.price}
                  </span>
                </div>
                <a className="btnshop"></a>
                </li>
             
            )
          })
          let kindfood2= [];
          kindfood2.push(
            <div className="food">
              <h2>
                <img src={data.content[0].items[6].attributes.iconUrl} />
                <b>{data.content[0].items[6].attributes.title}</b>
              </h2>
              <a className="foodpic">
                <img src={data.content[0].items[6].attributes.image} />
                <span><img src="http://s1.ucaiyuan.com/h5/1.6.4/images/my/sanjiao.png"/></span>
              </a>
            </div>  
          ) 
          let pinb=[];
          data.content[0].items[6].data.map(val=>{
            pinb.push(
             
                <li>
                <a><img src={val.image}/></a>
                <h3>{val.title}</h3>
                <div className="price_wrap">
                  <span>
                    <label className="money">￥</label>
                    {val.price}
                  </span>
                </div>
                <a className="btnshop"></a>
                </li>
             
            )
          })
          let kindfood3= [];
          kindfood3.push(
            <div className="food">
              <h2>
                <img src={data.content[0].items[7].attributes.iconUrl} />
                <b>{data.content[0].items[7].attributes.title}</b>
              </h2>
              <a className="foodpic">
                <img src={data.content[0].items[7].attributes.image} />
                <span><img src="http://s1.ucaiyuan.com/h5/1.6.4/images/my/sanjiao.png"/></span>
              </a>
            </div>  
          ) 
          let pinc=[];
          data.content[0].items[7].data.map(val=>{
            pinc.push(
             
                <li>
                <a><img src={val.image}/></a>
                <h3>{val.title}</h3>
                <div className="price_wrap">
                  <span>
                    <label className="money">￥</label>
                    {val.price}
                  </span>
                </div>
                <a className="btnshop"></a>
                </li>
             
            )
          })

          let kindfood4= [];
          kindfood4.push(
            <div className="food">
              <h2>
                <img src={data.content[0].items[8].attributes.iconUrl} />
                <b>{data.content[0].items[8].attributes.title}</b>
              </h2>
              <a className="foodpic">
                <img src={data.content[0].items[8].attributes.image} />
                <span><img src="http://s1.ucaiyuan.com/h5/1.6.4/images/my/sanjiao.png"/></span>
              </a>
            </div>  
          ) 
          let pind=[];
          data.content[0].items[8].data.map(val=>{
            pind.push(
             
                <li>
                <a><img src={val.image}/></a>
                <h3>{val.title}</h3>
                <div className="price_wrap">
                  <span>
                    <label className="money">￥</label>
                    {val.price}
                  </span>
                </div>
                <a className="btnshop"></a>
                </li>
             
            )
          })

          let kindfood5= [];
          kindfood5.push(
            <div className="food">
              <h2>
                <img src={data.content[0].items[9].attributes.iconUrl} />
                <b>{data.content[0].items[9].attributes.title}</b>
              </h2>
              <a className="foodpic">
                <img src={data.content[0].items[9].attributes.image} />
                <span><img src="http://s1.ucaiyuan.com/h5/1.6.4/images/my/sanjiao.png"/></span>
              </a>
            </div>  
          ) 
          let pine=[];
          data.content[0].items[9].data.map(val=>{
            pine.push(
             
                <li>
                <a><img src={val.image}/></a>
                <h3>{val.title}</h3>
                <div className="price_wrap">
                  <span>
                    <label className="money">￥</label>
                    {val.price}
                  </span>
                </div>
                <a className="btnshop"></a>
                </li>
             
            )
          })
          
          let newtv=[];
          newtv.push(
              <div className="food">
              <h2>
                <img className="pic" src={data.content[0].items[4].attributes.iconUrl}/>
                <b>{data.content[0].items[4].attributes.title}</b>
                <span className="right">
                  <i></i>
                </span>
              </h2>
            </div>  
          )
          let movie








           
         
          that.setState({
            bannerlist:arr,
            ka:kaquan,
            nav:newNav,
            shop:newShop,
            attrs:attr,
            typeList1:kindfood1,
            pin1:pina,
            typeList2:kindfood2,
            pin2:pinb,
            typeList3:kindfood3,
            pin3:pinc,
            typeList4:kindfood4,
            pin4:pind,
            typeList5:kindfood5,
            pin5:pine
          })
      })
      .catch(function (err) {
          console.log(err);
      })
  }
  render() {
    return (
      <div className="m-home">
        <header className="search_header">
            <div className="search">
              <i></i>
              车厘子
            </div>
        </header>
        <div className="swiper">
            <Carousel>
              {this.state.bannerlist}
            </Carousel>
        </div>
        <div className="ka">
          <a>
             {this.state.ka}
          </a>
        </div>
        <div className="nav_wrap">
          <ul>
            {this.state.nav}
          </ul>
        </div>
        <div className="hot_product">
          {this.state.attrs}
          <Scroller scrollX={true}>
            <ul>
             {this.state.shop}
            </ul> 
          </Scroller>
        </div>
        <div className="fooda">
          {this.state.typeList1}
          <Scroller scrollX={true}>
            <ul>
              {this.state.pin1}
            </ul>
          </Scroller>
        </div>
        <div className="fooda">
          {this.state.typeList2}
          <Scroller scrollX={true}>
            <ul>
              {this.state.pin2}
            </ul>
          </Scroller>
        </div>
        <div className="fooda">
          {this.state.typeList3}
          <Scroller scrollX={true}>
            <ul className="yang">
              {this.state.pin3}
            </ul>
          </Scroller>
        </div>
        <div className="fooda">
          {this.state.typeList4}
          <Scroller scrollX={true}>
            <ul className="huo">
              {this.state.pin4}
            </ul>
          </Scroller>
        </div>
        <div className="fooda">
          {this.state.typeList5}
          <Scroller scrollX={true}>
            <ul className="breakfast">
              {this.state.pin5}
            </ul>
          </Scroller>
        </div>
      </div>
    )
  }
  componentDidMount () {


    }
}

export default Home
