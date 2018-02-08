import React from 'react';

class App extends React.Component {
   render() {
      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>
            <h1 style = {myStyle}>KK</h1>
         </div>
      );
   }
}
class Header extends React.Component {
    render() {
        return ( <div >
            < h1 > Header </h1> </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return ( <div>
            <h2 > Content </h2> 
            <p> The content text!!! </p> 
            </div>
        );
    }
}
export default App;
