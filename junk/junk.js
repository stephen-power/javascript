function printableMessage(){
    var message = 'hello'
    function setMessage(newMessage){
        if (!newMessage) throw new Error('cannot set empty message')
        message = newMessage
    }
    function getMessage(){
        return message
    }
    function printMessage(){
        console.log(message)
    }

    return{
        setMess: setMessage,
        getMess: getMessage,
        printMess: printMessage
    }
}

var awesome1 = printableMessage()
awesome1.printMess()
var awesome2 = printableMessage()
awesome2.setMess('hi')
awesome2.printMess()
awesome1.printMess()
