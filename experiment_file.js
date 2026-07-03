const bookTracker = {
books: [],
addBook(title, author) {
// TODO
},
markAsRead(title) {
// TODO: find the book with this title and set isRead to true
},
getUnreadBooks() {
// TODO: return an array of titles where isRead is false
},
};
// Test your code:
bookTracker.addBook("Dune", "Frank Herbert");
bookTracker.addBook("Educated", "Tara Westover");
bookTracker.markAsRead("Dune");
console.log(bookTracker.getUnreadBooks()); // should log ["Educated"]