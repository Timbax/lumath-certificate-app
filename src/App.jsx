import { useState, useCallback, useRef } from "react";
import TopNavBar from "./components/TopNavBar";
import ProductForm from "./components/ProductForm";
import PreviewPanel from "./components/PreviewPanel";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const defaultData = {
  id: "ID",
  numeroConsecutivo: "N° de Consecutivo",
  color: "Color",
  origen: "Origen",
  cantidad: "Cantidad",
  tipo: "Tipo",
  numeroGemas: "N° de Gemas",
  peso: "Peso",
  talla: "Talla",
  forma: "Forma",
  description:
    "Descripción detallada aparecerá aquí una vez generada la vista previa.",
};

function App() {
  const [previewData, setPreviewData] = useState(defaultData);
  const [productImage, setProductImage] = useState(null);
  const [logos, setLogos] = useState([null, null, null]);
  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef(null);

  const handleGenerate = useCallback((data, image, logoList) => {
    setPreviewData(data);
    setProductImage(image);
    setLogos(logoList);
    setShowPreview(true);
  }, []);

  const handleDownloadPdf = useCallback(() => {
    previewRef.current?.downloadPdf();
  }, []);

  return (
    <>
      <TopNavBar />
      <main className="flex-grow py-xl px-sm">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <ProductForm
              onGenerate={handleGenerate}
              pdfReady={showPreview}
              onDownloadPdf={handleDownloadPdf}
            />
            <PreviewPanel
              ref={previewRef}
              data={previewData}
              productImage={productImage}
              logos={logos}
              showPreview={showPreview}
            />
          </div>
        </div>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
