import { useState } from 'react';

import styles from './style.module.scss';

const apiUrl = 'https://api.github.com/users/';

const GithubProfiles = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState();
  const [notFound, setNotFound] = useState(true);

  const fetchData = async (username) => {
    let res = await fetch(apiUrl + username);
    if (res.status === 200) {
      const { avatar_url, name, bio, followers, following, public_repos } = await res.json();
      res = await fetch(apiUrl + username + '/repos?sort=created');
      let data = await res.json();
      setUser({
        avatar_url: avatar_url,
        name: name,
        bio: bio,
        followers: followers,
        following: following,
        public_repos: public_repos,
        repos: data.slice(0, 5).map(({ html_url, name }, i) => {
          return { html_url, name };
        }),
      });
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };

  return (
    <div className={styles.GithubProfiles}>
      <div className={styles['user-form']}>
        <input
          type="text"
          value={search}
          placeholder="Search a Github User"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              fetchData(search);
              setSearch('');
            }
          }}
        />
      </div>
      <main id="main">
        <div className={styles.card}>
          {notFound ? (
            <h1>No profile with this username</h1>
          ) : (
            <>
              <div>
                <img src={user.avatar_url} alt={user.name} className={styles.avatar} />
              </div>
              <div className={styles['user-info']}>
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
                <ul>
                  <li>
                    {user.followers} <strong>Followers</strong>
                  </li>
                  <li>
                    {user.following} <strong>Following</strong>
                  </li>
                  <li>
                    {user.public_repos} <strong>Repos</strong>
                  </li>
                </ul>

                <div>
                  {user.repos.map(({ html_url, name }, i) => {
                    return (
                      <a
                        key={i}
                        className={styles.repo}
                        href={html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default GithubProfiles;
