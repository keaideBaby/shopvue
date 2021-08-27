import { createStore } from 'vuex'


export default createStore({
    state: {
        car: [],
        // carnum: 0,
        carall: false,
        // totalprice:0
    },
    mutations: {
        all(state, onload) {
            state.carall = onload;
        },
        shopSel(state, onload) {


            state.car[onload.arg[0]].carmes.shopsel = onload.arg[1];
        },
        googSel(state, onload) {
            state.car[onload.arg[0]].carmes.sglist[onload.arg[1]].iglist[onload.arg[2]].googsel = onload.arg[3];
        },
        carpush(state, onload) {
            state.car.push(onload);

        },
        buynum(state, load) {
            console.log(load)
            state.car[load[1]].carmes.sglist[load[2]].iglist[load[3]].buynum += load[0];
        },
        igpush(state, load) {
            state.car[load[1]].carmes.sglist[load[2]].iglist.push(load[0]);
        },
        sgpush(state, load) {
            state.car[load[1]].carmes.sglist.push(load[0]);
        }
    },
    actions: {
        aTcar({ state, commit }, onload) {
            return new Promise((resolve, reject) => {
                    if (onload.carmes.sglist[0].iglist[0].curcolor == null || onload.carmes.sglist[0].iglist[0].cursize == null) {
                        reject("请选择商品属性");
                        return false
                    } else if (onload.carmes.sglist[0].iglist[0].buynum == 0) {
                        reject("请选择商品数量");
                        return false
                    }
                    let i = 0,
                        j = 0,
                        k = 0;
                    let same = false;
                    let gd = false;
                    let sd = false;
                    if (state.car.length == 0) {
                        // state.car.push(onload);
                        commit('carpush', onload)
                        resolve("添加成功");

                    } else {
                        for (var item of state.car) {
                            // console.log(item);

                            if (item.carmes.shopid == onload.carmes.shopid) {

                                sd = true;
                                // for (var j = 0; j < item.carmes.sglist.length; j++) {
                                item.carmes.sglist.forEach((element) => {

                                    if (element.goodid == onload.carmes.sglist[0].goodid) {
                                        gd = true;
                                        element.iglist.forEach((good) => {

                                                // console.log(good)
                                                if (good.cursize == onload.carmes.sglist[0].iglist[0].cursize && good.curcolor == onload.carmes.sglist[0].iglist[0].curcolor) {
                                                    // console.log(good.cursize == onload.carmes.sglist[0].iglist[0].curcolor && good.curcolor == onload.carmes.sglist[0].iglist[0].curcolor)
                                                    same = true;
                                                    console.log('same')
                                                        // good.buynum = good.buynum + onload.carmes.sglist[0].iglist[0].buynum;
                                                    commit('buynum', [onload.carmes.sglist[0].iglist[0].buynum, i, j, k]);
                                                    resolve("加购成功")
                                                    return false;
                                                }
                                                k++;
                                            })
                                            // return false;
                                        if (same == false) {
                                            console.log("no same")
                                                // element.iglist.push(onload.carmes.sglist[0].iglist[0])
                                            commit('igpush', [onload.carmes.sglist[0].iglist[0], i, j]);
                                            resolve("添加成功")
                                            return false;

                                        }
                                    }

                                    j++
                                })
                                if (gd == false) {
                                    console.log("gid false")
                                        // item.carmes.sglist.push(onload.carmes.sglist[0])
                                    commit('sgpush', [onload.carmes.sglist[0], i]);
                                    resolve("添加成功")
                                    return false
                                }
                                // return false;
                            }
                            i++;
                        }
                        if (sd == false) {
                            console.log("sid false")
                                // state.car.push(onload)
                            commit('carpush', onload)
                        }


                    }
                })
                // let i = 0,
                //     j = 0,
                //     k = 0;
                // let same = false;
                // let gd = false;
                // let sd = false;
                // if (state.car.length == 0) {
                //     // state.car.push(onload);
                //     commit('carpush', onload)

            // } else {
            //     for (var item of state.car) {
            //         // console.log(item);

            //         if (item.carmes.shopid == onload.carmes.shopid) {

            //             sd = true;
            //             // for (var j = 0; j < item.carmes.sglist.length; j++) {
            //             item.carmes.sglist.forEach((element) => {

            //                 if (element.goodid == onload.carmes.sglist[0].goodid) {
            //                     gd = true;
            //                     element.iglist.forEach((good) => {

            //                             // console.log(good)
            //                             if (good.cursize == onload.carmes.sglist[0].iglist[0].cursize && good.curcolor == onload.carmes.sglist[0].iglist[0].curcolor) {
            //                                 // console.log(good.cursize == onload.carmes.sglist[0].iglist[0].curcolor && good.curcolor == onload.carmes.sglist[0].iglist[0].curcolor)
            //                                 same = true;
            //                                 console.log('same')
            //                                     // good.buynum = good.buynum + onload.carmes.sglist[0].iglist[0].buynum;
            //                                 commit('buynum', [onload.carmes.sglist[0].iglist[0].buynum, i, j, k]);
            //                                 return false;
            //                             }
            //                             k++;
            //                         })
            //                         // return false;
            //                     if (same == false) {
            //                         console.log("no same")
            //                             // element.iglist.push(onload.carmes.sglist[0].iglist[0])
            //                         commit('igpush', [onload.carmes.sglist[0].iglist[0], i, j]);
            //                         return false;

            //                     }
            //                 }

            //                 j++
            //             })
            //             if (gd == false) {
            //                 console.log("gid false")
            //                     // item.carmes.sglist.push(onload.carmes.sglist[0])
            //                 commit('sgpush', [onload.carmes.sglist[0], i]);
            //                 return false
            //             }
            //             // return false;
            //         }
            //         i++;
            //     }
            //     if (sd == false) {
            //         console.log("sid false")
            //             // state.car.push(onload)
            //         commit('carpush', onload)
            //     }

            // }


        },

    },

    getters: {
        totalprice(state) {
            var p = 0;
            state.car.forEach((item) => {
                item.carmes.sglist.forEach((items) => {
                    items.iglist.forEach((it) => {
                        if (it.googsel) {
                            p = p + it.curprice * it.buynum;
                        }
                    })
                })
            });
            return parseInt(p);
        },
        totalnum(state) {
            var p = 0;
            state.car.forEach((item) => {
                item.carmes.sglist.forEach((items) => {
                    items.iglist.forEach((it) => {

                        p = p + it.buynum;

                    })
                })
            });
            return p;
        }
    },

})