import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TableHook = () => {
    const [arrayData, setArrayData] = useState([]);
    const [search, setsearch] = useState("")

    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/documento', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setArrayData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDataDelete = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/documento/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            const deleteFilter = arrayData.filter(doc => doc.id !== id)
            if (deleteFilter) {
                setArrayData(deleteFilter)
                toast.success(response.data.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const searchTable = () => {
        if (search === '') {
            return fetchData();
        }
        
        const filterTable = arrayData.filter(filter =>
            filter.id.toString().includes(search) ||
            filter.doc_nombre.toLowerCase().includes(search) ||
            filter.doc_codigo.toLowerCase().includes(search) ||
            filter.doc_contenido.toLowerCase().includes(search) ||
            filter.tipo_documento.tip_nombre.toLowerCase().includes(search) ||
            filter.proceso.pro_nombre.toLowerCase().includes(search)
        );
    
        setArrayData(filterTable);
    };
    
    useEffect(() => {
        setTimeout(() => {
            searchTable()
        }, 2000);
    }, [search])

    const fetchGetById = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/documento/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            navigate('/dashboard/create', { state: { data: response.data.data, isEdit: true } });
        } catch (error) {
            console.log(error);
        }
    };
    return {
        arrayData, fetchDataDelete, fetchGetById, search, setsearch
    }
}

export default TableHook
