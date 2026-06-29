import PdfPreview from './PdfPreview'

export default function PreviewPanel({ data, showPreview }) {
  return (
    <div className="lg:col-span-5">
      <div className="sticky top-[104px]">
        <div
          className={`rounded-xl border border-outline-variant/30 min-h-[700px] flex flex-col items-center justify-center p-md text-center transition-all ${
            showPreview ? 'bg-[#EAEAEA]' : 'bg-surface-container-low'
          }`}
        >
          {!showPreview && (
            <div className="space-y-sm animate-pulse">
              <div className="w-24 h-24 bg-outline-variant/20 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[48px] text-outline-variant">
                  description
                </span>
              </div>
              <h3 className="font-headline-md text-on-surface-variant">Vista Previa</h3>
              <p className="text-body-sm text-outline max-w-[280px] mx-auto">
                Complete el formulario y presione &quot;Generar Visualización&quot; para ver el diseño del PDF aquí.
              </p>
            </div>
          )}

          {showPreview && (
            <div className="w-full h-full flex flex-col animate-[fadeIn_0.4s_ease-out]">
              <PdfPreview data={data} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
