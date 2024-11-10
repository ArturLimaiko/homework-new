import {initialPeople, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {

        case 'sort': { // by name
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name.localeCompare(b.name))
            } else {
                return [...state].sort((a, b,) => b.name.localeCompare(a.name))
            }
        }

        case 'check': {
            return [...state].filter(a => a.age > action.payload) // need to fix
        }

        default:
            return state
    }
}
