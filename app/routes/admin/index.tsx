import { Link } from 'remix';

export default function AdminIndex() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="new">Create a New Post</Link>
    </div>
  );
}
