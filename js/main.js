const app = new Vue({
    el: '#app',
    data: {
        officialURL: 'http://multipleproduct.wacocolife.com/',
        navLinks: ['首頁', '關於我們', '最新消息', '服務項目', 'Q&A活動'],
        floatingOptions: {
            show: false,
            content: ['問題一', '問題二']
        },
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
                ID: 'ID',
                date: '日期',
                event: '事件',
                action: '刪除'
            },
            {
                ID: '01',
                date: '08/14',
                event: '文案一',
                action: '按鈕'
            },
            {
                ID: '02',
                date: '02/14',
                event: '文案二',
                action: '按鈕'
            },
            {
                ID: '03',
                date: '01/12',
                event: '文案三',
                action: '按鈕'
            },
        ],
        imgLinks: [],
        currentIntroduction: {
            title: '',
            note: ''
        }

    },
    methods: {
        switchIntroduction(index) {
            this.currentIntroduction.title = this.imgLinks[index].title;
            this.currentIntroduction.note = this.imgLinks[index].note;
        }
    },
    created() {
        const api = `https://multipleproduct.wacocolife.com/api/gallery/showClient/1`;
        const vm = this;

        this.$http.post(api)
            .then((response) => {
                vm.imgLinks = response.data.items;
                vm.currentIntroduction.title = vm.imgLinks[0].title;
                vm.currentIntroduction.note = vm.imgLinks[0].note;
            })
            .catch((error) => {
                console.log(error);
            });

    },
})