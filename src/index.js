import Button from './Button'

export default {
    install(Vue, options) {
        Vue.component('v-button', Button)

        Vue.mixin({
            mounted() {
                console.log("vButton Emmbed!")
            }
        })
    }
}