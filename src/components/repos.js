import React, { useEffect, useState  } from "react";
//import repos from '../data/repos';
import Repo from './repo';
//import fetchRepos from "../libs/fetchRepos";

export default () => {

    const [repos,setRepos] = useState([]);
    const [reposCount,setReposCount] = useState([]);

    useEffect ( () => {

        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1,13);
            return setRepos(myRepos);
        }
        
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/diegojoel98/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
        
            sessionStorage.setItem("repos", JSON.stringify(myRepos) );
            myRepos = myRepos.slice(1,13);
            setRepos(myRepos);            
        }

        fetchRepos();
        
    }, []);
    return (
        <div className="max-w-4xl mx-auto mt-10" >
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mis repositorios</h2>
                <p>Contribuciones de código</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id} />
                    } )
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/diegojoel98" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver en Github ({reposCount})
                </a>
            </div>
        </div>
    );
};