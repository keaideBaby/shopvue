import { request } from "./request.js";

export function getDetaildata(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })

}
export function getCommenddata() {
    return request({
        url: '/recommend'
    })
}
export function itemShop(item, itemI, itemS) {
    this.columns = item.columns;

    this.discountBgcolor = itemI.discountBgColor;
    this.discountDesc = itemI.discountDesc;
    this.title = itemI.title;
    this.price = itemI.price;
    this.oldPrice = itemI.oldPrice;

    this.service = itemS.services;
    this.sname = itemS.name;
    this.shoplogo = itemS.shopLogo;
    this.shopUrl = itemS.shopUrl;
    this.csell = itemS.cSells;
    this.cGoods = itemS.cGoods;
    this.score = itemS.score;


}
export function paramsShop(itemI, itemR) {
    this.set = itemI.set;
    this.keyI = itemI.key;
    this.disclaimer = itemR.disclaimer;
    this.keyr = itemR.key;
    this.table = itemR.tables[0];

}
export function addCar(itemI, itemK, itemS) {
    this.price = itemI.lowNowPrice;
    this.id = itemI.iid;
    this.shopid = itemI.shopId;
    this.shopname = itemS.name;
    this.title = itemI.title;
    this.topimg = itemI.topImages[0];
    this.des = itemI.desc;
    this.message = itemK.props;

}