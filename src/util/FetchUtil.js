
fetchUtil = async (url, body, contentType) => {
  return fetch('http://18.222.250.64:8080' + url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/' + (contentType == 'json' ? 'json' : 'x-www-form-urlencoded'),
      'credentials': "omit",
    },
    body: body
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}