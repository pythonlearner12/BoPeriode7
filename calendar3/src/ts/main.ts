let date = new Date();
let monthOffsetvar = date.getMonth();
let year = date.getFullYear();

function first_day() {
    const newDate = new Date();
    newDate.setMonth(monthOffsetvar);
    newDate.setDate(1);
    const firstDayVar = newDate.getDay();
    const adjustedDay = (firstDayVar === 0) ? 6 : firstDayVar - 1;

    return adjustedDay;
}


const dateElement = document.getElementById("dates") as HTMLElement;
const monthYearTag = document.getElementById("monthYear") as HTMLElement
function calendar(monthOffset: number) {
    monthOffsetvar += monthOffset
    let firstDay = first_day();
    let monthYear = new Date(year, monthOffsetvar);
    let lastdate = new Date(year, monthOffsetvar + 1, 0).getDate();

    monthYearTag.innerText = `${monthYear.toLocaleString('default', { month: 'long' })} ${monthYear.getFullYear()}`
    dateElement.innerHTML = Array.from({ length: lastdate }, (_, i) => {
        if (i === 0) {
            return `
                <button style="grid-column-start: ${firstDay+1}" class="cursor-pointer aspect-square text-base p-5 rounded-[100%] bg-inherit text-slate-600 border-none hover:bg-slate-100 hover:text-slate-600 focus:bg-slate-100 focus:text-slate-600">
                    <time>${i + 1}</time>
                </button>
            `;
        }
        return `
            <button class="cursor-pointer text-base p-5 rounded-[100%] bg-inherit text-slate-600 border-none hover:bg-slate-100 hover:text-slate-600 focus:bg-slate-100 focus:text-slate-600">
                <time class="aspect-square">${i + 1}</time>
            </button>
        `;
    }).join('');
}
calendar(0);

const nextMonth = document.getElementById("nextMonth") as HTMLElement;
const prevMonth = document.getElementById("prevMonth") as HTMLElement;

nextMonth.addEventListener("click", () => {
    calendar(+1);
})
prevMonth.addEventListener("click", () => {
    calendar(-1);
})

