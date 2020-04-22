import React from "react";
import ilustration from '../imgs/undraw_design_notes_8dmv.svg';
import Form from './contact.form';

export default () => (
    <header className="bg-green-300 " /*style={ { max-w-4xl mx-auto mt-10 } }*/>
        <div className="container mx-auto p-12 max-w-4xl">

            <div className="flex justify-center items-center">
            <div className="flex-1">
                <h1 className="font-bold text-green-900 text-5xl">Hola, soy Diego!</h1>
                <p className="text-xl font-ligth">Desarrollo web</p>
            </div>
            <img src={ilustration} alt="Hombre observando una página web" style={{width: "200px"}}></img>
            </div>

            <div>
                <Form />
            </div>
        </div>
        
    </header>
)