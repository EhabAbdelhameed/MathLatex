import moment from "moment";

export function getDateDistanceInMonthsAndYears(startDate: any, endDate: any) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    var yearDiff: any = end.getFullYear() - start.getFullYear();
    var monthDiff: any = end.getMonth() - start.getMonth();

    if (monthDiff < 0) {
        yearDiff--
        monthDiff += 12;
    }

    return { years: yearDiff, months: monthDiff };
}

export function handleInfinityScroll(event: any) {
    let mHeight = event?.nativeEvent.layoutMeasurement.height;
    let cSize = event?.nativeEvent.contentSize.height;
    let Y = event?.nativeEvent.contentOffset.y;
    if (Math.ceil(mHeight + Y) >= cSize) return true;
    return false;
}

export const DateFormatter = (date: any) => {
    // here we were subtracting our date from current time which will be in milliseconds
    const dateDifferenceInTime =
        new Date().getTime() - new Date(date).valueOf()
    // new Date(date.toDate()).getTime();

    // conerting milli seconds to days
    // (1000 milliseconds * (60 seconds * 60 minutes) * 24 hours)
    const dateDifferenceInDays =
        dateDifferenceInTime / (1000 * 60 * 60 * 24);
    //After returning in particular formats as of our convinent
    if (dateDifferenceInDays < 1) {
        return moment(new Date(date).valueOf()).format("LT");// 10:04 am
    } else if (dateDifferenceInDays < 2) {
        return "Yesterday"; // just YesterDay
    } else if (dateDifferenceInDays <= 7) {
        return moment(new Date(date).valueOf()).format("dddd");//like monday , tuesday , wednesday ....
    } else {
        return moment(new Date(date).valueOf()).format("l");// if it was more than a week before it will returns as like 05/23/2022
    }
};