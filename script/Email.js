{
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
      let data = {
        name:document.querySelector('#form_name').value,
        email:document.querySelector('#form_email').value,
        contact:document.querySelector('#form_number').value,
        subject:document.querySelector('#subject_mail').value,
        text: document.querySelector('#message_text').value
    }
      // console.log(data)
      let datajson =JSON.stringify(data);
      // console.log(datajson)
      // $.ajax({
      //   method: "POST",
      //   url: "https://shoaibsmtp.herokuapp.com/email",
      //   params: data,
      //   success: function(result){
      //     console.log(result);
      //   }
      // })
      let res = await fetch("https://shoaibsmtp.herokuapp.com/email",{
        method:"POST",
        body:datajson,
        headers:{
          "Content-Type": "application/json",
        }
      }).then((res) => {
        setTimeout(() => {
          alert("Email Sent to Shoaib Ahmed");
        }, 200);

          reloadpage()
          function reloadpage(){
            window.scrollTo(0, 0);
            setTimeout(() => {
            window.location.reload(true);
            },1000)
         }
        
      })
      // let data1 = await res.json()
      // console.log({ data: data1 })
    } catch (error) {
      console.log({ err: error.message })
    }
  })
}
