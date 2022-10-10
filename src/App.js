import React, { useState, useEffect } from 'react'
import Header from './Components/Header';
import Createnote from './Components/Createnote';
// import Shownote from './Components/Shownote';
import Shownotes from './Components/Shownotes';
// import Bottom from './Components/Bottom';

export default function App() {
  const deleteList = (id) => {
    console.log('deleted' + id);
    setitems((olditems) => {
      return olditems.filter((arr, index) => {
        return index !== id
      })
    })
  }

  const getitemfromlocal = () => {
    const notes = localStorage.getItem("mynote");

    if (notes) {
      return JSON.parse(notes);
    }
    else {
      return [];
    }
  }
  const [items, setitems] = useState(getitemfromlocal)
  const additem = (value) => {
    setitems((olditems) => {
      return [...olditems, value]
    });
  }
  useEffect(() => {
    localStorage.setItem("mynote", JSON.stringify(items));
  }, [items])
  return (
    <>
      <Header />
      <Createnote onclick={additem} />

      <div className='shownote'>
        {
          items.map((val, index) => {
            return (<Shownotes
              title={val.title}
              content={val.content}
              id={index}
              key={index}
              ondelete={deleteList}
            />)
          })
        }
      </div>
    </>
  )
}
