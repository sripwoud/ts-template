| <img alt='ts icon' width='50' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'/> | TEMPLATE |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------- |

![main GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/sripwoud/ts-template/main.yml?branch=main&label=main)
[![Coverage Status](https://coveralls.io/repos/github/sripwoud/ts-template/badge.svg?branch=main)](https://coveralls.io/github/sripwoud/ts-template?branch=main)

| Feature                                                                                                               | With                                                                                         | Configuration File                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Continuous Integration                                                                                                | [GitHub Workflow](https://docs.github.com/en/actions/using-workflows)                        | [.github/workflows](./.github/workflows)                                                                              |
| Conventional Commits (`main` branch only)                                                                             | [convco](https://github.com/convco/convco)                                                   | [.convco](./.convco)                                                                                                  |
| Conventional PR Titles (because I only squash merge and base changelogs/semantic versioning on `main` commit history) | [amann/action-semantic-pull-request](https://github.com/amannn/action-semantic-pull-request) | [semantic-pr.yml](./.github/workflows/semantic-pr.yml)                                                                |
| Formatting                                                                                                            | [dprint](https://dprint.dev/)                                                                | [.dprint.jsonc](./.biome.json)                                                                                        |
| Git Hooks                                                                                                             | [hk](https://hk.jdx.dev/)                                                                    | [hk.pkl](./hk.pkl)                                                                                                    |
| Import Aliases                                                                                                        | [Typescript paths](https://www.typescriptlang.org/tsconfig#paths)                            | [tsconfig.json](https://github.com/r1oga/ts-template/blob/5d6983a6d28429b9dd256edf40bad5ee48c33d9c/tsconfig.json#L26) |
| Linting                                                                                                               | [Biome](https://biomejs.dev/)                                                                | [.biome.jsonc](./.biome.jsonc)                                                                                        |
| Runtime, Tests Runner                                                                                                 | [Bun](https://bun.sh)                                                                        | [bunfig.toml](./bunfig.toml)                                                                                          |
| Tasks Runner, Environment & Runtime Management                                                                        | [mise](https://mise.dev/)                                                                    | [mise.toml](./mise.toml)                                                                                              |
| Typings                                                                                                               | [Typescript](https://www.typescriptlang.org/)                                                | [tsconfig.json](./tsconfig.json)                                                                                      |

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
