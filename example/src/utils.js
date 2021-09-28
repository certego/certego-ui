export function buildGitHubPath(dirName) {
  return (
    "https://github.com/certego/certego-ui/tree/main/src/components/" + dirName
  );
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
