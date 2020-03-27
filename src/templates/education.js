import React from 'react';
import { Link } from 'gatsby';
import Ednav from '../components/education-nav';

export default (props)=>{
    const pageData = props.data.educationJson;
    //var item = 0; intex=0;
    return(
        <div>
            <header className="py-12 border-green-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-green-500">Regresar al inicio</Link>
                    <h2 className="capitalize text-5xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul> 
                {
                pageData.items.map((item,index)=>(
                    <li className="bg-white shadow mt-4 flex" key={index}>
                        <p className="vertical-text">{pageData.slug}</p>
                        <div className="flex items-center flex-1 p-8">
                            <div className="flex-1">
                                <h3>{item.name}</h3>
                                {
                                    item.degree && <span className="inline-block p-2 radius bg-green-100 text-green-700">{item.degree}</span>
                                }
                               <div>{
                                    item.place && <div className="mt-3 inline-block p-2 text-green-700">Lugar: {item.place}</div>
                                }</div>
                                <div>{
                                    item.date && <span className="mt-3 inline-block p-2 text-green-700">{item.date}</span>
                                }</div>
                            </div>
                        </div>
                    </li>
                ))
            }
            </ul>
            <Ednav/>
        </div>
    )
}

export const query = graphql`
    query($slug : String){
        educationJson(slug:{ eq: $slug }){
            title
            description
            slug
            items{
                name
                degree
                place
                date
            }
        }
    }

    `;
