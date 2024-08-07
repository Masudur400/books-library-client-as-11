import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";
import { Helmet } from "react-helmet";

 
const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-eleven-server-eosin.vercel.app/books')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    },[])
 
    return (
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            <Helmet>
                <title>All Book</title>
            </Helmet>
             {
                allBooks?.map(book => <SingleBook
                     key={book._id}
                      book={book}
                      ></SingleBook>)
             }
        </div>
    );
};

export default AllBooks;