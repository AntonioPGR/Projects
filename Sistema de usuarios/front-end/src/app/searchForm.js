export default function SearchForm(props){
   return (
      <form id="findUsers" onSubmit={props.formSubmit}>
         <div id="searchBar">
            <input type="text" id="userSearchBar" placeholder="Searching for someone?..." />
            <input type="submit" value="&#128270; Search" />
         </div>
      </form>
   )
}