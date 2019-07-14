import React,{Component} from 'react';
import Layout from '../../components/layout';

const pageStyle = {
  width:'100%',
  height:'100%',
  backgroundColor: 'yellow',
};
export default class Index extends Component{
  
  render(){
    return(
      <Layout style={pageStyle}>
        <div style={pageStyle}>
          <p>这是find页面</p>
        </div>
      </Layout>
    )
  }
}