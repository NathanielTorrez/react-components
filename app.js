class GrocceryListItems extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
   this.setState({
     done: !this.state.done
   });
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }


render() {
  var style = {
    textDecoration: this.state.done ? 'line-through' : 'none',
    fontWeight: this.state.hover ? 'bold' : 'normal'
  }
  return(
  <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.listItem}</li>
  )
  }
 };


var GrocceryList = (props) => (
 <div>
   <h1>Items I need</h1>
  <ul>
    {props.listItems.map(listItem =>
     <GrocceryListItems listItem={listItem}/>
      )}
   </ul>
 </div>
);


ReactDOM.render(<GrocceryList listItems={['eggs','soda']}/>, document.getElementById('app'));