import styled from 'styled-components/macro'

export default function Header({ profile, error }) {
  return (
    <Wrapper>
      {profile && <img src={profile.avatar_url} alt={profile.login} />}
      {error && <img src={`https://http.cat/${error}`} alt={error} />}
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 100%;
  img {
    height: 100%;
  }
`
