let vm = new Vue({
    el:'#app',
    data:{
        firstname: "eddy",
        lastname : "mandran",
        fullname: ""
    },

    watch: {
        fullname: function (value){
            console.log('watch', value)
        }
    }
    /* computed: {
        fullname:{
            get: function () {
                return this.firstname + ' ' + this.lastname
            },
            set: function (value){
                let parts = value.split(' ')
                this.firstname = parts[0]
                this.lastname = parts[1]
            }
        }
        
    } */
})