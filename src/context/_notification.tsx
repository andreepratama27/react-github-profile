import * as React from "react";

type Props = {};

const NotificationContext = React.createContext({});

const NotificationProvider: React.FC<Props> = ({ children }) => {
  return (
    <NotificationContext.Provider value={{}}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
