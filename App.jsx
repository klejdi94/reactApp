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
            <Button></Button>
         </div>
      );
   }
}
class Header extends React.Component {
    render() {
        return ( <div className="header-background">
            < h1 > QUI HEADER </h1> </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            
            <div className="alert alert-success" role="alert">
            Tutto OK
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <div>
            <button className="btn btn-primary" >CHIUDI</button>
            </div>
        );
    }
}

		
export default App;
