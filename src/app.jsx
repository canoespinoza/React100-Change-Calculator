import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        amountDue : '',
        amountReceived : '',
        output : '',
        errorClass : '',
        twenties : '',
        tens : '',
        fives : '',
        ones : '',
        quarters : '',
        dimes : '',
        nickels : '',
        pennies : '',
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleChange(event) {
    this.setState ({ [event.target.name] : event.target.value });
  }

  handleCalculate(amountDue, amountReceived){
    amountDue = this.state.amountDue
    amountReceived = this.state.amountReceived
    let finalChange = []
    var change = (amountReceived - amountDue).toFixed(2);
    var cents = change - Math.floor(change);
    
    if(amountReceived < amountDue){
      this.setState({
        errorClass : 'alert alert-danger',
        output : 'tf outta here witcho broke ass!',
        twenties: 0,
        tens: 0,
        fives: 0,
        ones: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
      })
    }
    
    else{
      this.setState({
        errorClass : 'alert alert-success',
        output : `The total change due is $${change}`
      })
        if(change >= 20){
          var twenty = Math.floor(change/20);
          (change %= 20).toFixed(2);
          finalChange.push(twenty)
        } else{finalChange.push(0)}
        
        if(change >= 10){
          var ten = Math.floor(change/10);
          (change %= 10).toFixed(2);
          finalChange.push(ten)
        } else{finalChange.push(0)}
        
        if(change >= 5){
          var five = Math.floor(change/5);
         (change %= 5).toFixed(2);
          finalChange.push(five)
          console.log(change)
        } else{finalChange.push(0)}
        
        if(change >= 1){
          var one = Math.floor(change);
         (change %= 1).toFixed(2);
          finalChange.push(one)
        } else{finalChange.push(0)}

  (cents *= 100).toFixed(2)

        if(cents >= 25){
            var quarter = Math.floor(cents/25)
            cents %= (quarter * 25);
            cents = Math.floor(cents)
            console.log(cents)
            finalChange.push(quarter) 
        } else{finalChange.push(0)}
        
        if(cents >= 10){
            var dime = Math.floor(cents/10)
            cents %= (dime * 10);
            cents = Math.floor(cents)
            console.log(cents)
            finalChange.push(dime)
        } else{finalChange.push(0)}
        
        if(cents >= 5){
            var nickel = Math.floor(cents/5)
            cents %= (nickel * 5);
            cents = Math.floor(cents)
            console.log(cents)
            finalChange.push(nickel)
        } else{finalChange.push(0)}
        
        if(cents >= 0){
            var penny = Math.floor(cents)
            cents %= penny;
            cents = Math.floor(cents)
            finalChange.push(penny)
        } else{finalChange.push(0)}
    
      this.setState({
        twenties: finalChange[0],
        tens: finalChange[1],
        fives: finalChange[2],
        ones: finalChange[3],
        quarters: finalChange[4],
        dimes: finalChange[5],
        nickels: finalChange[6],
        pennies: finalChange[7]
    })
    }
}

  render() {
    return (
      <div className='container'>
        <form className='form-horizontal'>
          <header>
          <h1 className='text-light'>Change Calculator</h1>
          </header>
          <div className='row'>
            <div className='card bg-light'>
              <div className='row-lg-4'>
                <div className='panel-body'>
                  <h4 className='card-header'>Transaction Details</h4>
                  Amount Due: 
                  <input 
                  className='form-control'
                  name='amountDue' 
                  type='number' 
                  value={this.state.amountDue}
                  onChange={this.handleChange}
                  />
                  Amount Received: 
                  <input 
                  className='form-control'
                  name='amountReceived' 
                  type='number' 
                  value={this.state.amountReceived}
                  onChange={this.handleChange}
                  />
                  <button 
                  className='btn form-control bg-primary card-footer'
                  name='calculate' 
                  type='button'
                  onClick={this.handleCalculate}>
                    Calculate
                  </button>
                </div>
              </div>
            </div>
          <div>
            <div className='card bg-light'>
              <div className='row-lg-8'>
                  <h4 className='card-header'>Change Due</h4>
                  <div 
                  className={this.state.errorClass} 
                  name='output'
                  onChange={this.handleCalculate}> {this.state.output}
                  </div> 
                <div className='form-control' id='twenties' onChange={this.handleChange}>
                  Twenties={this.state.twenties}</div>
                <div className='form-control' id='tens' onChange={this.handleChange}>
                  Tens={this.state.tens}</div>
                <div className='form-control' id='fives' onChange={this.handleChange}>
                  Fives={this.state.fives}</div>
                <div className='form-control' id='ones' onChange={this.handleChange}>
                  Ones={this.state.ones}</div>
                <div className='form-control' id='quarters' onChange={this.handleChange}>
                  Quarters={this.state.quarters}</div>
                <div className='form-control' id='dimes' onChange={this.handleChange}>
                  Dimes={this.state.dimes}</div>
                <div className='form-control' id='nickels' onChange={this.handleChange}>
                  Nickels={this.state.nickels}</div>
                <div className='form-control' id='pennies' onChange={this.handleChange}>
                  Pennies={this.state.pennies}</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    )
  }
}

export default App;
