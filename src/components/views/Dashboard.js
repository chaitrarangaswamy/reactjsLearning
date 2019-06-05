import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

/* const About = lazy(() => import('./About')); */

import About from "./About";
import Content from "./Content";

const array = ["about", "content"];

// class Dashboard extends React.Component {
//     render() {

//         console.log(this.props.match)

//         const say = (array.map((item, id) => {

//             return <ul key={id}>
//                 <li>
//                     <Link to={`${this.props.match.url}/${item}`}>{item}</Link>
//                 </li>

//             </ul>
//         }))

//         return (

//             <div>

//                 <Router>

//                     {say}
//                     <Route
//                         path={this.props.match.path}
//                         render={() => <h3>Please select the number of items.</h3>}
//                     />
//                     <Route exact path={`${this.props.match.path}/:id`} component={About} />

//                 </Router>

//             </div>

//         )

//     }

// }

class Dashboard extends React.Component {

    render() {
        console.log(this.props.match)
        return (

            <div>

                <Router>
                    <ul>

                        <li>
                            <Link to={`${this.props.match.url}/about`}>About</Link>
                        </li>

                        <li>
                            <Link to={`${this.props.match.url}/content`}>Content</Link>
                        </li>

                    </ul>

                    {/* <Route exact path={`${this.props.match.path}/:id`} component={About} /> */}
                     <Route exact path={`${this.props.match.path}/about`} component={About} />
                     <Route exact path={`${this.props.match.path}/content`} component={Content} />
                    <Route
                        path={this.props.match.path}
                        render={() => <h3>Please select a topic.</h3>}
                    />

                </Router>

            </div>

        )

    }

}



/*class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <ul>

                    <li> <Link to="/dashboard/about">About</Link></li>

                </ul>

                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/dashboard/about" component={About} />
                        </Switch>
                    </Suspense>
                </Router>

            </div>
        )
    }
}*/


export default Dashboard;





/* <div>
<a href="/about">about</a>
<a href="/more">more</a>
</div> */