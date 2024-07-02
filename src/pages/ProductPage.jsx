import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { GrView } from 'react-icons/gr'
import { MdDeleteOutline } from 'react-icons/md'

export const ProductPage = () => {
    const [productList,setProductList] = useState([])
    const [clickButton,setClickButton]= useState(1)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=4')
        .then(res=>res.json())
        .then(json=>setProductList(json))
    },[])
  return (
    <div className="product-page">
        <div className="container">
            <h2>Products</h2>
            <div className="row">
                <div className="col-lg-4">
                    <section className='d-flex'> <input placeholder='search productes' type="text" />
                    <button>search</button></section>
                    </div>
           </div>
           <div className="product-list pt-4">
            <div className="row">
                <div className="col-lg-12 " >
                    <div className='list'>
                    <table className='w-100'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Products</th>
                        <th>ProductId</th>
                        <th>Catogories</th>
                        <th>Location</th>
                        <th>Avalible</th>
                        <th>On Hand</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {productList.map((ele,i)=>{
                        return <tr key={ele.id} >
                        <td>{i+1}</td>
                        <td><img className='products-img' src={ele.image}/> {ele.title}</td>
                        <td>{ele.category}</td>
                        <td>salesManagerbetulia chaklalpur, lalpur</td>
                        <td>salesManager </td>
                        <td>ganga ndhajhd hdajahu </td>
                        <td>ganga ndhajhd hdajahu </td>
                        <td className='d-flex'> <button title='view'><GrView/></button> <button title='edite'><CiEdit/></button> <button title='delete'><MdDeleteOutline/></button> </td>
                    </tr>  
                    })}
                    
                </tbody>

            </table>
                    </div>
                

                </div>
                <div className="col-lg-12">
                <div className="controll border2 d-flex align-items-center justify-content-between my-2">
          <p className='m-0'>showing 1 to 20 of 20 entries</p>
          <div className="switch-page d-flex">
            <button>{"<"}</button>
            <button onClick={()=>setClickButton(1)} className={clickButton==1?"active":""}>1</button>
            <button onClick={()=>setClickButton(2)} className={clickButton==2?"active":""}>2</button>
            <button onClick={()=>setClickButton(3)} className={clickButton==3?"active":""}>3</button>
            <button onClick={()=>setClickButton(4)} className={clickButton==4?"active":""}>4</button>
            <button onClick={()=>setClickButton(5)} className={clickButton==5?"active":""}>5</button>
            <button onClick={()=>setClickButton(6)} className={clickButton==6?"active":""}>6</button>
            <button >{">"}</button>
          </div>
        </div> 
                </div>
            </div>
            

           </div>
           

        </div>
        

    </div>
  )
}
