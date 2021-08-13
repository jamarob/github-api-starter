import styled from 'styled-components/macro'
import { NavLink, useHistory } from 'react-router-dom'

export default function Header({ profile, error }) {
  const history = useHistory()
  return (
    <Wrapper>
      <Profile>
        {profile && <img src={profile.avatar_url} alt={profile.login} />}
        {error && <img src={`https://http.cat/${error}`} alt={error} />}
        {profile && profile.name ? (
          <h1>Hello {profile.name}</h1>
        ) : (
          <h1>Hello {profile.login}, setz endlich einen Namen rein!</h1>
        )}
      </Profile>
      <ButtonGroup>
        <button type="button" onClick={() => history.push('/')}>
          Go Home!
        </button>
        <button type="button" onClick={() => history.goBack()}>
          Go Back!
        </button>
      </ButtonGroup>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 50px;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background-color: hotpink;
  padding: 5px;
  align-items: center;
`

const Profile = styled.section`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  img {
    margin: 5px;
  }
  align-content: center;
`

const ButtonGroup = styled.section`
  align-content: center;
  margin: 5px;
  display: flex;
  justify-content: flex-end;
`
