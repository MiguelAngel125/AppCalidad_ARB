import React from 'react'

const navbarResumen = () => {
    return (
        <div>
            <div className="" style={{backgroundColor:'rgb(5, 114, 76)'}}>
    <tr>
        <td className='fecha'>Fecha</td>
        <td className='productor'>{'Productor'}</td>
        <td className='finca'>{'Finca'}</td>
        <td className='up'>{'UP'}</td>
        <td className='calibre'>{'Calibre'}</td>
        <td className='destino'>{'Destino'}</td>
        <td className='muestra'>{'Muestra'}</td>
        <td className='t5'>{'resumenT5/data.length'}</td>
        <td className='t4'>{'resumenT4/data.length'}</td>
        <td className='t3'>{'resumenT3/data.length'}</td>
        <td className='t2'>{'resumenT2/data.length'}</td>
        <td className='t1'>{'resumenT1/data.length'}</td>
        <td className='calidad'>{'calidad'}</td>
        <td className='porcentaje'>{'cat1'}/{'cat2'}</td>
        
      </tr>
     </div>
        </div>
    )
}

export default navbarResumen
