import { useEffect } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import WorkoutDetails from "../components/workoutDetails"
import WorkoutForm from "../components/workoutForm"
import { useAuthContext } from "../hooks/userAuthContext"

const Home = () => {

    const {workouts, dispatch} = useWorkoutContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                const json = await response.json()

                if (response.ok) {
                    dispatch({ type: 'SET_WORKOUTS', payload: json })
                }
            } catch (error) {
                console.error('Error fetching workouts', error)
            }
        }

        if (user) {
            fetchWorkouts()
        }

    }, [dispatch, user])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home