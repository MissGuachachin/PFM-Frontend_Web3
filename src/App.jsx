import { AppLayout } from "./components/ui/layouts"

function App() {
  return (
    <>
      <AppLayout>
        <div className="py-20 flex justify-center">
          <h1 className="text-7xl font-arial">Préstamos Finanzas Descentralizados</h1>
        </div>
        <div className="items-center flex justify-center">
          <button className="text-3xl">🔒 Connect Wallet...</button>
        </div>
      </AppLayout>
    </>
  )
}

export default App
