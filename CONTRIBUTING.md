# Contributing to pdfmake-wrapper

Thanks for you interest to contribute to **pdfmake-wrapper**. In this document we will describe the steps of contributing and what it is allowed to send to your pull request. Here the guidelines to follow:

- [Contributing to pdfmake-wrapper](#contributing-to-pdfmake-wrapper)
  - [This is not allowed](#this-is-not-allowed)
  - [Before creating a pull request](#before-creating-a-pull-request)
    - [Adding a new feature](#adding-a-new-feature)
    - [Bugs and issues](#bugs-and-issues)
  - [How to create a pull request](#how-to-create-a-pull-request)

## This is not allowed

- Don't push either to *master* or *develop*
- Don't update either the *package.json* or *package-lock.json*
- Don't create a pull request in master
- Don't update *create-package-json-lib.js* file

## Before creating a pull request

Consider these steps before starting making changes in the code.

### Adding a new feature

Before adding a new feature to this library, you need to open a new discussion on Github using the [Contributing](https://github.com/Lugriz/pdfmake-wrapper/discussions/categories/contributing) category to discuss about that and make sure whether the feature is aligned with the project.

### Bugs and issues

When fixing a bug/issue, please add the issue number in the commit, for example:

```bash
git commit -m "fix(#1234) my description"
```

And link the issue with your pull request (to close it when merging).

## How to create a pull request

1. Fork the pdfmake-wrapper repo.

2. Clone your forked repo.

    ```bash
    git clone https://github.com/<your-username>/pdfmake-wrapper.git
    ```

3. Move to develop branch (this is the development branch)

    ```bash
    git checkout develop
    ```

4. Create a new branch based on develop.

    ```bash
    git checkout -b my-new-branch
    ```

5. Make your changes, write your code, improve the docs or fix something. Read this rules to make changes.

    <div align="center">
        <img src="https://media.giphy.com/media/ZG719ozZxGuThHBckn/giphy.gif" width="200px" />
    </div>

6. Commit your changes. if you are fixing a bug/issue, create your commit as mention [here](#bugs-and-issues).

    ```bash
    git commit -m "My change description"
    ```

7. Push your changes to your fork.

    ```bash
    git push origin my-new-branch
    ```

8. Create a pull request to **develop** branch.

9.  Wait for merging.
