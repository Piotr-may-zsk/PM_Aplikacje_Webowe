export interface Post {
    id: number,
    title: string,
    content: string,
    ownerId: number,
    imageId?: number
}