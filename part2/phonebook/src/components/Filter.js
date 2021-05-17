const Filter = ({filterVal,handleFilter}) => {
    return(
      <div>
        Filter shown with : <input value={filterVal} onChange={handleFilter}/>
      </div>
    ) 
  }

export default Filter