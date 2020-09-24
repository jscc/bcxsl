import e from 'ezdo'
import './index.css'

class Home extends e.Node {
    constructor() {
        super()

        this.addClass('home')

        for(var i = 0; i < 2; i++) {
            let bar = new e.Node()
            let utype = i % 2 === 0 
            bar.text = utype
                ? `编号00${i}向您报道` 
                : `收到，归队，官方文档抄100遍`
            bar.addClass(utype ? 'soldier': 'senior')
            bar.addClass('bar')
            this.add(bar)

        }

        // 来这里抄 ezdojs.github.io

    }
}

export default Home