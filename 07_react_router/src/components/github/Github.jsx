import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/deep1172`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // }, [])
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github followers: {data.followers}
    <img className='text-center' src={data.avatar_url} alt="Deepak Kumar " width={300} />
    </div>
  )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () =>{
    const response = await fetch (`https://api.github.com/users/deep1172`)
    return response.json()
}