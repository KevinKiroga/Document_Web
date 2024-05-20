import '../Table/Table.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableHook from '../../hook/TableHook';

const Table = () => {
  const { arrayData, fetchDataDelete, fetchGetById, search, setsearch } = TableHook()

  return (
    <div>
      <div className="main-container">
        <input type="search" id='Buscador' placeholder="Busca tu Archivo" value={search} onChange={(e) => setsearch(e.target.value)} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Código</th>
              <th>Contenido</th>
              <th>Tipo de documento</th>
              <th>Proceso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              arrayData.map(doc => (
                <tr key={doc.id}>
                  <td>{doc.id}</td>
                  <td>{doc.doc_nombre}</td>
                  <td>{doc.doc_codigo}</td>
                  <td>{doc.doc_contenido}</td>
                  <td>{doc.tipo_documento.tip_nombre}</td>
                  <td>{doc.proceso.pro_nombre}</td>
                  <td>
                    <button className='buttom' onClick={() => fetchDataDelete(doc.id)}>Eliminar</button>
                    <button type="submit" onClick={() => fetchGetById(doc.id)} className="btn btn-primary m-2">Editar</button>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
        <ToastContainer theme='dark' />
      </div>
    </div>
  )
}

export default Table
