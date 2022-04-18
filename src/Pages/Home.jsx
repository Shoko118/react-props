import ProfileColors from "../Components/ProfileColors";
import DataColors from "../Data/DataColors";

const Home = () => {
  const PropData = DataColors.map((item) => (
    <ProfileColors
      key={item.id}
      name={item.name}
      age={item.age}
      description={item.description}
      Boolean={item.Boolean}
      isOpen={item.isOpen}
      id={item.id}
    />
  ));

  return (
    <div>
      <h1>This is the home page</h1>
      <div>{PropData}</div>
    </div>
  );
};

export default Home;
