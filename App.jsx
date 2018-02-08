import React from 'react';

class App extends React.Component {
   render() {
      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }
      return (
         <div>
             <Header></Header>
            <h1 style = {myStyle}>KK</h1>
            <Content></Content>
         </div>
      );
   }
}
class Header extends React.Component {
    render() {
        return ( <div >
            < h1 > QUI HEADER </h1> </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return ( <div>
            <h2 > Contenuto </h2> 
            <p> Questo è un contenuto!!! </p> 
            </div>
        );
    }
}
export default App;
