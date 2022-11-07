const basicAuth = (key: string, secret: string) => {
  let hash = btoa(key + ":" + secret);
  return "Basic " + hash;
};

export { basicAuth };
