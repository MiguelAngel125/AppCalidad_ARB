import React from 'react'
import './navbarResumen.css'

const NavbarResumen = ({t5,t4,t3,t2,t1,promCalidad,promCat1,promcat2}) => {
    return (
        
            <div className="nav" >
    <tr className="tr">
        <td className="fecha" >{'Fecha'}</td>
        <td className="productor">{'Multiple'}</td>
        <td className="finca">{'Multiple'}</td>
        <td className="up">{'up'}</td>
        <td className="calibre">{'Multiple'}</td>
        <td className="destino">{'Multiple'}</td>
        <td className="muestra">{'Multiple'}</td>
        <td className="t5">{t5}</td>
        <td className="t4">{t4}</td>
        <td className="t3">{t3}</td>
        <td className="t2">{t2}</td>
        <td className="t1">{t1}</td>
        <td className="calidad">{promCalidad}</td>
        <td className="porcentaje">{promCat1}/{promcat2}</td>
        
      </tr>
     </div>
        
    )
}

export default NavbarResumen
