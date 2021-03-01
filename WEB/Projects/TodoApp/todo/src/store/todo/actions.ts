import {
    DESCRIPTION_CHANGED,
    TodoActionTypes
} from './types'

export function changeDescription(
    event: React.ChangeEvent<HTMLInputElement>
): TodoActionTypes {
    const newDesc = event.target.value

    return {
        type: DESCRIPTION_CHANGED,
        payload: newDesc
    }
}