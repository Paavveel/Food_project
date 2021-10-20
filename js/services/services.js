const postData = async (url, data) => {
  const request = await fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return await request.json();
};

const getData = async (url) => {
  const request = await fetch(url);

  if (!request.ok) {
    throw new Error(`Could not fetch ${url}, status: ${request.status}`);
  }

  return await request.json();
};

export { postData, getData };
