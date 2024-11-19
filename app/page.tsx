export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className=" h-5/7 w-96 items-center rounded-3xl bg-yellow-400 pt-96 p-5 shadow-lg">
        <span className="font-bold">Select Destination</span>
        <div className="h-0.5 w-full bg-black"></div>
        <div>
          <div className="mt-5">
            {[
              "Vancouver",
              "Seattle",
              "Portland",
              "Seattle",
              "San Francisco",
              "Los Angeles",
              "San Diego",
            ].map((place, index) => (
              <div className="flex group" key={index}>
                <div
                  className="mr-2 mt-2 h-6 w-6 flex items-center justify-center rounded-full 
                bg-black text-xs text-yellow-300 text-center group-hover:bg-white"
                >
                  {place.slice(0, 1)}
                </div>
                <div>
                  <span className="text-3xl font-bold group-hover:text-white">
                    {place}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
