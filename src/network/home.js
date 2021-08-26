import {request} from './request'

export function getHomeData(){
  return request({
    url:'/home'
  })
}

export function getHomeGoods(type,_limit){
  return request({
    url:'/goods',
    params:{
      type,
      _limit
    }
  })
}