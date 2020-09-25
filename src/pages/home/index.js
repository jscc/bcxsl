import e from 'ezdo'
// import './index.css'


class Home extends e.Node {
    constructor() {
        super()
        this.initData()
        this.initView()
    }

    initData() {
        this.list = [
            {
                photo: 'D:\\images\\171143.png',
                name: '某某某',
                job: '职业经理人'
            },
            {
                photo: 'D:\\images\\171233.png',
                name: '某某某',
                job: '职业经理人'
            },
            {
                photo: 'D:\\images\\171318.png',
                name: '某某某',
                job: '职业经理人'
            },
            {
                photo: 'D:\\images\\171337.png',
                name: '某某某',
                job: '职业经理人'
            },
        ]
    }

    initView() {
        // 团队

        // title 
        let title = new e.Node('h2')
        title.text = '首页，测试'
        this.add(title)

        // 团队成员 (以4个为例子)
        // 数据驱动
        this.list.forEach(data => {
            // let m = new Member(data)

            // this.add(m)
            let d = new e.Node()
            d.text = data.name
            this.add(d)
        })
    }
}


export default Home