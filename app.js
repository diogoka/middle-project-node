import server from "./server.js";

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, HOST, () =>
    console.log(`Server running in http://${HOST}:${PORT}`)
);
