import React from "react";

function SecaoDivExterna() {
    return (
        <div className='div-externa'>
            <div id="friValue" className='gasto-dia'> </div>
            <div onClick={() => { Altera("friValue") }} className='barra'
                style={{
                    height: friValue * 5 + "px",
                    backgroundColor: Funcao("fri")
                }}></div>
            <small>fri</small>
        </div>
    )
}
export default SecaoDivExterna