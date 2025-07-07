| _ | TEMPLATE |
| - | -------- |

| Feature                                                                                                               | With                                                                                         | Configuration File                                     |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Continuous Integration                                                                                                | [GitHub Workflow](https://docs.github.com/en/actions/using-workflows)                        | [.github/workflows](./.github/workflows)               |
| Conventional Commits (`main` branch only)                                                                             | [convco](https://github.com/convco/convco)                                                   | [.convco](./.convco)                                   |
| Conventional PR Titles (because I only squash merge and base changelogs/semantic versioning on `main` commit history) | [amann/action-semantic-pull-request](https://github.com/amannn/action-semantic-pull-request) | [semantic-pr.yml](./.github/workflows/semantic-pr.yml) |
| Formatting                                                                                                            | [dprint](https://dprint.dev/)                                                                | [.dprint.jsonc](./.biome.json)                         |
| Git Hooks                                                                                                             | [hk](https://hk.jdx.dev/)                                                                    | [hk.pkl](./hk.pkl)                                     |
| Tasks Runner, Environment & Runtime Management                                                                        | [mise](https://mise.dev/)                                                                    | [mise.toml](./mise.toml)                               |

## Develop

I use [`mise`](https://mise.jdx.dev) to manage runtimes, manage environment variables, and run tasks.\
To install it and setup the repository:

```commandline
./setup
```

To run tasks interactively:

```commandline
mise run
```
