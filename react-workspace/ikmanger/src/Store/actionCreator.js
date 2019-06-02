import * as constants from "./actionTypes"
import { getHomeData ,getSowingData ,addSowingData ,removeSowingData,getUserData } from "./../Api/index"

//获取首页数据
export const getHomeDataAction= ()=>{
    return (dispatch)=>{
        //请求网络数据
        getHomeData().then(res=>{
            if(res.status_code == 200){
                const homeData=res.result[0];
                dispatch({
                    type: constants.IINIT_HOME_DATA,
                    homeData
                })
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//获取轮播图数据
export const getSowingDataAction= ()=>{
    return (dispatch)=>{
        //请求网络数据
        getSowingData().then(res=>{
            if(res.status_code == 200){
                const  sowingData=res.result;
                dispatch({
                    type: constants.IINIT_SOWING_DATA,
                    sowingData
                })
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//添加轮播图数据
export const addSowingDataAction= ()=>{
    return (dispatch)=>{
        //请求网络数据
        addSowingData().then(res=>{
            if(res.status_code == 200){
                const  sowingData=res.result;
                dispatch({
                    type: constants.ADD_SOWING_DATA,
                    sowingData
                })
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//删除轮播图
export const removeSowingDataAction= ()=>{
    return (dispatch)=>{
        //请求网络数据
        removeSowingData().then(res=>{
            if(res.status_code == 200){
                const  sowingData=res.result;
                dispatch({
                    type: constants.REMOVE_SOWING_DATA,
                    sowingData
                })
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//获取用户信息
export const getUserDataAction= (data,callback)=>{
    return (dispatch)=>{
        //请求网络数据
        console.log(data)
        getUserData(data).then(res=>{
            console.log(data,res)
            if(res.status_code == 200){
               
                const  userData=res.result;
                dispatch({
                    type: constants.IINIT_USER_DATA,
                    userData
                })
                callback&&callback(userData)
            }else{
                alert(res.result)
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}