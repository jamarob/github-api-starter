export default function PullsList({ pulls }) {
  return (
    <ul>
      {pulls.map(pull => (
        <li></li>
      ))}
    </ul>
  )
}
