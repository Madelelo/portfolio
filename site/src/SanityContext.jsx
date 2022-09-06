import React, { createContext, useState, useContext, useEffect } from "react";
import sanityClient from "@sanity/client";

const initialState = { client: {} };

const SanityContext = createContext(initialState);

export const SanityProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const client = sanityClient({
      projectId: "0bjq2yfg",
      dataset: "production",
      apiVersion: "2021-09-22", // uses current UTC date - see "specifying API version"!
      token:
        "skqNBWOjmPAFl0A7zOcFrqMkK48SYf3fPFBxFIUdfgIKGYfdeV1ZGJfWGnSZyetBWS1mVCxewKvFIIy3727EmdlzhLJyYWdM5Oyq8T3NedJcqYN66vRfevGISoF9fh8xiS5qRjKfP0ar2ChKoSjHvnWF40HuPQEucoqXFFdXCMywBzpeRMXs",
      useCdn: true, // `false` if you want to ensure fresh data
    });

    setState((prevState) => ({ ...prevState, client }));
  }, []);
  return (
    <SanityContext.Provider value={state}>{children}</SanityContext.Provider>
  );
};

export const useSanityContext = () => {
  const context = useContext(SanityContext);

  return context;
};
