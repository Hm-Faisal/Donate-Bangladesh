let balance = document.getElementById("donation_Coin")
const date = new Date()



function donationFunction(inpId, showId, btnId) {
    let donateAmount = document.getElementById(inpId)
    let amount = document.getElementById(showId)
    const btn = document.getElementById(btnId)
    let item = document.getElementById('item')
    let dateField = document.getElementById('date')
    let historyItem = document.querySelector('#history_item')

    btn.addEventListener('click', function (e) {
        e.preventDefault()
        if (Number(donateAmount.value) && Number(donateAmount.value) > 0) {
            if (Number(donateAmount.value) < Number(balance.innerText)) {
                let amountValue = Number(amount.innerText)
                amountValue += Number(donateAmount.value)
                amount.innerText = amountValue

                let currentBalance = Number(balance.innerText)
                currentBalance -= Number(donateAmount.value)

                balance.innerText = currentBalance




                if (inpId === 'noakhali_donation_inp_field') {
                    let childItem = document.createElement('li')
                    childItem.innerHTML = `<div class=" border border-gray-500 p-8 rounded mb-4"><p class="font-bold">${donateAmount.value} Taka is Donated for Flood Relief in Noakhali,Bangladesh</p><p>Date: ${date}</p></div>`
                    historyItem.appendChild(childItem)
                }
                if (inpId === 'feni_donation_inp_field') {
                    let childItem = document.createElement('li')
                    childItem.innerHTML = `<div class=" border border-gray-500 p-8 rounded mb-4"><p class="font-bold">${donateAmount.value} Taka is Donated for Flood Relief in Feni,Bangladesh</p><p>Date: ${date}</p></div>`
                    historyItem.appendChild(childItem)
                }
                if (inpId === 'quota_donation_inp_field') {
                    let childItem = document.createElement('li')
                    childItem.innerHTML = `<div class=" border border-gray-500 p-8 rounded mb-4"><p class="font-bold">${donateAmount.value} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p><p>Date: ${date}</p></div>`
                    historyItem.appendChild(childItem)

                }


                donateAmount.value = ''
            } else {
                alert('You have not sufficient balance')
            }


        } else {
            alert('enter a valid number');
        }
    })

}
donationFunction('noakhali_donation_inp_field', 'noakhali_donated', 'noakhali_donation_submit')
donationFunction('feni_donation_inp_field', 'feni_donated', 'feni_donation_submit')
donationFunction('quota_donation_inp_field', 'quota_donated', 'quota_donation_submit')


// Button Selected js 
const donateBtn = document.getElementById('donate_btn')
const historyBtn = document.getElementById('history_btn')
const donationCtn = document.getElementById('donation')
const historyCtn = document.getElementById('history')

donateBtn.addEventListener('click', () => {
    donationCtn.classList.add('block')
    donationCtn.classList.remove('hidden')
    historyCtn.classList.add('hidden')
    historyCtn.classList.remove('block')

    donateBtn.classList.add('bg-lime-400', 'text-black')
    donateBtn.classList.remove('text-gray-500')
    historyBtn.classList.add('text-gray-500')
    historyBtn.classList.remove('bg-lime-400', 'text-black')

})

historyBtn.addEventListener('click', () => {
    donationCtn.classList.remove('block')
    donationCtn.classList.add('hidden')
    historyCtn.classList.remove('hidden')
    historyCtn.classList.add('block')

    donateBtn.classList.remove('bg-lime-400', 'text-black')
    donateBtn.classList.add('text-gray-500')
    historyBtn.classList.remove('text-gray-500')
    historyBtn.classList.add('bg-lime-400', 'text-black')
})

// Blog Button Redirect
const blog = document.getElementById('blog_button')

blog.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href = "./blog.html";
})
