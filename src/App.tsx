import { Card } from "./components/Pricecards/card";

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl bg-white px-4  sm:px-6 lg:px-8"></div>
      <h2 className="text-3xl text-black font-extralight sm:text-5xl sm:leading-tight sm:tracking-tight">
        Pricing plans for teams of all sizes
      </h2>
      <p className="mt-4 max-w-3xl text-lg text-slate-500">
        Choose an affordable plan that's packed with the best features for
        engauging your audience, creating customer loyalty and driving sales
      </p>
      <Card />
    </>
  );
}

export default App;
