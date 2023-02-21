import { AppRoutes } from "./routes";
import { AppProvider } from "./providers/app";
import { ConfigProvider } from "./providers/config";

function App() {
  return (
    <AppProvider>
      <ConfigProvider>
        <AppRoutes />
      </ConfigProvider>
    </AppProvider>
  );
}

export default App;
