//import React,{useEffect,Fragment} from 'react';
//https://www.youtube.com/watch?v=wgutyeQTGDA  -------- form validation

import React from 'react'
const Aforo = (props) => {
    const [aforomax, setAforomax] = React.useState(100);
    const [inseguro, setAforoin] = React.useState(aforomax * .65);
    const [peligroso, setAforopel] = React.useState(aforomax * .8);
    const [editAforo, setEditAforo] = React.useState(false);

    const incrementslideinseguro = (e) => {
        setAforoin(e.target.value);
    }
    const incrementslidepeligroso = (e) => {
        setAforopel(e.target.value);
    }
    const incrementAforomax = (e) => {
        setAforomax(e.target.value);

        if (inseguro > aforomax)
            setAforoin(aforomax);
        if (peligroso > aforomax)
            setAforopel(aforomax);
        if (editAforo === false) {
            setAforoin(aforomax * .65);
            setAforopel(aforomax * .8);
        }
        console.log(e.target.value)
    }
    const closeAforoForm = () => {
        document.body.classList.remove("showAforoForm")
    }
    const enablesettings = (e) => {
        console.log(e.target)
        setEditAforo(e.target.checked);
        if (e.target.checked === false) {
            setAforoin(aforomax * .65);
            setAforopel(aforomax * .8);
            
        } else {
            setAforoin(1);
            setAforopel(1);
        }
        
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        props.editAforoFun(parseInt(aforomax), parseInt(inseguro), parseInt(peligroso), 0);
        document.body.classList.remove("showAforoForm");
    }

    return (
        <div >
            <div className="popup-overlay" id="popup-overlay-aforo"></div>
            <div className="popup" id="popup-aforo">
                <div className="popup-close" onClick={closeAforoForm}><i class="fas fa-times"></i></div>
                <form className="form" onSubmit={handlesubmit}>
                    <div className="header">
                        Datos de Aforo
                    </div>
                    <div class="form-label-group">
                        <input type="number" id="inputEmail" class="form-control" value={aforomax} onChange={incrementAforomax} required autofocus />
                        <label for="inputEmail">Aforo Máximo</label>
                    </div>
                    <div className="toggle-edit">
                        <div for="cb4" className="label-edit">Configurar alarmas</div>
                        <input className="tgl tgl-flat" name="cb4" id="cb4" onClick={enablesettings} type="checkbox" />
                        <label className="tgl-btn" htmlFor="cb4"></label>
                    </div>

                    <div class="slidecontainer">
                        <p>Aforo Peligroso: <span id="demo-peligroso">{peligroso}</span></p>
                        <input type="range" min={1} max={aforomax} value={peligroso} onChange={incrementslidepeligroso} class="slider" id="range-peligroso" disabled={!editAforo} step="1" />

                    </div>
                    <div class="slidecontainer">
                        <p>Aforo Inseguro: <span id="demo-inseguro">{inseguro}</span></p>
                        <input type="range" min={1} max={aforomax} value={inseguro} onChange={incrementslideinseguro} class="slider" id="range-inseguro" disabled={!editAforo} step="1" />

                    </div>
                    <button type="submit">Guardar Datos</button>
                </form>
            </div>
        </div>
    );
}
export default Aforo;
