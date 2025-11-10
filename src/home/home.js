import Story from '../story/story';
export default function Home() {
  return (
    <div className='col justify-c align-c view-width vw-75'>
      <p className='title-font font-faded-outline white mb-m txt-align-c'>Yojik the Hedgehog Books</p>
      <Story />
    </div>
  );
}
