import flashcard from "../../assets/images/flashcardapp.png";
import welovemovies from "../../assets/images/welovemovies.png";
import locallibrary from "../../assets/images/locallibrary.png";
import rra from "../../assets/images/rra.png";

export const projects = [
  {
    title: "Restaurant Reservation App",
    description:
      "Full-stack application that allows restaurants to create, edit, and cancel reservations, and to seat or finish reservations.",
    technology: [
      "React",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Express.js",
      "Knex",
      "Node.js",
      "PostgreSQL",
    ],
    link: "https://github.com/joeyestrada/restaurant-reservation-app",
    deployment: "https://rrajefrontend.herokuapp.com/",
    photo: rra,
  },
  {
    title: "Flashcard App",
    description:
      "Front-end application where users can create, update, view, and delete decks and cards that the user creates.",
    technology: ["React", "JavaScript", "CSS", "Bootstrap", "Express.js"],
    link: "https://github.com/joeyestrada/Flashcard-Project",
    photo: flashcard,
  },
  {
    title: "WeLoveMovies",
    description:
      "A Backend application helping users view, create, and update movie reviews and movie listings in theaters near them.",
    technology: ["Express.js", "Node.js", "Knex", "JavaScript"],
    link: "https://github.com/joeyestrada/WeLoveMovies",
    photo: welovemovies,
  },
  {
    title: "Local Library",
    description:
      "Front-end application that allows users to search, review, and check out books from their local neighborhood.",
    technology: ["JavaScript", "Bootstrap", "Node.js"],
    link: "https://github.com/joeyestrada/Local-Library-Project",
    photo: locallibrary,
  },
];
