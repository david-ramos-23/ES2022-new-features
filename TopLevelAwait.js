const responde = await fetch('https://reqres.in/api/users?page=1');
const json = await response.json();

console.log(json.data);

export default json;
