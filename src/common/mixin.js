import Retop from 'components/common/returntop/Retop.vue'

export const retop = {
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        retop() {
            this.$refs.scroll.scrollTo(0, 0, 1000);
        },
        lsretop(position) {
            if (position < -2500) {
                this.isShow = true;
            } else {
                this.isShow = false
            }
        }
    },
    components: {
        Retop,
    }
}