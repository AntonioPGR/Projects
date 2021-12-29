import React from 'react';
import ReactDOM from 'react-dom';

import Header from './app/header.js';
import Main from './app/main.js';
import Footer from './app/footer.js';

class App extends React.Component {
   render() {
      return (
         <div id="body">
            <Header />
            <Main />
            <Footer />
         </div>
      )
   }
}

ReactDOM.render(
   <App />,
   document.getElementById('root')
)