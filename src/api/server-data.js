import request from './request'
const COMMOM_URL = 'https://cnodejs.org/api/v1'
export const fetchCharptersByTopic = (params) => {
    return request({
        method: 'get',
        url: `${COMMOM_URL}/topics`,
        params,
    })
}
