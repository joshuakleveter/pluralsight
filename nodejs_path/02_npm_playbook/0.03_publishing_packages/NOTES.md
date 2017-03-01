# NPM Playbook - Publishing Your Own Package

- You'll need to have a user account with NPM
- `npm adduser` to add the user account to your CLI interface
- The package will need to be in a Git repo
- The `package.json` file must be correct when you publish
- Use `npm publish` to publish to NPM
- Make sure to use Git tags that match your NPM version
- Use `npm version` to change version numbers. NPM will automatically commit for us with this command.

## Alpha and Beta versions

- Add a `-beta.x` suffix to your version number.
- Use `npm publish --tag beta` to tag as a beta.
