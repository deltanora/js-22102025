let book = {
    title: "Zvaigznes dienasgrāmata",
    author: "Štanislavs Lems",
    pages: 320
}
console.log(book.title);

book["pages"] = 100;

if (book.pages > 300) {
    console.log("Vairāk nekā 300 lpp")
}else{
    console.log("Mazāk kā 300 lpp")
}