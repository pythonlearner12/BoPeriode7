const dateElement = document.getElementById("date") as HTMLElement;
const currentDateElement = document.getElementById("currentDate") as HTMLElement;
const nextMonthElement = document.getElementById("nextMonth") as HTMLElement;
const prevMonthElement = document.getElementById("prevMonth") as HTMLElement;

if (!dateElement || !currentDateElement || !nextMonthElement || !prevMonthElement) {
    throw new Error("One or more required elements were not found in the DOM.");
}

let currentDate = new Date();
function getFirstDayOfMonth(date: Date): number {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
}

function calendar(monthChange: number = 0): void {
    currentDate.setMonth(currentDate.getMonth() + monthChange);
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);

    currentDateElement.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
    dateElement.innerHTML = Array.from({ length: daysInMonth }, (_, i) => {
        const gridStart = i === 0 ? `style="grid-column-start: ${firstDayOfMonth+1}"` : '';

        return `
            <button
            ${gridStart}
            class="flex items-center justify-center rounded-full cursor-pointer text-base p-5 bg-inherit text-slate-600 border-none hover:bg-slate-100 focus:bg-slate-100" 
            aria-label="Select day ${i + 1}">
                <time>${i + 1}</time>
            </button>
        `;

    }).join('');
}
calendar();
nextMonthElement.addEventListener("click", () => calendar(1));
prevMonthElement.addEventListener("click", () => calendar(-1));