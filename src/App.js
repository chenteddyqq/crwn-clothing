import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.action";
import CheckoutPage from "./pages/checkout/checkout.component";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        //这里是处理sign out用的
        this.props.setUser(userAuth, () => {
          console.log(this.state);
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  //router replace <Route path="/signin" component={SignInAndSignUpPage} />
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatchs => ({
  setUser: user => dispatchs(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
