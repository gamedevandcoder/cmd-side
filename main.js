function start() {
    speed = 199
    count = 0
    let string ="hello every one im gona show how to create this"
    newstr = ""
    bool = true
    tm = setInterval(addletter, speed)
    function addletter(){
        under ="_"
        if (count%2 == 1) {
            under=" "
        }
        else {
            under = "_"
        }
        if (bool == true){
            count += 1
            newstr = string.substring(0 , count)
            document.getElementById("startt").innerHTML = newstr+under
        }
        if (count == string.length) {
            bool = false
        }
    }
}