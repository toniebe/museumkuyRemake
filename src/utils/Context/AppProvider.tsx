import React, {useState} from 'react';
import {AppContext} from './AppContext';

const AppProvider = ({children}: any) => {
  const [dataRemoteConfig, setDataRemoteConfig] = useState<any>([]);
  const [dataOnboarding, setDateOnboarding] = useState<any>([]);
  const [user, setDataUser] = useState<any>();

  return (
    <AppContext.Provider
      value={{
        dataRemoteConfig,
        setDataRemoteConfig,
        setDataUser,
        user,
        dataOnboarding,
        setDateOnboarding,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
