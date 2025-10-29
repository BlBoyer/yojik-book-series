//this component will be a modal to easily select which component to render. Instead of a typical bar navigation, it will use icons and selectable buttons

import './nav.css';
import Books from '../books/books';
import Gallery from '../gallery/gallery';
import Home from '../home/home';
import Story from '../story/story';

//component should output component name to app container, lazy load the component by name
export default function Nav({ route }) {
  return (
    <div className='nav grid-areas depth-2 justify-c grid-gap-vm view-width vw-60 view-height vh-35 min-height fit m-l p-m bg-translucent border-3 solid-border border-black shaded-black basic-txt-shade'>
      <button
        onClick={() => route(() => Home)}
        className='area1 button-glow bg-brown-3 soft-edges row txt-m align-c justify-b'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-home'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
          <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
          <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
        </svg>
        Home
      </button>
      <button
        onClick={() => route(() => Books)}
        className='area2 button-glow bg-brown-3 soft-edges row txt-m align-c justify-b'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-book'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0' />
          <path d='M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0' />
          <path d='M3 6l0 13' />
          <path d='M12 6l0 13' />
          <path d='M21 6l0 13' />
        </svg>
        Books
      </button>
      <button
        onClick={() => route(() => Story)}
        className='area3 button-glow bg-brown-3 soft-edges row txt-m align-c justify-b'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-quote'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5' />
          <path d='M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5' />
        </svg>
        Story
      </button>
      <button
        onClick={() => route(() => Gallery)}
        className='area4 button-glow bg-brown-3 soft-edges row txt-m align-c justify-b'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-library-photo'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z' />
          <path d='M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1' />
          <path d='M17 7h.01' />
          <path d='M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644' />
          <path d='M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644' />
        </svg>
        Gallery
      </button>
    </div>
  );
}
