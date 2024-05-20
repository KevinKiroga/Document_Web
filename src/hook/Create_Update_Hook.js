import axios from 'axios';
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create_Update_Hook = () => {
    const [arrayTypeDocument, setArrayTypeDocument] = useState([]);
    const [arrayProcess, setArrayProcess] = useState([]);
    const [docNombre, setDocNombre] = useState("");
    const [docContenido, setDocContenido] = useState("");
    const [docIdTipo, setDocIdTipo] = useState("");
    const [docIdProceso, setDocIdProceso] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const location = useLocation();
    const IdDocument = location.state?.data || {};
    const editMode = location.state?.isEdit || false;

    useEffect(() => {
        if (editMode) {
            setDocNombre(IdDocument.doc_nombre || "");
            setDocContenido(IdDocument.doc_contenido || "");
            setDocIdProceso(IdDocument.doc_id_proceso || "");
            setDocIdTipo(IdDocument.doc_id_tipo || "");
            setIsEdit(true);
        }
    }, [IdDocument, editMode]);

    const fetchTypeDocument = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/tipo', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setArrayTypeDocument(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchProcess = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/proceso', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setArrayProcess(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const postDocument = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/documento', {
                doc_nombre: docNombre,
                doc_contenido: docContenido,
                doc_id_tipo: docIdTipo,
                doc_id_proceso: docIdProceso
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
            toast.success(response.data.message);
            setDocNombre('')
            setDocContenido('')
            setDocIdProceso('')
            setDocIdTipo('')
        } catch (error) {
            console.error('Error posting document:', error);
        }
    };

    const updateDocument = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/documento/${IdDocument.id}`, {
                doc_nombre: docNombre,
                doc_contenido: docContenido,
                doc_id_tipo: docIdTipo,
                doc_id_proceso: docIdProceso
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error updating document:', error);
        }
    };

    useEffect(() => {
        fetchTypeDocument();
        fetchProcess();
    }, []);

    const submit = (e) => {
        e.preventDefault();
        if (docNombre.trim() !== '' && docContenido.trim() !== '' && docIdTipo.trim() !== '' && docIdProceso.trim() !== '') {
            if (isEdit) {
                updateDocument();
            } else {
                postDocument();
            }
        } else {
            toast.warning('Asegúrate de que los campos estén llenos');
        }
    };
  return {
    submit,
    docNombre, 
    isEdit,
    setDocNombre, 
    docContenido, 
    setDocContenido, 
    docIdTipo, 
    setDocIdTipo, 
    arrayTypeDocument, 
    docIdProceso, 
    setDocIdProceso, 
    arrayProcess
  }
}

export default Create_Update_Hook
