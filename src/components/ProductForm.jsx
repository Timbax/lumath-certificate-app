import { useState } from 'react'
import FormField from './FormField'
import DropZone from './DropZone'

const emptyForm = {
  name: '',
  sku: '',
  category: '',
  price: '',
  manufacturer: '',
  model: '',
  description: '',
  dimensions: '',
  warranty: '',
  origin: '',
}

export default function ProductForm({ onGenerate }) {
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { value, id } = e.target
    setForm(prev => ({ ...prev, [id]: value }))
  }

  function handleGenerate() {
    setLoading(true)
    setTimeout(() => {
      onGenerate({
        name: form.name || 'Nombre del Producto',
        sku: form.sku || 'SKU-2024-DEF',
        category: form.category || '-',
        price: form.price || '$ 0.00',
        manufacturer: form.manufacturer || '-',
        model: form.model || '-',
        description: form.description || 'Descripción no proporcionada.',
        dimensions: form.dimensions || 'N/A',
        warranty: form.warranty || 'N/A',
        origin: form.origin || 'N/A',
      })
      setLoading(false)
    }, 800)
  }

  return (
    <div className="lg:col-span-7">
      <div className="bg-surface-container-lowest rounded-xl shadow-[0px_2px_4px_rgba(4,99,7,0.05)] p-lg border border-outline-variant/30">
        <div className="mb-lg">
          <h2 className="font-headline-md text-headline-md text-primary mb-base">
            Datos del Producto
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Complete la información técnica para generar la ficha PDF premium.
          </p>
        </div>

        <form className="space-y-md" id="productForm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <FormField label="PRODUCT NAME" placeholder="Ej: Platinum Elite X1" value={form.name} onChange={handleChange} id="name" />
            <FormField label="SKU" placeholder="EM-9943-2024" value={form.sku} onChange={handleChange} id="sku" />
            <FormField label="CATEGORY" placeholder="Seleccionar categoría" value={form.category} onChange={handleChange} id="category" />
            <FormField label="PRICE" placeholder="$ 0.00" value={form.price} onChange={handleChange} id="price" />
            <FormField label="MANUFACTURER" placeholder="Emerald Industries" value={form.manufacturer} onChange={handleChange} id="manufacturer" />
            <FormField label="MODEL" placeholder="Gen 4 Professional" value={form.model} onChange={handleChange} id="model" />
          </div>

          <FormField label="DESCRIPTION" type="textarea" placeholder="Resumen descriptivo del producto..." rows={3} value={form.description} onChange={handleChange} id="description" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <FormField label="SPECIFICATIONS" type="textarea" placeholder="Detalles técnicos clave" rows={2} value={form.specs} onChange={handleChange} id="specs" />
            <FormField label="DIMENSIONS" placeholder="LxWxH cm" value={form.dimensions} onChange={handleChange} id="dimensions" />
            <FormField label="WARRANTY" placeholder="Ej: 24 Meses" value={form.warranty} onChange={handleChange} id="warranty" />
            <FormField label="ORIGIN" placeholder="País de fabricación" value={form.origin} onChange={handleChange} id="origin" />
          </div>

          <div className="space-y-sm pt-sm">
            <div className="flex flex-col gap-base">
              <label className="font-label-md text-label-md text-on-surface-variant">PRODUCT IMAGE</label>
              <DropZone icon="upload_file" label="Haga clic o arrastre imagen principal" heightClass="h-32" />
            </div>
            <div className="flex flex-col gap-base">
              <label className="font-label-md text-label-md text-on-surface-variant">ADDITIONAL LOGOS (HASTA 3)</label>
              <div className="grid grid-cols-3 gap-sm">
                <DropZone />
                <DropZone />
                <DropZone />
              </div>
            </div>
          </div>

          <div className="pt-lg flex items-center gap-md">
            <button
              type="button"
              className="flex-grow bg-primary text-on-primary font-button text-button py-sm rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-xs"
              onClick={handleGenerate}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Generando...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                  Generar Visualización
                </>
              )}
            </button>
            <button
              type="button"
              disabled
              id="pdfBtn"
              className="flex-grow bg-outline-variant text-on-surface-variant cursor-not-allowed font-button text-button py-sm rounded-lg transition-all flex items-center justify-center gap-xs"
            >
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
              Generar PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
