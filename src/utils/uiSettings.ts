
const sliceStr = (str: string, count: number) => {
    return str.length > count ? `${str.slice(0, count)}....${str.slice(str.length - count, str.length)}` : str
}
const uiSettings = {
    sliceStr,
}
export default uiSettings