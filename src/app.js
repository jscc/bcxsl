import ez from 'ezdo'
import './base/reset.css'
import Home from './pages/index'
import Router from './router'

// router ...
//

let home = new Home()
new Router(home)

ez.render(home)


