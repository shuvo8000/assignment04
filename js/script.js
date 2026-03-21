let currentTab = "All";


function renderJobs(tab = "All") {
  const container = document.getElementById("job-container");
  container.innerHTML = "";

  const filtered = tab === "All"
    ? jobs
    : jobs.filter(job => job.status === tab);

  document.getElementById("job-count").innerText = filtered.length + " jobs";

if (filtered.length === 0) {
  container.innerHTML = `
    <div class="text-center py-10">
      <img 
        src="./js/jobs.png" 
        alt="No jobs" 
        class="mx-auto w-32 mb-4"
      />
      <p class="text-xl font-bold">No jobs Available</p>
      <p class="text-gray-400">Please select another tab</p>
    </div>
  `;
  return;
}

  filtered.forEach(job => {
    container.innerHTML += `
      <div class="border p-4 rounded-lg flex justify-between">

        <div>
          <h3 class="font-bold">${job.company}</h3>
          <p>${job.position}</p>
          <p>${job.location} • ${job.type} • ${job.salary}</p>

          <span class="badge mt-2">${job.status}</span>

          <p class="text-sm mt-2">${job.description}</p>

          <div class="mt-3 flex gap-2">
            <button class="btn btn-success btn-sm"
              onclick="setStatus(${job.id}, 'Interview')">
              Interview
            </button>

            <button class="btn btn-error btn-sm"
              onclick="setStatus(${job.id}, 'Rejected')">
              Rejected
            </button>
          </div>
        </div>

        <button class="btn btn-sm"
          onclick="deleteJob(${job.id})">
          🗑
        </button>

      </div>
    `;
  });

  updateDashboard();
}

// toggle
function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);

  if (job.status === status) {
    job.status = "All";
  } else {
    job.status = status;
  }

  renderJobs(currentTab);
}

// dashboard
function updateDashboard() {
  document.getElementById("total").innerText = jobs.length;

  const interview = jobs.filter(j => j.status === "Interview").length;
  const rejected = jobs.filter(j => j.status === "Rejected").length;

  document.getElementById("interview-count").innerText = interview;
  document.getElementById("rejected-count").innerText = rejected;
}

// tabs
function showTab(tab) {
  currentTab = tab;
  renderJobs(tab);
}

// delete
function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);

  renderJobs(currentTab);
}

// init
renderJobs();