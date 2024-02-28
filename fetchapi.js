const fetch = require('node-fetch')

const fetchUserInfo = async () => {
   const response = await fetch('https://regres.in/api/users?page=2');

   if(!response.ok){
    throw new Error("User data is not found")
   }

   const userData = await response.json();
   console.log(userData)
}

fetchUserInfo()