import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.scss';
import  BaseLayout from "./pages/BaseLayout";
import '@progress/kendo-theme-default/dist/all.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
}
export default App