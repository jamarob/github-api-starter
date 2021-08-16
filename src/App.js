import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserSearch from './pages/UserSearch'
import PageLayout from './components/PageLayout'
import Header from './components/Header'

export default function App() {
  return (
    <Router>
      <PageLayout>
        <Header />
        <Switch>
          <Route exact path="/" component={UserSearch} />
        </Switch>
      </PageLayout>
    </Router>
  )
}
