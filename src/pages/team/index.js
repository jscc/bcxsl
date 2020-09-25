import e from 'ezdo'
import './index.css'

// 成员组件， 建议一个文件里不要存放太多同级 class，可以在以目录的方式来存在更合理
class Member extends e.Node {
    constructor(data) {
        super()


        

        // 一个成员里包含
        let photo = new e.Image()
        photo.src = data.photo
        this.add(photo)

        let name = new e.Node()
        name.text = data.name
        this.add(name)

        let job = new e.Node()
        job.text = data.job
        this.add(job)
    }
    
}


class Team extends e.Node {
    constructor() {
        super()
        this.initData()
        this.initView()
    }

    initData() {
        this.list = [
            {
                photo: 'http://localhost:5000/171143.png',
                name: '某某某',
                job: '职业经理人'
            },
            {
                photo: 'http://localhost:5000/171233.png',
                name: '某某某',
                job: '职业经理人'
            },
            {
                photo: 'http://localhost:5000/171318.png',
                name: '某某某',
                job: '职业经理人'
            },
            {
                photo: 'http://localhost:5000/171337.png',
                name: '某某某',
                job: '职业经理人'
            },
        ]
    }

    initView() {
        // 团队

        // title 
        let title = new e.Node('h2')
        title.text = '我的团队'
        this.add(title)

        // 团队成员 (以4个为例子)
        // 数据驱动
        this.list.forEach(data => {
            let m = new Member(data)
            m.addClass('member')
            this.add(m)
        })
    }
}



export default Team