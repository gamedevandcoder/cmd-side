    bool = true
    swp = false
    function show(){
        portfoilo = document.getElementById("portfoilo")
        portfoilo.style.opacity = 1
    }
    function stt(){
        if (bool == true){
            start()
        }
    }
    num = 0
    function start() {
            bool = false
            speed = 100
            count = 0

            let string ='Sudo -u Show My Portfoilo        <br>'+'>'
            newstr = ""
            under ="&nbsp"
            tm = setInterval(addletter, 100)
            tt = setInterval(addnum, 200)
            function addnum(){
                num+=1
            }
            function addletter(){
                under ="_"
                if (num %2 == 1) {
                    under="&nbsp"
                }
                else {
                    under = "_"
                }
                count += 1
                newstr = string.substring(0 , count)
                document.getElementById("startt").innerHTML =">"+"&nbsp"+newstr+"&nbsp"+under+"&nbsp"
                if (count == string.length) {
                    bool = false
                    swp = true
                }
                if (swp == true){
                    show()
                }
            }
        }
