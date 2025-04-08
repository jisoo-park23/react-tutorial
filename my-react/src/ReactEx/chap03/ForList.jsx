import Download from "./Download.jsx";

export default function ForItem({ book }) {
  let dd;
  // download 속성의 유무에 따라 태그를 분기한다.
  if (book.download) {
    dd = <dd>{book.summary}<Download slug={book.slug} /></dd>;
  } else {
    dd = <dd>{book.summary}</dd>;
  }
  return (
  <>
    <dt>
    <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>
      {book.title}（{book.price}원）
    </a>
    </dt>
    {dd}
  </>
  );
}