const ErrorFormulario = ({children}) => {

    


    return(

        <div className="p-8 mb-10 bg-red-500 text-lg text-center">
            <label htmlFor="errorFormulario" className="text-white font-bold" >{children}</label>
        </div>
        
    )

}

export default ErrorFormulario;