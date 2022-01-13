import { useState } from "react";



export function FormList(props){
    const [inputsArray, setInputsArray] = useState([{type: "text" , name:"Name"},{type: "text" , name:"Last Name"}])
    const [nameInput, setNameInput] = useState("")

    function setName(e){
        let name = e.target.value;
        setNameInput(name)
    }

    function addNewInput(typeInput){
        if(nameInput != ""){
            setInputsArray(inputsArray.concat([{type: typeInput , name:nameInput}]))
            setName("")
            document.getElementById("input-selector").value = "";
        }else{
            alert("Please set a name of input")
        }
    }

    function removeInput(id){
        
        setInputsArray(inputsArray.splice(id,1))
    }

   
    return(

        <div className="container mb-5">       
            <div className="selector-container mb-5">
                <div className="form-group">
                    <label className="text-uppercase">Type name of input</label>
                    <input type={"text"} id={"input-selector"} name={"input-selector"} placeholder="" className="form-control" autoComplete="off" defaultValue={nameInput} onChange={(e)=>setName(e)}/>
                </div>
                <div className="form-group">
                    <label className="text-uppercase">Select Type of input</label>
                    <br></br>
                    <button type="button" className="btn btn-secondary mr-2" onClick={()=>addNewInput("text")}>Create input text</button>
                    <button type="button" className="btn btn-secondary mr-2" onClick={()=>addNewInput("select")}>Create input select</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>addNewInput("radio")}>Create Radio Buttons</button>
                </div>
                
            </div>  

            <form>
                <div className='form-row'>
                    {inputsArray.map((input, key)=>{
                        return(
                            <div className="col-sm-12 col-md-4" id={"input-"+key} key={key+1}>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6" >
                                            <label className="text-uppercase">{input.name}</label>   
                                        </div>
                                        <div className="col-sm-12 col-md-6" >
                                            <i id="position-icon" className="fas fa-minus-circle d-flex justify-content-end" style={{color:"red", cursor:"pointer"}} onClick={()=>removeInput(key)}></i>
                                        </div>                                                                            
                                    </div>
                                    
                                    <input type={input.type} id={input.name} name={input.name} placeholder="" className="form-control" autoComplete="off" value=""/>
                                </div>
                            </div>
                        )
                    })}                
                </div>
            </form>
        </div>
   );
}