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
const cover7 = new Image();
cover7.src = require('../img/cover7.jpg');
const cover8 = new Image();
cover8.src = require('../img/cover8.jpg');
const cover9 = new Image();
cover9.src = require('../img/cover9.jpeg');

export default function Books() {
  const [bookIndex, setBook] = useState(0);
  const bookEntries = Object.entries(books.booklinks);
  const bookImages = [cover1, cover2, cover3, cover4, cover5, cover6, cover7, cover8, cover9];

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
    <div className='col view-width vw-100 view-height vh-100 min-height fit align-c reg-font bg-brown-3'>
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
            className='book-viewer'
          />
        </a>
        <button
          onClick={() => changeBook('right')}
          className='book-viewer my-a txt-xl bg-translucent gray-4 button-glow'>
          <text className='book-viewer'>&#10148;</text>
        </button>
      </div>
      <div className='books col txt-m mb-xs'>
        <a
          href={bookEntries[bookIndex][1]}
          className='p-xs button-glow soft-edges bg-white solid-border border-2 border-black'>
          See on Amazon
        </a>
      </div>
      <div className="books row justify-c align-c w-100 my-xs px-xs red-2 bg-white rounded txt-reg">
        <span className='mt-xs mr-xs'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-alert-square-rounded">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
          </svg>
        </span>
        <span><bold>Russian and Ukranian translations are currently being reworked.</bold></span>
      </div>
    </div>
  );
}
