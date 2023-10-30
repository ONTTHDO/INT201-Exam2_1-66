// const books = {
//     id: 1,
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     genre: 'Classic',
//     publishedYear: 1925,
//     ratings: true,
// }
  
class Book {
    constructor(isbn, title, author, genre, publishedYear) {
        this.isbn = isbn
        this.title = title
        this.author = author
        this.genre = genre
        this.publishedYear = publishedYear
        this.ratings = []
    }

    averageRating(){
        const totalRatings = this.ratings.reduce((sum, rating) => sum + rating.rating, 0)
        return totalRatings/this.ratings.length
    }

    rateBook(userId, rating){
        const userRatingIndex = this.ratings.findIndex((userRating) => userRating.userId === userId)
        if (userRatingIndex !== -1) { //ถ้าเจอ userId ที่ตรงกัน
            //อัพเดตคะแนน rating ใน array ratings ที่ userRatingIndex ด้วยคะแนนใหม่
            this.ratings[userRatingIndex].rating = rating
        } else { //ถ้าไม่เจอ userId ที่ตรงกัน ให้เพิ่มข้อมูล rating ลงใน array ratings
            this.ratings.push({ userId, rating })
        }
    }
}

function LibraryManagement() {
    const books = []

    function addBook(title, author, genre, publishedYear) {
        const newBook = new Book(isbn, title, author, genre, publishedYear)
        books.push(newBook)
        return newBook
    }

    function findBooksByAuthor(authorName) {
        return books.filter((book) => book.author === authorName )
    }

    function findBooksByGenre(genre) {
        return books.filter((book) => book.genre === genre)
    }

    function topRatedBooks(n) {
        const sortBook = books.sort((a, b) => b.averageRating - a.averageRating)
        return sortBook.slice(0, n)
    }

    function recentlyPublished() {
        const currentYear = new Date().getFullYear()
        const recentBooks = currentYear.filter((book) => currentYear - book.publishedYear <= 5)
        return recentBooks.sort((a, b) => b.publishedYear - a.publishedYear)
    }

    return {
        addBook,
        findBooksByAuthor,
        findBooksByGenre,
        topRatedBooks,
        recentlyPublished
    }

}