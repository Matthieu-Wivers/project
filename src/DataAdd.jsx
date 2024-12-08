function DataAdd({data, addToState}){

    
    function onClickHandle(){
        let a = 42;
        addToState(a);
    }

    return(
      <>
       <h3>Changer la state !</h3>
        <button onClick={onClickHandle}>
          Changement !
        </button>
      </>
    )
}

export default DataAdd;