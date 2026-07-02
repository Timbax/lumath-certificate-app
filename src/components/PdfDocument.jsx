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
    gap: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#a7d3b0",
    paddingBottom: 12,
  },
  headerLeft: {
    width: 84,
    height: 36,
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
    paddingVertical: 18,
  },
  productImageBox: {
    width: 168,
    height: 168,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 4,
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
    paddingTop: 12,
    marginTop: "auto",
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
    paddingTop: 18,
    paddingBottom: 4,
    alignItems: "center",
    gap: 6,
  },
  logosRow: {
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    width: 48,
    height: 27,
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
              <Text style={styles.sheetLabel}>Hoja de certificación</Text>
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

          <Text style={styles.description}>{data.description}</Text>

          <View style={styles.specsSection}>
            <Text style={styles.specsTitle}>Technical Specifications</Text>
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
    </Document>
  );
}
