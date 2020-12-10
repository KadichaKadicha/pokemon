import React from 'react';

const Pagination = ({setCurrentPage,filteredTasks}) => {
    return (


           <div className="my">
               <nav aria-label="Page navigation example ">
                   <ul className="pagination">
                       {
                           Array(Math.ceil(filteredTasks.length / 15)).fill(null).map((page, idx) => (
                               <li className=""><a className="myLink" onClick={e => {
                                   e.preventDefault()
                                   setCurrentPage(idx)
                               }} href="">{idx + 1}</a></li>
                           ))
                       }
                   </ul>
               </nav>
           </div>

    );
};

export default Pagination;