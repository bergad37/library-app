import pool from "../db.js"

class bookControllers {


    //create a new book row
    static async createNewBook(req, res) {
        try {
            const { title, author, genre, owner, isbn } = req.body;
            const newBook = await pool.query("INSERT INTO books(title,author,genre,owner,ISBN) VALUES($1,$2,$3,$4,$5) RETURNING *", [title, author, genre, owner, isbn]);
            res.json(newBook.rows[0]);
        } catch (error) {
            console.log(error.message)
        }
    }


    //get all books from the table books
    static async getAllBooks(req, res) {
        try {
            const allBooks = await pool.query("SELECT * FROM books");
            res.json(allBooks.rows);
        } catch (error) {
            console.error(error.message);
        }
    }

    //get a book with a specified id
    static async getOneBook(req, res) {
            try {
                const { id } = req.params;
                const oneBook = await pool.query("SELECT * FROM books WHERE book_id=$1", [id]);
                console.log(res);
                res.json(oneBook.rows[0]);
            } catch (error) {
                console.error(error.message);
            }
        }
        //update a book title

    static async editBookName(req, res) {
        try {
            const { id } = req.params;
            const { title } = req.body;
            const newTitle = await pool.query("UPDATE books SET title=$1 WHERE book_id =$2", [title, id]);
            res.json("BookName changed successfuly");
        } catch (error) {
            console.error(error.message);
        }
    }

    //deleting a book from the store using a specified ID

    static async deletedBook(req, res) {
        try {
            const { id } = req.params;
            const deletedBook = await pool.query("DELETE FROM books WHERE book_id=$1", [id]);
            res.json(`ook with id ${id} has been deleted`);
        } catch (error) {
            console.error(error.message);
        }
    }
}
export default bookControllers;