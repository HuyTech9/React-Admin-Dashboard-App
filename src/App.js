import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scene/global/Topbar";
import  Sidebar  from "./scene/global/Sidebar";
import Dashboard  from "./scene/dashboard";
import Team from "./scene/team";
import Customer from "./scene/customer";
import Invoices from "./scene/invoices";
import Contact  from "./scene/contact";
import Bar  from "./scene/bar";
 import Form from "./scene/form";
import Line from "./scene/line";
 import Pie from "./scene/pie";
 import FAQ from "./scene/faq";
import Geography from "./scene/geography";
 import Calendar from "./scene/calendar";



function App() {
  const [theme, colorMode] = useMode();
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
      <Sidebar/>
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/customer" element={<Customer />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/team" element={<Team />} /> 
          <Route path="/invoices" element={<Invoices />} /> 
          <Route path="/form" element={<Form />} /> 
          <Route path="/bar" element={<Bar/>} />
          <Route path="/pie" element={<Pie />} /> 
          <Route path="/line" element={<Line />} /> 
          <Route path="/faq" element={<FAQ />} /> 
          <Route path="/geography" element={<Geography />} /> 
          <Route path="/calendar" element={<Calendar />} /> 
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
