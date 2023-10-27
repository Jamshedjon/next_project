import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
const fetchRepos = async () => {
  const req = await fetch("https://api.github.com/users/Jamshedjon/repos");
  const repos = await req.json();
  return repos;
};
async function ReposPage() {
  const repos = await fetchRepos();
  repos.sort((a, b) => {
    return new Date(a.created_at) - new Date(b.created_at);
  });
  repos.reverse();
  return (
    <div className="repos-container">
      <h1>All My Repositories</h1>
      <ul className="repo-list">
        {repos &&
          repos.map((repo) => {
            return (
              <li key={repo.id}>
                <Link href={`/code/repo/${repo.name}`}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <div className="repo-details">
                    <span>
                      <FaStar />
                      {repo.stargazers_count}
                    </span>
                    <span>
                      <FaCodeBranch />
                      {repo.forks_count}
                    </span>
                    <span>
                      <FaEye />
                      {repo.watchers_count}
                    </span>
                    <span>{repo.created_at.substring(0, 10)}</span>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ReposPage;
