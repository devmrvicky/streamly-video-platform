import { default as App } from "@/App";
import LoginForm from "@/components/form/LoginForm";
import RegisterForm from "@/components/form/RegisterForm";
import { default as ContentLayout } from "@/components/layout/ContentLayout";
import {
  Explore,
  History,
  Home,
  Library,
  PageNotFound,
  Shorts,
} from "@/components/pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        {/* page */}
        <Route path="" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/library" element={<Library />} />
        {/* auth */}
        <Route path="/user/register" element={<RegisterForm />} />
        <Route path="/user/login" element={<LoginForm />} />
        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Route>
  )
);

export default router;
