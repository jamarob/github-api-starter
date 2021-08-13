export default function PullsList({ pulls }) {
  return (
    <ul>
      {pulls.map(pull => (
        <li key={pull.id}>{pull.title}</li>
      ))}
    </ul>
  )
}
