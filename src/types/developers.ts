export type Role = 'Estudiante de desarrollo' | 'Diseñador UX/UI' | 'Desarrollador web' | 'Desarrollador móvil'

export interface Developer {
    id: number
    name: string
    lastName?: string
    role: Role
    skills: string[]
    available: boolean
}