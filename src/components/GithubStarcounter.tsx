import React, { useEffect, useState } from "react"

type GithubStarcounterProps = { githubUrl: string }

export const GithubStarcounter: React.FC<GithubStarcounterProps> = ({
  githubUrl,
}) => {
  const [starsCount, setStarsCount] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/repos/silevis/reactgrid`)
      .then((res) => res.json())
      .then((res) => setStarsCount(res.stargazers_count ?? null))
  })

  if (!starsCount) {
    return null
  }

  return (
    <a
      className="github-starcounter"
      href={githubUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-github" />
      <span>Stars</span> {starsCount}
    </a>
  )
}
