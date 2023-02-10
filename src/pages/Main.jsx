import Nav from "../components/navs/Nav";
import Card from "../components/cards/Card";
import DefaultCity from "../components/cards/DefaulCity";

const Main = ({ cities, onClose, onSearch, pinnedValues,noFound}) => {
  const { pinned, setPinned } = pinnedValues;

  return (
    <div className=" h-full">
      <Nav onSearch={onSearch} noFound={noFound}/>

      <div className="h-[87%] w-full flex  my-2" id="container">
        <div className="h-full w-[40%] flex items-center justify-center">
          <DefaultCity
            defaultCity={pinned.defaultCity}
            pinnedCity={pinned.pinnedCity}
            onClose={onClose}
            onPinned={setPinned}
          />
        </div>

        <div className="h-full w-[60%] flex flex-wrap start py-4 overflow-y-scroll">
          {cities?.length > 0 && Array.isArray(cities) ? (
            cities
              .filter((c) => c.id !== pinned.pinnedCity.id)
              .map((city) => (
                <Card
                  key={city.id}
                  city={city}
                  onClose={onClose}
                  onPinned={setPinned}
                />
              ))
          ) : (
            <div className="w-full">
              <h2 className="w-full text-center font-bold">Without Cities</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;
