import styled from 'styled-components/macro'

export default function Avatar({ profile }) {
  return <Image src={profile ? profile.avatar_url : ''} alt="" />
}

const Image = styled.img`
  width: 200px;
  border-radius: 50%;
`
