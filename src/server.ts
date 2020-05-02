import app from "./app";
import { PORT } from "./constatns/rentadoApi.constatns";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));