const app = Vue.createApp({
    data() {
        return {
            isVisible: false,
            colorText: '',
            classText: ''
        }
    },
    methods: {
        toggleClass() {
            console.log('test');
            this.isVisible = !this.isVisible;
        },
        onEnter(event) {
            this.colorText = event.target.value;
            this.classText = event.target.value;
            console.log(this.colorText);
        }
    }
});
app.mount('#assignment');