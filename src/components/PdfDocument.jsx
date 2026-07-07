import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

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

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#333",
  },

  /* --- Columns --- */
  column: {
    width: "33.33%",
    paddingHorizontal: 14,
    paddingVertical: 16,
    alignItems: "center",
  },
  columnBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },
  columnBgImg: {
    width: "200%",
    height: "200%",
  },
  columnDivider: {
    width: 0,
    borderLeftWidth: 0.5,
    borderLeftColor: "#d1d5db",
    borderStyle: "dashed",
  },

  /* --- Column Header --- */
  columnHeader: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 3,
  },

  /* --- Common --- */
  topLogo: {
    width: 200,
    height: 85,
    objectFit: "contain",
  },
  nitText: {
    fontSize: 7,
    color: "#9ca3af",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  consecutiveText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#374151",
    marginTop: 2,
    textAlign: "center",
  },
  dateText: {
    fontSize: 8,
    color: "#6b7280",
    marginTop: 2,
    textAlign: "center",
  },
  label: {
    fontSize: 6,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 1,
    textAlign: "center",
  },
  bodyText: {
    fontSize: 7,
    color: "#6b7280",
    lineHeight: 1.5,
    textAlign: "justify",
    marginBottom: 4,
  },

  /* --- Page 1 Column 1: Cover --- */
  coverPanel: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  coverTop: {
    gap: 4,
    alignItems: "center",
    marginTop: 100,
  },
  coverTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1f2937",
    marginTop: 6,
    textAlign: "center",
  },
  coverSubtitle: {
    fontSize: 8,
    color: "#6b7280",
    lineHeight: 1.5,
    marginTop: 2,
    textAlign: "center",
  },
  coverBottom: {
    borderTopWidth: 0.5,
    borderTopColor: "#e5e7eb",
    paddingTop: 6,
    alignItems: "center",
    width: "100%",
  },
  coverFooter: {
    fontSize: 6,
    color: "#d1d5db",
    fontStyle: "italic",
    textAlign: "center",
  },

  /* --- Page 1 Column 2: Image --- */
  imagePanel: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 160,
  },
  circleBackground: {
    width: 300,
    height: 300,
    objectFit: "contain",
    marginTop: 25,
  },
  productImage: {
    width: 100,
    height: 100,
    objectFit: "contain",
    marginTop: -200,
  },

  /* --- Page 1 Column 3: Specs --- */
  specsPanel: {
    flex: 1,
    gap: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 150,
  },
  specGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  specItem: {
    width: "50%",
    borderBottomWidth: 0.5,
    borderBottomColor: "#f3f4f6",
    paddingVertical: 2,
    paddingRight: 6,
    alignItems: "center",
  },
  specValue: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
  },

  /* --- Page 2 Columns: Terms --- */
  termsColumn: {
    flex: 1,
    gap: 5,
    alignItems: "center",
  },
  termsTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 4,
    textAlign: "center",
  },
  termsParagraph: {
    fontSize: 6.5,
    color: "#4b5563",
    lineHeight: 1.5,
    textAlign: "justify",
    marginBottom: 2,
    width: "100%",
  },

  /* --- Page 2 Column 3: Contact --- */
  contactColumn: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactSection: {
    borderTopWidth: 0.5,
    borderTopColor: "#e5e7eb",
    paddingTop: 6,
    marginTop: 6,
    alignItems: "center",
    width: "100%",
  },
  contactTitle: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 3,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  contactText: {
    fontSize: 7,
    color: "#6b7280",
    lineHeight: 1.6,
    textAlign: "center",
  },
  disclaimer: {
    fontSize: 6,
    color: "#9ca3af",
    fontStyle: "italic",
    marginTop: 10,
    textAlign: "center",
    lineHeight: 1.4,
  },

  /* --- Logos Row --- */
  logosRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  logoBox: {
    width: 120,
    height: 88,
    borderWidth: 0.5,
    borderColor: "#e5e7eb",
    borderRadius: 2,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  logoImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    padding: 1,
  },
  logoPlaceholder: {
    fontSize: 5,
    color: "#d1d5db",
  },
  noLogosText: {
    fontSize: 6,
    color: "#9ca3af",
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default function PdfDocument({ data, productImage, logos }) {
  const hasLogos = Boolean(logos);

  return (
    <Document>
      {/* PAGE 1 - Front: Cover | Image | Specs */}
      <Page size="A4" orientation="landscape" style={styles.page}>
        {/* Column 1: Cover */}
        <View
          style={[styles.column, styles.coverPanel, { overflow: "hidden" }]}
        >
          <View style={styles.columnBg}>
            <Image
              style={styles.columnBgImg}
              src="/images/backgroundGreen2.png"
            />
          </View>
          <View style={styles.coverTop}>
            <Image style={styles.topLogo} src="/images/logo-NoBg.png" />
            <Text style={styles.nitText}>Nit 902073610-8</Text>
            <Text style={styles.consecutiveText}>{data.numeroConsecutivo}</Text>
            {data.fecha && <Text style={styles.dateText}>{data.fecha}</Text>}
            <Text style={styles.coverTitle}>Certificado Gemológico</Text>
            <Text style={styles.coverSubtitle}>
              Reporte de análisis profesional .
            </Text>
          </View>
          <View style={styles.coverBottom}>
            {hasLogos ? (
              <View style={styles.logoBox}>
                <Image style={styles.logoImage} src={logos} />
              </View>
            ) : (
              <Text style={styles.noLogosText}>No logo added</Text>
            )}
            <Text style={styles.coverFooter}>Certified by Lumath jewelers</Text>
          </View>
        </View>

        <View style={styles.columnDivider} />

        {/* Column 2: Product Image */}
        <View
          style={[styles.column, styles.imagePanel, { overflow: "hidden" }]}
        >
          <View style={styles.columnBg}>
            <Image
              style={styles.columnBgImg}
              src="/images/backgroundGreen2.png"
            />
          </View>
          <Text style={styles.columnHeader}>Imagen Del Producto</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.circleBackground}
              src="/images/circulo_verde.png"
            />
            {productImage && (
              <Image style={styles.productImage} src={productImage} />
            )}
          </View>
        </View>

        <View style={styles.columnDivider} />

        {/* Column 3: Description + Specifications */}
        <View
          style={[
            styles.column,
            styles.specsPanel,
            { paddingVertical: 0, overflow: "hidden" },
          ]}
        >
          <View style={styles.columnBg}>
            <Image
              style={styles.columnBgImg}
              src="/images/backgroundGreen2.png"
            />
          </View>
          <Text style={styles.columnHeader}>Especificaciones</Text>
          <Text style={[styles.label, { fontSize: 7, marginBottom: 2 }]}>
            Descripción
          </Text>
          <Text style={[styles.bodyText, { width: "100%" }]}>
            {data.description}
          </Text>

          <Text style={[styles.label, { fontSize: 7, marginBottom: 2 }]}>
            Especificaciones técnicas
          </Text>
          <View style={styles.specGrid}>
            {specFields.map((field) => (
              <View key={field.key} style={styles.specItem}>
                <Text style={styles.label}>{field.label}</Text>
                <Text style={styles.specValue}>{data[field.key]}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* PAGE 2 - Back: Terms | Terms | Contact */}
      <Page size="A4" orientation="landscape" style={styles.page}>
        {/* Column 4: Terms Part 1 */}
        <View
          style={[styles.column, styles.termsColumn, { overflow: "hidden" }]}
        >
          <View style={styles.columnBg}>
            <Image
              style={styles.columnBgImg}
              src="/images/backgroundGreen2.png"
            />
          </View>
          <Text style={styles.columnHeader}>Términos</Text>
          <Text style={styles.termsTitle}>
            Información importante y limitaciones
          </Text>
          <Text style={styles.termsParagraph}>
            Lumath Joyeros certifica de manera expresa y bajo principios de
            transparencia comercial la autenticidad de todas sus piezas. Cada
            artículo comercializado está diseñado y fabricado utilizando
            esmeraldas 100% colombianas, reconocidas a nivel mundial por su
            calidad, brillo y pureza.
          </Text>
          <Text style={styles.termsParagraph}>
            La empresa asume la responsabilidad legal total sobre la idoneidad
            de las joyas, piedras preciosas y semipreciosas incorporadas en cada
            una de sus creaciones, garantizando que corresponden exactamente a
            las especificaciones técnicas informadas al comprador al momento de
            la venta.
          </Text>
          <Text style={styles.termsParagraph}>
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
          </Text>
        </View>

        <View style={styles.columnDivider} />

        {/* Column 5: Terms Part 2 */}
        <View
          style={[styles.column, styles.termsColumn, { overflow: "hidden" }]}
        >
          <View style={styles.columnBg}>
            <Image
              style={styles.columnBgImg}
              src="/images/backgroundGreen2.png"
            />
          </View>
          <Text style={styles.columnHeader}>Términos</Text>
          <Text style={styles.termsParagraph}>
            Términos y Condiciones Generales (Normativa Colombiana) Para
            complementar la operación comercial en el país y blindar legalmente
            la relación con el consumidor, se anexan las siguientes cláusulas
            obligatorias de Términos y Condiciones:
          </Text>
          <Text style={styles.termsParagraph}>
            A. Derecho de Retracto (Ventas No Presenciales / E-commerce) En caso
            de compras realizadas a través de canales digitales, se aplicará de
            manera estricta el Artículo 47 de la Ley 1480 de 2011. El consumidor
            dispondrá de un término máximo de cinco (5) días hábiles (contados a
            partir de la entrega del producto) para ejercer su derecho de
            retracto. El cliente deberá devolver la joya por los mismos medios y
            en las mismas condiciones en que la recibió (sin señales de uso, con
            etiquetas y empaques originales). Los costos de transporte y
            mensajería serán asumidos en su totalidad por el comprador.
          </Text>
          <Text style={styles.termsParagraph}>
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
          </Text>
          <Text style={styles.termsParagraph}>
            C. Guía de Cuidado de las Piezas (Información de Consumo) El
            Estatuto del Consumidor exige suministrar las instrucciones de uso
            para evitar el deterioro acelerado de los bienes. Por lo tanto, el
            cliente acepta que, al adquirir una pieza con esmeraldas y metales
            preciosos, debe evitar el contacto de la joya con agentes químicos
            corrosivos (como perfumes, cremas, cloro de piscinas o lociones) y
            evitar someterla a impactos fuertes, entendiendo que las piedras
            preciosas pueden fracturarse ante microimpactos accidentales, lo
            cual anula la cobertura de la garantía.
          </Text>
        </View>

        <View style={styles.columnDivider} />

        {/* Column 6: Contact + Disclaimer */}
        <View
          style={[styles.column, styles.contactColumn, { overflow: "hidden" }]}
        >
          <View style={styles.columnBg}>
            <Image
              style={styles.columnBgImg}
              src="/images/backgroundGreen2.png"
            />
          </View>
          <View style={{ width: "100%" }}>
            <Text style={styles.columnHeader}>Contacto</Text>
            <View style={styles.contactSection}>
              <Text style={styles.contactTitle}>Reporte Gemológico</Text>
              <Text style={styles.contactText}>
                Calle 30, Cra. 8B 74, Calle Larga, Centro comercial Getsemaní -
                Cartagena, Colombia
              </Text>
              <Text style={styles.contactText}>Cel: (+57) 304 2076 725</Text>
              <Text style={styles.contactText}>lumathjoyeros@gmail.com</Text>
            </View>
          </View>

          <View style={styles.contactSection}>
            <Image
              style={[styles.topLogo, { width: 170, height: 70 }]}
              src="/images/logo-NoBg.png"
            />
            <Text style={styles.nitText}>Nit 902073610-8</Text>
          </View>

          <Text style={styles.disclaimer}>
            ICG Instituto Colombiano de Gemología. Reporte gemológico emitido
            por el ICG. Este documento es de uso exclusivo del propietario o
            tenedor legítimo de la gema descrita.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
