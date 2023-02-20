const basicConfig = { apiUrl: "http://google.com/api", port: 3000 };

const createExtendedConfig = (config) => {
  return { ...config, host: "google.com" };
};

const extendedConfig = createExtendedConfig(basicConfig);

console.log(basicConfig, extendedConfig);
