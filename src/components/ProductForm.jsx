import { useState } from "react";
import FormField from "./FormField";
import DropZone from "./DropZone";

const emptyForm = {
  numeroConsecutivo: "",
  fecha: "",
  color: "",
  origen: "",
  cantidad: "",
  tipo: "",
  numeroGemas: "",
  peso: "",
  talla: "",
  forma: "",
  description: "",
};

export default function ProductForm({ onGenerate, pdfReady, onDownloadPdf }) {
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [logos, setLogos] = useState(null);
  const [dropzoneKey, setDropzoneKey] = useState(0);
  const [lastConsecutivo, setLastConsecutivo] = useState(() => {
    return localStorage.getItem("ultimoConsecutivo") || "";
  });

  function handleChange(e) {
    const { value, id } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function handleLogoSelect(dataUrl) {
    setLogos(dataUrl);
  }

  function handleGenerate() {
    setLoading(true);
    if (form.numeroConsecutivo) {
      localStorage.setItem("ultimoConsecutivo", form.numeroConsecutivo);
      setLastConsecutivo(form.numeroConsecutivo);
    }
    setTimeout(() => {
      onGenerate(
        {
          numeroConsecutivo: form.numeroConsecutivo || "N° de Consecutivo",
          fecha: form.fecha || new Date().toISOString().split("T")[0],
          color: form.color || "Color",
          origen: form.origen || "Origen",
          cantidad: form.cantidad || "Cantidad",
          tipo: form.tipo || "Tipo",
          numeroGemas: form.numeroGemas || "N° de Gemas",
          peso: form.peso || "Peso",
          talla: form.talla || "Talla",
          forma: form.forma || "Forma",
          description: form.description || "Descripción no proporcionada.",
        },
        productImage,
        logos,
      );
      setLoading(false);
      setForm(emptyForm);
      setProductImage(null);
      setLogos(null);
      setDropzoneKey((k) => k + 1);
    }, 800);
  }

  return (
    <div className="lg:col-span-5">
      <div className="bg-surface-container-lowest rounded-xl shadow-[0px_2px_4px_rgba(4,99,7,0.05)] p-lg border border-outline-variant/30">
        <div className="mb-lg">
          <h2 className="font-headline-md text-headline-md text-primary mb-base">
            Datos del Producto
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Complete la información técnica para generar la ficha PDF premium.
          </p>
        </div>

        <form className="space-y-lg" id="productForm">
          {/* Identificación */}
          <div className="dataIdentification">
            <h3 className="font-label-lg text-label-lg text-on-surface-variant mb-sm uppercase tracking-wider">
              Identificación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <FormField
                  label="Número de consecutivo"
                  placeholder="0001"
                  value={form.numeroConsecutivo}
                  onChange={handleChange}
                  id="numeroConsecutivo"
                />
                {lastConsecutivo && (
                  <span className="text-[11px] text-on-surface-variant/70 px-sm">
                    Último:{" "}
                    <strong className="text-primary">{lastConsecutivo}</strong>
                  </span>
                )}
              </div>
              <FormField
                label="Fecha"
                type="date"
                value={form.fecha}
                onChange={handleChange}
                id="fecha"
              />
            </div>
          </div>

          <hr className="border-outline-variant/20" />

          {/* Características */}
          <div className="dataAttribute">
            <h3 className="font-label-lg text-label-lg text-on-surface-variant mb-sm uppercase tracking-wider">
              Características
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <FormField
                label="Color"
                placeholder="Verde Intenso"
                value={form.color}
                onChange={handleChange}
                id="color"
              />
              <FormField
                label="Origen"
                placeholder="Muzo, Colombia"
                value={form.origen}
                onChange={handleChange}
                id="origen"
              />
              <FormField
                label="Cantidad"
                placeholder="1"
                value={form.cantidad}
                onChange={handleChange}
                id="cantidad"
              />
            </div>
          </div>

          <hr className="border-outline-variant/20" />

          {/* Detalles técnicos */}
          <div className="dataTechnical">
            <h3 className="font-label-lg text-label-lg text-on-surface-variant mb-sm uppercase tracking-wider">
              Detalles Técnicos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <FormField
                label="Número de gemas"
                placeholder="1"
                value={form.numeroGemas}
                onChange={handleChange}
                id="numeroGemas"
              />
              <FormField
                label="Peso"
                placeholder="2.45 ct"
                value={form.peso}
                onChange={handleChange}
                id="peso"
              />
              <FormField
                label="Talla"
                placeholder="Excelente"
                value={form.talla}
                onChange={handleChange}
                id="talla"
              />
              <FormField
                label="Forma / Shape"
                placeholder="Octagonal"
                value={form.forma}
                onChange={handleChange}
                id="forma"
              />
            </div>
          </div>

          <hr className="border-outline-variant/20" />

          {/* Descripción */}
          <FormField
            label="Descripción"
            type="textarea"
            placeholder="Resumen descriptivo del producto..."
            rows={3}
            value={form.description}
            onChange={handleChange}
            id="description"
          />

          <FormField
            label="Tipo"
            type="textarea"
            placeholder="Esmeralda Natural"
            rows={2}
            value={form.tipo}
            onChange={handleChange}
            id="tipo"
          />

          <hr className="border-outline-variant/20" />

          {/* Imágenes */}
          <div className="space-y-md">
            <div className="flex flex-col gap-base">
              <h3 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">
                Imagen del Producto
              </h3>
              <DropZone
                key={dropzoneKey}
                icon="upload_file"
                label="Haga clic o arrastre imagen principal"
                heightClass="h-32"
                onFileSelect={(dataUrl) => setProductImage(dataUrl)}
              />
            </div>
            <div className="flex flex-col gap-base">
              <h3 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider">
                Agregar QR
              </h3>
              <DropZone
                key={`logo-${dropzoneKey}`}
                onFileSelect={handleLogoSelect}
              />
            </div>
          </div>

          {/* Botones */}
          <div className="pt-md flex items-center gap-md">
            <button
              type="button"
              className="flex-grow bg-primary text-on-primary font-button text-button py-sm focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full transition-all flex items-center justify-center gap-xs"
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
                  <span className="material-symbols-outlined text-[20px]">
                    visibility
                  </span>
                  Generar Visualización
                </>
              )}
            </button>
            <button
              type="button"
              disabled={!pdfReady}
              onClick={onDownloadPdf}
              id="pdfBtn"
              className={`flex-grow font-button text-button py-sm rounded-lg transition-all flex items-center justify-center gap-xs ${
                pdfReady
                  ? "bg-primary text-on-primary hover:opacity-90 active:scale-95 cursor-pointer"
                  : "bg-outline-variant text-on-surface-variant cursor-not-allowed"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                picture_as_pdf
              </span>
              Generar PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
