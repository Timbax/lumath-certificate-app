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
    paddingHorizontal: 36,
    paddingTop: 36,
    paddingBottom: 24,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#333",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    gap: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#a7d3b0",
    paddingBottom: 16,
  },
  headerLeft: {
    width: 100,
    height: 44,
    justifyContent: "center",
  },
  topLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  headerRight: {},
  sheetLabel: {
    fontSize: 9,
    color: "#9ca3af",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "right",
  },
  idText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#374151",
    marginTop: 2,
    textAlign: "right",
  },
  dateText: {
    fontSize: 9,
    color: "#6b7280",
    marginTop: 2,
    textAlign: "right",
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  productImageBox: {
    width: 140,
    height: 140,
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
    fontSize: 20,
  },
  description: {
    fontSize: 10,
    color: "#6b7280",
    lineHeight: 1.6,
    textAlign: "justify",
    paddingHorizontal: 6,
  },
  specsSection: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 16,
  },
  specsTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  specsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  specItem: {
    width: "25%",
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
    paddingVertical: 2,
    paddingRight: 6,
  },
  specLabel: {
    fontSize: 7,
    color: "#9ca3af",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 1,
  },
  specValue: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1f2937",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    gap: 8,
  },
  logosRow: {
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    width: 56,
    height: 32,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 3,
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
    fontSize: 6,
    color: "#d1d5db",
  },
  noLogosText: {
    fontSize: 9,
    color: "#9ca3af",
    fontStyle: "italic",
  },
  footerText: {
    fontSize: 7,
    color: "#d1d5db",
    fontStyle: "italic",
    textAlign: "center",
  },
  page2Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#a7d3b0",
    paddingBottom: 12,
    marginBottom: 16,
  },
  page2HeaderLeft: {
    width: 80,
    height: 36,
    justifyContent: "center",
  },
  page2Title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 12,
    textAlign: "center",
  },
  page2Subtitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 8,
    marginTop: 16,
  },
  page2Body: {
    fontSize: 9,
    color: "#4b5563",
    lineHeight: 1.7,
    textAlign: "justify",
  },
  page2ContactSection: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 12,
    marginTop: 20,
  },
  page2ContactTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  page2ContactText: {
    fontSize: 9,
    color: "#6b7280",
    lineHeight: 1.8,
  },
  page2Disclaimer: {
    fontSize: 8,
    color: "#9ca3af",
    fontStyle: "italic",
    marginTop: 16,
    textAlign: "center",
    lineHeight: 1.6,
  },
});

export default function PdfDocument({ data, productImage, logos }) {
  const hasLogos = logos?.some(Boolean);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image style={styles.topLogo} src="/images/logo-NoBg.png" />
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.sheetLabel}>Nit 902073610-8</Text>
              <Text style={styles.idText}>{data.numeroConsecutivo}</Text>
              {data.fecha && <Text style={styles.dateText}>{data.fecha}</Text>}
            </View>
          </View>

          <View style={styles.imageWrapper}>
            <View style={styles.productImageBox}>
              {productImage ? (
                <Image style={styles.productImage} src={productImage} />
              ) : (
                <Text style={styles.imagePlaceholder}>No Image</Text>
              )}
            </View>
          </View>
          <Text style={styles.specsTitle}>Descripción</Text>
          <Text style={styles.description}>{data.description}</Text>

          <View style={styles.specsSection}>
            <Text style={styles.specsTitle}>Especificaciones técnicas</Text>
            <View style={styles.specsGrid}>
              {specFields.map((field) => (
                <View key={field.key} style={styles.specItem}>
                  <Text style={styles.specLabel}>{field.label}</Text>
                  <Text style={styles.specValue}>{data[field.key]}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.footer}>
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
          <Text style={styles.footerText}>Certified by Lumath jewelers</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.page2Header}>
          <View style={styles.page2HeaderLeft}>
            <Image style={styles.topLogo} src="/images/logo-NoBg.png" />
          </View>
          <View>
            <Text style={styles.sheetLabel}>Nit 902073610-8</Text>
            <Text style={styles.idText}>{data.numeroConsecutivo}</Text>
          </View>
        </View>

        <Text style={styles.page2Title}>
          Información importante y limitaciones
        </Text>

        <Text style={styles.page2Body}>
          El Instituto Colombiano de Gemología (ICG), aporta su conocimiento
          técnico servicio de sus usuarios, realizando una revisión gemológica
          integral en c proceso de emisión de reporte gemológico. Su concepto es
          el resultado de la implementación de técnicas, investigaciones y
          equipos de laboratorio con los más altos estándares de calidad.
        </Text>

        <Text style={styles.page2Body}>
          El Instituto Colombiano de Gemología (ICG), únicamente responderá por
          el reporte de cada gema y por tanto no será responsable de ninguna
          transacción que se realice con la misma o de las obligaciones que se
          deriven de las transacciones comerciales o civiles que realice el
          propietario o tenedor.
        </Text>

        <Text style={styles.page2Body}>
          El Instituto Colombiano de Gemología (ICG), emite el reporte
          gemológico de las gemas conforme a los resultados arrojados por el
          análisis técnico al momento del proceso de revisión, por tanto, no se
          hace responsable de las alteraciones, modificaciones o adulteraciones
          causadas a la gema de manera provocada, natural, o accidental
          posterior a la expedición.
        </Text>

        <Text style={styles.page2Body}>
          El Instituto Colombiano de Gemología (ICG) se reserva el uso de su
          imagen, los reportes, nombre, marcas y logotipos, los cuales
          únicamente podrán usarse para referirse al proceso de análisis
          Gemológico o a cada reporte expedido. Cualquier uso o referencia
          adicional requerirá autorización expresa y por escrito.
        </Text>

        <Text style={styles.page2Body}>
          El Instituto Colombiano de Gemología (ICG) incluye en cada reporte un
          número de identificación y código QR que contiene la información de
          cada reporte y podrá ser consultada en cualquier momento. El Instituto
          Colombiano de Gemología (ICG) recomienda que siempre se verifique la
          información contenida en el reporte con la que resulta de la lectura
          del código QR.
        </Text>

        <Text style={styles.page2Body}>
          En el evento que la información no coincida, el interesado podrá
          solicitar la respectiva información mediante correo electrónico
          enviado a la dirección info@icgemlab.com a la cual se le dará
          respuesta en un término no mayor a tres (3) días hábiles, para
          determinar cuál es la información real.
        </Text>

        <Text style={styles.page2Body}>
          El Instituto Colombiano de Gemología (ICG) no responderá por la
          imposibilidad de lectura del código QR si se han realizado
          alteraciones posteriores a la impresión, tampoco responderá por la
          alteración de la información contenida en cada reporte impreso.
        </Text>

        <Text style={styles.page2Body}>
          El Instituto Colombiano de Gemología (ICG), únicamente responderá por
          la información que se encuentra debidamente consignada en sus sistemas
          de información. El Instituto Colombiano de Gemología (ICG), pone de
          presente que los resultados presentes en el reporte pueden diferir de
          acuerdo a implementación de métodos, estándares, normas o criterios
          distintos a los aplicados en el análisis.
        </Text>

        <View style={styles.page2ContactSection}>
          <Text style={styles.page2ContactTitle}>
            GEMOLOGICAL REPORT / REPORTE GEMOLÓGICO
          </Text>
          <Text style={styles.page2ContactText}>
            Avd. Jiménez No 7-25 Ofic. 609 y 801 Edificio Henry Faux - Bogotá,
            Colombia
          </Text>
          <Text style={styles.page2ContactText}>Tel: (57)(601) 478 7272</Text>
          <Text style={styles.page2ContactText}>Cel: (57) 321 450 6410</Text>
          <Text style={styles.page2ContactText}>
            info@icgemlab.com - www.icgemlab.com
          </Text>
        </View>

        <Text style={styles.page2Disclaimer}>
          ICG Instituto Colombiano de Gemología. Reporte gemológico emitido por
          el ICG. Este documento es de uso exclusivo del propietario o tenedor
          legítimo de la gema descrita.
        </Text>
      </Page>
    </Document>
  );
}
