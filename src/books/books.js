import './books.css';
import { useState } from 'react';

const books = require('../data/links');
const cover1 = new Image();
cover1.src = require('../img/cover1.jpg');
const cover2 = new Image();
cover2.src = require('../img/cover2.jpg');
const cover3 = new Image();
cover3.src = require('../img/cover3.jpg');
const cover4 = new Image();
cover4.src = require('../img/cover4.jpg');
const cover5 = new Image();
cover5.src = require('../img/cover5.jpg');
const cover6 = new Image();
cover6.src = require('../img/cover6.jpg');

export default function Books() {
  const [bookIndex, setBook] = useState(0);
  const bookEntries = Object.entries(books.booklinks);
  const bookImages = [cover1, cover2, cover3, cover4, cover5, cover6];

  function changeBook(direction) {
    if (direction === 'right') {
      if (bookIndex === bookImages.length - 1) {
        setBook(0);
      } else {
        setBook(bookIndex => bookIndex + 1);
      }
    }
    if (direction === 'left') {
      if (bookIndex === 0) {
        setBook(bookImages.length - 1);
      } else {
        setBook(bookIndex => bookIndex - 1);
      }
    }
  }

  return (
    <div className='col align-c reg-font'>
      <h2 className='title-font'>Books</h2>
      <div className='book-viewer row justify-c view-width vw-50 mb-l bg-gray-4 faded-edge'>
        <button
          onClick={() => changeBook('left')}
          className='book-viewer my-a txt-xl bg-translucent gray-4 button-glow'>
          <text className='book-viewer flip-x txt-align-r'>&#10148;</text>
        </button>
        <img src={bookImages[bookIndex].src} alt='Book cover' className='book-viewer view-width vw-30 auto-height' />
        <button
          onClick={() => changeBook('right')}
          className='book-viewer my-a txt-xl bg-translucent gray-4 button-glow'>
          <text className='book-viewer'>&#10148;</text>
        </button>
      </div>
      <div className='books col ml-vxs'>
        <a href={bookEntries[bookIndex][1]} className='button-glow'>
          See on Amazon
        </a>
      </div>
    </div>
  );
}
