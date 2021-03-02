// コンポーネントの生成を宣言、第一引数にコンポーネント名、第二引数に内容などを入力
Vue.component('list-item', {
    template: '<li>foo</li>'
})

new Vue({
    el: '#example'
})