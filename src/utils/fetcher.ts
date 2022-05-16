export const fetcher = (url: RequestInfo) => fetch(url).then(res => res.json())
