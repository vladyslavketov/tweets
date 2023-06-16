export default function forUseLocalStorage(key, type, value) {
  switch (type) {
    case 'set':
      localStorage.setItem(key, JSON.stringify(value));
      break;

    case 'remove':
      localStorage.removeItem(key);
      break;

    default:
      const lSData = JSON.parse(localStorage.getItem(key));
      return lSData;
  }
}
