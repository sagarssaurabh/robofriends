// import 'tachyons';

const SearchBox = ({Searchfield , searchChange}) =>{
  return (
    <div>
        <input
        className='pa2 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search'
        onChange={searchChange}
        />
    </div>
  )
}

export default SearchBox

//onChange is a event listener and if there is any change in this field it triggers
// the function searchChange
