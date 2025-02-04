const getConfig = async () => {
  try {
    const response = await fetch('/config.json');
  if (!response.ok) {return {BACKEND_URL: "http://phoenix:8080"}}
  return response.json();
  } catch (error) {
    return {BACKEND_URL: "http://phoenix:8080"}
  }
  
};

export default getConfig