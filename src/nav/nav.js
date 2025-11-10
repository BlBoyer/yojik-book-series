//this component will be a modal to easily select which component to render. Instead of a typical bar navigation, it will use icons and selectable buttons
import './nav.css';
import Books from '../books/books';
import Home from '../home/home';

//component should output component name to app container, lazy load the component by name
export default function Nav({ nav }) {
  return (
    <div className='nav collapse row justify-a align-c view-width vw-40 view-height vh-35 min-height min-width fit m-l p-xs bg-brown-3 border-3 solid-border border-black shaded-black basic-txt-shade'>
      <div
        onClick={() => nav(() => Home)}
        title='Home'
        className='nav-tab row justify-c align-c rounded-link button-glow'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='64'
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
        {/* Home */}
      </div>
      <hr></hr>
      <div
        onClick={() => nav(() => Books)}
        title='Books'
        className='nav-tab row justify-c align-c rounded-link button-glow'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='64'
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
        {/* Books */}
      </div>
      {/* <button
        onClick={() => nav(() => Story)}
        className='button-glow bg-brown-3 soft-edges row txt-m align-c justify-b'>
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
      </button> */}
    </div>
  );
}
