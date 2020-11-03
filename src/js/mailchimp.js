const setupEmailSignupForm = () => {
  const $form = $(".newsletter-form")
  $(".newsletter-form .signup-link").click(event => {
    event.preventDefault()
    $form.submit()
  })

  $form.submit(async event => {
    event.preventDefault()
    const url = $form.attr("action")
    for (const item of $form.serializeArray()) {
      if (item.name === "EMAIL" && !item.value) {
        // ignore for empty emails
        return
      }
    }

    const response = await $.ajax({
      url:      url,
      data:     $form.serialize(),
      dataType: "jsonp",
      method:   $form.attr("method")
    })
    const { result, msg } = response
    if (result === "error") {
      $form.html(msg)
    } else {
      $form.text(msg)
    }
  })
}

export { setupEmailSignupForm }
