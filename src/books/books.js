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
    <div className='col view-width vw-100 align-c reg-font bg-brown-3'>
      <h1 className='title-font font-faded-outline white mb-m txt-align-c'>Books</h1>
      <div className='book-viewer main row justify-c mb-l bg-gray-3 faded-edge'>
        <button
          onClick={() => changeBook('left')}
          className='book-viewer my-a txt-xl bg-translucent gray-4 button-glow'>
          <text className='book-viewer flip-x txt-align-r'>&#10148;</text>
        </button>
        <a href={bookEntries[bookIndex][1]}>
          <img
            src={bookImages[bookIndex].src}
            alt='Book cover'
            className='book-viewer view-height vh-75 view-width vw-65'
          />
        </a>
        <button
          onClick={() => changeBook('right')}
          className='book-viewer my-a txt-xl bg-translucent gray-4 button-glow'>
          <text className='book-viewer'>&#10148;</text>
        </button>
      </div>
      <div className='books col ml-vxs txt-m mb-s'>
        <a
          href={bookEntries[bookIndex][1]}
          className='p-xs button-glow soft-edges bg-white solid-border border-2 border-black'>
          See on Amazon
        </a>
      </div>
    </div>
  );
}
