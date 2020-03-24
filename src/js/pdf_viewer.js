/* eslint-disable no-console */
export const initPdfViewers = () => {
  $(".pdf-wrapper").each((index, pdfWrapper) => {
    const pdfUrl = pdfWrapper.dataset.pdfurl
    window.fetch(pdfUrl).then(response => {
      if (response.status !== 200) {
        console.log(`Problem fetching PDF: ${response.status}`)
        return
      }
      response.blob().then(blob => {
        const blobURI = window.URL.createObjectURL(blob)
        const viewerUrl = `/pdfjs/web/viewer.html?file=${encodeURIComponent(
          blobURI
        )}`
        $(pdfWrapper).html(
          `<iframe class="w-100 h-100" frameborder="0" scrolling="yes" seamless="seamless" src="${viewerUrl}"></iframe>`
        )
      })
    })
  })
}
