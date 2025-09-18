export default function Friend({ friend }) {
  return (
    <div className="cards">
      <p>Name: {friend.name}</p>
      <p>Email: {friend.email}</p>
      <p>Number: {friend.phone}</p>
      <p>Company: {friend.company?.name}</p>
    </div>
  );
}
