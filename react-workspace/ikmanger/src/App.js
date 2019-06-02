import React,{Component} from 'react';
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter, Link,Route,Switch,Redirect } from "react-router-dom";
import Layout from "./Components/Layout/index";
import Home from "./Pages/Home/Home";
import Login from "./Pages/User/Login";
import User from "./Pages/User/User";
import Mine from "./Pages/Mine/Mine";
import SowingRouter from "./Pages/Sowing/router";
import CourseRouter from "./Pages/Course/router";
import ErrorPage from "./Pages/ErrorPage/index"
import {connect} from "react-redux"
import * as constants from "./Store/actionTypes"

//登录之后不能跳转到主页面是因为Login.jsx里面
//有句代码this.props.history.push("/")把app.js里面的reducer的userData数据清掉了,
//所以这里需要引入connect,在reduce里面得有userData值,不会触发render重新渲染
class App extends Component {
  componentWillMount(){
   this.props.reqLocalData();
  }
  render(){

    //取出本地的用户信息
    const userData=JSON.parse(sessionStorage.getItem("userData"));
console.log(userData,userData==true)
    //主面板
    let LayoutRouter=(
      <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/mine" component={Mine}></Route>
            <Route  path="/user" component={User}></Route>
            <Route  path="/sowing" component={SowingRouter}></Route>
            <Route  path="/course" component={CourseRouter}></Route>
            <Route  component={ErrorPage}/>
          </Switch>
      </Layout>
    )
  return (
    
      <BrowserRouter> 
      <Switch>
        
            {/* <Route path="/" exact render={props=>LayoutRouter}></Route>
            <Route path="/login" component={Login}></Route> */}
            <Route exact path="/" render={userData?props=>LayoutRouter:()=><Redirect to="/login"/>}/>
            <Route path="/login" component={Login}></Route>
           <Route path="/"  render={props=>LayoutRouter}></Route>
          </Switch>
          
      </BrowserRouter>
   
  );
  }
}

const mapStateToProps=(state)=>{
    return state
}
const mapDispatchToProps=(dispatch)=>{
  return{
      reqLocalData(){
        const userData=JSON.parse(sessionStorage.getItem("userData"));
        dispatch({
          type: constants.IINIT_USER_DATA,
          userData
      })
      }
  }
}

// export default App;
export default connect(mapStateToProps,mapDispatchToProps)(App);
