import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserSearch from './pages/UserSearch'
import PageLayout from './components/PageLayout'
import Header from './components/Header'
import RepoBrowser from './pages/RepoBrowser'
import PullsBrowser from './pages/PullsBrowser'

export default function App() {
  return (
    <Router>
      <PageLayout>
        <Header />
        <Switch>
          <Route exact path="/" component={UserSearch} />
          <Route path="/repos/:username" component={RepoBrowser} />
          <Route path="/pulls/:username/:reponame" component={PullsBrowser} />
        </Switch>
      </PageLayout>
    </Router>
  )
}
