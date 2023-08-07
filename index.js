function shout(word) {
    return word.toUpperCase()

}
shout("navita")


function whisper(string) {
    return string.toLowerCase()
}
whisper("NAVITA")


function logShout(string) {
    console.log(string.toUpperCase())
}
logShout("navita")


function logWhisper(string) {
    console.log(string.toLowerCase())
}
logWhisper("NAVITA")


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"    
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }
    else if (string === "Let's have dinner together!") {
        return "I would love to!" 
    }
}
sayHiToHeadphonedRoommate("HI")



