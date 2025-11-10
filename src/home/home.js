import Story from '../story/story';
import './home.css';
import bg from '../img/homeBg.jpg';
import Books from '../books/books';

export default function Home({ nav }) {
  return (
    <div className='home-bg row justify-c' style={{ backgroundImage: `url(${bg})` }}>
      <div className='col align-c view-width vw-70 view-height vh-50 min-height fit bg-white faded-edge'>
        <p className='title-font font-faded-outline white mb-m txt-align-c'>Yojik the Hedgehog Books</p>
        <Story />
        <div className='col mt-l'>
          <button
            onClick={() => nav(() => Books)}
            className='p-xs button-glow soft-edges bg-white solid-border border-2 border-black txt-s'>
            View Books
          </button>
        </div>
      </div>
    </div>
  );
}
