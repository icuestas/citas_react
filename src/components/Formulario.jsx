import {useState , useEffect} from "react";
import ErrorFormulario from "./ErrorFormulario";
import FormularioCorrecto from "./FormularioCorrecto";


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre,setNombre] = useState("");
    const [propietario,setPropietario] = useState("");
    const [correo,setCorreo] = useState("");
    const [fecha,setFecha] = useState("");
    const [sintomas,setSintomas] = useState("");
    const [error,setError] =useState(false);
    const [envioFormulario, setEnvioFormulario] =useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setCorreo(paciente.correo)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

    },[paciente])

    const generarID = () => {

        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha;

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación de formulario

        if([nombre, propietario,correo,fecha,sintomas].includes("")){
            setError(true);
            setEnvioFormulario(false);

        }else{
            console.log("Todos los campos están completos")
            setError(false);
            setEnvioFormulario(true);

            //Construir objeto de paciente

            const objetoPaciente = {
                nombre,
                propietario,
                correo,
                fecha,
                sintomas,                
            }

            if(paciente.id){
                //Editando el Registro
                objetoPaciente.id = paciente.id;

                const pacientesActualizados 
                = pacientes.map //Recorro arreglo
                (pacienteState => //forma de nombrar registro que se ve en el momento
                    pacienteState.id === paciente.id //validacion
                    ? objetoPaciente //if true
                    : pacienteState); //if false

                setPacientes(pacientesActualizados);
                setPaciente({})

                
            }
            else{
                // Nuevo Registro
                objetoPaciente.id = generarID();
                setPacientes([...pacientes,objetoPaciente]);
            }

            //Reinicio de Form            
            setNombre("");
            setPropietario("");
            setCorreo("");
            setFecha("");
            setSintomas("")

        }


        console.log("Enviando formulario");
    }

    return(
        <>
            <div className="md:w-1/2 lg:w-2/5">
                <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
                <p className="text-xl mt-5 text-center mb-10">Añade pacientes y {""} <span className="text-indigo-600 font-bold">Administralos</span></p>

                <form onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
                    {error ? <ErrorFormulario> Todos los campos son obligatorios</ErrorFormulario>
                    
                    :""}
                    {envioFormulario ? <FormularioCorrecto/>:""}
                    <div className="mb-5">
                        <label htmlFor = "mascota"className="block text-gray-700 uppercase font-bold">
                            Nombre Mascota
                            </label>

                        <input id= "mascota"type="text" placeholder="Nombre de la Mascota" className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor = "propietario"className="block text-gray-700 uppercase font-bold">
                            Nombre Propietario
                            </label>

                        <input id= "propietario"type="text" placeholder="Nombre del Propietario" className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md" 
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor = "email"className="block text-gray-700 uppercase font-bold">
                            Correo  Electrónico
                            </label>

                        <input id= "email"type="email" placeholder="Correo Electrónico Propietario" className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md" 
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor = "alta"className="block text-gray-700 uppercase font-bold">
                            Alta  
                            </label>

                        <input id= "alta"type="date" className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md" 
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor = "sintomas"className="block text-gray-700 uppercase font-bold">
                            Síntomas
                        </label>
                        <textarea
                            id="sintomas"
                            className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md"
                            placeholder="Describe los síntomas de tu mascota"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)}                            
                        />
                    </div>
                    <input type="submit" 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-800 transition-colors" 
                    value={ paciente.id ? "Editar Paciente":"Agregar Paciente"}
                    />
                </form>
            </div>
        </>
    )
}

export default Formulario;