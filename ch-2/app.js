const items = [
    {
        name: '鉛筆',
        price: '300',
        amount: 0
    },
    {
        name: 'ノート',
        price: '400',
        amount: 0
    },
    {
        name: '消しゴム',
        price: '500',
        amount: 0
    }
]

const vm = new Vue({
    el: '#app',
    data: {
        items: items
    },
    // フィルター
    filters: {
        numberWithDelimiter: function(value){
            if(!value){
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    methods: {
        doBuy: function(){
            alert(this.totalPriceWithTax + '円のお買い上げ！')
            this.items.forEach(function(item){
                item.amount = 0
            })
        }
    },
    // 算出プロパティ。インスタンス変数内のデータはthisで呼び出しできる
    computed: {
        totalPrice: function(){
            return this.items.reduce(function(sum, item){
                return sum + (item.price * item.amount)
            }, 0)
        },
        totalPriceWithTax: function(){
            return Math.floor(this.totalPrice * 1.1)
        },
        canBuy: function(){
            return this.totalPriceWithTax >= 1000;
        },
        errorMessageClass: function(){
            // v-show:classの先の部分。trueならばerrorクラスが追加される
            return {
                error: !this.canBuy
            }
        }
    }
})