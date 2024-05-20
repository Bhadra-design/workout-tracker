import { useAuthContext } from "./userAuthContext"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch: dispatchWorkout} = useWorkoutContext()
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        dispatchWorkout({type: 'SET_WORKOUTS', payload: null})
    }
    return {logout}
}