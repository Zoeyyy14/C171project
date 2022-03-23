AFRAME .registerComponent("markerHandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker is found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost()
        })
    },

    askOrderNumber:function(){
        swal({
            title:"Welcome to SweetToy",
            content:{
                element:"input",
                attribute:{
                    placeHolder:"Type Your Order Number",
                    type:"number",
                    min:1
                }
            },
            closeOnCLickOutside:false,
        })
        .then(inputValue=>{
            tableNumber=inputValue
        })
    },

    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display=("flex")

        var ratingButton=document.getElementById("rating-button")
        var orderButton=document.getElementById("order-button")
        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Working Progress"
            })
        })
        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks For Order",
                text:"Your Order Will be Arrive Soon"
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display=("none")
    }
})