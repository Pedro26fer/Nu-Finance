import {useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHistory} from "react-router-dom"
import {server} from "../../assets"
import {toast} from "react-toastify"


const Register = () => {

    const history = useHistory()

    const handleSubmit = (route) => {
        
    }

    const formSchema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().required('Campo obrigatório').email('Email inválido'),
        password: yup.string().required('Campo obrigatório').min(8,"Mínimo 8 caracteres")
    })

    const handleSubmit = async (data) => {
        console.log(data)
        try {
            const response = await server.post('/signup', data)
            console.log(response.data)
            toast.success(`Bem vindo ao Nu Finance ${response.data.name} !!`)
            return 
        } catch (error) {
            toast.error("dados inválidos")
        }
    }

    return(
        <></>
    )
}

export default Register