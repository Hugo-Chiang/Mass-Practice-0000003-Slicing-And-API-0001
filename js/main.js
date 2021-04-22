let app = new Vue({
    el: '#app',
    data: {
        navLinks: ['首頁', '關於我們', '最新消息', '服務項目', 'Q&A活動'],
        circleItems: ['項目一', '項目二', '項目三', '項目四'],
        communityButtons: {
            facebook: {
                src: '/img/facebook_icon.png'
            },
            line: {
                src: '/img/line_icon.png'

            }
        },
        listItems: [
            {
                ID: '01',
                date: '08/14',
                event: '文案一'
            },
            {
                ID: '02',
                date: '02/14',
                event: '文案二'
            },
            {
                ID: '03',
                date: '01/12',
                event: '文案三'
            },
        ]
    }
})