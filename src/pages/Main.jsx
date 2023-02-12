import Nav from "../components/navs/Nav";
import Card from "../components/cards/Card";
import DefaultCity from "../components/cards/DefaulCity";

const Main = ({ cities, onClose, onSearch, pinnedValues, noFound }) => {
  const { pinned, setPinned } = pinnedValues;

  return (
    <div className=" h-full">
      <Nav onSearch={onSearch} noFound={noFound} />

      <div
        className="w-full flex flex-col my-2 sm:flex-row sm:mt-4 sm:h-[81vh]"
        id="container"
      >
        <div className="flex items-center justify-center sm:w-[50%] md:w-[40%] sm:h-full">
          <DefaultCity
            defaultCity={pinned.defaultCity}
            pinnedCity={pinned.pinnedCity}
            onClose={onClose}
            onPinned={setPinned}
          />
        </div>

        <div
          className="flex flex-col space-y-2 items-center py-4 sm:w-[50%] sm:scrollbar md:space-y-0 md:w-[60%] md:flex-row md:flex-wrap md:justify-center md:items-start xl:justify-start z-10"
        >
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
