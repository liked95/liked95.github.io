import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants"


export const initState = {
    job: "",
    jobs: [],
}






function reducer(state, action) {
    console.log("Action", action)
    console.log("Prev state", state)

    let newState

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:

            newState = {
                ...state, jobs: [...state.jobs, action.payload]
            }
            break

        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.id, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break

        default:
            throw new Error("invalid state")
    }

    console.log("New state", newState)

    return newState
}

export default reducer
