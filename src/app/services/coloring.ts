export function calculateColor(pos: number): string {
    pos = Math.min(100, Math.max(0, pos));
    const whiteToYellow = Math.min(Math.max((pos) * 3, 0), 100); //0 100 600 900 
    const yellowToGreen = Math.min(Math.max((pos - 34) * 3, 0), 100);//0 0 100 600
    const greenToBlue = Math.min(Math.max((pos - 67) * 3, 0), 100);//0 0 0 100
    // 0=>255 255 255
    // 33=>255 255 0
    // 66=>0 255 0
    //99=>0 0 255
    const colorRed = Math.floor(2.55 * (100 - yellowToGreen));
    const colorGreen = Math.floor(2.55 * (100 - greenToBlue));
    const colorBlue = Math.floor(2.55 * (greenToBlue + 100 - whiteToYellow));
    return `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
}