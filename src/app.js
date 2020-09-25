import aut from 'aut.js'
import './base/reset.css'
import Home from './pages/index'
import Router from './router'

// router ...
//

let home = new Home()
new Router(home)

aut.render(home)


