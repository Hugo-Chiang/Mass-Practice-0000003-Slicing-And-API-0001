const app = new Vue({
    el: '#app',
    data: {
        officialURL: 'http://multipleproduct.wacocolife.com/',
        nav: {
            slide: false,
            navLinks: ['首頁', '關於我們', '最新消息', '服務項目', 'Q&A活動'],
        },
        floatingOptions: {
            show: false,
            content: ['問題一', '問題二']
        },
        circleItems: ['項目一', '項目二', '項目三', '項目四'],
        communityButtons: {
            facebook: {
                class: ['facebook'],
                src: '/img/facebook_icon.png'
            },
            line: {
                class: ['line'],
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
                action: '按鈕',
                show: false
            },
            {
                ID: '02',
                date: '02/14',
                event: '文案二',
                action: '按鈕',
                show: false
            },
            {
                ID: '03',
                date: '01/12',
                event: '文案三',
                action: '按鈕',
                show: false

            },
        ],
        imgLinks: [],
        currentIntroduction: {
            title: '',
            note: ''
        }

    },
    methods: {
        // 方法（函式）：根據傳入索引切換文字介紹
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
    watch: {
        nav: {
            // 監看（方法）：漢堡選單摺疊時，浮動選單狀態一併重置
            handler(newObj) {
                let windowWidth = window.innerWidth;

                if (!newObj.slide && windowWidth <= 1280) {
                    this.floatingOptions.show = false;
                }
            },
            deep: true
        }
    }
})