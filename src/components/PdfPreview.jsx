const specFields = [
  { label: "Color", key: "color" },
  { label: "Origen", key: "origen" },
  { label: "Cantidad", key: "cantidad" },
  { label: "Tipo", key: "tipo" },
  { label: "N° de Gemas", key: "numeroGemas" },
  { label: "Peso", key: "peso" },
  { label: "Talla", key: "talla" },
  { label: "Forma", key: "forma" },
];

export default function PdfPreview({ data, productImage, logos }) {
  const hasLogos = logos?.some(Boolean);

  return (
    <div className="bg-white shadow-lg w-full aspect-[1/1.41] flex flex-col font-sans overflow-hidden">
      <div className="px-lg pt-lg pb-md flex-grow flex flex-col gap-sm">
        <div className="flex justify-between items-center border-b border-emerald-200/60 pb-sm">
          <div className="w-28 h-12 flex items-center">
            <img
              src="/images/logo-NoBg.png"
              className="max-h-full max-w-full object-contain"
              alt="Logo"
            />
          </div>
          <div className="text-right">
            <div className="font-semibold text-[9px] text-gray-400 uppercase tracking-wider">
              Hoja de certificación
            </div>
            <div className="font-bold text-xs text-gray-700">
              {data.numeroConsecutivo}
            </div>
            {data.fecha && (
              <div className="text-[9px] text-gray-500 mt-0.5">
                {data.fecha}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center py-sm">
          <div className="w-40 h-40 bg-gray-50 rounded-md border border-gray-200 flex items-center justify-center overflow-hidden">
            {productImage ? (
              <img
                src={productImage}
                className="max-h-full max-w-full object-contain p-sm"
                alt="Product"
              />
            ) : (
              <span className="material-symbols-outlined text-5xl text-gray-300">
                image
              </span>
            )}
          </div>
        </div>
        <h4 className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider mb-xs">
          Descripción
        </h4>
        <p className="text-[10px] text-gray-500 leading-relaxed text-justify px-xs line-clamp-4">
          {data.description}
        </p>

        <div className="border-t border-gray-200 pt-sm">
          <h4 className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider mb-xs">
            Especificaciones técnicas
          </h4>
          <div className="grid grid-cols-4 gap-x-sm gap-y-0.5">
            {specFields.map((field) => (
              <div key={field.key} className="border-b border-gray-100 py-0.5">
                <div className="text-[7px] text-gray-400 uppercase tracking-wider">
                  {field.label}
                </div>
                <div className="text-[10px] font-semibold text-gray-800 truncate">
                  {data[field.key]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-lg py-md border-t border-gray-200 flex flex-col items-center gap-xs">
        {hasLogos ? (
          <div className="flex gap-md items-center justify-center">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="w-16 h-9 bg-gray-50 rounded border border-gray-200 flex items-center justify-center overflow-hidden"
              >
                {logo ? (
                  <img
                    src={logo}
                    className="max-h-full max-w-full object-contain p-0.5"
                    alt={`Logo ${i + 1}`}
                  />
                ) : (
                  <span className="text-[7px] text-gray-300">Logo {i + 1}</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-[9px] text-gray-400 italic">No logos added</div>
        )}
        <div className="text-[7px] text-gray-300 italic">
          Certified by Lumath jewelers
        </div>
      </div>
    </div>
  );
}
