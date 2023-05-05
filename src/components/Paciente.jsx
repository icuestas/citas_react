const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {


    const handleEliminar = () => {
        console.log("Eliminando..")
        const respuesta = confirm("¿Deseas eliminar este paciente?");
        if(respuesta){
            eliminarPaciente(paciente.id);
        }
    }


    return(
                
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">
                    {paciente.nombre}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
                <span className="font-normal normal-case">
                    {paciente.propietario}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Correo Electrónico: {""}
                <span className="font-normal normal-case">
                    {paciente.correo}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {""}
                <span className="font-normal normal-case">
                    {paciente.fecha}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
                <span className="font-normal normal-case">
                    {paciente.sintomas}
                </span>
            </p>
            <div className="mt-5 flex justify-between">
                <button type ="button" className="bg-indigo-500 font-bold mr-3 py-3 px-12 text-white hover:bg-indigo-600 uppercase rounded-lg"
                onClick={() => setPaciente(paciente)}                
                >
                    Editar
                </button>
                <button type ="button" className="bg-red-500 font-bold mr-3 p-3 px-12 text-white hover:bg-red-600 uppercase rounded-lg"
                onClick={handleEliminar}
                >
                    Eliminar 
                </button>
            </div>
        </div>
    )
}
export default Paciente;