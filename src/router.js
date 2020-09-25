
import e from 'ezdo'
import Router from 'aut-router'

import Team from './pages/team'
import Home from './pages/home'

class RouterManager {
    constructor(container) {
        let router = new Router({
            view: container,
            routes: [
                { path: '/', class: Home },
                { path: '/team', class: Team }
            ]
        })
        
        router.path = '/'
        e.use(router)
    }
}

export default RouterManager