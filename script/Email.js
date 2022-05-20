{
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
      let data = {
      name:document.querySelector('#form_name').value,
      email:document.querySelector('#form_email').value,
      subject:document.querySelector('#subject_mail').value,
      text: document.querySelector('#message_text').value
    }
      console.log(data)
      let datajson =JSON.stringify(data);
      console.log(datajson)
      let res = await fetch("https://shoaibsmtp.herokuapp.com/email",{
        mode:"no-cors",
        method:"POST",
        body:datajson,
        headers:{
          "Content-Type": "application/json",
        }
      })
      let data1 = await res.json()
      console.log({ data: data1 })
    } catch (error) {
      console.log({ err: error.message })
    }
  })
}
