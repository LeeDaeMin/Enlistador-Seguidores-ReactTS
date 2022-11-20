/* contrato que tiene que tener el objeto */
export interface Sub{
    nick: string,
    avatar: string,
    subMonths: number,
    descripcion?: string
}

export type SubsResponseFromApi = Array<{
    nick: string,
    months: number
    profileUrl: string
    description: string
}>
