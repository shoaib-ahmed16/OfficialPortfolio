{
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
      let data = {
      'name': `${document.getElementById('form_name').value}`,
      'email': `${document.getElementById('form_email').value}`,
      'subject':`${document.getElementById('subject_mail').value}`,
      'text': `${document.getElementById('message_text').value}`
    }
      console.log(data)
      let res = await fetch('https://shoaibsmtp.herokuapp.com/email', {
        mode: 'no-cors',
        method: 'POST',
        body: data,
        headers: {
          'content-Type': 'application/json'
        }
      })
      let data1 = await res.json()
      console.log({ data: data1 })
    } catch (error) {
      console.log({ err: error.message })
    }
  })
}
