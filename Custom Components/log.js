AFRAME.registerComponent("log", {
    schema: {
        message: {
            type: "string",
            default: "200 OK"
        },
    init: function(){
        console.log(this.data.message)
        }
    }
})