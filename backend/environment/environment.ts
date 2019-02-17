const environment = {
    ACCEPT_ORIGIN: 'http://localhost:3000',
    MAPBOX_TOKEN: 'pk.eyJ1Ijoiandhc2FrIiwiYSI6ImNqcGI2OXVmcTJrZjIza2xrMzU2bmp5OHUifQ.OGH2d6KPOrUT6E199h6HCA',
    DEFAULT_PORT: Number(process.env.PORT) || 3001,
    DEFAULT_SOCKET_PORT: Number(process.env.SOCKET_PORT) || 3002,
    POINTS_NUMBER: 10
};

export default environment;
