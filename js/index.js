
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
let conversation = document.querySelector(".conversation")
let myid = document.querySelector(".my-id")
let send = document.querySelector(".send-btn")
let call = document.querySelector(".call")
let status = document.querySelector(".status")


var peer = new Peer(prompt(),{debug: 3,
  host: '0.peerjs.com',
  port: 443})
var conn;

call.addEventListener("click", ()=>{
  status.textContent = "Connecting"
  conn = peer.connect(document.querySelector(".id-out").value)
  conn.on("open", ()=>{
    status.textContent = "CONECTED"
  })
  conn.on("data", (data)=>{
    console.log(data)
    conversation.prepend(new msg("left", data, "hola").node())
  })
})

send.addEventListener("click", ()=>{
  let data = document.querySelector(".input-msg").value
  conn.send(data)
  conversation.prepend(new msg("right", data, "a").node())
})

peer.on("open", (id)=>myid.textContent=id)

peer.on("connection", (con)=>{
  status.textContent = "CONECTED"
  conn = con
  con.on("data", (data)=>{
    console.log(data)
    conversation.prepend(new msg("left", data, "hola").node())
  })
})




