import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { MenuList } from './components/MenuList';
import { Sidebar } from './Sidebar';
import OrderContextProvider from './context/OrderContextProvider';

function App() {
  return (
    <div className="App">
      <>
      <OrderContextProvider>
        <Header />
        <div className="menu-container">
        <MenuList />
        </div>
        <div className="sidebar-container">
          <Sidebar />
        </div>
      </OrderContextProvider>
      </>
    </div>
  );
}

export default App;
