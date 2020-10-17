import Home from "../components/Home.js"
import Van from "../components/Van.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default () => {

    render() {
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/van" component={Van} />
      </Switch>
}
