import { Router, Route } from '@solidjs/router';
import App from '@/pages/App';
import Test from '@/pages/Test';

function AppRouter() {
  return (
    <Router
      root={(props) => (
        <>
          <h1>Site Title</h1>
          {props.children}
        </>
      )}
    >
      <Route path="/" component={App} />
      <Route path="/users" component={Test} />
    </Router>
  );
}
export default AppRouter;
