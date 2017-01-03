function Application(props){
  // Capital letters in react means component
  // components return a single virtual DOM element
  return(
    <div className="application">

      {props.message}


    </div>

  )
}
ReactDOM.render(
  <Application message="hello, class" />,
  document.getElementById('container')
)
