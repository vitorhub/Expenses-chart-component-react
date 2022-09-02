import React from 'react'
import Rodape from './Rodape'
import img1 from '../images/logo.svg'
import data from '../data/data.json'
import { useState } from 'react';
import './Container.css'

// expenses-chart-component

function Provisorio() {
    const monValue = data[0].amount;
    const tueValue = data[1].amount;
    const wedValue = data[2].amount;
    const thuValue = data[3].amount;
    const friValue = data[4].amount;
    const satValue = data[5].amount;
    const sunValue = data[6].amount;

    const date = new Date();
    let today = date.getDay();
    const arrayDiasDaSemana = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const [selecionado, setSelecionado] = useState(false);
    const [ultimoClicado, setUltimoClicado] = useState("");
    function DestaqueDia(parametro) {
        if (parametro == arrayDiasDaSemana[today]) { return "#76B5BC" } else { return "#EC755D" }
    }

    function Altera(atual) {
        let elemento = document.getElementById(atual);
        elemento.innerHTML = eval(atual);
        let ultimo = document.getElementById(ultimoClicado)
        if (selecionado == false) {
            elemento.style.visibility = "visible"
            setUltimoClicado(atual);
            if (ultimoClicado != "") {
                ultimo.style.visibility = "hidden"
                elemento.style.visibility = "visible"
            }
            setSelecionado(true);
        } else {
            if (atual == ultimoClicado) {
                elemento.style.visibility = "hidden"
                setUltimoClicado(atual);
                setSelecionado(false);
            } else {
                ultimo.style.visibility = "hidden"
                elemento.style.visibility = "visible"
                setUltimoClicado(atual);
                setSelecionado(false);
            }
        }
    }


    return (
        <>
            <div className='interno'>

                <div className="balanco">
                    <div className='balanco-total'>
                        <h3>My balance</h3>
                        <h2>$921.48</h2>
                    </div>
                    <img src={img1} alt="logo" />
                </div>

                <h1 className='titulo1'>Spending - Last 7 days</h1>

                <div className="dias">
                    {/* captura o dia mon e retorna amount */}
                    {/* current day highlited */}
                    {/* retorna o indice do dia */}
                    <div className='div-externa'>
                        <div id="monValue" className='gasto-dia'> </div>
                        <div onClick={() => { Altera("monValue") }} className='barra'
                            style={{ height: monValue * 2 + "px", backgroundColor: DestaqueDia("mon") }}></div>
                        <small>mon</small>
                    </div>

                    <div className='div-externa'>
                        <div id="tueValue" className='gasto-dia'> </div>
                        <div onClick={() => { Altera("tueValue") }} className='barra'
                            style={{ height: tueValue * 2 + "px", backgroundColor: DestaqueDia("tue") }}></div>
                        <small>tue</small>
                    </div>

                    <div className='div-externa'>
                        <div id="wedValue" className='gasto-dia'> </div>
                        <div onClick={() => { Altera("wedValue") }} className='barra'
                            style={{ height: wedValue * 2 + "px", backgroundColor: DestaqueDia("wed") }}></div>
                        <small>wed</small>
                    </div>

                    <div className='div-externa'>
                        <div id="thuValue" className='gasto-dia'> </div>
                        <div onClick={() => { Altera("thuValue") }} className='barra'
                            style={{ height: thuValue * 2 + "px", backgroundColor: DestaqueDia("thu") }}></div>
                        <small>thu</small>
                    </div>

                    <div className='div-externa'>
                        <div id="friValue" className='gasto-dia'> </div>
                        <div onClick={() => { Altera("friValue") }} className='barra'
                            style={{ height: friValue * 2 + "px", backgroundColor: DestaqueDia("fri") }}></div>
                        <small>fri</small>
                    </div>

                    <div className='div-externa'>
                        <div id="satValue" className='gasto-dia'> </div>
                        <div onClick={() => { Altera("satValue") }} className='barra'
                            style={{ height: satValue * 2 + "px", backgroundColor: DestaqueDia("sat") }}></div>
                        <small>sat</small>
                    </div>

                    <div className='div-externa'>
                        <div id="sunValue" className='gasto-dia'> </div>
                        <div onClick={() => { Altera("sunValue") }} className='barra'
                            style={{ height: sunValue * 2 + "px", backgroundColor: DestaqueDia("sun") }}></div>
                        <small>sun</small>
                    </div>


                </div>

                <div className="secao-base">

                    <div className="total-mes">
                        <small>Total this month</small>
                        <h3>$478.33</h3>
                    </div>

                    <div className="percentual">
                        <small>+2.4%</small>
                        <h6>from last month</h6>
                    </div>

                </div>

            </div>

            <Rodape />
        </>
    )
}
export default Provisorio