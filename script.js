const { createApp } = Vue

const app = createApp({
    // template: "<h1>Hello world</h1>"
    data() {
        return {
            showUser: true,
            number: 0,
            world: "world",
            users: [
                {
                    img: "assets/profile.png",
                    name: "Ahmad Kun",
                    message: "Yo ndak tau kok tanya saya",
                    color: true
                },
                {
                    img: "assets/profile.png",
                    name: "Ahmad Kun",
                    message: "Yo ndak tau kok tanya saya",
                    color: false
                },
                {
                    img: "assets/profile.png",
                    name: "Ahmad Kun",
                    message: "Yo ndak tau kok tanya saya",
                    color: true
                }
            ],
            url: "http://instagram.com/fit.tra_"
        }
    },
    methods: {
        changeName() {
            this.world = "Dunia"
        },
        toggleButton() {
            this.showUser = !this.showUser
        },
        eventHandler(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        }
    },
    computed: {
        filteredUsers() {
            return this.users.filter((user) => user.color)
        }
    }
})


app.mount('#root')