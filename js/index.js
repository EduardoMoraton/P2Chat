'use strict'

class msg {
    constructor(pos, cont, time){
        this.pos = pos
        this.cont = cont
        this.time = time
    }

    node () {
        let base = document.createElement("div")
        let msgBox = document.createElement("div")
        let content = document.createElement("div")
        let time = document.createElement("div")
        let status = document.createElement("div")
        base.classList.add("msg", this.pos)
        msgBox.classList.add("msg-box")
        content.classList.add("content")
        content.textContent = this.cont;
        time.classList.add("time")
        msgBox.appendChild(content)
        msgBox.appendChild(time)
        msgBox.appendChild(status)
        base.appendChild(msgBox)
        console.log(base)
        return base
    }
}

const inputTextBox = document.querySelector(".input-text input");
const sendMsg = document.querySelector(".send-btn").addEventListener("click", ()=>{
    console.log("clocl")
    let conversation = document.querySelector(".conversation")
    conversation.appendChild(new msg("left", "hola marcos", 2).node())
})

