const method = {
    //解决登录框弹出时遮罩层外部滑动的问题
    stopSlide() {
        document.body.style.overflow = 'hidden'
    },
    startSlide() {
        document.body.style.overflow = ''
    }
}

export default method