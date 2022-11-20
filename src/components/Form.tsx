import {Sub} from '../types'
import  useNewSubForm  from "../hooks/useNewSubForm"

interface FormProps{
    onNewSubs: (newSub: Sub) => void
}

const Form = ({onNewSubs} : FormProps) => {
    // const [inputValue, setInputValue] = useState<FormState['inputValue']>(INITIAL_STATE);

    const [inputValue, dispatch] = useNewSubForm()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSubs(inputValue)
        dispatch({ type: "Clear Form"})
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target

        dispatch({
            type: "Change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () =>{
        dispatch({ type: "Clear Form"})
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={inputValue.nick} onChange={handleChange} type="text" name="nick" placeholder="nick" />
            <input value={inputValue.subMonths} onChange={handleChange} type="number" name="subMonths" placeholder="subMonths" />
            <input value={inputValue.avatar} onChange={handleChange} type="text" name="avatar" placeholder="avatar" />
            <textarea value={inputValue.descripcion} onChange={handleChange} name="descripcion" placeholder="descripcion" />

            <button onClick={handleClear} type="button">Clear the Form</button>
            <button type='submit'>Save New Sub!</button>
        </form>
    </div>
    )
}

export default Form