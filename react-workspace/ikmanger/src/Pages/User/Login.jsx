import React, { Component } from 'react'
import logo from "./../../Common/uploads/logo.jpg";
import {connect} from "react-redux"
import { getUserDataAction } from "./../../Store/actionCreator";
import md5 from "md5";
const  S_KEY="WaYjH1314.ItLikeE.CoM";
 class Login extends Component {
   
    constructor(props){
        super(props);
        this.state={
            user_name:'',
            user_pwd:''
        }
    }

 
    render() {
        return (
            <div className="login">
        <div className="login-wrap">
            <div className="avatar">
                <img src={logo} className="img-circle" alt="" />
            </div>
            <div action="" className="col-md-offset-1 col-md-10">
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                        <i className="fa fa-id-card-o"></i>
                    </span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="撩课口令" 
                        onChange={(e)=>this._onInputChange(e,"user_name")}
                        onKeyDown={(e)=>this._onInputKeyUp(e)}
                        />
                </div>
                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                        <i className="fa fa-key"></i>
                    </span>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="密码" 
                    onChange={(e)=>this._onInputChange(e,"user_pwd")}
                    onKeyDown={(e)=>this._onInputKeyUp(e)}
                    />
                </div>
                <button type="submit" onClick={()=>this._onSubmit()} className="btn btn-lg btn-danger btn-block">登 录</button>
            </div>
        </div>
    </div>
        )
    }

    _onInputChange(e,type){
          
            let inputValue=e.target.value;
            this.setState({
                [type]:inputValue
            })
            
    }

    _onInputKeyUp(e){

        if(e.keyCode==13){
            this._onSubmit();
        }
    }
    _onSubmit(){
        //获取数据
        
        const {user_name,user_pwd}=this.state;
        console.log(this.state)
        //验证数据
        if(!user_name){
            alert("输入的口令不能为空")
            return;
        }
        if(!user_pwd){
            alert("输入的密码不能为空");
            return
        }

       const md5_user_pwd= md5(user_pwd+S_KEY);
       console.log(md5_user_pwd)
       let params=new URLSearchParams();
       params.append("user_name",user_name);
       params.append("user_pwd",md5_user_pwd)
           this.props.reqLogin(params,(userData)=>{
               console.log(userData)
               if(userData.token!==""){
                  alert("登录成功，正在前往主页面")
                  console.log(this.props)
                   this.props.history.push("/")
               }
           })
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        reqLogin(data,callback){
            const action=getUserDataAction(data,callback);
            dispatch(action);
        }
    }
}
export default connect(null,mapDispatchToProps)(Login);