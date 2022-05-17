let today = new Date()

//Day:
function showDay() {
    let day = today.getDay();
    let dayList = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let dayDisplay = dayList[day];
    document.getElementById("day").innerText = dayDisplay;
    document.getElementById("day").textContent = dayDisplay;
    setTimeout(showDay, 21600000);
}

showDay();

//Hour:
function showHour() {
    let hour = today.getHours();
    if (hour == 0) {
        hour == 24;
    }
    let hourDisplay = (hour < 10) ? "0" + hour : hour;
    document.getElementById("hour").innerText = hourDisplay;
    document.getElementById("hour").textContent = hourDisplay;
    setTimeout(showHour, 1000);
}

showHour();

//Minute:
function showMinute() {
    let minute = today.getMinutes();
    let minuteDisplay = (minute < 10) ? "0" + minute : minute;
    document.getElementById("minute").innerText = minuteDisplay;
    document.getElementById("minute").textContent = minuteDisplay;
    setTimeout(showMinute, 1000);
}

showMinute();

//Second:
function showSecond() {
    let second = today.getSeconds();
    let secondDisplay = (second < 10) ? "0" + second : second;
    document.getElementById("second").innerText = secondDisplay;
    document.getElementById("second").textContent = secondDisplay;
    setTimeout(showSecond, 1000);
}

showSecond();