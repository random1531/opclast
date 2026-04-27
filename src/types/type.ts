type PropertyHost = {
    id: number
    name: string
    picture: string | null
}

type ResponseConnec ={
    token:string,
    user:UserPublic
}

type UserPublic = {
    id: number
    name: string
    picture: string | null
    role: "owner" | "client" | "admin"
}

type UserCreate ={
    name:string
    picture:string
    role: "owner" | "client" | "admin"
}

type UserUpdate ={
    name:string
    picture:string
    role: "owner" | "client" | "admin"
}


type PropertyBase = {
    id: string
    slug: string
    title: string
    description: string
    cover: string
    location: string
    price_per_night: number
    rating_avg: number
    ratings_count: number
    host: PropertyHost
}

type PropertyDetail = {
    id: string
    slug: string
    title: string
    description: string
    cover: string
    location: string
    price_per_night: number
    rating_avg: number
    ratings_count: number
    host: PropertyHost
    pictures: string[]
    equipments: string[]
    tags: string[]
}

type Rating = {
    id: string
    score: string
    created_at: string
    user: UserPublic
}

type RatingCreated={
    user_id:number
    score: number 
    comment:string
}

type RatingSummary ={
    rating_avg:number
    ratings_count:number
    ratings:Rating[]
}