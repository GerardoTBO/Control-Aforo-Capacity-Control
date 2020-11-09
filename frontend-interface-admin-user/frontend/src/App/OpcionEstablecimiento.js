import React,{useEffect,Fragment} from 'react';

export default function OpcionEstablecimiento(props) {

const [edicionImagen,setEdicionImagen]=React.useState(0);
const [imageCargada,setImageCargada]=React.useState(false);
const [dataImagen,setDataImage]=React.useState("/recursos/fondoTriangulosMirense.jpg");
const [informationCompany,setInformationCompany]=React.useState({
  name:"Tienda de Ropa Luchito",
  descripcion:"Somos una empresa decicada a la servicio de venta de ropa y articulos de primera nesecidadblablablabla blablablablablablablablab lablablablablablablablablabl ablablablablablabl ablablablab lablablablab lablab ablablabla blabla blablablablab lablablabl ablablablablablab lablablablablablab lablablablablablablabla blablablablabla blablablablablablablab lablablablablab lablablablabla blablablablablablablablabl ablablablablablablabl ablablablablablab lablablablablablab lablabla blablablabl ablabla",
  direccion:"Av Rios Costa 304 ,antes de llegar al ovalo junto a la puerta blanca",
  horario:"De Lunes a viernes desde muy tempranito hasta muy tarde"
});

useEffect(()=>{
  if(props.user==1){  
    document.getElementById("input-name-company").value=informationCompany.name;
    document.getElementById("input-descripcion-company").value=informationCompany.descripcion;
    document.getElementById("input-descripcion-company").style.borderColor="rgba(118, 118, 118, 0.3)";
    document.getElementById("input-direccion-company").value=informationCompany.direccion;
    document.getElementById("input-timetable-company").value=informationCompany.horario;   
  }
    return ()=>{
      if(props.user==1){  
        const file=document.getElementById("charge-image");
        file.addEventListener('change',(e)=>{
          const data=e.target.files[0];
          const reader= new FileReader();
          reader.readAsDataURL(data)
          reader.onload=()=>{
            setImageCargada(true);
            document.getElementById("image-preview").style.height="auto";
            document.getElementById("imagen-subida").src=reader.result;
          }
        })
      }
    }
});

const habilitaredicion=()=>{
  if(edicionImagen==0){
    document.getElementById("edit-image").style.display="block"
    setEdicionImagen(1)
    document.getElementById("image-preview").style.height="20em"
  }
  else{
    setEdicionImagen(0)
    document.getElementById("edit-image").style.display="none";
  }
}

const cancelarimagen=()=>{
  habilitaredicion();
  setImageCargada(false);

}
const guardar=()=>{
  const imagendata=document.getElementById("imagen-subida").src
  setDataImage(imagendata)
  setEdicionImagen(0)
  document.getElementById("edit-image").style.display="none";
  setImageCargada(false);
}

const restaurar=()=>{
  document.getElementById("input-name-company").value=informationCompany.name;
  document.getElementById("input-descripcion-company").value=informationCompany.descripcion;
  document.getElementById("input-direccion-company").value=informationCompany.direccion;
  document.getElementById("input-timetable-company").value=informationCompany.horario;
}

const guardarCambios=()=>{
  document.getElementById("edicion-enable").style.display="block"
  document.getElementById("save").style.display="none"
  document.getElementById("restore").style.display="none"
  document.getElementById("cancel").style.display="none"
  document.getElementById("input-name-company").disabled=true;
  document.getElementById("input-descripcion-company").disabled=true;
  document.getElementById("input-descripcion-company").style.borderColor="rgba(118, 118, 118, 0.3)";
  document.getElementById("input-direccion-company").disabled=true;
  document.getElementById("input-timetable-company").disabled=true;
  setInformationCompany({
    name: document.getElementById("input-name-company").value,
    descripcion:document.getElementById("input-descripcion-company").value,
    direccion:document.getElementById("input-direccion-company").value,
    horario:document.getElementById("input-timetable-company").value
  })
}

const cancelar=()=>{
  restaurar()
  document.getElementById("edicion-enable").style.display="block"
  document.getElementById("save").style.display="none"
  document.getElementById("restore").style.display="none"
  document.getElementById("cancel").style.display="none"
  document.getElementById("input-name-company").disabled=true;
  document.getElementById("input-descripcion-company").disabled=true;
  document.getElementById("input-descripcion-company").style.borderColor="rgba(118, 118, 118, 0.3)";
  document.getElementById("input-direccion-company").disabled=true;
  document.getElementById("input-timetable-company").disabled=true;
}
const habilitarediciondescripcion=()=>{
  document.getElementById("input-name-company").disabled=false;
  document.getElementById("input-descripcion-company").disabled=false;
  document.getElementById("input-descripcion-company").style.borderColor="rgb(59, 59, 59)"
  document.getElementById("input-direccion-company").disabled=false;
  document.getElementById("input-timetable-company").disabled=false;
  document.getElementById("edicion-enable").style.display="none"
  document.getElementById("save").style.display="block"
  document.getElementById("restore").style.display="block"
  document.getElementById("cancel").style.display="block"
}

let content_descripcion;
const descripcion_cliente=
  <div className="container-descripcion"  style={{ width:"100%",height:"auto",textAlign:"center"}} >
    <strong style={{fontSize:"1.5em"}}>Nombre de la Empresa</strong>
    <p align="justify">
      Somos una empresa decicada a la servicio de venta de ropa y articulos de primera nesecidadblablablabla blablablablablablablablab lablablablablablablablablabl ablablablablablabl ablablablab lablablablab lablab ablablabla blabla blablablablab lablablabl ablablablablablab lablablablablablab lablablablablablablabla blablablablabla blablablablablablablab lablablablablab lablablablabla blablablablablablablablabl ablablablablablablabl ablablablablablab lablablablablablab lablabla blablablabl ablabla
      <br></br><br></br>
      <strong>Direccion: </strong> 
      Av Rios Costa 304 ,antes de llegar al ovalo junto a la puerta blanca
      <br></br>
      <strong>Horario de atencion: </strong> 
      De Lunes a viernes desde muy tempranito hasta muy tarde   
    </p>
  </div>

const descripcion_admin=
<div className="container-descripcion"  style={{ width:"100%",height:"auto"}}>
    
    <strong style={{fontSize:"1em"}}>Nombre de la Empresa</strong><br/>
    <input type="text" id="input-name-company"  placeholder="Nombre de la Empresa" disabled="true" style={{fontFamily:"Dosis",fontWeight:"bold",
      fontSize:"1.5em",width:"80%",textAlign:"center",padding:"7px",borderRadius:"5px",marginTop:"0.5em"}}/><br/>
    
    <p align="justify">

      <strong style={{fontSize:"1em"}}>Descripcion de la Empresa</strong><br/>
      <textarea  id="input-descripcion-company"  placeholder="Descripcion de la Empresa" disabled="true" style={{fontFamily:"Dosis",fontSize:"1em",
                  width:"98%",height:"10em" ,resize:"none",textAlign:"justify",borderImage:"initial",borderWidth:"2px",padding:"7px",borderRadius:"5px",marginTop:"0.5em"}}/>
      <br/><br/>

      <strong style={{fontSize:"1em"}}>Dirreccion :</strong><br/>
      <input type="text" id="input-direccion-company"  placeholder="Direccion de la empresa" disabled="true"style={{fontFamily:"Dosis",textAlign:"justify",
                  fontSize:"1em",width:"98%",padding:"7px",borderRadius:"5px",marginTop:"0.5em"}}/>
      <br/><br/>

      <strong style={{fontSize:"1em"}}>Horario de atencion :</strong><br/>
      <input type="text" id="input-timetable-company"  placeholder="Direccion de la empresa" disabled="true" style={{fontFamily:"Dosis",textAlign:"justify",
                  fontSize:"1em",width:"98%",padding:"7px",borderRadius:"5px",marginTop:"0.5em"}}/>
      <br/><br/>

      <div className="buttons-edition">
        <button class="edition-button button-options" id="edicion-enable" onClick={()=>habilitarediciondescripcion()}>Habilitar edicion</button>
        <button class="edition-button button-options" id="restore" onClick={()=>restaurar()} style={{display:"none"}}>Restaurar Valores</button>
        <button class="edition-button button-options" id="save" onClick={()=>guardarCambios()} style={{display:"none"}}>Guarda Cambios</button>
        <button class="edition-button button-options" id="cancel" onClick={()=>cancelar()} style={{display:"none"}}>Cancelar</button>
      </div>
    </p>
</div>

let content_image;

const image_cliente=
<div className="establecimiento-container-image" style={{height:"auto",width:"100%" ,marginBottom:"2em"}}>
<img src={dataImagen} style={{width:"100%", height:"auto"}}/>
</div>;

const image_admin=
<div>
  {image_cliente}
  <button class="button-options" onClick={()=>habilitaredicion()}>Editar imagen</button>
  <div className="container-edit-image" id="edit-image" style={{display:"none",marginTop:"2em"}}>
    <input type="file" id="charge-image"></input>
    <label for="charge-image">Selecione la Imagen</label>
    <div className="preview-image" id="image-preview" style={{border:"dashed 2px rgba(57,76,132,.5)",borderRadius:"10px",width:"100%",marginTop:"2em",marginBottom:"2em",padding:"1em",marginLeft:"-1em",display:"flex",
  justifyContent:"center",alignItems:"center"}}>
      {imageCargada
      ?<img id="imagen-subida" style={{ width:"100%",height:"auto",alignContent:"center"}}></img>
      :<div><i class="fa fa-file-image-o" style={{ width:"100%",height:"auto",fontSize:"7em",color:"#A9A9A9"}}></i><label style={{color:"#A9A9A9",fontSize:"2em"}}>Vista previa</label></div>
      }
    </div>
    <div className="buttons-edition">
      {imageCargada&&<button class="edition-button button-options" onClick={()=>guardar()}>Guardar</button>}
      <button class="edition-button button-options" onClick={()=>cancelarimagen()}>Cancelar</button>
    </div>
    </div> </div>;
 
  switch(props.user){
    case 0:{
      content_image=image_cliente;
      content_descripcion=descripcion_cliente;
      break;
    }  
    case 1:{
      content_image=image_admin;
      content_descripcion=descripcion_admin;
      break;
    }
    default:{
      content_image="En Construccion";
      content_descripcion="En Construccion";
      break;
    }
  }

    return (
      <div className="option">
        {content_descripcion}
        {content_image}
      </div>); 
}
