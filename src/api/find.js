import request from '@/utils/request'

const find = {
    getBanner() {
        return request({
            url: '/banner?type=1',
            method: 'get',
            params: {}
        })
    },
    // 推荐歌单
    getsongList(limit = 30, order = 'hot', cat) {
        return request({
            url: '/top/playlist',
            method: 'get',
            params: {
                limit,
                order,
                cat
            }
        })
    },
    // 新碟
    getnewDish(limit = 10, offset) {
        return request({
            url: '/top/album',
            method: 'get',
            params: {
                limit,
                offset
            }
        })
    },
    // 新歌
    /**
 * 调用此接口 , 可获取新歌速递
 * @param {*} type 地区类型 id,对应以下:
 * 全部:0 华语:7 欧美:96 日本:8 韩国:16
 */
    getnewSong(type = 16) {
        return request({
            url: '/top/song',
            method: 'get',
            params: {
                type
            }
        })
    },
}

export default find