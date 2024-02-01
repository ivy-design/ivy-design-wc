import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
dayjs.extend(isLeapYear)

const genMonthSize = (month: any, year: any) => {
    const current = dayjs(`${year}-${month}-01`)
    const currentMonth = current.month() + 1
    let size = 0
    if (currentMonth === 2) {
        if (current.isLeapYear()) {
            size = 29
        } else {
            size = 28
        }
    } else if ([4, 6, 9, 11].includes(currentMonth)) {
        size = 30
    } else {
        size = 31
    }
    return size
}
const genDateList = (month: any, year: any) => {
    const current = dayjs(`${year}-${month}-01`)

    const currentMonth = current.month() + 1
    const week = current.day()
    const size = genMonthSize(month, year)
    const dateList = []
    for (let i = 1; i <= size; i++) {
        dateList.push({
            value: i,
            type: 'current'
        })
    }
    if (week !== 0) {
        const prevSize = genMonthSize(currentMonth - 1, year)
        for (let i = 0; i < week; i++) {
            dateList.unshift({
                value: prevSize - i,
                type: 'prev'
            })
        }
    }
    const diff = 42 - dateList.length
    if (diff > 0) {
        for (let i = 1; i <= diff; i++) {
            dateList.push({
                value: i,
                type: 'next'
            })
        }
    }
    return dateList
}

const genMonth = () => {
    const monthList = []
    for (let i = 1; i <= 12; i++) {
        monthList.push({
            value: i
        })
    }
    return monthList
}

export { genDateList, genMonth }
