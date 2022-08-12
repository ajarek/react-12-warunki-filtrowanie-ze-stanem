const numbers=[1,2,3,4,5,6,7,8,9,10];
class Conditions extends React.Component {
  state = {
    filter: 'ALL',
    isShowed: true,
  }
  setFilter=(newFilter)=>{
    this.setState({filter:newFilter})
  }
  render() {
  //restrukturyzacja kodu
    const {isShowed,filter}= this.state
    
    const hiddenNumber=()=>{
    this.setState({isShowed:!this.state.isShowed})
  }
  
  const filteredNumbers = numbers.filter((number) => {
    if (filter === 'ALL') return true
    if (filter === 'ODD') return number % 2 !== 0
    if (filter === 'EVEN') return number % 2 === 0
    return false
  }) 

    return (   
      <div className="container">
       <label >
       <input
            type={'radio'}
            name={'filter'}
            value={'ALL'}
            checked={filter === 'ALL'}
            onChange={() => this.setFilter('ALL')}
          />
          ALL
          </label>
          <label >
          <input
            type={'radio'}
            name={'filter'}
            value={'ODD'}
            checked={filter === 'ODD'}
            onChange={() => this.setFilter('ODD')}
          />
         ODD
          </label>
          <label >
          <input
            type={'radio'}
            name={'filter'}
            value={'EVEN'}
            checked={filter === 'EVEN'}
            onChange={() => this.setFilter('EVEN')}
          />
          EVEN
          </label>
         
    
        <button onClick={hiddenNumber}>{isShowed?'HIDDEN':'SHOW'}</button>
        <ul>{isShowed?filteredNumbers.map(number=><li key={number}>{number}</li>):null}</ul>
      </div>
    );
  }
}
ReactDOM.render(<Conditions />, document.getElementById("root"));
