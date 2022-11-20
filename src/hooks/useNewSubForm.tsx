import { useReducer } from "react"
import { Sub } from "../types"

interface FormState {
    inputValue: Sub
}


type FormReduceAction = {
    type: "Change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} |{
    type: "Clear Form"
}


const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    descripcion: ''
}


const formReduce = (state: FormState['inputValue'], action: FormReduceAction) => {
    switch (action.type) {
        case "Change_value":
            const {inputName, inputValue} = action.payload
            return{
                ...state,
                [inputName]: inputValue
        }
        case "Clear Form":
            return INITIAL_STATE
    }
}

const useNewSubForm = () => {
    return useReducer(formReduce, INITIAL_STATE)
}

export default useNewSubForm