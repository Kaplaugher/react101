var teams = [
    {
        name: "Alabama",
        score: "0",
        mascot: "Crimson Tide"
    }, {
        name: "Clemson",
        score: "0",
        mascot: "Tigers"
    }
]

// make a component called application
// they are uppercase
function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>

    )
}


function Team(props) {
    return (
        <div className="team">
            <div className="team-name">{props.name}</div>
            <Counter score={props.score} />
        </div>

    )
}

var Counter = React.createClass({
  render: function(){
    return(
      <div className="counter">
          <button className="counter-change minus">-</button>
          <div className="team-score">{this.props.score}</div>
          <button className="counter-change plus">+</button>
      </div>
    )
  }
});

function Application(props) {
    return (
        <div className="scoreboard">
            <Header title={props.title}/>
            <div className="teams">

                {props.teams.map((team, index) => {
                    return <Team key={index} name={team.name} score={team.score}/>

                })}

            </div>

        </div>
    )
}
ReactDOM.render(
    <Application title="National Championship Scoreboard" teams={teams}/>,
    document.getElementById('container'));
