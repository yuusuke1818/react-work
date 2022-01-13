import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";

export const Router = () => {
  const history = useHistory();
  const onClickPage1 = useCallback(() => {
    history.push("/page1/detailA");
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home onClickPage1={onClickPage1} />
        </Route>
        <Route exact path="/page1">
          <Page1 />
        </Route>
        <Route path="/page1/detailA">
          <Page1DetailA />
        </Route>
        <Route path="/page1/detailB">
          <Page1DetailB />
        </Route>
        <Route exact path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </>
  );
};
