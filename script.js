const profession = document.querySelector(".profession");
const sayHey = document.querySelector(".sayHey")
const heyButton = document.querySelector(".hy_button")
const closeHyPannel = document.querySelector(".close_hy_pannel")
const hey_message_form = document.querySelector(".hey_message_form")
const hey_form_name_input = document.querySelector(".hey_form_name_input")
const hey_form_email_input = document.querySelector(".hey_form_email_input")
const hey_form_textarea_input = document.querySelector(".hey_form_textarea_input")
const name_error_message = document.querySelector(".name_error_message")
const email_error_message = document.querySelector(".email_error_message")
const textarea_error_message = document.querySelector(".textarea_error_message")
const front_end_pannel = document.querySelector(".front_end_pannel")
const front_end_list = document.querySelector(".front_end_list")
const toggleMinuPlus = document.querySelector(".plus_minus_icons")
// implementing sayHey functionality
heyButton.addEventListener("click", (e) => {
    sayHey.style.top = "0px"
})
closeHyPannel.addEventListener("click", (e) => {
    sayHey.classList.remove("active")
    sayHey.style.top = "-150%"
})
// form validation for sayHey functionality
hey_message_form.addEventListener("submit", (e) => {
        name_error_message.style.display = 'none';
        email_error_message.style.display = 'none';
        textarea_error_message.style.display = 'none';
    // preventing Defaults
    e.preventDefault()
    // validating name given by visitor 
    let isNameValid = false
    let isEmailValid = false
    let isMessageValid = false
    const alphaRegex = /^[a-zA-Z\s]+$/;
    if (hey_form_name_input.value.length <= 0) {
        name_error_message.style.display = 'block';
        name_error_message.textContent = "please enter your name"
        isNameValid = false
    }
    else if (!alphaRegex.test(hey_form_name_input.value)) {
        name_error_message.style.display = 'block';
        name_error_message.textContent = "name can only contain alphabets"
        isNameValid = false
    } else {
        name_error_message.style.display = 'none';
        isNameValid = true
    }
    // validating email provided by visitor
    if (hey_form_email_input.value.length <= 0) {
        email_error_message.style.display = 'block';
        email_error_message.textContent = "please enter your email"
        isEmailValid = false
    }
    else {
        email_error_message.style.display = 'none';
        isEmailValid = true
    }
    // validating user message 
    if (hey_form_textarea_input.value.length <= 0) {
        textarea_error_message.style.display = 'block';
        textarea_error_message.textContent = "please leave your message"
        isMessageValid = false
    }
    else if (hey_form_textarea_input.value.length <= 10 || hey_form_textarea_input.value.length > 300) {
        textarea_error_message.style.display = 'block';
        textarea_error_message.textContent = "enter between 10 and 300"
        isMessageValid = false
    }
    else {
        textarea_error_message.style.display = 'none';
        isMessageValid = true
    }
    // validating the results and clearingout the values of inputs
    if (isNameValid && isEmailValid && isMessageValid) {
        if (isNameValid && isEmailValid && isMessageValid) {
            // pahly error messages ko clear karty hain phir inputs ko clear karin ga 
            name_error_message.style.display = 'none';
            email_error_message.style.display = 'none';
            textarea_error_message.style.display = 'none';
            
            // 1/2 sec ka delay ka bad inputs ko clear kai
            setTimeout(() => {
                hey_form_name_input.value = "";  
                hey_form_email_input.value = "";  
                hey_form_textarea_input.value = "";  
                setTimeout(() =>{
                    alert("Message sent successfully ")
                },100)
            }, 500);
        }
    }
})
front_end_list.addEventListener("click", (e)=>{
    front_end_pannel.classList.toggle('active')
    toggleMinuPlus.classList.toggle('fa-plus')
    toggleMinuPlus.classList.toggle('fa-minus')
})
// slide smothly to the sections 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
// moving back and forth professions
let removing = false;
let index = 0;
function updateDisplay() {
    let name = "Web Developer";
    if (!removing) {
        // Add letters one by one
        if (index < name.length) {
            profession.textContent += name[index];
            index++;
            if(index == name.length){
                setTimeout(updateDisplay, 2000); 
            }else{

                setTimeout(updateDisplay, 200); // Delay for adding letters
            }
        } else {
            removing = true; // Start removing letters
            setTimeout(updateDisplay, 200); // Wait before starting to remove
        }
    } else {
        // Remove letters one by one
        if (index > 0) {
            profession.textContent = name.slice(0, --index);
            setTimeout(updateDisplay, 200); // Delay for removing letters
        }
        else {
            removing = false;
            index = 0;
            setTimeout(updateDisplay, 200);
        }
    }
}
updateDisplay()