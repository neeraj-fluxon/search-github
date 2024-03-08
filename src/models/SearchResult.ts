export interface SearchResult {
    key: string,
    result: {
        totalCount: number,
        items: any[]
    }
}