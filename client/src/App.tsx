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
import AuthPage from "@/pages/auth";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/auth" component={AuthPage} />
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