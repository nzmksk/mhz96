declare module "repositoryType" {
  type tRepository = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    created_at: string;
    pushed_at: string;
    language: string;
    topics: string[];
  };

  interface iRepositoryProps {
    repositories: tRepository[];
  }
}

module.exports = {
    iRepositoryProps,
    tRepository,
};
