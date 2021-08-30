import {request} from './request'

export function getDetail(id){
  return request({
    url:'/detail',
    params:{
      id
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.logo
    this.name = shopInfo.name
    this.score1 = shopInfo.score1
    this.score2 = shopInfo.score2
    this.score3 = shopInfo.score3
    this.goodsCount = shopInfo.goodsCount
    this.sells = shopInfo.sells
  }
}