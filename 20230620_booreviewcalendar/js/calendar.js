// 이번달
// 현재날짜, 시각 객체 만들자
var now = new Date();
// 현재 년
var year = now.getFullYear();
// 현재 월
var month = now.getMonth() + 1;
// 현재 일
var date = now.getDate();

const datesContainerDiv = document.querySelectorAll(".dates.container")[0];

const setCalendar = (year, month) => {
    
    // 제목달 보여주자
    // html -> js
    const titlemonthDiv = document.getElementsByClassName("month")[0];
    
    // .innerHTML = '${month}월';
    titlemonthDiv.innerHTML = `${month}월`
    
    // 달력 만들자
    // 해당 월의 1일이 무슨 요일
    var firstDateDay = new Date(year, month - 1, 1).getDay();
    
    // 해당 월의 마지막 날짜가 며칠 : 다음달의 1일 하루 전날(0일)
    var lastDate = new Date(year, month, 0).getDate();

    // 원래 있던 달력의 .date.item clear
    datesContainerDiv.replaceChildren();

    // .date.item{$} * lastDate
    // for 1 ~ lastDate
    for(let date=1; date<=lastDate; date++) {
        let dateItemDiv = document.createElement("div"); // <div></div>
        dateItemDiv.classList.add("date"); // <div class="date"></div>
        dateItemDiv.classList.add("item"); // <div class="date item"></div>
        dateItemDiv.innerHTML = date; // <div class="date item">날짜</div>
        
        // HTML에 .dates.container 자식으로 넣자
        datesContainerDiv.appendChild(dateItemDiv);

    }

    // 1일을 firstDateDay로 옮기자 5 -> 6
    // .dates.container의 자식 중 첫째자식(1일) style-grid-column-start: 6 (9월달의경우)
    let firstDateDiv = datesContainerDiv.firstElementChild;
    // CSS { grid-column-start: firstDateDay + 1; }
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

    // 토 : 파랑
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${7-firstDateDay})`);
    for (let dateItem of saturdayDivs) {
        dateItem.style.color = "blue";
    }

    // 일 : 빨강
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${(8-firstDateDay)%7})`);
    for (let dateItem of sundayDivs) {
        dateItem.style.color = "red";
    }

}
setCalendar(year, month);

// < : 이전달
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    if(month == 0) {
        year--;
        month = 12;
    }
    // 데이터 넣었다가 빼기
    // let thisMonthDateObject = new Date(year, month - 1);
    // year = thisMonthDateObject.getFullYear();
    // month = thisMonthDateObject.getMonth() + 1;
    setCalendar(year, month);
}
// leftDiv.addEventListener("click", () => console.log(`${month}월`));

// > : 이후달
const rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if(month == 13) {
        year++;
        month = 1;
    }
    setCalendar(year, month);
}

const thismonthDiv = document.getElementsByClassName("month")[0];
thismonthDiv.onclick = () => {
    now = new Date();
    year = now.getFullYear();
    month = now.getMonth()+1;
    setCalendar(year, month);
}