
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Create_Update_Hook from '../../hook/Create_Update_Hook';

const Create = () => {

    const { 
        arrayProcess, 
        arrayTypeDocument, 
        docContenido, 
        docIdProceso, 
        docIdTipo, 
        docNombre, 
        isEdit, 
        setDocContenido, 
        setDocIdProceso, 
        setDocIdTipo, 
        setDocNombre, 
        submit 
    } = Create_Update_Hook()


    return (
        <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column' }} onSubmit={submit}>
            <div className='bg-light p-3 rounded '>
                <h2>{isEdit ? 'Editar Formulario' : 'Crear Formulario'}</h2>
                <div className="form-group">
                    <label>Nombre</label>
                    <input value={docNombre} onChange={(e) => setDocNombre(e.target.value)} className="form-control" placeholder="Ingrese nombre del documento" />
                </div>
                <div className="form-group">
                    <label>Contenido</label>
                    <textarea value={docContenido} onChange={(e) => setDocContenido(e.target.value)} className="form-control" id="floatingTextarea"></textarea>
                </div>
                <div className='form-group'>
                    <label>Tipo de documento</label>
                    <select className='form-select' value={docIdTipo} onChange={(e) => setDocIdTipo(e.target.value)}>
                        <option value="">Selecciona una opción</option>
                        {arrayTypeDocument.map(type => (
                            <option key={type.id} value={type.id} className='text-dark'>{type.tip_nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <label>Procesos</label>
                    <select className='form-select' value={docIdProceso} onChange={(e) => setDocIdProceso(e.target.value)}>
                        <option value="" >Selecciona una opción</option>
                        {arrayProcess.map(proc => (
                            <option key={proc.id} value={proc.id} className='text-dark'>{proc.pro_nombre}</option>
                        ))}
                    </select>
                </div>


                <button type="submit" className={`btn ${isEdit ? 'btn-primary' : 'btn-success'} m-2`}>
                    {isEdit ? 'Editar' : 'Crear'}
                </button>
            </div>
            <ToastContainer theme='dark' />
        </form>
    );
};

export default Create;
