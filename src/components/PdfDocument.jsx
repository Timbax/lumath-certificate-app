import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer'

const specFields = [
  { label: 'Color', key: 'color' },
  { label: 'Origen', key: 'origen' },
  { label: 'Cantidad', key: 'cantidad' },
  { label: 'Tipo', key: 'tipo' },
  { label: 'N° Gemas', key: 'numeroGemas' },
  { label: 'Peso', key: 'peso' },
  { label: 'Talla', key: 'talla' },
  { label: 'Forma', key: 'forma' },
]

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 35,
    paddingBottom: 35,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#a7d3b0',
    paddingBottom: 12,
    marginBottom: 16,
  },
  headerLeft: {},
  brandName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0d5e2e',
    letterSpacing: -1,
  },
  brandSub: {
    fontSize: 8,
    color: '#2d7a4a',
    fontWeight: 'medium',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  headerRight: {},
  sheetLabel: {
    fontSize: 7,
    color: '#999',
    fontWeight: 'semibold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'right',
  },
  skuText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 2,
    textAlign: 'right',
  },
  mainRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
    flexGrow: 1,
  },
  infoCol: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0d5e2e',
    marginBottom: 4,
  },
  description: {
    fontSize: 8,
    color: '#777',
    lineHeight: 1.5,
    marginBottom: 8,
  },
  consecutivoLabel: {
    fontSize: 7,
    color: '#aaa',
    fontWeight: 'medium',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 1,
  },
  consecutivoValue: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#444',
  },
  imageCol: {
    width: 160,
    height: 160,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
    backgroundColor: '#fafafa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    padding: 8,
  },
  imagePlaceholder: {
    color: '#ddd',
    fontSize: 28,
  },
  specsSection: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 12,
    marginBottom: 16,
  },
  specsTitle: {
    fontSize: 8,
    fontWeight: 'semibold',
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  specsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  specItem: {
    width: '25%',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingVertical: 4,
    paddingRight: 8,
  },
  specLabel: {
    fontSize: 6,
    color: '#bbb',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 1,
  },
  specValue: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#555',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logosRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  logoBox: {
    width: 50,
    height: 28,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 3,
    backgroundColor: '#fafafa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logoImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    padding: 2,
  },
  logoPlaceholder: {
    fontSize: 6,
    color: '#ddd',
  },
  footerText: {
    fontSize: 6,
    color: '#ccc',
    textAlign: 'right',
    fontStyle: 'italic',
    lineHeight: 1.4,
  },
})

export default function PdfDocument({ data, productImage, logos }) {
  const hasLogos = logos?.some(Boolean)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.brandName}>LUMATH</Text>
            <Text style={styles.brandSub}>Certificate</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.sheetLabel}>Product Data Sheet</Text>
            <Text style={styles.skuText}>{data.id}</Text>
          </View>
        </View>

        <View style={styles.mainRow}>
          <View style={styles.infoCol}>
            <Text style={styles.productName}>{data.id}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <View>
              <Text style={styles.consecutivoLabel}>Consecutivo</Text>
              <Text style={styles.consecutivoValue}>{data.numeroConsecutivo}</Text>
            </View>
          </View>
          <View style={styles.imageCol}>
            {productImage ? (
              <Image style={styles.productImage} src={productImage} />
            ) : (
              <Text style={styles.imagePlaceholder}>No Image</Text>
            )}
          </View>
        </View>

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

        <View style={styles.footer}>
          <View style={styles.logosRow}>
            {logos?.map((logo, i) => (
              <View key={i} style={styles.logoBox}>
                {logo ? (
                  <Image style={styles.logoImage} src={logo} />
                ) : (
                  <Text style={styles.logoPlaceholder}>Logo {i + 1}</Text>
                )}
              </View>
            ))}
            {!hasLogos && <Text style={{ fontSize: 6, color: '#ddd', fontStyle: 'italic' }}>No logos added</Text>}
          </View>
          <View>
            <Text style={styles.footerText}>Generated by{'\n'}Lumath Docs Engine</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}
