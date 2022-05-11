# Contributing to pdfmake-wrapper

Thanks for you interest to contribute to **pdfmake-wrapper**. In this document we will describe the steps of contributing and what it is allowed to send to your pull request. Here the guidelines to follow:

- [Contributing to pdfmake-wrapper](#contributing-to-pdfmake-wrapper)
  - [This is not allowed](#this-is-not-allowed)
  - [Before creating a pull request](#before-creating-a-pull-request)
    - [Adding a new feature](#adding-a-new-feature)
    - [Bugs and issues](#bugs-and-issues)
  - [How to create a pull request](#how-to-create-a-pull-request)
  - [Project structure](#project-structure)
  - [Test project](#test-project)
    - [Uninstall library for testing](#uninstall-library-for-testing)

## This is not allowed

- Don't push either to *master* or *develop*
- Don't update either the *package.json* or *package-lock.json*
- Don't create a pull request to master (use **develop** branch instead)
- Don't update *scripts/create-package-json-lib.js* file

## Before creating a pull request

This repo is using conventional commit, please read about that to follow this convention. You can read it [here](https://www.conventionalcommits.org/).

Consider reading this if you will work on a new feature or a bug fix before making code changes.

### Adding a new feature

Before adding a new feature to this library, you need to open a new discussion on Github using the [Contributing](https://github.com/Lugriz/pdfmake-wrapper/discussions/categories/contributing) category to discuss about that and make sure whether the feature is aligned with the project.

If the feature was approved and you work on it, you will need to add test cases and docs (details/examples) about it. Remember to add interfaces if the feature need it.

### Bugs and issues

When fixing a bug/issue, please add the issue number in the commit to close the issue (more about closing issues [here](https://github.blog/2013-01-22-closing-issues-via-commit-messages/)). Here an example:

```bash
git commit -m "fix(<scope>): my description

close #1234"

# OR

git commit -m "fix(<scope>): my description

Your body message

close #1234"
```

## How to create a pull request

1. Fork the pdfmake-wrapper repo.

2. Clone your forked repo.

    ```bash
    git clone https://github.com/<your-username>/pdfmake-wrapper.git
    ```

3. Move to develop branch (this is the development branch).

    ```bash
    git checkout develop
    ```

4. Create a new branch based on develop.

    ```bash
    git checkout -b my-new-branch
    ```

5. Make your changes, write your code, improve the docs or fix something. [Read this rules to make changes](#before-creating-a-pull-request).

    <div align="center">
        <img src="https://media.giphy.com/media/ZG719ozZxGuThHBckn/giphy.gif" width="200px" />
    </div>

6. Commit your changes (this will run the tests and a linter to verify if your commit message follows the [commit convention](#before-creating-a-pull-request)). if you are fixing a bug/issue, create your commit as mention [here](#bugs-and-issues).

7. Push your branch with the new changes to your fork.

    ```bash
    git push origin my-new-branch
    ```

8. Create a pull request to **develop** branch.

9. Wait for merging.

## Project structure

- **.github/**: Contains all github related, for example the workflows.
- **.husky/**: Contains git hooks to verify commits and run tests.
- **docs/**: Documentation related.
- **src/**: Contains the source code.
- **test/**: Contains the test cases in the same order as _src_ folder structure.

## Test project

If you added a new feature and you want to test your changes generating a PDF document, you will need to *build* the project and link the build result to test it. Here are the steps to follow.

Build the project, this will create a *dist/* folder.

```bash
npm run build
```

go to *dist/* folder.

```bash
cd dist/
```

link the project, this will install pdfmake-wrapper as a global npm package. Read more about link command [here](https://docs.npmjs.com/cli/v6/commands/npm-link).

```bash
npm link
```

Then you can install it in any project you want to test your changes. for example, you can create a new project (angular/react/vue/etc..)and install pdfmake-wrapper in it.

```bash
# move to your new project
cd <your project>

# and then install the lib
npm link pdfmake-wrapper
```

Once installed, you can use it.

### Uninstall library for testing

Once you finished to test the library, you can uninstall it running unlink npm command.

inside the project where you tested the library, run:

```bash
npm unlink pdfmake-wrapper
```

Then go to pdfmake-wrapper project inside *dist/* folder and run:

```bash
npm unlink
```

This will remove the package.
