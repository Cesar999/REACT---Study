import React from 'react';

const SongsContext = React.createContext();

export const SongsProvider = SongsContext.Provider
export const SongsConsumer = SongsContext.Consumer

export default SongsContext;