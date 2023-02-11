import Head from "next/head";
import { useEffect, useState } from "react";


export default function Home() {
  const [dataInput, setdataInput] = useState("");
  const [result, setResult] = useState();

    async function onSubmit(event) {
      event.preventDefault();
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataInput }),
      });
      const data = await response.json();
      console.log("manu", data)
      setResult(data.result);
      console.log(typeof(result))
      setdataInput("");
    }
  return (

    <div className='bg-black h-screen flex justify-center items-center'>
      
      <Head>
        <title>AI</title>
        <link rel="icon" href="/ai.png" />
      </Head>

    <div className="container mx-auto ">
        <div className="columns-1 text-center">
        <input
          className="w-96 h-12 border-white p-4 mr-4 "
          type="text"
          name="animal"
          placeholder="Search here..."
          value={dataInput}
          onChange={(e) => setdataInput(e.target.value)}
        />
       
      <button onClick={onSubmit} className='bg-green-400 h-12 px-4 text-white text-xl rounded tracking-wider'>Search</button>
      {   
      result ? 
      <div className="w-2/4 bg-white mx-auto mt-4 rounded">
      <p className="text-red-500 tracking-wider text-left text-2xl pl-4 pt-2 font-sans">{dataInput? <p><b>Q. </b>{dataInput}</p> : ''}</p>
      {result ? <p className="text-black tracking-wider text-left px-4 pb-4 text-base font-sans"><b>Ans. </b>{result}</p> : ' '}
      </div> : ''
      
      }
      
      </div>
    </div>
  </div>
  
  );
}
