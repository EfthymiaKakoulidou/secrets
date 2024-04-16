import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import ReachOutsPage from "./pages/reach_out/ReachOutsPage";
import ReachOutPage from "./pages/reach_out/ReachOutPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import UsernameForm from "./pages/profiles/UserNameForm";
import BlogsPage from "./pages/blogs/BlogsPage";
import BlogCreateForm from "./pages/blogs/BlogCreateForm";
import BlogPage from "./pages/blogs/BlogPage";
import BlogEditForm from "./pages/blogs/BlogEditForm";
import DiaryPage from "./pages/diary/DiaryPage";
import DiaryEditForm from "./pages/diary/DiaryEditForm";
import DiarysPage from "./pages/diary/DiarysPage";
import Home from "./pages/home/home";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NotFound from "./components/NotFound";


function App() {
  
  return (

        <div className={styles.App}>
      <Row className="h-100">
      
      <Col className="py-2 p-0 p-lg-2" lg={2}>
          <NavBar />
          </Col>
          <Col className="py-2 p-0 p-lg-2" lg={10}>
            <Switch>
              <Route exact path="/" render= {() => <Home/> }/>
              <Route exact path="/seecrets" render= {() => ( <PostsPage message='No results are found.' /> )}/>
              <Route exact path="/diary" render= {() => ( <DiarysPage message='No results are found.' /> )}/>
              <Route exact path="/blogposts" render= {() => ( <BlogsPage message='No results are found.' /> )}/>
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/seecrets/create" render={() => <PostCreateForm />} />
              <Route exact path="/seecrets/:id" render={() => <PostPage />} />
              <Route exact path="/seecrets/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/diary/:id" render={() => <DiaryPage />} />
              <Route exact path="/blogs/create" render={() => <BlogCreateForm />} />
              <Route exact path="/blogpost/:id" render={() => <BlogPage />} />
              <Route exact path="/blogpost/:id/edit" render={() => <BlogEditForm />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/reach_out" render={() => <ReachOutsPage message='No results are found.' />} />
              <Route exact path="/reach_out/:id" render={() => <ReachOutPage />} />
              
              <Route
                exact
                path="/profiles/:id/edit/username"
                render={() => <UsernameForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit/password"
                render={() => <UserPasswordForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit"
                render={() => <ProfileEditForm />}
              />
              <Route render={() => <NotFound/>} />
            </Switch>
            </Col>
          </Row>
        </div>
  );
}

export default App;