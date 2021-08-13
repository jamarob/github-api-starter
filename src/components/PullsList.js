export default function PullsList({ pulls }) {
  return (
    <ul>
      {pulls.map(pull => (
        <li>{pull.title}</li>
      ))}
    </ul>
  )
}
