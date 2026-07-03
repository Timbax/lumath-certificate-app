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

function ColumnHeader({ label }) {
  return (
    <div className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider text-center mb-1">
      {label}
    </div>
  );
}

function PageOne({ data, productImage, logos }) {
  const hasLogos = logos?.some(Boolean);

  return (
    <div className="brochure-page bg-white shadow-md font-sans overflow-hidden flex">
      {/* Column 1: Cover */}
      <div className="brochure-col flex flex-col justify-between items-center text-center">
        <div className="flex flex-col items-center">
          <ColumnHeader label="Portada" />
          <img
            src="/images/logo-NoBg.png"
            className="w-16 h-7 object-contain mb-1"
            alt="Logo"
          />
          <div className="text-[6px] text-gray-400 font-semibold uppercase tracking-wider">
            Nit 902073610-8
          </div>
          <div className="text-[10px] font-bold text-gray-700">
            {data.numeroConsecutivo}
          </div>
          {data.fecha && (
            <div className="text-[7px] text-gray-500 mt-0.5">{data.fecha}</div>
          )}
          <div className="text-[11px] font-bold text-gray-800 mt-2">
            Certificado Gemológico
          </div>
          <div className="text-[7px] text-gray-500 leading-relaxed mt-1">
            Reporte de análisis profesional para su gema certificada.
          </div>
        </div>
        <div className="border-t border-gray-100 pt-2 mt-2">
          {hasLogos ? (
            <div className="flex gap-2 items-center justify-center">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="w-9 h-5 bg-gray-50 rounded border border-gray-200 flex items-center justify-center overflow-hidden"
                >
                  {logo ? (
                    <img
                      src={logo}
                      className="max-h-full max-w-full object-contain p-0.5"
                      alt={`Logo ${i + 1}`}
                    />
                  ) : (
                    <span className="text-[5px] text-gray-300">
                      Logo {i + 1}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-[6px] text-gray-400 italic text-center">
              No logos added
            </div>
          )}
          <div className="text-[5px] text-gray-300 italic text-center mt-1">
            Certified by Lumath jewelers
          </div>
        </div>
      </div>

      <div className="col-divider" />

      {/* Column 2: Image */}
      <div className="brochure-col flex flex-col items-center justify-center">
        <ColumnHeader label="Imagen" />
        <div className="relative w-32 h-32 flex items-center justify-center">
          <img
            src="/images/circulo_verde.png"
            className="absolute inset-0 w-full h-full object-contain"
            alt="Circle"
          />
          {productImage ? (
            <img
              src={productImage}
              className="relative z-10 max-h-20 max-w-20 object-contain"
              alt="Product"
            />
          ) : (
            <span className="relative z-10 material-symbols-outlined text-3xl text-gray-300">
              image
            </span>
          )}
        </div>
      </div>

      <div className="col-divider" />

      {/* Column 3: Specs */}
      <div className="brochure-col flex flex-col">
        <ColumnHeader label="Especificaciones" />
        <div className="text-[7px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
          Descripción
        </div>
        <p className="text-[7px] text-gray-500 leading-relaxed text-justify line-clamp-4 mb-1">
          {data.description}
        </p>
        <div className="text-[7px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
          Especificaciones técnicas
        </div>
        <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5">
          {specFields.map((field) => (
            <div key={field.key} className="border-b border-gray-100 py-0.5">
              <div className="text-[5px] text-gray-400 uppercase tracking-wider">
                {field.label}
              </div>
              <div className="text-[7px] font-semibold text-gray-800 truncate">
                {data[field.key]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PageTwo() {
  return (
    <div className="brochure-page bg-white shadow-md font-sans overflow-hidden flex">
      {/* Column 4: Terms Part 1 */}
      <div className="brochure-col flex flex-col">
        <ColumnHeader label="Términos" />
        <div className="text-[9px] font-bold text-gray-800 text-center mb-1.5">
          Información importante y limitaciones
        </div>
        <div className="text-[6px] text-gray-600 leading-relaxed text-justify flex flex-col gap-1">
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
        </div>
      </div>

      <div className="col-divider" />

      {/* Column 5: Terms Part 2 */}
      <div className="brochure-col flex flex-col">
        <ColumnHeader label="Términos" />
        <div className="text-[6px] text-gray-600 leading-relaxed text-justify flex flex-col gap-1">
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
      </div>

      <div className="col-divider" />

      {/* Column 6: Contact */}
      <div className="brochure-col flex flex-col justify-between">
        <div>
          <ColumnHeader label="Contacto" />
          <div className="border-t border-gray-100 pt-2">
            <div className="text-[8px] font-bold text-gray-800 uppercase tracking-wide mb-1">
              Gemological Report
            </div>
            <div className="text-[8px] font-bold text-gray-800 uppercase tracking-wide mb-1.5">
              Reporte Gemológico
            </div>
            <div className="text-[7px] text-gray-500 leading-relaxed">
              <p>
                Avd. Jiménez No 7-25 Ofic. 609 y 801 Edificio Henry Faux -
                Bogotá, Colombia
              </p>
              <p>Tel: (57)(601) 478 7272</p>
              <p>Cel: (57) 321 450 6410</p>
              <p>info@icgemlab.com</p>
              <p>www.icgemlab.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-2 mt-2 flex flex-col items-center">
          <img
            src="/images/logo-NoBg.png"
            className="w-12 h-5 object-contain mb-0.5"
            alt="Logo"
          />
          <div className="text-[6px] text-gray-400 font-semibold uppercase tracking-wider text-center">
            Nit 902073610-8
          </div>
        </div>

        <p className="text-[5px] text-gray-400 italic text-center leading-relaxed mt-2">
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
    <div className="flex flex-col w-full items-center">
      {currentPage === 1 ? (
        <PageOne data={data} productImage={productImage} logos={logos} />
      ) : (
        <PageTwo data={data} />
      )}

      <div className="flex items-center justify-center gap-3 mt-3">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">
            chevron_left
          </span>
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-2 h-2 rounded-full transition-colors ${
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
          className="w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
        </button>

        <span className="text-[10px] text-gray-500 ml-1">
          {currentPage} / {TOTAL_PAGES}
        </span>
      </div>

      <div className="mt-2 text-center">
        <span className="text-[9px] text-gray-400 italic">
          {currentPage === 1
            ? "Frente — Portada | Imagen | Especificaciones"
            : "Reverso — Términos | Términos | Contacto"}
        </span>
      </div>
    </div>
  );
}
