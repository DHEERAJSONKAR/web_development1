import React, { use } from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const searchQuestValue = searchParams.get("searchParam");
  const [searchText, setSearchText] = useState("");
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`?searchParam=${searchText}`)  
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}placeholder='username' name='username'/><br/>
      <button>Submit</button>
      {searchQuestValue}
    </form>
  )
}

export default HomePage
