export default function UserForm(props){
   const handleSubmit = (ev) => {
      ev.preventDefault();
      const userInfo = {
         nome: document.getElementById("usernameInput").value,
         idade: document.getElementById("ageInput").value,
         sexo: document.getElementById("sexInput").value
      }
      
      props.onSubmit(userInfo);
   }

   return(
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="usernameInput" placeholder="Username here"></input>
         </div>
         <div>
            <label htmlFor="age">Age: </label>
            <input type="number" name="age" id="ageInput" placeholder="User age here"></input>
         </div>
         <div>
            <label htmlFor="sex">Sex: </label>
            <select name="sex" id="sexInput">
               <option value="M">Male</option>
               <option value="F">Female</option>
            </select>
         </div>
         <div>
            <input type="submit" value="Confirm"></input>
         </div>
      </form>
   )
}