import ListStations from "../../components/client/lists/ListStations";
import Hero from "../../components/client/home/Hero";

const Home = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Hero />
        <ListStations itemsPag={4}/>
      </div>
    </>
  )
}

export default Home