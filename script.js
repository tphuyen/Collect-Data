const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    // Define the data we want to send
    const data = {
        name: document.getElementById('name').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        bust_girth: document.getElementById('bust-girth').value,
        waist_girth: document.getElementById('waist-girth').value,
        hip_girth: document.getElementById('hip-girth').value,
        upper_bicep_girth: document.getElementById('upper-bicep-girth').value,
        thigh_girth: document.getElementById('thigh-girth').value,
        neck_girth: document.getElementById('neck-girth').value,
        calf_girth: document.getElementById('calf-girth').value,
        leg_length: document.getElementById('leg-length').value,
        front_shoulder_width: document.getElementById('front-shoulder-width').value,
        outer_arm_length: document.getElementById('outer-arm-length').value,
        shoulder_length: document.getElementById('shoulder-length').value,
        back_shoulder_width: document.getElementById('back-shoulder-width').value
    };
  
  // Send the POST request using fetch
    fetch("https://tool-insert-data.vercel.app/post", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
})