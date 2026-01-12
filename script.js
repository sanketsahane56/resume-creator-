function addRow() {
  const table = document.getElementById("eduInput");
  const row = table.insertRow();
  for (let i = 0; i < 5; i++) row.insertCell(i).innerHTML = "<input>";
  row.insertCell(5).innerHTML =
    "<button onclick='this.parentElement.parentElement.remove()'>X</button>";
}
function clearAll() {
  // 1️⃣ Clear all form inputs
  const fields = [
    "name","father","address","mobile","email",
    "objective","computer","projects","experience","skills",
    "dob","marital","nationality","language"
  ];

  fields.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.value = "";
  });

  // 2️⃣ Clear Education input table
  const eduTable = document.getElementById("eduInput");
  if(eduTable){
    eduTable.innerHTML = `
      <tr>
        <th>Qualification</th>
        <th>Institute</th>
        <th>Board</th>
        <th>%</th>
        <th>Year</th>
        <th>Action</th>
      </tr>
    `;
  }

  // 3️⃣ Clear Resume preview
  const resumeFields = [
    "rName", "signName", "rNamePD", "rFather", "rAddress",
    "rMobile", "rEmail", "rObjective", "rProjects",
    "rExperience", "rDob", "rMarital", "rNationality",
    "rLanguage", "rComputer", "rSkills"
  ];

  resumeFields.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.innerText = "";
    if(el) el.innerHTML = ""; // for lists (Computer/Skills)
  });

  // 4️⃣ Clear Education output table (Resume)
  const eduOutput = document.getElementById("eduOutput");
  if(eduOutput){
    eduOutput.innerHTML = `
      <tr>
        <th>Qualification</th>
        <th>Institute</th>
        <th>Board</th>
        <th>%</th>
        <th>Year</th>
      </tr>
    `;
  }

  // Optional: confirmation
  alert("All form fields and Resume preview cleared!");
}



function generateResume() {
  const get = id => document.getElementById(id).value;

  rName.innerText = signName.innerText = get("name");
  rNamePD.innerText = get("name");
  rFather.innerText = get("father");
  rAddress.innerText = get("address");
  rMobile.innerText = get("mobile");
  rEmail.innerText = get("email");
  rObjective.innerText = get("objective");
  rProjects.innerText = get("projects");
  rExperience.innerText = get("experience");
  rDob.innerText = get("dob");
 rMarital.innerText = document.getElementById("marital").value;

  rNationality.innerText = get("nationality");
  rLanguage.innerText = get("language");

  rComputer.innerHTML = get("computer").split(",").map(i => `<li>${i}</li>`).join("");
//   rSkills.innerHTML = get("skills").split(",").map(i => `<li>${i}</li>`).join("");

  eduOutput.innerHTML = `
    <tr>
      <th>Qualification</th>
      <th>Institute</th>
      <th>Board</th>
      <th>%</th>
      <th>Year</th>
    </tr>
  `;

  const rows = eduInput.rows;
  for (let i = 1; i < rows.length; i++) {
    const r = eduOutput.insertRow();
    for (let j = 0; j < 5; j++) {
      r.insertCell(j).innerText = rows[i].cells[j].querySelector("input").value;
    }
  }
  
}
