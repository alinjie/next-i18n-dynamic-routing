import { useRouter } from "next/router";

export default function Post() {
  const { query } = useRouter();
  return <div>You are viewing post {query.id}</div>;
}
