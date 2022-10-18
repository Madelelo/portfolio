/* This example requires Tailwind CSS v2.0+ */
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useSanityContext } from "./SanityContext";

const PersonaliaSeksjon = (props) => {
  const { personalia } = props;
  const { urlFor } = useSanityContext();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative bg-gray-50 w-screen h-screen">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{personalia[0].navn}</span>{" "}
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {personalia[0].intro}
            </p>
            <p className="relative flex mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl justify-center lg:justify-start">
              <MapPinIcon className="h-6 w-6" /> {personalia[0].sted}
            </p>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href={personalia[0].GitHub}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  My GitHub
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href={personalia[0].LinkedIn}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  My LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={urlFor(personalia[0].picture).url()}
            alt=""
          />
        </div>
      </main>
    </div>
  );
};
export default PersonaliaSeksjon;
