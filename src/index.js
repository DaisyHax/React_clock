import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import DecButton from "./components/dec_button";
import IncButton from "./components/inc_button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 4
        };
    }

    currentTerm(term) {
        this.setState({term});
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-light heading">
                        <h1 className="navbar-brand mb-0 h">TIMER</h1>
                    </nav>
                </div>
                <div className="row term_card">
                    <div className="card div_card">
                        <h3 className="card-header h3">{this.state.term}</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="card dec">
                        <div>
                        <DecButton term={this.state.term}
                                   termtodec={this.currentTerm.bind(this)}/>
                        </div>
                    </div>
                    <div className="card inc">
                        <div>
                        <IncButton term={this.state.term}
                                   termtoinc={this.currentTerm.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));