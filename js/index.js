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
const Peer = require('simple-peer')

var peer1 = new Peer({ initiator: true })
var peer2 = new Peer()

peer1.on('signal', data => {
  // when peer1 has signaling data, give it to peer2 somehow
  peer2.signal(data)
})

peer2.on('signal', data => {
  // when peer2 has signaling data, give it to peer1 somehow
  peer1.signal(data)
})

peer1.on('connect', () => {
  // wait for 'connect' event before using the data channel
  peer1.send('hey peer2, how is it going?')
})

peer2.on('data', data => {
  // got a data channel message
  console.log('got a message from peer1: ' + data)
})

const sendMsg = document.querySelector(".send-btn").addEventListener("click", ()=>{
    let conversation = document.querySelector(".conversation")
    conversation.prepend(new msg("right", document.querySelector(".input-text input").value, 2).node())

})




