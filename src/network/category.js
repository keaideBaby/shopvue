import { request } from './request.js'

export function getCategory() {
    return request({
        url: '/category',

    })
}
export function getMain(maitKey = 3627) {
    return request({
        url: '/subcategory',
        params: { maitKey }

    })
}