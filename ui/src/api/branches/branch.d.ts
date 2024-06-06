interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Tree {
  sha: string;
  url: string;
}

interface CommitDetail {
  name: string;
  email: string;
  date: string;
}

interface Verification {
  verified: boolean;
  reason: string;
  signature: string | null;
  payload: string | null;
}

interface Parent {
  sha: string;
  url: string;
  html_url: string;
}

interface Protection {
  enabled: boolean;
  required_status_checks: {
    enforcement_level: string;
    contexts: string[];
    checks: string[];
  };
}

interface CommitData {
  sha: string;
  node_id: string;
  commit: {
    author: CommitDetail;
    committer: CommitDetail;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: User;
  committer: User;
  parents: Parent[];
}

interface Links {
  self: string;
  html: string;
}

interface Branch {
  name: string;
  commit: CommitData;
  _links: Links;
  protected: boolean;
  protection: Protection;
  protection_url: string;
}
