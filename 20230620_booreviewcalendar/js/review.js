// const url = window.location.href;
// const urlParams = new URL(url).searchParams;
// const id = urlParams.get('book');
// console.log(books[parseInt(id)-1].title);

// URL에 있는 book parameter 값 (string) : bookId
let url_href = window.location.href; // 브라우저 창에 있는 주소
const bookId = new URL(url_href).searchParams.get("book");
console.log('bookId: ${bookId}, type: ${typeof bookId}'); // "3", string

// -> string을 number로 변환 : bookIdNumber
// let bookIdNumber = Number(bookId); // 방법1
// let bookIdNumber = parseInt(bookId); // 방법2
let bookIdNumber = bookId * 1; // 방법3 (문자열이 숫자로 변환)
console.log('bookIdNumber: ${bookIdNumber}, type: ${typeof bookIdNumber}'); // 3, number

// -> books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자 : bookData
// bookIdNumber : URL에서 가져온 id 값 === books 하나씩 꺼낸 book의 id 값
let bookData;
for (let book of books) { // 북의 정보가 리스트가 되어 있는 것 중에 하나씩 꺼내서 반복
    if (bookIdNumber === book.id) {
        bookData = book; // id가 같으면, 그놈을 꺼내서 bookData에 넣자
        break;
    }
}
console.log(bookData);

// -> title, author, publisher, bookImage 알아내자
// let title = bookData["title"];
let title = bookData.title;
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

// -> HTML에 넣자
// HTML 요소 -> js 변수
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}" />`;

// let name = "최유진";
// console.log('안녕, ${name}');