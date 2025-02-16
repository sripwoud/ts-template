| <img alt='ts icon' width='50' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'/> | TEMPLATE |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------- |

![main GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/sripwoud/ts-template/main.yaml?branch=main&label=main)
[![Coverage Status](https://coveralls.io/repos/github/r1oga/ts-template/badge.svg?branch=main)](https://coveralls.io/github/r1oga/ts-template?branch=main)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

| Feature                                        | With                                                                  | Configuration File                                                                                                    |
| ---------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Runtime, tests runner                          | [Bun](https://bun.sh)                                                 | [bunfig.toml](./bunfig.toml)                                                                                          |
| Tasks runner, environment & runtime management | [mise](https://mise.dev/)                                             | [mise.toml](./mise.toml)                                                                                              |
| Typings                                        | [Typescript](https://www.typescriptlang.org/)                         | [tsconfig.json](./tsconfig.json)                                                                                      |
| Formatting                                     | [dprint](https://dprint.dev/)                                         | [.dprint.jsonc](./.biome.json)                                                                                        |
| Linting                                        | [Biome](https://biomejs.dev/)                                         | [.biome.jsonc](./.biome.jsonc)                                                                                        |
| Continuous Integration                         | [GitHub Workflow](https://docs.github.com/en/actions/using-workflows) | [.github/workflows](./.github/workflows)                                                                              |
| Import aliases                                 | [Typescript paths](https://www.typescriptlang.org/tsconfig#paths)     | [tsconfig.json](https://github.com/r1oga/ts-template/blob/5d6983a6d28429b9dd256edf40bad5ee48c33d9c/tsconfig.json#L26) |
| Git hooks management                           | [lefthook](https://github.com/evilmartians/lefthook/)                 | [.lefthook.yml](./.lefthook.yml)                                                                                      |
| Conventional Commits                           | [convco](https://github.com/convco/convco)                            | [.convco](./.convco)                                                                                                  |

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
