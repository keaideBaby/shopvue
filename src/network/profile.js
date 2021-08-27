import { request } from "./request.js";

export function getProfile() {
    return request({
        url: '/profile',
    })
}