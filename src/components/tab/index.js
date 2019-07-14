import React,{Component} from 'react';
import Link from 'next/link';

const tabStyle = {
  width:'100%',
  height:'50px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '0px',
  left: '0px',
  backgroundColor: '#000fff',
};
const linkStyle = {
  marginRight: 15,
  backgroundColor:'red',
};
export default class Head extends Component{
  
  render(){
    return(
      <div tyle={tabStyle}>
        <Link href="/views/home">
          <a style={linkStyle}>去home页面</a>
        </Link>
        <Link href="/views/find">
          <a style={linkStyle}>去find页面</a>
        </Link>
      </div>
    )
  }
}