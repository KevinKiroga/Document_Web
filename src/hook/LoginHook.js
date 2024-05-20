import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const LoginHook = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [validationTrue, setvalidationTrue] = useState(false)

    const navigation = useNavigate()

    const emptyField = () => {
        if (email.trim() === '' || email.trim() === '') {
            setvalidationTrue(false)
            toast.warning('Asegurate que los campos esten llenos')
        }
        else {
            setvalidationTrue(true)
        }
    }
    
    const dataPost = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password })
            if (response.data.message === 'Autorizado') {
                toast.success(response.data.message)
                localStorage.setItem('token', response.data.token);
                console.log('Correco credenciales')
                navigation('/dashboard')
            }
        } catch (error) {
            toast.error("No autorizado")
        }
    }

    const submit = (e) => {
        e.preventDefault()
        emptyField()
        if (validationTrue) {
            dataPost()
        }
    }
    return {
        email, password, setemail, setpassword, submit
    }
}

export default LoginHook
