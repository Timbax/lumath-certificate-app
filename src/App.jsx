import { useState, useCallback } from 'react'
import TopNavBar from './components/TopNavBar'
import ProductForm from './components/ProductForm'
import PreviewPanel from './components/PreviewPanel'
import Footer from './components/Footer'

const defaultData = {
  name: 'Nombre del Producto',
  sku: 'EM-2024-REF',
  category: '-',
  price: '-',
  manufacturer: '-',
  model: '-',
  description: 'Descripción detallada aparecerá aquí una vez generada la vista previa.',
  dimensions: '-',
  warranty: '-',
  origin: '-',
}

function App() {
  const [previewData, setPreviewData] = useState(defaultData)
  const [showPreview, setShowPreview] = useState(false)

  const handleGenerate = useCallback((data) => {
    setPreviewData(data)
    setShowPreview(true)
  }, [])

  return (
    <>
      <TopNavBar />
      <main className="flex-grow py-xl px-sm">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <ProductForm onGenerate={handleGenerate} />
            <PreviewPanel data={previewData} showPreview={showPreview} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
