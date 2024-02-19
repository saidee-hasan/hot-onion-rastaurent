import { RouterProvider } from "react-router-dom";
import MinLayout from "./layout/MinLayout";
import { router } from "./Routes/Router";
import { createContext, useState } from "react";
export const CategoryContaxt = createContext();

function App() {
  const [productCount, setProductCount] = useState("Dinner");
  return (
    <div className="App">
      <CategoryContaxt.Provider value={[productCount, setProductCount]}>
        <RouterProvider router={router}>
          <MinLayout setProductCount={setProductCount}></MinLayout>
        </RouterProvider>
      </CategoryContaxt.Provider>
    </div>
  );
}

export default App;
