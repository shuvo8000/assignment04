var currentTab = "All";

function renderJobs(tab) {
  if (!tab) {
    tab = "All";
  }

  var container = document.getElementById("job-container");
  container.innerHTML = "";

  var filtered;

  if (tab === "All") {
    filtered = jobs;
  } else {
    filtered = jobs.filter(function(job) {
      return job.status === tab;
    });
  }

  document.getElementById("job-count").innerText = filtered.length + " jobs";

  if (filtered.length === 0) {
    container.innerHTML =
      '<div class="text-center py-10">' +
      '<img src="./js/jobs.png" alt="No jobs" class="mx-auto w-32 mb-4"/>' +
      '<p class="text-xl font-bold">No jobs Available</p>' +
      '<p class="text-gray-400">Please select another tab</p>' +
      '</div>';
    return;
  }

  for (var i = 0; i < filtered.length; i++) {
    var job = filtered[i];

    container.innerHTML +=
      '<div class="border p-4 rounded-lg flex justify-between">' +

        '<div>' +
          '<h3 class="font-bold">' + job.company + '</h3>' +
          '<p>' + job.position + '</p>' +
          '<p>' + job.location + ' • ' + job.type + ' • ' + job.salary + '</p>' +

          '<span class="badge mt-2">' + job.status + '</span>' +

          '<p class="text-sm mt-2">' + job.description + '</p>' +

          '<div class="mt-3 flex gap-2">' +

            '<button class="btn btn-success btn-sm" onclick="setStatus(' + job.id + ', \'Interview\')">' +
              'Interview' +
            '</button>' +

            '<button class="btn btn-error btn-sm" onclick="setStatus(' + job.id + ', \'Rejected\')">' +
              'Rejected' +
            '</button>' +

          '</div>' +
        '</div>' +

        '<button class="btn btn-sm" onclick="deleteJob(' + job.id + ')">' +
          '🗑' +
        '</button>' +

      '</div>';
  }

  updateDashboard();
}


// toggle
function setStatus(id, status) {
  var job = null;

  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      job = jobs[i];
      break;
    }
  }

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

  var interview = 0;
  var rejected = 0;

  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "Interview") {
      interview++;
    }
    if (jobs[i].status === "Rejected") {
      rejected++;
    }
  }

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
  var index = -1;

  for (var i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    jobs.splice(index, 1);
  }

  renderJobs(currentTab);
}


// init
renderJobs();