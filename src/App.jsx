import { useState, useEffect } from 'react'

import './App.css'
import './index.css'
import ImgBox from './components/ImgBox'
import TextBox from './components/TextBox'
import SearchTerm from './components/SearchTerm'

function App() {
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState()
  const [nodata, setNoData] = useState('')

  const access =  import.meta.env.VITE_ACCESS
  const url = `https://api.unsplash.com/search/photos?client_id=${access}&query=${term}&page=1&per_page=15`

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setPost(data.results)
            setIsLoading(false)
            if(data.results == ''){
              setNoData("Your query can't retrieve any meaninful gallery, try again.")
            } else {
              setNoData('')
            }
          })
          .catch(err => console.log(err))

      } catch (error) {
        console.error(error)
        
      }

    }
    fetchData()
  },[term])
 
  const style = {
    header:{
      marginBottom:'20px'
    },
    outer: {
      gap:'13px',
    },
    inner: {
      background:'rgba(0,0,0, .06)'
    },

  }
  
  return (
    <>
      
      <div style={style.header}>
        <h1>Image Gallery</h1>
        <p>With Unsplash API</p>
        <SearchTerm searchText={(text) => setTerm(text)}/>
        {post && <p>{nodata}</p>}
      </div>
      <div style={style.outer} className='outer'>
        {post.map(p => (
          <div style={style.inner} key={p.id}>
            <ImgBox 
              alt={p.alt_description} 
              img={p.urls.small}
              />
            <TextBox desc={p.alt_description} likes={p.likes} user={p.user.first_name}/>
          </div>
        ))}
      </div> 

    </>
  )
}

export default App
