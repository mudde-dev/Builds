import React from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { uniqueId } from '../services/seido-helpers';
import TableAsClassState from '../components/table-as-class-state';
import TableAsFuncState from '../components/table-as-func-state';

const tableHeaders = ['Book', 'Author', 'Language', 'Published', 'Sales'];
const tableData = [
  { 
    id: uniqueId(), 
    data: ['A Tale of Two Cities', 'Charles Dickens', 'English', '1859', '200 million']
  },
  { 
    id: uniqueId(), 
    data: ['Le Petit Prince (The Little Prince)', 'Antoine de Saint-Exupéry', 'French', '1943', '150 million']
  },
  { 
    id: uniqueId(), 
    data: ["Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 'English', '1997', '120 million']
  },
  { 
    id: uniqueId(), 
    data: ['And Then There Were None', 'Agatha Christie', 'English', '1939', '100 million']
  },
  { 
    id: uniqueId(), 
    data: ['Dream of the Red Chamber', 'Cao Xueqin', 'Chinese', '1791', '100 million']
  },
  { 
    id: uniqueId(), 
    data: ['The Hobbit', 'J. R. R. Tolkien', 'Chinese', '1937', '100 million']
  }  
];
  
export function Tables()
{
     return (
        <div className="container px-4 py-4 text-start">
 
            <h2 className="pb-2 border-bottom">Tables with states</h2>
            <Outlet/>

        </div>
    );
}

export function TableList() {

    const navigate = useNavigate();
    const onDoubleClick = (e) => 
    {
      const id = e.currentTarget.dataset.rowitemid;
      console.log(id);
      navigate(`/tables-states/${id}`);
    }

    return (
      <>
        <h1>Table as a class component</h1>
        <TableAsClassState headers={tableHeaders} initialData={tableData} onDoubleClick={onDoubleClick}/>
        <br/>
        <h1>Table as a func component</h1>
        <TableAsFuncState headers={tableHeaders} initialData={tableData} onDoubleClick={onDoubleClick}/>
      </>
    );
  }

export function RowDetail() {
    const { id } = useParams();
    const book = tableData.find((item) => item.id === id);

    if(!book) {
      return <span>The book doesn't exist.</span>;
    }
    return (
      <div style={{ padding: 20 }}>
        <h3>{book.data[0]}</h3>
        <p>{book.data[1]}</p>
        <p>Sold over {book.data[4]} copies</p>
      </div>
    );
  }