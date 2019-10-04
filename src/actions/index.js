// TODO: add and export your own actions
const BASE_URL = 'https://wagon-chat.herokuapp.com';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  }
}
