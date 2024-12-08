function DataInfo({data}){
    
    //console.log(data);
    //const dataElements = data.map( (e,i)=>  <p key={i}>{e}</p> )

    return(
      <>
       <h3>Voici la data :</h3>
        {data}
      </>
    )
}

export default DataInfo;