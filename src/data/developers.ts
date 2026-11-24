import type { Developer } from '../types/developers' 

export const developers: Developer[] = [
    {
        id: 1,
        name: 'Juan',
        lastName: 'Pérez',
        role: 'Desarrollador web',
        skills: ['JavaScript', 'React', 'Node.js'],
        available: true
    },
    {
        id: 2,
        name: 'María',
        lastName: 'Gómez',
        role: 'Diseñador UX/UI',
        skills: ['Figma', 'Sketch', 'Adobe XD'],
        available: false
    }
]