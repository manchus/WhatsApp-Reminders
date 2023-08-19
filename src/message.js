function sndMsg(client, contact, msg){
    return client.sendMessage(contact, msg);
}

module.exports = {
    sndMsg, 
}
