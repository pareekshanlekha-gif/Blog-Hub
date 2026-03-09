import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import BlogDetails from "@/pages/blog-details";
import CategoryPage from "@/pages/category";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import CareersPage from "@/pages/careers";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import MyAccountPage from "@/pages/my-account";
import CreatePostPage from "@/pages/create-post";
import CreateTagsPage from "@/pages/create-tags";
import PostsListPage from "@/pages/posts-list";
import TagsListPage from "@/pages/tags-list";
import UsersListPage from "@/pages/users-list";
import SubscribersListPage from "@/pages/subscribers-list";
import CategoriesPage from "@/pages/categories";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/my-account" component={MyAccountPage} />
      <Route path="/create-post" component={CreatePostPage} />
      <Route path="/create-tags" component={CreateTagsPage} />
      <Route path="/posts-list" component={PostsListPage} />
      <Route path="/tags-list" component={TagsListPage} />
      <Route path="/users-list" component={UsersListPage} />
      <Route path="/subscribers-list" component={SubscribersListPage} />
      <Route path="/categories" component={CategoriesPage} />
      <Route path="/blog/:id" component={BlogDetails} />
      <Route path="/:slug" component={CategoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;