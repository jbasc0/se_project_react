export const baseUrl = "http://localhost:3001";

export const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else return Promise.reject(`Error: ${res.status}`);
};

export const getClothes = () => {
  return fetch(`${baseUrl}/items`);
};

export const addClothes = ({ name, link, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      link: link,
      weather: weather,
    }),
  }).then(checkServerResponse);
};

export const deleteClothes = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
};
