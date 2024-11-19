import RoomCard from '@/components/RoomCard';
import rooms from '../data/rooms.json';
import Heading from '@/components/Heading';

const Home = () => {
  return (
    <>
      <Heading title="Available Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} />)
      ) : (
        <p>No rooms available at the moment</p>
      )}
    </>
  );
};

export default Home;
