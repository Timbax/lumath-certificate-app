import { useState } from "react";
import FormField from "./FormField";
import DropZone from "./DropZone";

const emptyForm = {
  id: "",
  numeroConsecutivo: "",
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
  const [logos, setLogos] = useState([null, null, null]);

  function handleChange(e) {
    const { value, id } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function handleLogoSelect(index, dataUrl) {
    setLogos((prev) => {
      const next = [...prev];
      next[index] = dataUrl;
      return next;
    });
  }

  function handleGenerate() {
    setLoading(true);
    setTimeout(() => {
      onGenerate(
        {
          id: form.id || "ID",
          numeroConsecutivo: form.numeroConsecutivo || "N° de Consecutivo",
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
        logos
      );
      setLoading(false);
    }, 800);
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
            <FormField
              label="Id"
              placeholder="Ej: LJ-10001"
              value={form.id}
              onChange={handleChange}
              id="id"
            />
            <FormField
              label="Número de consecutivo"
              placeholder="0001"
              value={form.numeroConsecutivo}
              onChange={handleChange}
              id="numeroConsecutivo"
            />
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

            <FormField
              label="Tipo"
              placeholder="Esmeralda Natural"
              value={form.tipo}
              onChange={handleChange}
              id="tipo"
            />
          </div>

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
              rows={2}
              value={form.talla}
              onChange={handleChange}
              id="talla"
            />

            <FormField
              label="Forma/Shape"
              placeholder="Octagonal"
              value={form.forma}
              onChange={handleChange}
              id="forma"
            />
          </div>

          <FormField
            label="Descripción"
            type="textarea"
            placeholder="Resumen descriptivo del producto..."
            rows={3}
            value={form.description}
            onChange={handleChange}
            id="description"
          />

          <div className="space-y-sm pt-sm">
            <div className="flex flex-col gap-base">
              <label className="font-label-md text-label-md text-on-surface-variant">
                Imagen del producto 
              </label>
              <DropZone
                icon="upload_file"
                label="Haga clic o arrastre imagen principal"
                heightClass="h-32"
                onFileSelect={(dataUrl) => setProductImage(dataUrl)}
              />
            </div>
            <div className="flex flex-col gap-base">
              <label className="font-label-md text-label-md text-on-surface-variant">
                Logos Adicionales (Hasta 3)
              </label>
              <div className="grid grid-cols-3 gap-sm">
                <DropZone onFileSelect={(dataUrl) => handleLogoSelect(0, dataUrl)} />
                <DropZone onFileSelect={(dataUrl) => handleLogoSelect(1, dataUrl)} />
                <DropZone onFileSelect={(dataUrl) => handleLogoSelect(2, dataUrl)} />
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
