let btn = document.getElementById('chat_input_container');
let submit = document.getElementById('chat_input_send');
            // when the btn is clicked print info in console 
            // btn.addEventListener('click', (ev)=>{
            //   console.log("Btn clicked");
            // });
         
            document.addEventListener('keypress', (event)=>{
         
              // event.keyCode or event.which  property will have the code of the pressed key
              let keyCode = event.keyCode ? event.keyCode : event.which;
         
              // 13 points the enter key
              if(keyCode === 13) {
                // call click function of the buttonn 
                // alert('hi');
                chat_input_send.click();
              }
                
            });
            