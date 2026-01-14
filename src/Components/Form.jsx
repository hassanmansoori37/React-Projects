import { useState } from "react";

function Form () {
    const [userName , setUserName] = useState("");
    const [userEmail , setUserEmail] = useState("");
    const [userPassword , setUserPassword] = useState("");
    const [error , setError] = useState("");
    const [userData , setUserData] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Hello World")
      if(!userName || !userEmail || !userPassword) {
        setError("All Fields Are Mandatory !");
        return ;
      }
      setError("");
      setUserData({
        userName , userEmail , userPassword
      })
      setUserName("");
      setUserEmail("");
      setUserPassword("")
    }

    return (
    <>
      <main className="w-[80%] mx-auto flex items-center justify-center gap-10">
      <section className="flex justify-center">
      <form  onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-xl font-bold text-center text-gray-700"> User Form</h2>

        <input onChange={(e) => setUserName(e.target.value)} value={userName} className="border border-gray-300 text-black px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="text"placeholder="Enter Your Name..."/>
        <input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} className="border border-gray-300 text-black px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" placeholder="Enter Your Email..."/>
        <input onChange={(e) => setUserPassword(e.target.value)} value={userPassword} className="border border-gray-300 text-black px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="password"placeholder="Enter Your Password..."/>

        <p className="text-red-500 text-sm text-center"> {error} </p>
        <button disabled={!userName || !userEmail || !userPassword}
         type="submit"   className={`py-2 rounded-lg font-semibold transition
          ${
            !userName || !userEmail || !userPassword
            ?  " cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"}`}>Submit</button>
      </form>
    </section>

    {userData && (
      <section className="flex flex-col gap-3 bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="font-bold text-xl text-center text-green-600">User Added ✔</h2>

        <p><span className="font-bold uppercase text-gray-600">User Name:</span>{" "}{userData.userName}</p>
        <p><span className="font-bold uppercase text-gray-600">User Email:</span>{" "}{userData.userEmail}</p>
        <p><span className="font-bold uppercase text-gray-600">User Password:</span>{" "}{userData.userPassword}</p>
      </section>
    )}

  </main>
</>

  );
}
export default Form ;