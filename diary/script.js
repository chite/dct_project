
    let contents = document.getElementsByClassName("contents");
    let diarys = document.getElementsByClassName("diary");
    let diary1 = document.getElementById("diary1");

    let now;

    function hideContent(){
        for(let i=0;i<contents.length;i++){
            diarys[i].style.backgroundColor = "transparent";
            diarys[i].getElementsByClassName('diaryDescription')[0].style.color = "rgb(159,159,159)";
            contents[i].style.display = "none";
        }
    }
    function setContent(number){
        hideContent();
        let diary = document.getElementById('diary' + number);

        for(let i=0;i<diarys.length;i++){
             diarys[i].removeEventListener('mouseover', add)
            diarys[i].removeEventListener('mouseout', cancel)
        }

        diary.style.backgroundColor = "rgb(200,150,27)";
        diary.getElementsByClassName('diaryDescription')[0].style.color = 'white';
        let content = document.getElementById('content' + number);
        content.style.display = "block";
        now = number;
        for(let i=0;i<diarys.length;i++){

            if(i+1 != parseInt(now)) {
                diarys[i].addEventListener('mouseover', add)
                diarys[i].addEventListener('mouseout', cancel)
            }

        }
    }

    function add(event){
        this.style.backgroundColor = "rgb(200,150,27)";
        this.getElementsByClassName('diaryDescription')[0].style.color = 'white';
    }

    function cancel(event){
        this.style.backgroundColor = "transparent";
        this.getElementsByClassName('diaryDescription')[0].style.color = "rgb(159,159,159)";
    }

