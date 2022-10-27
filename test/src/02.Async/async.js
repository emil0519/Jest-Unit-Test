const fetchData = async () => {
  const results = await fetch("https://api.github.com/users%22");
  return results.json();
};
export { fetchData };
