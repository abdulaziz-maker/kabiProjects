const jobContainer = document.querySelector("#job-container");

let job = [
  {
    id: 496,
    title: "Job Details",
    postedOn: "29 June, 2026 11:52 AM",
    postedBy: "Admin Admin Admin",
    admin: "noor org",
    expiresOn: "12 July, 2026",
    visible: "No",
    recruiter: "Samer Jobanrec",
    vacancies: 10,
    closed: 0,
    views: 0,
    ratio: "0%",
    application: 0,
    daysOpen: 1,
  },

  {
    id: 489,
    title: "Job Details",
    postedOn: "28 June, 2026 04:32 PM",
    postedBy: "Admin Admin Admin",
    admin: "noor org",
    expiresOn: "12 July, 2026",
    visible: "No",
    recruiter: "Samer Jobanrec",
    lastStage: "Reviewed",
    vacancies: 5,
    closed: 1,
    views: 20,
    ratio: "40%",
    application: 2,
    daysOpen: 2,
  },
];

function jobCard() {
  jobContainer.innerHTML = " ";

  job.forEach(function (job) {
    jobContainer.innerHTML += `
      <article class="job-card">
        <header class="job-header">
          <div class="job-title">
            <span>#${job.id}</span>
            <h2>${job.title}</h2>
          </div>

          <div class="job-action">
            <p>Published: <strong class="status-active">Active</strong></p>
            ${job.lastStage ? `<p>Last Stage: <strong class="status-stage">${job.lastStage}</strong></p>` : ""}

            <div class="job-icons">
            <button type="button" class="job-icon-btn" onclick="pinJob(${job.id})">
              <i class="ti ti-pin"></i>
            </button>

            <button type="button" class="job-icon-btn">
              <i class="ti ti-notes"></i>
            </button>

            <button type="button" class="job-icon-btn">
              <i class="ti ti-arrow-forward-up"></i>
            </button>

            <button type="button" class="job-icon-btn">
              <i class="ti ti-external-link"></i>
            </button>

            <button type="button" class="job-icon-btn">
              <i class="ti ti-briefcase"></i>
            </button>

            <button type="button" class="job-icon-btn">
              <i class="ti ti-file-download"></i>
            </button>

            <button type="button" class="job-icon-btn">
              <i class="ti ti-download"></i>
            </button>

            <button type="button" class="job-icon-btn">
              <i class="ti ti-cloud-off"></i>
            </button>

            <button type="button" class="job-icon-btn">
              <i class="ti ti-circle-minus"></i>
            </button>

            <button type="button" class="job-icon-btn" onclick="deleteJob()">
              <i class="ti ti-x"></i>
            </button>

            <button type="button" class="job-icon-btn">
              <i class="ti ti-copy"></i>
            </button>
            </div>
          </div>
        </header>

        <section class="main-card">
          <article class="job-info">
            <p>Posted on ${job.postedOn}</p>

            <span>
              By
              <strong class="admin">${job.postedBy}</strong>
            </span>

            <p>Relates to</p>
            <p>${job.admin}</p>

            <p>Expires on ${job.expiresOn}</p>

            <p>
              Visible To Jobseeker:
              <strong class="value-dark">${job.visible}</strong>
            </p>

            <hr class="info-divider" />

            <p class="recruiters-label">Recruiters</p>
            <span class="admin recruiter">${job.recruiter}</span>
          </article>

          <article class="job-inside">
            <div class="vacancies-stats">
              <h3>Vacancies Stats</h3>

              <div class="job-details">
                <p>${job.vacancies}</p>
                <p>No. Of Vacancies</p>
              </div>

              <div class="job-details">
                <p>${job.closed}</p>
                <p>Closed Vacancies</p>
              </div>
            </div>

            <div class="job-status">
              <h3>Jobs Stats</h3>

              <section class="right-info">
                <div class="job-details">
                  <p>${job.views}</p>
                  <p>No. Of Views</p>
                </div>

                <div class="job-details">
                  <p>${job.application}</p>
                  <p>No. Of Applications</p>
                </div>

                <div class="job-details">
                  <p>${job.ratio}</p>
                  <p>Application Ratio</p>
                </div>

                <div class="job-details">
                  <p>${job.daysOpen}</p>
                  <p>No. Of Days Open</p>
                </div>
              </section>
            </div>
          </article>
        </section>
      </article>
    `;
  });
}

function pinJob(id) {
  for (let i = 0; i < job.length; i++) {
    if (job[i].id === id) {
      let pinJob = job[i];
      job.splice(i, 1);
      job.unshift(pinJob);
    }
  }

  jobCard();
}

function deleteJob() {
  job.pop();
  jobCard();
  alert("you Delete a job!");
}
let nextId = 497;

function addJob() {
  const newJob = {
    id: nextId++,
    title: "New Job",
    postedOn: "2 July, 2026 11:00 AM",
    postedBy: "Admin",
    admin: "KABI",
    expiresOn: "20 July, 2026",
    visible: "Yes",
    recruiter: "Abdulaziz",
    vacancies: 3,
    closed: 0,
    views: 0,
    ratio: "0%",
    application: 0,
    daysOpen: 1,
  };

  job.push(newJob);
  jobCard();
  alert("you add new job");
}

jobCard();
