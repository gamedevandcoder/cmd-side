    bool = true
    swp = false
    bl2 = false
    hover = false
    let string ='Sudo -u Show My Portfoilo        <br>'+'>'
    it = setInterval(changeimg, 1500)
    function show(){
        bl2=true

        
    }
    function curout(){
        hover = false
        string ='Sudo -u Show My Portfoilo        <br>'+'>'
        document.getElementById("u1").style.cursor = "default"
    }

    function cur(){
        if (swp==false){
        pass
        }
        else {
            hover = true
            document.getElementById("u1").style.cursor = "pointer"
            string ='Sudo -u Show My Portfoilo        <br>'+'>'+'&nbspDB Video Downloader'

        }
    }
    function changeimg() {
        if (num %2 == 1) {
            document.getElementById("img01").src = "https://raw.githubusercontent.com/gamedevandcoder/cmd-side/main/01.PNG";
        }
        else {
            document.getElementById("img01").src = "https://raw.githubusercontent.com/gamedevandcoder/cmd-side/main/02.PNG";
        }
    }
    function stt(){
        if (bool == true){
            start()
        }
        
    }
    function dbvd() {
        if (swp==true){
            if (hover==true){
        window.open("https://github.com/gamedevandcoder/db-video-downloader", '_blank').focus();
            }
        }
    }
    num = 0
    function start() {
            bool = false
            
            speed = 100
            count = 0
            
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
                    document.getElementById("hide").style.opacity = 1
                }
            }
        }