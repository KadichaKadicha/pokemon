import React, {useState} from 'react';
import Pagination from "./pagination";
import {Link} from "react-router-dom";

const Home = ({pika}) => {
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    let filteredTasks = pika.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="bg-dark" >
            <div className="container ">
                <input type="text" className="formMy mt-3 mb-3 color-primary w-100" placeholder='Поиск...'
                       onChange={(e) => setSearch(e.target.value)}/>

                <div className="row">
                    {
                        filteredTasks.slice(currentPage*15,(currentPage*15)+15).map(p => (
                            <div className="col-md-3 ">
                               <div className="myBox p-5  mb-3 text-center" >
                                   <div className='img'>
                                       <img src={p.img} alt=""/>
                                   </div>
                                   <div >
                                       <h5>
                                           <Link className="nameCol" to={`/pokemon/${p.id}`}>{p.name}</Link>
                                       </h5>
                                   </div>
                               </div>
                            </div>
                        ))
                    }
                </div>
                <Pagination  filteredTasks={filteredTasks} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
};

export default Home;