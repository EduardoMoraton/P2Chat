'use strict';
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

const peer = new Peer(prompt())

let connectPeer = (peer, id) => {
    let conn = peer.connect(id);
    conn.on('open', ()=>{
        console.log("connected")
    })
}

peer.on('connection', ()=>console.log("Connected"))

const contact = document.querySelector(".contact1").addEventListener("click", ()=>{
    connectPeer(peer, prompt())
})

const sendMsg = document.querySelector(".send-btn").addEventListener("click", ()=>{
    let conversation = document.querySelector(".conversation")
    conversation.prepend(new msg("right", document.querySelector(".input-text input").value, 2).node())
    let id = document.querySelector(".tmp-id").value

})




