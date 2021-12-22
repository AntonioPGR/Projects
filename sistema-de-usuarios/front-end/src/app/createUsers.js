import {createUsers} from "../api/api.js"


export default function CreateUsers(props){
   const handleSubmit = (ev) => {
      ev.preventDefault();
      const userInfo = {
         nome: document.getElementById("usernameInput").value,
         idade: document.getElementById("ageInput").value,
         sexo: document.getElementById("sexInput").value
      }
      userCreator(userInfo);
   }

   const userCreator = async (userInfo) => {
      const request = await createUsers(userInfo)
      const status = request.status
      console.log(status)

      try {
         const p = document.querySelector("p#createdInfo")
         p.parentNode.removeChild(p);
      } catch (e) {}

      const main = document.querySelector("main")
      const infoP = document.createElement("p")
      infoP.id = "createdInfo"
      infoP.textContent = status === 201? "User created successfully": "User not created";
      main.appendChild(infoP)
   }

   return (
      <main>
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
               <input type="submit" value="Create User"></input>
            </div>
         </form>
      </main>
   )
}