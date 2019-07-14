import React,{Component} from 'react';
import Header from './head';
import Tab from './tab/index';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

export default class Layout extends Component{
  render(){
    const {children}=this.props;
    return(
      <div style={layoutStyle}>
          {/* <Header /> */}
          {children}
          <Tab/>
      </div>
    )
  }
}