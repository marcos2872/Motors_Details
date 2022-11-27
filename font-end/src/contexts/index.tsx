import React, { createContext, useMemo, useState } from 'react';

type ContextType = {
  search: string;
  setSearch: any;
  drawer: boolean;
  setDrawer: any;
};

export const Context = createContext({} as ContextType);

function ContextApi({ children }: { children: any }) {
  const [search, setSearch] = useState('');
  const [drawer, setDrawer] = useState(false);

  const ProviderValue = useMemo(
    () => ({ search, setSearch, drawer, setDrawer }),
    [search, setSearch, drawer, setDrawer],
  );
  return <Context.Provider value={ProviderValue}>{children}</Context.Provider>;
}

export default ContextApi;
