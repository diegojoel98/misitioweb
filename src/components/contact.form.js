import React from "react";

export default () => (
    <form className="mt-16 text-center" /*action="form.php" method="post"*/>
        <label htmlFor="contact-content" className="block text-gray-700 font-bold mb-2">¿Qué te interesaria realizar?</label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea 
                id="contact-content"
                name="contact-content"
                className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"></textarea>            
               <a href="mailto:diegojoel98@gmail.com" className="btn">Enviar</a>    
        </div>

    </form>
)

