import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserSearch from './pages/UserSearch'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserSearch} />
      </Switch>
    </Router>
  )
}
