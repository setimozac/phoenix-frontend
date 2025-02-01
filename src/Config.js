const getConfig = async () => {
  const response = await fetch('/config.json');
  return response.json();
};

export default getConfig