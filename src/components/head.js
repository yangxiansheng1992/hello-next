import React,{Component} from 'react';
import Link from 'next/link';


const linkStyle = {
  marginRight: 15,
  backgroundColor:'red',
};
export default class Head extends Component{
  
  render(){
    return(
      <div>
        <Link href="/a">
          <a style={linkStyle}>去a页面</a>
        </Link>
        <Link href="/index">
          <a style={linkStyle}>去index页面</a>
        </Link>
      </div>
    )
  }

}