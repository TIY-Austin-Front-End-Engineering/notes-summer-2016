let name = 'jess'

// the age old time tested way:
let obj = {
  name: name,
  age: 45
}

// with object de-structuring
let fancyObj = {
  name,
  age: 45
}

//implications:
// const CoolComponent = React.createClass({
//   getIntitalState() {
//     return null
//   },
//   clickHandler(e) {
//     //do stuff on click
//   },
//   render() {
//     return (
//       <div onClick={this.clickHandler}/>
//     )
//   }
// })
