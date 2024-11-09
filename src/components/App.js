// create your App component here
import { useEffect,useState } from "react";

function App(){
const [image, setImage] = useState(null)

useEffect(()=>{
    fetch ("https://dog.ceo/api/breeds/image/random")
        .then ((response)=> response.json())
        .then ((data)=>{setImage(data.message)});
        
},[]);

if (!image){
    return <h2>Loading...</h2>
}
return(
    <div>
        <img src={image} alt="A Random Dog"></img>
    </div>
)
}
export default App;