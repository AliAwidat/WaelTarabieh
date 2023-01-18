import logo from './assets/postImage.png';
import './App.css';
import data from "./post.json";
function App() {

  let data = require('./post.json');
  let postTitle1 = data.postTitle1;
  let postTitle2 = data.postTitle2;
  let postContent =[];

  for(let i=0; i<data.postContent.length;i++){
    postContent.push(<p>{data.postContent[i]}</p>);
  }

  return (
    <div className="App">
        <div className={"post-image"}>
            <img src={logo} alt="logo" />
        </div>

      <div className={"post-title one"}>
        {postTitle1}
      </div>
        <div className={"post-title two"}>
        {postTitle2}
      </div>
      <div className={"post-content"}>
          {data.postContent.map(function(String,i){return <p>{data.postContent[i]}</p>;})}
      </div>
        <hr ></hr>
        <div>
            <p style={{direction:"rtl",textAlign:"right"}}>

    *بعض الأفكار الواردة في هذه الورقة نُشرت، معدّلة وبتأليف مشترك مع د. منير فخرالدين في كتاب: The Untold Story of The Golan Heights الذي صدر مؤخراً، باللغة الإنكليزية.
            </p>
        </div>
    </div>
  );
}

export default App;
