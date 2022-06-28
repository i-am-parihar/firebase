import { collection, doc, onSnapshot } from "firebase/firestore";
import {useEffect , useState} from "react" ;
import './App.css';
import db from "./Firebase" ;

function App() {
  const [data , setData] = useState([]) ;

  useEffect(
    () => 
    onSnapshot(collection(db,"PictoBlox"),(snapshot) => 
      setData(snapshot.docs.map((doc) => doc.data())) 
    ),
 []
 )
 console.log("data" , data) ;
  return (
    <div className="App">
      {data.map((el) => {
        return(
          <div className="mainBox">
              <div className="Box">
                 <img src={el.img}></img>
                 <h4>{el.title}</h4>
                 <p>{el.text}</p>
              </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
