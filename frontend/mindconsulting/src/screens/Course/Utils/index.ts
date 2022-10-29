export const extractImage = (uri: any) => {
  let name = uri.split("/").pop();

  let match = /\.(\w+)$/.exec(name);
  let type = match ? `image/${match[1]}` : `image`;

  return {name, uri, type}
}