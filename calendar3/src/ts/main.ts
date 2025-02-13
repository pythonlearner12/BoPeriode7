let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let lastdate = new Date(year, month + 1, 0).getDate();
let dateElement = document.getElementById("dates") as HTMLElement;
let monthYearTag = document.getElementById("monthYear") as HTMLElement

function calendar(nextMonth: number) {


    month += nextMonth
    let firstDay = new Date(date.getFullYear(), month + 0, 1).getDay()
    let monthYear = new Date(year, month, date.getDate());


    monthYearTag.innerText = `${monthYear.toLocaleString('default', { month: 'long' })} ${monthYear.getFullYear()}`
    dateElement.innerHTML = '';
    for (let i = 0; i < lastdate; i++) {
        if (i == 0) {
            dateElement.innerHTML +=
                `
            <button class="col-start-${firstDay} cursor-pointer aspect-square text-base p-5 rounded-[100%] bg-inherit text-slate-600 border-none hover:bg-slate-100 hover:text-slate-600 focus:bg-slate-100 focus:text-slate-600">
                <time datetime="2019-02-01">${i + 1}</time>
            </button>
            `;
        } else {
            dateElement.innerHTML +=
                `
            <button class="cursor-pointer text-base p-5 rounded-[100%] bg-inherit text-slate-600 border-none hover:bg-slate-100 hover:text-slate-600 focus:bg-slate-100 focus:text-slate-600">
                <time class="aspect-square" datetime="2019-02-01">${i + 1}</time>
            </button>
            `;
        }
    }
}
calendar(0);

let nextMonth = document.getElementById("nextMonth") as HTMLElement;
let prevMonth = document.getElementById("prevMonth") as HTMLElement;

nextMonth.addEventListener("click", () => {
    calendar(+1);
})
prevMonth.addEventListener("click", () => {
    calendar(-1);
})









// function monthYear() {
//     let selected_month = new Date().getMonth()
//     let selected_year = new Date().getFullYear()
//     console.log(selected_month)
//     console.log(selected_year)
// }
// monthYear()



// const month = new Date().toLocaleString('default', { month: 'long' });
// console.log(month)

// const year = new Date().toLocaleString(undefined, {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric"
// })
// console.log(year);



// Get the first day of the month
// let dayone = new Date(year, month, 1).getDay();

// Get the last date of the month

// Get the day of the last date of the month
