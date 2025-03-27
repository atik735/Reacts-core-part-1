export default function Book({book}) {    
    return(
        <div style={{border:"2px solid green",padding:"10px",margin:"10px",}}>
            <h4>Book Name:{book.book}</h4>
            <h4>Book Price:{book.price}</h4>
        </div>
    )
}