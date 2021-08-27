import Toast from './Toast.vue'

const obj = {}

obj.install = function(createApp) {
    const toastConstruct = createApp.extends(Toast);
    const toast = new toastConstruct();
    toast.$mount(document.createElement('div'));
    document.body.appendChild(toast.$el);
    // console.log(toast.$el)
    createApp.prototype.$toast = Toast;
}