import fortnite from '../assets/fortnite.webp'
import movies from '../assets/movies.png'
import nba from '../assets/nba.png'

export const HERO_CONTENT = `I am a Computer Science student at the University of California, Irvine, with a strong interest in Full Stack Development. Through coursework and projects, I have honed my skills in languages such as Python and JavaScript, as well as technologies such as React, Node, Express, Postgres, Flask, and Tailwind. I am eager to gain hands-on experience in software development and contribute to impactful projects that solve real-world problems.`;


export const PROJECTS = [
  {
    title: "HoopFlash",
    image: nba,
    description:
      "A full-stack web application that displays a personalized feed of NBA game highlights, with regular updates to ensure up-to-date content.",
    technologies: ["Node", "Express", "React", "PostgreSQL", "HTML", "CSS"],
    repo: 'https://github.com/KyleKDang/hoop-flash',
  },
  {
    title: "ReviewFusion",
    image: movies,
    description:
      "An interactive platform where users can explore a variety of movies, share reviews, and view posts from other users.",
    technologies: ["Node", "React", "Firebase", "HTML", "CSS"],
    repo: 'https://github.com/KyleKDang/review-fusion',
  },
  {
    title: "FortRank",
    image: fortnite,
    description:
      "A full-stack web application that displays a leaderboard of the top Fortnite players, showcasing player details and tournament placements.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "Bootstrap"],
    repo: 'https://github.com/KyleKDang/fort-rank',
  },
];

export const CONTACT = {
  phoneNumber: "+1 (714) 260-6801",
  email: "kylekd1@uci.edu",
};
