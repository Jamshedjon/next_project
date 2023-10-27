import Link from "next/link";

async function RepoPage({ params: { name } }) {
  const url = `https://api.github.com/repos/Jamshedjon/${name}`;
  const fetchRepos = async () => {
    const req = await fetch(url);
    const repos = await req.json();
    return repos;
  };
  const repos = await fetchRepos();
  return (
    <>
      <div className="card text-center">
        <img src={repos.owner.avatar_url} alt="" />
        <div>
          <h1 className="card-header  ">{repos.name}</h1>
          <div className="card-body">
            <h5 className="card-title">{repos.language}</h5>

            <Link
              href={repos.html_url}
              className="btn btn-primary"
              target="blank"
            >
              Go to repo
            </Link>
          </div>
          <div className="card-footer text-body-secondary  ">
            {" "}
            Created at: {repos.created_at.substring(0, 10)}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default RepoPage;
