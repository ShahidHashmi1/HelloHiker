import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <section>
      <Header />
    </section>

    <section>
    <App />
    </section>
  </React.StrictMode>,
  document.getElementById('root')
  // ,() => { alert('page successfully rendered')}
);
