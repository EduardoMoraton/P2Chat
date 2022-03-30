'use strict'

class msg {
    constructor(pos, cont, time){
        this.pos = pos
        this.cont = cont
        this.time = time
    }

    node () {
        let base = document.createElement("div")
        base.classList.add("msg", this.pos)
        return base
    }
}

const inputTextBox = document.querySelector(".input-text input");
const sendMsg = document.querySelector(".send-btn").addEventListener("click", ()=>{
    console.log("clocl")
    let conversation = document.querySelector(".conversation")
    conversation.appendChild(new msg("rigth", 1, 2).node())
})

