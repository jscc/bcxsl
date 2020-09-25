import e from 'ezdo'
import './index.css'

class Nav extends e.Node {
    constructor() {
        super()

        this.addClass('main-nav')

        // 改造一下

        const list = [
            {
                name: 'Aut.js',
                link: 'https://autjs.github.io'
            },
            {
                name: 'My Team',
                link: '/team'
            },
            {
                name: 'My Blog',
                link: 'http://blog.syncwe.com'
            }
        ]

        list.forEach(data => {
            let item = new e.Node('a')
            item.addClass('nav-item')
            item.text = data.name
            if (data.link.includes('://')) {
                item.addAttr('href', data.link)
                item.addAttr('target', '_blank')
            } else {
                item.addAttr('href', 'javascript:')
                item.path = data.link
                item.on('click', this.onclick, this)
            }
            
            this.add(item)
        })
    }

    onclick(item) {
        e.router.path = item.path
    }
}

export default Nav