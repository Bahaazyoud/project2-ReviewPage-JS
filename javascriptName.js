/*data = [{}]
score = 0;

var Data = '';

info = document.getElementById("tb");

function reviewResult() {
    for (i = 0; i < 20; i++) {
        string = localStorage.getItem("questions" + (i + 1));
        data[i] = JSON.parse(string);
        console.log(data[i])
        if (data[i].choice == data[i].correct) {
            score++;
            Data += '<tr style="background-color: #BBF085;color:#023047">' + '<td>' + data[i].question + '</td>' + '<td>' + data[i].choice + '</td>' + '<td>' + data[i].correct + '</td>' + '</tr>';
        } else {
            Data += '<tr style="background-color: #F24726;color:#E5E5E5">' + '<td>' + data[i].question + '</td>' + '<td>' + data[i].choice + '</td>' + '<td>' + data[i].correct + '</td>' + '</tr>';
        }





    }

    localStorage.setItem("score", score);
    console.log(info);
    info.insertAdjacentHTML('beforeend', Data);

}


reviewResult();*/