import { useState } from 'react'

function App() {
  const [billValue, setBillValue] = useState(0)
  const [people, setPeople] = useState(0)
  const [tipValue, setTipValue] = useState(0)
  const [visible, setVisible] = useState(false)

  const tipAmount = people > 0 ? (billValue * (tipValue * 0.01)) / people : 0
  const total = people > 0 ? (+billValue + +tipAmount) / people : 0

  const handleClearAllFields = () => {
    setBillValue(0)
    setPeople(0)
    setTipValue(0)
    setVisible(false)
  }

  return (
    <main className="font-space-mono bg-neutral-200 w-screen min-h-screen flex flex-col items-center">
      <header className="flex flex-col text-2xl sm:mt-12 lg:mt-24 mb-8 font-bold tracking-widest">
        <span className="uppercase text-neutral-400">spli</span>
        <span className="uppercase text-neutral-400">tter</span>
      </header>
      <section className=" bg-white h-full lg:h-96 border w-full lg:w-6/12 gap-4 rounded-3xl flex flex-col lg:flex-row py-8 lg:px-4">
        <article className="flex w-full flex-col justify-between px-6">
          <section>
            <p>Bill</p>
            <span className="relative flex">
              <span className="absolute flex items-center pl-2 text-2xl text-neutral-300 inset-y-0">
                $
              </span>
              <input
                type="number"
                className="rounded my-2 p-2 w-full text-right inset-y-0 right-2 bg-neutral-200 bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-primary"
                value={billValue}
                onChange={(e) => setBillValue(e.target.value)}
              />
            </span>
          </section>
          <section>
            <p className="mb-2">Select Tip %</p>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => setTipValue(5)}
                className="flex justify-center py-2 font-bold rounded
               bg-neutral-500 hover:bg-primary cursor-pointer focus:bg-primary text-white text-base"
              >
                5%
              </button>
              <button
                onClick={() => setTipValue(10)}
                className="flex justify-center py-2 font-bold rounded
               bg-neutral-500 hover:bg-primary cursor-pointer focus:bg-primary text-white text-base"
              >
                10%
              </button>
              <button
                onClick={() => setTipValue(15)}
                className="flex justify-center py-2 font-bold rounded
               bg-neutral-500 hover:bg-primary cursor-pointer focus:bg-primary text-white text-base"
              >
                15%
              </button>
              <button
                onClick={() => setTipValue(25)}
                className="flex justify-center py-2 font-bold rounded
               bg-neutral-500 hover:bg-primary cursor-pointer focus:bg-primary text-white text-base"
              >
                25%
              </button>
              <button
                onClick={() => setTipValue(50)}
                className="flex justify-center py-2 font-bold rounded
               bg-neutral-500 hover:bg-primary cursor-pointer focus:bg-primary text-white text-base"
              >
                50%
              </button>
              {!visible ? (
                <div
                  onClick={() => setVisible(true)}
                  className="flex justify-center py-1 rounded
               bg-neutral-white text-neutral-500 text-base md:text-lg"
                >
                  Custom
                </div>
              ) : (
                <input
                  type="number"
                  className="flex justify-center p-2 rounded
                  bg-neutral-white text-neutral-500 text-right text-base md:text-lg bg-neutral-200 bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={tipValue}
                  onChange={(e) => setTipValue(e.target.value)}
                />
              )}
            </div>
          </section>
          <section>
            <span className="flex flex-col justify-center gap-1 h-16">
              <p>Number of people</p>
              {people <= 0 && <p className="text-red-500">can't be zero</p>}
            </span>
            <span className="relative flex">
              <span className="absolute flex items-center pl-2 text-2xl text-neutral-300 inset-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="number"
                className="rounded my-2 p-2 w-full text-right inset-y-0 right-2 bg-neutral-200 bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-primary"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </span>
          </section>
        </article>
        <article className="bg-neutral-500 mx-6 lg:w-full h-64 lg:h-full flex flex-col justify-between rounded-2xl py-8 px-6">
          <section className="flex flex-col space-y-8">
            <aside className="flex w-full justify-between items-center">
              <p className="flex flex-col">
                <span className="text-white pt-1 font-bold">Tip Amount</span>
                <span className=" text-xs text-neutral-300"> / person</span>
              </p>
              <p className="flex font-bold text-3xl text-primary">
                $ <span>{tipAmount.toFixed(2)}</span>
              </p>
            </aside>
            <aside className="flex w-full justify-between items-center">
              <p className="flex flex-col">
                <span className="text-white pt-1 font-bold">Total</span>
                <span className=" text-xs text-neutral-300"> / person</span>
              </p>
              <p className="flex font-bold text-3xl text-primary">
                $ <span>{total.toFixed(2)}</span>
              </p>
            </aside>
          </section>
          <section>
            <button
              onClick={() => handleClearAllFields()}
              className={`bg-primary hover:bg-neutral-200 py-1 font-medium text-neutral-500 rounded w-full`}
            >
              RESET
            </button>
          </section>
        </article>
      </section>
    </main>
  )
}

export default App
