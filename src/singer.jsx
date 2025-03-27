import "./App.css";
export default function Singer({singer}) {
    // console.log(singer.singer);
    
    return (
        <div className="singer">
            <h3>Name: {singer.name}</h3>
            <h4>Age: {singer.age}</h4>
        </div>
    )
}