import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || '';

  return (

        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render= {() => ( <h1>Home</h1> )}/>
              <Route exact path="/seecrets" render= {() => ( <PostsPage message='No results are found.Adjust the search keyword' /> )}/>
              <Route exact path="/hugged" render= {() => ( <PostsPage message='No results are found.Adjust the search keyword or hug somebody' filter={`hugs__owner__profile=${profile_id}&ordering=-hugs__created_at&`}/> )}/>
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/seecrets/create" render={() => <PostCreateForm />} />
              <Route exact path="/seecrets/:id" render={() => <PostPage />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;