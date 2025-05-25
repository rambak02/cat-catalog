export type TCat = {
id: number,
url: string,
} 

export type TPageInfo = {
page: string,
setPage: (page: string) => void;
pageNumber: number,
setPageNumber: (pageNumber: number) => void
}