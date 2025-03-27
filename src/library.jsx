import Book from './library2'

export default function Library({books}) {    
    return(
        <div>
            <h2>My National Centeral Library</h2>
            <p>book collection :{books.length}</p>
            <h3>Library</h3>

            <ul>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    )
}