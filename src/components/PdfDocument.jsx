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
  },
  columnDivider: {
    width: 0,
    borderLeftWidth: 0.5,
    borderLeftColor: "#d1d5db",
    borderStyle: "dashed",
  },

  /* --- Column Header (appears at top of each column) --- */
  columnHeader: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 6,
  },

  /* --- Common --- */
  topLogo: {
    width: 70,
    height: 30,
    objectFit: "contain",
  },
  nitText: {
    fontSize: 7,
    color: "#9ca3af",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  consecutiveText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#374151",
    marginTop: 2,
  },
  dateText: {
    fontSize: 8,
    color: "#6b7280",
    marginTop: 2,
  },
  label: {
    fontSize: 6,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 1,
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
  },
  coverTop: {
    gap: 4,
    alignItems: "center",
  },
  coverTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1f2937",
    marginTop: 6,
  },
  coverSubtitle: {
    fontSize: 8,
    color: "#6b7280",
    lineHeight: 1.5,
    marginTop: 2,
  },
  coverBottom: {
    borderTopWidth: 0.5,
    borderTopColor: "#e5e7eb",
    paddingTop: 6,
    alignItems: "center",
  },
  coverFooter: {
    fontSize: 6,
    color: "#d1d5db",
    fontStyle: "italic",
    textAlign: "center",
  },

  /* --- Page 1 Column 2: Image --- */
  imagePanel: {
    alignItems: "center",
    justifyContent: "center",
  },
  productImageBox: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 6,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  productImage: {
    maxWidth: "85%",
    maxHeight: "85%",
    objectFit: "contain",
  },
  imagePlaceholder: {
    color: "#d1d5db",
    fontSize: 18,
  },

  /* --- Page 1 Column 3: Specs --- */
  specsPanel: {
    gap: 3,
  },
  specGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  specItem: {
    width: "50%",
    borderBottomWidth: 0.5,
    borderBottomColor: "#f3f4f6",
    paddingVertical: 2,
    paddingRight: 6,
  },
  specValue: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#1f2937",
  },

  /* --- Page 2 Columns: Terms --- */
  termsColumn: {
    gap: 5,
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
  },

  /* --- Page 2 Column 3: Contact --- */
  contactSection: {
    borderTopWidth: 0.5,
    borderTopColor: "#e5e7eb",
    paddingTop: 6,
    marginTop: 6,
  },
  contactTitle: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 3,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  contactText: {
    fontSize: 7,
    color: "#6b7280",
    lineHeight: 1.6,
  },
  disclaimer: {
    fontSize: 6,
    color: "#9ca3af",
    fontStyle: "italic",
    marginTop: 10,
    textAlign: "center",
    lineHeight: 1.4,
  },

  /* --- Logos Row (inside cover) --- */
  logosRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  logoBox: {
    width: 40,
    height: 22,
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
  const hasLogos = logos?.some(Boolean);

  return (
    <Document>
      {/* PAGE 1 - Front: Cover | Image | Specs */}
      <Page size="A4" orientation="landscape" style={styles.page}>
        {/* Column 1: Cover */}
        <View style={[styles.column, styles.coverPanel]}>
          <View style={styles.coverTop}>
            <Text style={styles.columnHeader}>Portada</Text>
            <Image style={styles.topLogo} src="/images/logo-NoBg.png" />
            <Text style={styles.nitText}>Nit 902073610-8</Text>
            <Text style={styles.consecutiveText}>{data.numeroConsecutivo}</Text>
            {data.fecha && <Text style={styles.dateText}>{data.fecha}</Text>}
            <Text style={styles.coverTitle}>Certificado Gemológico</Text>
            <Text style={styles.coverSubtitle}>
              Reporte de análisis profesional para su gema certificada.
            </Text>
          </View>
          <View style={styles.coverBottom}>
            {hasLogos ? (
              <View style={styles.logosRow}>
                {logos.map((logo, i) => (
                  <View key={i} style={styles.logoBox}>
                    {logo ? (
                      <Image style={styles.logoImage} src={logo} />
                    ) : (
                      <Text style={styles.logoPlaceholder}>Logo {i + 1}</Text>
                    )}
                  </View>
                ))}
              </View>
            ) : (
              <Text style={styles.noLogosText}>No logos added</Text>
            )}
            <Text style={styles.coverFooter}>Certified by Lumath jewelers</Text>
          </View>
        </View>

        <View style={styles.columnDivider} />

        {/* Column 2: Product Image */}
        <View style={[styles.column, styles.imagePanel]}>
          <Text style={styles.columnHeader}>Imagen</Text>
          <View style={styles.productImageBox}>
            {productImage ? (
              <Image style={styles.productImage} src={productImage} />
            ) : (
              <Text style={styles.imagePlaceholder}>No Image</Text>
            )}
          </View>
        </View>

        <View style={styles.columnDivider} />

        {/* Column 3: Description + Specifications */}
        <View style={[styles.column, styles.specsPanel]}>
          <Text style={styles.columnHeader}>Especificaciones</Text>
          <Text style={[styles.label, { fontSize: 7, marginBottom: 2 }]}>
            Descripción
          </Text>
          <Text style={styles.bodyText}>{data.description}</Text>

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
        <View style={[styles.column, styles.termsColumn]}>
          <Text style={styles.columnHeader}>Términos</Text>
          <Text style={styles.termsTitle}>
            Información importante y limitaciones
          </Text>
          <Text style={styles.termsParagraph}>
            El Instituto Colombiano de Gemología (ICG), aporta su conocimiento
            técnico servicio de sus usuarios, realizando una revisión gemológica
            integral en c proceso de emisión de reporte gemológico. Su concepto
            es el resultado de la implementación de técnicas, investigaciones y
            equipos de laboratorio con los más altos estándares de calidad.
          </Text>
          <Text style={styles.termsParagraph}>
            El Instituto Colombiano de Gemología (ICG), únicamente responderá
            por el reporte de cada gema y por tanto no será responsable de
            ninguna transacción que se realice con la misma o de las
            obligaciones que se deriven de las transacciones comerciales o
            civiles que realice el propietario o tenedor.
          </Text>
          <Text style={styles.termsParagraph}>
            El Instituto Colombiano de Gemología (ICG), emite el reporte
            gemológico de las gemas conforme a los resultados arrojados por el
            análisis técnico al momento del proceso de revisión, por tanto, no
            se hace responsable de las alteraciones, modificaciones o
            adulteraciones causadas a la gema de manera provocada, natural, o
            accidental posterior a la expedición.
          </Text>
        </View>

        <View style={styles.columnDivider} />

        {/* Column 5: Terms Part 2 */}
        <View style={[styles.column, styles.termsColumn]}>
          <Text style={styles.columnHeader}>Términos</Text>
          <Text style={styles.termsParagraph}>
            El Instituto Colombiano de Gemología (ICG) se reserva el uso de su
            imagen, los reportes, nombre, marcas y logotipos, los cuales
            únicamente podrán usarse para referirse al proceso de análisis
            Gemológico o a cada reporte expedido. Cualquier uso o referencia
            adicional requerirá autorización expresa y por escrito.
          </Text>
          <Text style={styles.termsParagraph}>
            El Instituto Colombiano de Gemología (ICG) incluye en cada reporte
            un número de identificación y código QR que contiene la información
            de cada reporte y podrá ser consultada en cualquier momento. El
            Instituto Colombiano de Gemología (ICG) recomienda que siempre se
            verifique la información contenida en el reporte con la que resulta
            de la lectura del código QR.
          </Text>
          <Text style={styles.termsParagraph}>
            En el evento que la información no coincida, el interesado podrá
            solicitar la respectiva información mediante correo electrónico
            enviado a la dirección info@icgemlab.com a la cual se le dará
            respuesta en un término no mayor a tres (3) días hábiles, para
            determinar cuál es la información real.
          </Text>
          <Text style={styles.termsParagraph}>
            El Instituto Colombiano de Gemología (ICG) no responderá por la
            imposibilidad de lectura del código QR si se han realizado
            alteraciones posteriores a la impresión, tampoco responderá por la
            alteración de la información contenida en cada reporte impreso.
          </Text>
          <Text style={styles.termsParagraph}>
            El Instituto Colombiano de Gemología (ICG), únicamente responderá
            por la información que se encuentra debidamente consignada en sus
            sistemas de información. El Instituto Colombiano de Gemología (ICG),
            pone de presente que los resultados presentes en el reporte pueden
            diferir de acuerdo a implementación de métodos, estándares, normas o
            criterios distintos a los aplicados en el análisis.
          </Text>
        </View>

        <View style={styles.columnDivider} />

        {/* Column 6: Contact + Disclaimer */}
        <View style={styles.column}>
          <Text style={styles.columnHeader}>Contacto</Text>
          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>Gemological Report</Text>
            <Text style={styles.contactTitle}>Reporte Gemológico</Text>
            <Text style={styles.contactText}>
              Avd. Jiménez No 7-25 Ofic. 609 y 801 Edificio Henry Faux - Bogotá,
              Colombia
            </Text>
            <Text style={styles.contactText}>Tel: (57)(601) 478 7272</Text>
            <Text style={styles.contactText}>Cel: (57) 321 450 6410</Text>
            <Text style={styles.contactText}>info@icgemlab.com</Text>
            <Text style={styles.contactText}>www.icgemlab.com</Text>
          </View>

          <View style={styles.contactSection}>
            <Image
              style={[styles.topLogo, { width: 50, height: 22 }]}
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
