const jobContainer = document.querySelector("#job-container");

let job = [
  {
    id: 495,
    title: "Job details",
    postedOn: "29 June, 2026 11:52 AM",
    postedBy: "Admin",
    admin: "Noor Org",
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
    id: 496,
    title: "Frontend Developer",
    postedOn: "30 June, 2026 10:00 AM",
    postedBy: "Admin",
    admin: "KABI",
    expiresOn: "20 July, 2026",
    visible: "Yes",
    recruiter: "Ahmed Ali",
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
  document.querySelector("#job-count").innerHTML =
    "<span>" + job.length + "</span> Vacancies";

  job.forEach(function (job) {
    jobContainer.innerHTML += `
      <article class="job-card">
        <header class="job-header">
          <div class="job-title">
            <span>#${job.id}</span>
            <h2>${job.title}</h2>
          </div>

          <div class="job-action">
            <p>Published <strong>Active</strong></p>

            <button type="button" onclick="deleteJob()">
              Delete
            </button>

            <button type="button">Pin</button>
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
              <strong>${job.visible}</strong>
            </p>

            <p>Recruiters</p>
            <span class="admin">${job.recruiter}</span>
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
              <h3>Job Status</h3>

              <section class="right-info">
                <div class="job-details">
                  <p>${job.views}</p>
                  <p>No. Of Views</p>
                </div>

                <div class="job-details">
                  <p>${job.ratio}</p>
                  <p>Application Ratio</p>
                </div>

                <div class="job-details">
                  <p>${job.application}</p>
                  <p>No. Of Applications</p>
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

function deleteJob() {
  job.pop();
  jobCard();
  alert("you Delete a job!");
}

function addJob() {
  const newJob = {
    id: 500,
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