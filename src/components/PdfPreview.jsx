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
    <div className="text-[8px] font-bold text-gray-400 uppercase tracking-[1px] text-center mb-[3px]">
      {label}
    </div>
  );
}

function PageOne({ data, productImage, logos }) {
  const hasLogos = Boolean(logos);

  return (
    <div className="brochure-page bg-white shadow-md font-sans overflow-hidden flex">
      {/* Column 1: Cover */}
      <div className="brochure-col flex flex-col justify-between items-center text-center">
        <div className="flex flex-col items-center mt-[100px] gap-1">
          <img
            src="/images/logo-NoBg.png"
            className="w-[200px] h-[85px] object-contain"
            alt="Logo"
          />
          <div className="text-[7px] text-gray-400 font-bold uppercase tracking-[0.5px]">
            Nit 902073610-8
          </div>
          <div className="text-[11px] font-bold text-gray-700 mt-0.5">
            {data.numeroConsecutivo}
          </div>
          {data.fecha && (
            <div className="text-[8px] text-gray-500 mt-0.5">{data.fecha}</div>
          )}
          <div className="text-[14px] font-bold text-gray-800 mt-1.5 text-center">
            Certificado Gemológico
          </div>
          <div className="text-[8px] text-gray-500 leading-[1.5] mt-0.5 text-center">
            Reporte de análisis profesional.
          </div>
        </div>
        <div className="border-t border-gray-200 pt-1.5 w-full">
          {hasLogos ? (
            <div className="w-40 h-[60px] bg-gray-50 rounded-sm border border-gray-200 flex items-center justify-center overflow-hidden mt-1 mx-auto">
              <img
                src={logos}
                className="max-h-full max-w-full object-contain p-0.5"
                alt="Logo"
              />
            </div>
          ) : (
            <div className="text-[6px] text-gray-400 italic text-center">
              No logo added
            </div>
          )}
          <div className="text-[6px] text-gray-300 italic text-center">
            Certified by Lumath jewelers
          </div>
        </div>
      </div>

      <div className="col-divider" />

      {/* Column 2: Image */}
      <div className="brochure-col flex flex-col items-center justify-center">
        <ColumnHeader label="Imagen Del Producto" />
        <div className="relative w-[200px] h-[200px] flex items-center justify-center mb-[160px]">
          <img
            src="/images/circulo_verde.png"
            className="absolute inset-0 w-full h-full object-contain"
            alt="Circle"
          />
          {productImage ? (
            <img
              src={productImage}
              className="relative z-10 max-h-[100px] max-w-[100px] object-contain"
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
      <div className="brochure-col flex flex-col items-center justify-center gap-[3px]">
        <ColumnHeader label="Especificaciones" />
        <div className="text-[6px] font-semibold text-gray-400 uppercase tracking-[0.5px] mb-1 text-center">
          Descripción
        </div>
        <p className="text-[7px] text-gray-500 leading-[1.5] text-justify mb-4 w-full">
          {data.description}
        </p>
        <div className="text-[6px] font-semibold text-gray-400 uppercase tracking-[0.5px] mb-1 text-center">
          Especificaciones técnicas
        </div>
        <div className="grid grid-cols-2 w-full">
          {specFields.map((field) => (
            <div
              key={field.key}
              className="border-b border-gray-100 py-0.5 pr-[6px] text-center"
            >
              <div className="text-[6px] text-gray-400 uppercase tracking-[0.5px] mb-1">
                {field.label}
              </div>
              <div className="text-[8px] font-bold text-gray-800">
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
      <div className="brochure-col flex flex-col items-center gap-[5px]">
        <ColumnHeader label="Términos" />
        <div className="text-[10px] font-bold text-gray-800 text-center mb-1">
          Información importante y limitaciones
        </div>
        <div className="text-[6.5px] text-gray-600 leading-[1.5] text-justify flex flex-col gap-0.5 w-full">
          <p className="mb-0.5">
            Lumath Joyeros certifica de manera expresa y bajo principios de
            transparencia comercial la autenticidad de todas sus piezas. Cada
            artículo comercializado está diseñado y fabricado utilizando
            esmeraldas 100% colombianas, reconocidas a nivel mundial por su
            calidad, brillo y pureza.
          </p>
          <p className="mb-0.5">
            La empresa asume la responsabilidad legal total sobre la idoneidad
            de las joyas, piedras preciosas y semipreciosas incorporadas en cada
            una de sus creaciones, garantizando que corresponden exactamente a
            las especificaciones técnicas informadas al comprador al momento de
            la venta.
          </p>
          <p className="mb-0.5">
            Política de Garantía Comercial (Ampliada) De conformidad con el
            artículo 7° de la Ley 1480 de 2011 (Estatuto del Consumidor de
            Colombia), la marca establece los siguientes lineamientos para su
            cobertura de garantía: Término de la cobertura: Lumath Joyeros
            otorga un beneficio superior al promedio del mercado nacional,
            ofreciendo un periodo de tres (3) años de garantía contados a partir
            de la fecha de entrega material del producto. Esta cobertura cobija
            cualquier defecto relacionado con la manufactura, fallas técnicas en
            los engastes o irregularidades estructurales del metal. Exoneración
            de responsabilidad: En concordancia con las causales legales de
            exoneración en Colombia, la garantía no cubrirá aquellos daños
            derivados de: Accidentes o caídas. Uso inapropiado o desgaste
            natural por el paso del tiempo. Descuidos, falta de mantenimiento
            básico o manipulación/reparación por laboratorios y talleres ajenos
            a Lumath Joyeros.
          </p>
        </div>
      </div>

      <div className="col-divider" />

      {/* Column 5: Terms Part 2 */}
      <div className="brochure-col flex flex-col items-center gap-[5px]">
        <ColumnHeader label="Términos" />
        <div className="text-[6.5px] text-gray-600 leading-[1.5] text-justify flex flex-col gap-0.5 w-full">
          <p className="mb-0.5">
            Términos y Condiciones Generales (Normativa Colombiana) Para
            complementar la operación comercial en el país y blindar legalmente
            la relación con el consumidor, se anexan las siguientes cláusulas
            obligatorias de Términos y Condiciones:
          </p>
          <p className="mb-0.5">
            A. Derecho de Retracto (Ventas No Presenciales / E-commerce) En caso
            de compras realizadas a través de canales digitales, se aplicará de
            manera estricta el Artículo 47 de la Ley 1480 de 2011. El consumidor
            dispondrá de un término máximo de cinco (5) días hábiles (contados a
            partir de la entrega del producto) para ejercer su derecho de
            retracto. El cliente deberá devolver la joya por los mismos medios y
            en las mismas condiciones en que la recibió (sin señales de uso, con
            etiquetas y empaques originales). Los costos de transporte y
            mensajería serán asumidos en su totalidad por el comprador.
          </p>
          <p className="mb-0.5">
            B. Procedimiento para Efectividad de la Garantía Si una pieza
            presenta un fallo de fabricación dentro de los tres años de
            vigencia, el cliente podrá radicar su reclamación de forma verbal,
            escrita o electrónica. Lumath Joyeros contará con un término legal
            de quince (15) días hábiles para emitir un diagnóstico técnico y dar
            respuesta formal. De encontrarse un defecto de fabricación, se
            procederá prioritariamente a la reparación gratuita de la joya. En
            caso de que la pieza no admita reparación, se procederá a su
            reposición por una de iguales características o a la devolución del
            dinero, a elección del consumidor.
          </p>
          <p className="mb-0.5">
            C. Guía de Cuidado de las Piezas (Información de Consumo) El
            Estatuto del Consumidor exige suministrar las instrucciones de uso
            para evitar el deterioro acelerado de los bienes. Por lo tanto, el
            cliente acepta que, al adquirir una pieza con esmeraldas y metales
            preciosos, debe evitar el contacto de la joya con agentes químicos
            corrosivos (como perfumes, cremas, cloro de piscinas o lociones) y
            evitar someterla a impactos fuertes, entendiendo que las piedras
            preciosas pueden fracturarse ante microimpactos accidentales, lo
            cual anula la cobertura de la garantía.
          </p>
        </div>
      </div>

      <div className="col-divider" />

      {/* Column 6: Contact */}
      <div className="brochure-col flex flex-col justify-between items-center text-center">
        <div className="w-full">
          <ColumnHeader label="Contacto" />
          <div className="border-t border-gray-200 pt-1.5 mt-1.5">
            <div className="text-[8px] font-bold text-gray-800 uppercase tracking-[0.5px] mb-[3px]">
              Reporte Gemológico
            </div>
            <div className="text-[7px] text-gray-500 leading-[1.6]">
              <p>
                Calle 30, Cra. 8B 74, Calle Larga, Centro comercial Getsemaní -
                Cartagena, Colombia
              </p>
              <p>Cel: (+57) 304 2076 725</p>
              <p>lumathjoyeros@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-1.5 mt-1.5 w-full flex flex-col items-center">
          <img
            src="/images/logo-NoBg.png"
            className="w-[170px] h-[70px] object-contain mb-0.5"
            alt="Logo"
          />
          <div className="text-[7px] text-gray-400 font-bold uppercase tracking-[0.5px]">
            Nit 902073610-8
          </div>
        </div>

        <p className="text-[6px] text-gray-400 italic text-center leading-[1.4] mt-[10px]">
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
