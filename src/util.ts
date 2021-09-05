import { useEffect, useState } from "react";

export function useTime() {
    const [displayedDate, setDisplayedDate] = useState(new Date())

    var timeout = setTimeout(update, 0);

    function update() {
        const now = new Date();
        setDisplayedDate(now);
        const millisUntilNextUpdate = (60 - now.getSeconds()) * 1000 + 5;
        timeout = setTimeout(update, millisUntilNextUpdate);
    }


    // cleanup
    useEffect(() => {
        return () => clearTimeout(timeout);
    });

    var hour = displayedDate.getHours() % 12;
    if (hour === 0)
    hour = 12;

    return zeroPad(hour)
     + ":"
     + zeroPad(displayedDate.getMinutes())
}

/// Given a positive integer, returns it as a string
/// Zero-pads it to two digits, e.g. 5 -> 05
function zeroPad(num: number): string {
    if (num < 10)
        return `0${num}`
    else
        return num.toString()
}