const books = {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    publishedYear: 1925,
    ratings: true,
}

class Book {
    constructor(isbn, title, author, genre, publishedYear) {
        this.isbn = isbn
        this.title = title
        this.author = author
        this.genre = genre
        this.publishedYear = publishedYear
        this.ratings = []
    }

    averageRating() {
        const totalRatings = this.ratings.reduce((sum, rating) => sum + rating.rating, 0)
        // หาผลรวมเรตติ้งโดยใช้ reduce()
        return totalRatings / this.ratings.length
        // return ค่าเฉลี่ยโดยใช้ ผลรวมเรตติ้ง / จำนวนเรตติ้ง
    }

    rateBook(userId, rating) {
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
    let isbn = 0

    function addBook(title, author, genre, publishedYear) {
        const newBook = new Book(++isbn, title, author, genre, publishedYear)
        books.push(newBook)
        return newBook
    }

    function findBooksByAuthor(authorName) {
        // เปรียบเทียบชื่อผู้เขียนของหนังสือแต่ละเล่มกับ authorName ที่ระบุในพารามิเตอร์.
        // return books array ที่ชื่อผู้เขียนของหนังสือตรงกับ authorName
        return books.filter((book) => book.author === authorName)
    }

    function findBooksByGenre(genre) {
        // return books array ที่ประเภทหนังสือ(genre)ตรงกับ genre
        return books.filter((book) => book.genre === genre)
    }

    function topRatedBooks(n) {
        // เรียงลำดับหนังสือใน books array ตามคะแนนเฉลี่ยที่ได้รับ จากสูงสุดไปต่ำสุด
        const sortBook = books.sort((a, b) => b.averageRating - a.averageRating)
        return sortBook.slice(0, n) // เอาหนังสือ n เล่มแรกจาก array sortBook ที่มีคะแนนเฉลี่ยสูงสุด.
    }

    function recentlyPublished() {
        const currentYear = new Date().getFullYear() // สร้างตัวแปร currentYear เพื่อเก็บค่าปีปัจจุบัน โดยใช้ new Date().getFullYear() จะได้ปีปัจจุบัน
        const recentBooks = currentYear.filter((book) => currentYear - book.publishedYear <= 5) // กรองหนังสือที่ตีพิมพ์ไม่เกิน 5 ปีจากปีปัจจุบัน
        return recentBooks.sort((a, b) => b.publishedYear - a.publishedYear)  // เรียงลำดับหนังสือใน recentBooks ตามปีที่ตีพิมพ์ จากมากไปหน้อย.
        //ผลลัพธ์ที่ได้ คือ array ของหนังสือที่ตีพิมพ์ล่าสุดไม่เกิน 5 ปี ที่ถูกเรียงลำดับตามปีที่ตีพิมพ์ล่าสุด
    }

    return {
        addBook,
        findBooksByAuthor,
        findBooksByGenre,
        topRatedBooks,
        recentlyPublished
    }

}