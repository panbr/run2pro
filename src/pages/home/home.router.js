/**
 * home page
 * @author: panbr
 * @time: 2018-09-12 10:09:00
 */

export default [{
    path: '/',
    name: 'home',
    component: () => {
        return import('./views/home')
    },
    meta: {
        bind: []
    }
}]
