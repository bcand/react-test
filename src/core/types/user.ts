export interface IUser {
    id ?: string
    avatar ?: string
    createdAt: Date
    name: string
}


export class User implements IUser {
    id: string
    avatar : string
    createdAt: Date
    name: string

    constructor(id:string, avatar:string, name:string, createdAt:string) {
        this.id = id;
        this.avatar = avatar;
        this.name = name;
        this.createdAt = new Date(createdAt)
    }
}