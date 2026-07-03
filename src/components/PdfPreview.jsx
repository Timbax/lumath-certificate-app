import { useState } from "react";

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

function PageOne({ data, productImage, logos }) {
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
              Nit 902073610-8
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

function PageTwo({ data }) {
  return (
    <div className="bg-white shadow-lg w-full aspect-[1/1.41] flex flex-col font-sans overflow-hidden">
      <div className="px-lg pt-lg pb-md flex-grow flex flex-col">
        <div className="flex justify-between items-center border-b border-emerald-200/60 pb-sm mb-4">
          <div className="w-24 h-10 flex items-center">
            <img
              src="/images/logo-NoBg.png"
              className="max-h-full max-w-full object-contain"
              alt="Logo"
            />
          </div>
          <div className="text-right">
            <div className="font-semibold text-[9px] text-gray-400 uppercase tracking-wider">
              Nit 902073610-8
            </div>
            <div className="font-bold text-[11px] text-gray-700">
              {data.numeroConsecutivo}
            </div>
          </div>
        </div>

        <h3 className="text-[13px] font-bold text-gray-800 mb-3">
          Información importante y limitaciones
        </h3>

        <div className="flex flex-col gap-2.5 text-[9px] text-gray-600 leading-relaxed text-justify">
          <p>
            El Instituto Colombiano de Gemología (ICG), aporta su conocimiento
            técnico servicio de sus usuarios, realizando una revisión gemológica
            integral en c proceso de emisión de reporte gemológico. Su concepto
            es el resultado de la implementación de técnicas, investigaciones y
            equipos de laboratorio con los más altos estándares de calidad.
          </p>
          <p>
            El Instituto Colombiano de Gemología (ICG), únicamente responderá
            por el reporte de cada gema y por tanto no será responsable de
            ninguna transacción que se realice con la misma o de las
            obligaciones que se deriven de las transacciones comerciales o
            civiles que realice el propietario o tenedor.
          </p>
          <p>
            El Instituto Colombiano de Gemología (ICG), emite el reporte
            gemológico de las gemas conforme a los resultados arrojados por el
            análisis técnico al momento del proceso de revisión, por tanto, no
            se hace responsable de las alteraciones, modificaciones o
            adulteraciones causadas a la gema de manera provocada, natural, o
            accidental posterior a la expedición.
          </p>
          <p>
            El Instituto Colombiano de Gemología (ICG) se reserva el uso de su
            imagen, los reportes, nombre, marcas y logotipos, los cuales
            únicamente podrán usarse para referirse al proceso de análisis
            Gemológico o a cada reporte expedido. Cualquier uso o referencia
            adicional requerirá autorización expresa y por escrito.
          </p>
          <p>
            El Instituto Colombiano de Gemología (ICG) incluye en cada reporte
            un número de identificación y código QR que contiene la información
            de cada reporte y podrá ser consultada en cualquier momento. El
            Instituto Colombiano de Gemología (ICG) recomienda que siempre se
            verifique la información contenida en el reporte con la que resulta
            de la lectura del código QR.
          </p>
          <p>
            En el evento que la información no coincida, el interesado podrá
            solicitar la respectiva información mediante correo electrónico
            enviado a la dirección info@icgemlab.com a la cual se le dará
            respuesta en un término no mayor a tres (3) días hábiles, para
            determinar cuál es la información real.
          </p>
          <p>
            El Instituto Colombiano de Gemología (ICG) no responderá por la
            imposibilidad de lectura del código QR si se han realizado
            alteraciones posteriores a la impresión, tampoco responderá por la
            alteración de la información contenida en cada reporte impreso.
          </p>
          <p>
            El Instituto Colombiano de Gemología (ICG), únicamente responderá
            por la información que se encuentra debidamente consignada en sus
            sistemas de información. El Instituto Colombiano de Gemología (ICG),
            pone de presente que los resultados presentes en el reporte pueden
            diferir de acuerdo a implementación de métodos, estándares, normas o
            criterios distintos a los aplicados en el análisis.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-3 mt-4">
          <h4 className="text-[10px] font-bold text-gray-800 uppercase tracking-wide mb-1.5">
            GEMOLOGICAL REPORT / REPORTE GEMOLÓGICO
          </h4>
          <div className="text-[9px] text-gray-500 leading-relaxed">
            <p>
              Avd. Jiménez No 7-25 Ofic. 609 y 801 Edificio Henry Faux - Bogotá,
              Colombia
            </p>
            <p>Tel: (57)(601) 478 7272</p>
            <p>Cel: (57) 321 450 6410</p>
            <p>info@icgemlab.com - www.icgemlab.com</p>
          </div>
        </div>

        <p className="text-[8px] text-gray-400 italic mt-auto pt-4 text-center leading-relaxed">
          ICG Instituto Colombiano de Gemología. Reporte gemológico emitido por
          el ICG. Este documento es de uso exclusivo del propietario o tenedor
          legítimo de la gema descrita.
        </p>
      </div>
    </div>
  );
}

const TOTAL_PAGES = 2;

export default function PdfPreview({ data, productImage, logos }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col w-full">
      {currentPage === 1 ? (
        <PageOne data={data} productImage={productImage} logos={logos} />
      ) : (
        <PageTwo data={data} />
      )}

      <div className="flex items-center justify-center gap-md mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_left
          </span>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentPage === page
                  ? "bg-gray-700"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          disabled={currentPage === TOTAL_PAGES}
          className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_right
          </span>
        </button>

        <span className="text-[11px] text-gray-500 ml-2">
          {currentPage} / {TOTAL_PAGES}
        </span>
      </div>
    </div>
  );
}
